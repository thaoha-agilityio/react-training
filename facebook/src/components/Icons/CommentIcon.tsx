import { SVGProps } from 'react';

export const CommentIcon = ({ width = 25, height = 25, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' {...rest}>
    <path
      fill='#65676B'
      d='M1.563 7.031a3.906 3.906 0 0 1 3.906-3.906H19.53a3.906 3.906 0 0 1 3.907 3.906v7.813a3.906 3.906 0 0 1-3.907 3.906h-5.956l-4.786 4.188a1.531 1.531 0 0 1-2.539-1.154V18.75h-.781a3.907 3.907 0 0 1-3.907-3.906V7.03Zm3.906-2.343A2.344 2.344 0 0 0 3.125 7.03v7.813a2.343 2.343 0 0 0 2.344 2.344h2.343v4.528l5.176-4.529h6.543a2.343 2.343 0 0 0 2.344-2.343V7.03a2.344 2.344 0 0 0-2.344-2.343H5.47Z'
    />
  </svg>
);
