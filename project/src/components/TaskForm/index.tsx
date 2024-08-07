import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { memo } from "react";

// Components
import {
  BaseModal,
  Button,
  Dropdown,
  InputGroup,
  RadioGroup,
} from "@/components";

// Constants
import {
  ERROR_MESSAGES,
  TASK_PRIORITY_OPTIONS,
  TASK_STATUS_OPTIONS,
  TIME,
} from "@/constants";

// Types
import { Project, Task } from "@/types";

// Utils
import { findProjectById, transformProject } from "@/utils";

interface TaskFromProps {
  projects: Project[];
  task?: Task;
  onClose: () => void;
}

const TaskForm = ({ projects, task, onClose }: TaskFromProps) => {
  const { id, title } = task || {};

  const projectOptions = transformProject(projects);

  const titleModal = id ? "Edit task" : "Add task";

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isDirty },
    setValue,
  } = useForm<Task>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { ...task },
  });

  const handleSelectedProject =
    (onChange: (value: string) => void) => (value: string) => {
      const project = findProjectById(value, projects);
      if (project) {
        onChange(value);
        setValue("project", project);
      }
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

  // TODO: will integrate  API later
  const handleSubmitTask: SubmitHandler<Task> = (data) => {
    console.log(data);
  };

  return (
    <BaseModal title={titleModal} onClose={onClose}>
      <form onSubmit={handleSubmit(handleSubmitTask)}>
        <div className="flex flex-col gap-4">
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
            <Controller
              name="project"
              control={control}
              rules={validationRule.project}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeholder="Select project"
                  options={projectOptions}
                  selectedValue={value?.id}
                  errorMessage={error?.message}
                  onSelect={handleSelectedProject(onChange)}
                />
              )}
            />
          </div>

          {/* Time spent */}
          <div className="flex flex-col gap-2 w-[137px]">
            <label className="text-gray-700 capitalize font-medium text-sm">
              Time spent
            </label>
            <Controller
              name="timeSpent"
              control={control}
              rules={validationRule.timeSpent}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeholder="Select time"
                  options={TIME}
                  selectedValue={value?.toString()}
                  errorMessage={error?.message}
                  onSelect={onChange}
                />
              )}
            />
          </div>

          {/* Estimation time */}
          <div className="flex flex-col gap-2 w-[137px]">
            <label className="text-gray-700 capitalize font-medium text-sm">
              Estimation time
            </label>
            <Controller
              name="estimation"
              control={control}
              rules={validationRule.estimation}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeholder="Estimation"
                  options={TIME}
                  selectedValue={value?.toString()}
                  errorMessage={error?.message}
                  onSelect={onChange}
                />
              )}
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
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </BaseModal>
  );
};

export default memo(TaskForm);
