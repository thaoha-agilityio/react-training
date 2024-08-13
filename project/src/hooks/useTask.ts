import { useEffect, useState } from "react";

// Constants
import { API_ROUTES, PAGINATION_LIMIT } from "@/constants";

// Services
import { api } from "@/services";

// Types
import { Task } from "@/types";

// Store
import { usePaginationStore, useTaskStore } from "@/stores";

// Utils
import { generateUrl, getIdsFromList } from "@/utils";

/**
 * Custom hook to manage paginated tasks.
 * @param {number} page - The initial page to load.
 * @returns An object containing The state and actions for handling paginated tasks.
 */
export const usePaginationTasks = (page: number = 1) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [totalItem, setTotalItem] = useState<number>(0);

  const [tasks, setTask] = useTaskStore((state) => [
    state.tasks,
    state.setTask,
  ]);

  const [setPagination, pagination] = usePaginationStore((state) => [
    state.setPagination,
    state.pagination,
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

      setTotalItem(+total);

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
  }, []);

  return {
    currentPage,
    data: pagination[currentPage]?.map((id) => tasks[id]) || [],
    isLoading,
    fetchAtPage: trigger,
    totalItem,
    error,
  };
};
