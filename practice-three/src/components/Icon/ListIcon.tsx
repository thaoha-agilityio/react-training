import { SVGProps } from "react";

export const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 4 9Zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 4 5Zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 4 1ZM1 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#000"
    />
  </svg>
);
