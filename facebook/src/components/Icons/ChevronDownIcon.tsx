import { SVGProps } from 'react';

export const ChevronDownIcon = ({ width = 22, height = 22, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' {...rest}>
    <path
      fill='#000'
      d='M10.247 17.938a.915.915 0 0 0 1.507 0l8.25-11.916a.915.915 0 0 0-.754-1.439H2.75a.919.919 0 0 0-.753 1.439l8.25 11.916Z'
    />
  </svg>
);
