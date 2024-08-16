import { MouseEvent } from "react";

export interface MenuOption {
  title: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
