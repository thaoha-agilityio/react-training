import { SVGProps } from 'react';

export const NotificationIcon = ({ width = 30, height = 30, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' {...rest}>
    <path
      fill='#040000'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M24.205 5.795a2.5 2.5 0 0 1 0 3.535 8.751 8.751 0 0 1-1.768 8.84l-2.652 2.65a5 5 0 0 0-.884 4.42L4.76 11.1a5 5 0 0 0 4.419-.884l2.65-2.654a8.75 8.75 0 0 1 8.84-1.767 2.5 2.5 0 0 1 3.536 0Z'
    />
    <path fill='#040000' d='m9.178 15.518-.883.883a3.75 3.75 0 1 0 5.303 5.304l.884-.884' />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='m9.178 15.518-.883.883a3.75 3.75 0 1 0 5.303 5.304l.884-.884'
    />
  </svg>
);
