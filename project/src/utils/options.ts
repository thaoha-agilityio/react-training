// Types
import { Option, Project } from "@/types";

/**
 * Retrieves the label corresponding to a given value from an array of options.
 * @param {Option[]} options - An array of option objects, each with a `value` and `label` property.
 * @param {string} value - The value for which the corresponding label is to be retrieved.
 * @returns {string | null} - The label associated with the provided value, or null if the value is not found.
 */
export const getLabelByValue = (options: Option[], value: string) => {
  const option = options.find((item) => item.value === value);

  return option ? option.label : null;
};

/**
 * Transforms an array of project objects into an array of options
 * @param project An array of project objects.
 * @returns An array of options.
 */
export const transformProject = (projects: Project[]): Option[] =>
  projects.map(({ id, name }) => {
    return {
      value: id,
      label: name,
    };
  });

/**
 * Finds a project in the array by its ID.
 * @param {string} id - The ID of the project to search for.
 * @param {Project[]} projects - The array of project objects to search within.
 * @returns {Project} - The project object with the matching ID, or undefined if no match is found.
 */
export const findProjectById = (id: string, projects: Project[]) =>
  projects.find((item) => item.id === id);
