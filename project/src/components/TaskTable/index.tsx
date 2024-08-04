// Types
import { Task } from "@/types";

// Components
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

interface TaskTableProp {
  tasks: Task[];
}

const TaskTable = ({ tasks }: TaskTableProp) => {
  return (
    <table className="shadow-xl rounded-2xl w-full">
      <TaskTableHeader />

      <tbody>
        {tasks.map((item: Task) => (
          <TaskTableRow key={item.id} task={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
