// Types
import { Option } from "@/types";

export const getLabelByValue = (options: Option[], value: string) => {
  const option = options.find((item) => item.value === value);

  return option ? option.label : null;
};
