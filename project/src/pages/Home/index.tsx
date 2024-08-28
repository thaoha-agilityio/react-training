import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import {
  Button,
  Pagination,
  SearchBar,
  StatByType,
  TaskTable,
} from "@/components";
import { SpinnerIcon } from "@/components/Icons";

// Constants
import {
  PAGINATION_LIMIT,
  ROUTES,
  SEARCH_PARAMS,
  STAT_STATUS,
  SUCCESS_MESSAGES,
  TOAST_STATUS,
} from "@/constants";

// Mocks
import { PROJECTS } from "@/mocks";

// Hooks
import {
  useTaskCreate,
  useTaskDelete,
  useTaskEdit,
  useTaskPagination,
  useToast,
} from "@/hooks";

// Types
import { Task } from "@/types";

// Stores
import { usePaginationStore } from "@/stores";

// Utils
import { createPageURL } from "@/utils";

const TaskForm = lazy(() => import("@/components/TaskForm"));
const DeleteModal = lazy(() => import("@/components/Modal/DeleteModal"));

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const currentPage = Number(searchParams.get(SEARCH_PARAMS.PAGE)) || 1;
  const titleSearch = searchParams.get(SEARCH_PARAMS.TITLE) || "";

  const [isShowTaskForm, setIsShowTaskForm] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const {
    data: tasks,
    totalItems,
    isLoading,
    fetchAtPage,
  } = useTaskPagination();

  useEffect(() => {
    fetchAtPage(currentPage, titleSearch);
  }, [currentPage, titleSearch]);

  const clearPagination = usePaginationStore((state) => state.clearPagination);

  const { trigger: createTask, isLoading: isCreateTaskLoading } =
    useTaskCreate();

  const { trigger: editTask, isLoading: isEditTaskLoading } = useTaskEdit();

  const { trigger: deleteTask } = useTaskDelete();

  const { showToast } = useToast();

  const handleShowEditModal = useCallback((id: string) => {
    setIsShowTaskForm(true);
    setSelectedId(id);
  }, []);

  const handleShowTaskForm = () => {
    setSelectedId("");
    setIsShowTaskForm(true);
  };

  const handleCloseTaskForm = useCallback(() => {
    setIsShowTaskForm(false);
  }, []);

  const handleShowDetail = useCallback(
    (id: string) => {
      navigate(`${ROUTES.TASKS}/${id}`);
    },
    [navigate],
  );

  // Handle edit and create success
  const handleSuccess = (message: string) => {
    showToast(message, TOAST_STATUS.SUCCESS);

    if (!selectedId) {
      clearPagination();
      fetchAtPage(currentPage);
    }

    handleCloseTaskForm();
  };

  // Handle edit and create error
  const handleError = useCallback(
    (error: unknown) => {
      showToast(error as string, TOAST_STATUS.ERROR);
    },
    [showToast],
  );

  const handleSubmit = (data: Task) => {
    const mutate = data.id ? editTask : createTask;

    const successMessage = data.id
      ? SUCCESS_MESSAGES.EDITED(data.title)
      : SUCCESS_MESSAGES.ADDED(data.title);

    mutate(data, {
      onError: handleError,
      onSuccess: () => handleSuccess(successMessage),
    });
  };

  const selectedTask = tasks.find((task) => task.id === selectedId);

  const handleShowDeleteModal = useCallback((id: string) => {
    setIsShowDeleteModal(true);
    setSelectedId(id);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setIsShowDeleteModal(false);
  }, []);

  const handleDeleteSuccess = useCallback(
    (message: string) => {
      showToast(message, TOAST_STATUS.SUCCESS);
      clearPagination();
      fetchAtPage(currentPage);
      handleCloseDeleteModal();

      // Check if the current page has no items left after deletion
      if (tasks.length === 1 && currentPage > 1) {
        // Navigate to the previous page
        const previousPageURL = createPageURL(currentPage - 1, searchParams);
        navigate(previousPageURL);
      }
    },
    [
      clearPagination,
      currentPage,
      fetchAtPage,
      handleCloseDeleteModal,
      navigate,
      searchParams,
      showToast,
      tasks.length,
    ],
  );

  const handleDeleteTask = () => {
    deleteTask(selectedId, {
      onError: handleError,
      onSuccess: () => {
        handleDeleteSuccess(SUCCESS_MESSAGES.DELETED("Task"));
      },
    });
  };

  const handleSearchTask = (title: string) => {
    // Update search parameters with title
    searchParams.set(SEARCH_PARAMS.TITLE, title);

    // Generate the new URL with the page number
    const newUrl = createPageURL(currentPage, searchParams);
    navigate(newUrl);

    fetchAtPage(currentPage, title);
  };

  if (isLoading) {
    return <SpinnerIcon />;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold">Tasks</h2>
          <p className="text-gray-500 text-xs">You have {tasks.length} tasks</p>
        </div>
        <Button extraStyle="h-[35px]" onClick={handleShowTaskForm}>
          + Add Tasks
        </Button>
      </div>
      <div className="flex gap-3 py-4">
        {/* Mock data to match design */}
        <StatByType total={10} label="Todo" type={STAT_STATUS.TODO} />
        <StatByType
          total={10}
          label="Tasks completed"
          type={STAT_STATUS.COMPLETED}
        />
        <StatByType total={10} label="In review" type={STAT_STATUS.REVIEW} />
        <StatByType total={10} label="Blocker" type={STAT_STATUS.BLOCK} />
      </div>

      <div className="flex justify-end mb-4">
        <SearchBar onSearch={handleSearchTask} defaultValue={titleSearch} />
      </div>

      <TaskTable
        tasks={tasks}
        onShowDetail={handleShowDetail}
        onSubmit={handleSubmit}
        onShowEditModal={handleShowEditModal}
        onShowDeleteModal={handleShowDeleteModal}
      />

      <div className="flex justify-end my-5">
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={PAGINATION_LIMIT}
          searchParams={searchParams}
        />
      </div>

      {isShowTaskForm && (
        <Suspense fallback={<SpinnerIcon />}>
          <TaskForm
            projects={PROJECTS}
            task={selectedTask}
            onClose={handleCloseTaskForm}
            onSubmit={handleSubmit}
            isDisableButton={isCreateTaskLoading || isEditTaskLoading}
          />
        </Suspense>
      )}

      {/* Delete Modal */}
      {isShowDeleteModal && (
        <Suspense fallback={<SpinnerIcon />}>
          <DeleteModal
            onClose={handleCloseDeleteModal}
            onSubmit={handleDeleteTask}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
