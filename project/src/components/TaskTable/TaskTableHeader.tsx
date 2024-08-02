// Constants
import { TASK_COLUMNS } from "@/constants";

const TaskTableHeader = () => (
  <thead className="text-left">
    <tr className="text-base border-b text-zinc-800">
      {TASK_COLUMNS.map((item: string, index) => (
        <th key={`${item}-${index}`} className="p-5 capitalize">
          {item}
        </th>
      ))}
    </tr>
  </thead>
);

export default TaskTableHeader;
