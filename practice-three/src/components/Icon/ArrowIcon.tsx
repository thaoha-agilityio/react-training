import { SVGProps } from 'react';

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={8} height={11} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.147 7.146a.5.5 0 0 1 .708 0L3.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708Z"
      fill="#000000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 0a.5.5 0 0 1 .5.5v9a.5.5 0 1 1-1 0v-9a.5.5 0 0 1 .5-.5Z"
      fill="#000000"
    />
  </svg>
);
