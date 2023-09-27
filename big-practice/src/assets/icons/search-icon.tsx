import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={28} height={28} fill='none' {...props}>
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeWidth={2}
      d='m24.5 24.5-5.234-5.243m2.9-7.007a9.916 9.916 0 1 1-19.832 0 9.916 9.916 0 0 1 19.833 0v0Z'
    />
  </svg>
);
export default SearchIcon;
