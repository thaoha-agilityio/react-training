import { SVGProps } from 'react';

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 23.438a10.937 10.937 0 1 0 0-21.875 10.937 10.937 0 0 0 0 21.875Zm0 1.562a12.5 12.5 0 1 0 0-25 12.5 12.5 0 0 0 0 25Z"
      fill="#959EAD"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.938 17.969a.781.781 0 0 1 .78-.782h1.563a.781.781 0 1 1 0 1.563H11.72a.781.781 0 0 1-.781-.781ZM7.812 13.28a.781.781 0 0 1 .782-.781h7.812a.781.781 0 1 1 0 1.563H8.594a.781.781 0 0 1-.781-.782ZM4.688 8.594a.781.781 0 0 1 .782-.781H19.53a.781.781 0 1 1 0 1.562H5.47a.781.781 0 0 1-.782-.781Z"
      fill="#959EAD"
    />
  </svg>
);
