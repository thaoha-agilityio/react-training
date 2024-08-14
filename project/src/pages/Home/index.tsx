import { lazy, Suspense, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Button, Pagination, StatByType, TaskTable } from "@/components";
import { SpinnerIcon } from "@/components/Icons";

// Constants
import { PAGINATION_LIMIT, ROUTES, STAT_STATUS } from "@/constants";

// Mocks
import { PROJECTS } from "@/mocks";

// Hooks
import { usePaginationTasks } from "@/hooks";

const TaskForm = lazy(() => import("@/components/TaskForm"));

const Home = () => {
  const [isShowTaskForm, setIsShowTaskForm] = useState(false);

  const {
    data: tasks,
    totalItem,
    isLoading,
    currentPage,
    fetchAtPage,
  } = usePaginationTasks();

  const navigate = useNavigate();

  const handleShowTaskForm = () => {
    setIsShowTaskForm(true);
  };

  const handleCloseTaskForm = useCallback(() => {
    setIsShowTaskForm(false);
  }, []);

  const handleShowDetail = useCallback((id: number) => {
    navigate(`${ROUTES.TASKS}/${id}`);
  }, []);

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

      <TaskTable tasks={tasks} onShowDetail={handleShowDetail} />
      <div className="flex justify-end my-5">
        <Pagination
          currentPage={currentPage}
          totalItems={totalItem}
          itemsPerPage={PAGINATION_LIMIT}
          onChangePage={fetchAtPage}
        />
      </div>

      {isShowTaskForm && (
        <Suspense fallback={<SpinnerIcon />}>
          <TaskForm projects={PROJECTS} onClose={handleCloseTaskForm} />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
