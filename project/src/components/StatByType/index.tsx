import { memo, ReactNode } from "react";

// Components
import { InfoIcon, ReviewIcon, ToDoIcon } from "../Icons";

// Constants
import { STAT_STATUS } from "@/constants";

const ICON_MAPPING: {
  [key in STAT_STATUS]: { color: string; icon: ReactNode };
} = {
  [STAT_STATUS.TODO]: {
    color: "bg-blue-100",
    icon: <ToDoIcon className="fill-blue-500" />,
  },
  [STAT_STATUS.COMPLETED]: {
    color: "bg-emerald-100",
    icon: <InfoIcon className="fill-green-500" />,
  },
  [STAT_STATUS.REVIEW]: {
    color: "bg-yellow-100",
    icon: <ReviewIcon className="fill-yellow-600" />,
  },
  [STAT_STATUS.BLOCK]: {
    color: "bg-red-100",
    icon: <InfoIcon className="fill-red-600" />,
  },
};

interface StatByTypeProps {
  total: number;
  label: string;
  type: STAT_STATUS;
}

const StatByType = ({ total, label, type }: StatByTypeProps) => {
  const { color, icon } = ICON_MAPPING[type];

  return (
    <div className="flex gap-3 p-2 w-full h-[70px] rounded-lg bg-white shadow-lg">
      <div className={`${color} w-10 h-10 rounded-full p-[9px]`}>{icon}</div>
      <div className="text-left">
        <p className="font-bold text-lg text-zinc-800">{total}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default memo(StatByType);
