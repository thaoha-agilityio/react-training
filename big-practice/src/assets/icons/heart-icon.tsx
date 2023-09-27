import { SVGProps } from 'react';

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={28} height={28} fill='none' {...props}>
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M8.167 3.5c-3.221 0-5.834 2.585-5.834 5.775 0 2.575 1.021 8.686 11.07 14.863a1.148 1.148 0 0 0 1.194 0c10.049-6.177 11.07-12.288 11.07-14.863 0-3.19-2.613-5.775-5.834-5.775C16.613 3.5 14 7 14 7s-2.612-3.5-5.833-3.5Z'
    />
  </svg>
);
export default HeartIcon;
