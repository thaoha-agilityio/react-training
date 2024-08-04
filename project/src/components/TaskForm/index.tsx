import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { Button, Dropdown, InputGroup, RadioGroup } from "@/components";

// Constants
import {
  ERROR_MESSAGES,
  TASK_PRIORITY_OPTIONS,
  TASK_STATUS_OPTIONS,
  TIME,
} from "@/constants";

// Types
import { Task, Project } from "@/types";

// Utils
import { findProjectById, transformProject } from "@/utils";

interface TaskFromProps {
  projects: Project[];
  task?: Task;
}

const TaskFrom = ({ projects, task }: TaskFromProps) => {
  const { title, timeSpent, estimation, project } = task || {};
  const { id: projectId } = project || {};

  const projectOption = transformProject(projects);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    setValue,
  } = useForm<Task>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { ...task },
  });

  const [estimationTime, setEstimationTime] = useState(
    estimation?.toString() || "",
  );
  const [timeSpentSelected, setTimeSpentSelected] = useState(
    timeSpent?.toString() || "",
  );
  const [projectSelected, setProjectSelected] = useState(projectId || "");

  const handleSelectedEstimationTime = (value: string) => {
    setEstimationTime(value);
    setValue("estimation", +value);
  };

  const handleSelectedTimeSpent = (value: string) => {
    setTimeSpentSelected(value);
    setValue("timeSpent", +value);
  };

  const handleSelectedProject = (value: string) => {
    const project = findProjectById(value, projects);
    setProjectSelected(value);
    setValue("project", project!);
  };

  const validationRule = {
    title: {
      required: ERROR_MESSAGES.FIELD_REQUIRED("Title"),
    },
    project: {
      required: ERROR_MESSAGES.FIELD_REQUIRED("Project"),
    },
    timeSpent: {
      required: ERROR_MESSAGES.FIELD_REQUIRED("Time Spent"),
    },
    estimation: {
      required: ERROR_MESSAGES.FIELD_REQUIRED("Estimation"),
    },
    status: {
      required: ERROR_MESSAGES.FIELD_REQUIRED("Status"),
    },
    priority: {
      required: ERROR_MESSAGES.FIELD_REQUIRED("Priority"),
    },
  };

  const onSubmit: SubmitHandler<Task> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 ">
        {/* Task Name */}
        <InputGroup
          label="Task name"
          placeholder="Task name"
          defaultValue={title}
          errorMessage={errors.title?.message}
          {...register("title", validationRule.title)}
        />

        {/* Project name */}
        <div className="flex flex-col gap-2 w-[137px]">
          <label className="text-gray-700 capitalize font-medium text-sm">
            Project
          </label>
          <Dropdown
            placeholder="Choose project"
            options={projectOption}
            selectedValue={projectSelected}
            onSelect={handleSelectedProject}
            errorMessage={errors.project?.message}
            {...register("project", validationRule.project)}
          />
        </div>

        {/* Time spent */}
        <div className="flex flex-col gap-2 w-[137px]">
          <label className="text-gray-700 capitalize font-medium text-sm">
            Time spent
          </label>
          <Dropdown
            placeholder="Choose time"
            options={TIME}
            selectedValue={timeSpentSelected}
            onSelect={handleSelectedTimeSpent}
            errorMessage={errors.timeSpent?.message}
            {...register("timeSpent", validationRule.timeSpent)}
          />
        </div>

        {/* Estimation time */}
        <div className="flex flex-col gap-2 w-[137px]">
          <label className="text-gray-700 capitalize font-medium text-sm">
            Estimation time
          </label>
          <Dropdown
            placeholder="Choose time"
            options={TIME}
            selectedValue={estimationTime}
            errorMessage={errors.estimation?.message}
            onSelect={handleSelectedEstimationTime}
            {...register("estimation", validationRule.timeSpent)}
          />
        </div>

        {/* Task status */}
        <RadioGroup
          label="Task Status"
          options={TASK_STATUS_OPTIONS}
          errorMessage={errors.status?.message}
          {...register("status", validationRule.status)}
        />

        {/* Task Priority */}
        <RadioGroup
          label="Priority"
          options={TASK_PRIORITY_OPTIONS}
          errorMessage={errors.priority?.message}
          {...register("priority", validationRule.priority)}
        />

        <div className="flex justify-end gap-3">
          <Button type="submit" disabled={!isDirty}>
            Save
          </Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default TaskFrom;
