import { SVGProps } from 'react';

export const MenuIcon = ({ width = 42, height = 42, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' {...rest}>
    <path
      fill='#1B74E4'
      d='M41.298 21.69 22.548.855c-.79-.879-2.306-.879-3.096 0L.702 21.69a2.08 2.08 0 0 0-.354 2.242 2.079 2.079 0 0 0 1.902 1.236h4.167V39.75A2.083 2.083 0 0 0 8.5 41.833h6.25a2.083 2.083 0 0 0 2.083-2.083v-8.333h8.334v8.333a2.083 2.083 0 0 0 2.083 2.083h6.25a2.083 2.083 0 0 0 2.083-2.083V25.167h4.167a2.08 2.08 0 0 0 1.548-3.478Z'
    />
  </svg>
);
