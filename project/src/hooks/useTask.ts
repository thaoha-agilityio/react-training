import { useEffect, useState } from "react";

// Constants
import { API_ROUTES, ERROR_MESSAGE, PAGINATION_LIMIT } from "@/constants";

// Services
import { api } from "@/services";

// Types
import { Task } from "@/types";

// Store
import { usePaginationStore, useTaskStore } from "@/stores";

// Utils
import { generateUrl, getIdsFromList } from "@/utils";

// Mocks
import { INITIAL_TASK } from "@/mocks";

/**
 * Custom hook to manage paginated tasks.
 * @param {number} page - The initial page to load.
 * @returns An object containing The state and actions for handling paginated tasks.
 */
export const usePaginationTasks = (page: number = 1) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(page);

  const [setPagination, pagination, totalItems, setTotalItems] =
    usePaginationStore((state) => [
      state.setPagination,
      state.pagination,
      state.totalItems,
      state.setTotalItems,
    ]);

  const [tasks, setTask] = useTaskStore((state) => [
    state.tasks,
    state.setTask,
  ]);

  const trigger = async (page: number) => {
    const filterPaginationParam = {
      page: page,
      limit: PAGINATION_LIMIT,
    };
    const url = `${API_ROUTES.TASKS}${generateUrl(filterPaginationParam)}`;

    // Set the current page
    setCurrentPage(page);

    // If data for this page is already fetched, skip fetch data
    if (pagination[page]) return;

    // Start fetching data
    setIsLoading(true);

    try {
      const { data, total } = await api.getData<Task[]>(url);

      data.forEach((task) => setTask(task));

      setTotalItems(+total);

      const ids = getIdsFromList(data);
      setPagination(page, ids);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    trigger(page);
  }, [page]);

  return {
    currentPage,
    data: pagination[currentPage]?.map((id) => tasks[id]) || [],
    isLoading,
    fetchAtPage: trigger,
    totalItems,
    error,
  };
};

/**
 * Custom hook to fetch the details of a specific task by its ID.
 * @param id - The unique identifier of the task to fetch.
 * @returns An object containing the task details, loading state, and any error encountered during the fetch.
 */
export const useTaskGetDetail = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [tasks, setTask] = useTaskStore((state) => [
    state.tasks,
    state.setTask,
  ]);

  const trigger = async (id: string) => {
    // If data for this id is already fetched, skip fetch data
    if (tasks[id]) return;

    // Start fetching data
    setIsLoading(true);

    try {
      const url = `${API_ROUTES.TASKS}/${id}`;
      const { data } = await api.getData<Task>(url);

      setTask(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : ERROR_MESSAGE.DEFAULT;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    trigger(id);
  }, [id]);

  return {
    isLoading,
    error,
    taskDetail: tasks[id] || INITIAL_TASK,
  };
};
