import { SVGProps } from 'react';

export const FacebookIcon = ({ width = 41, height = 41, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' {...rest}>
    <path
      fill='url(#a)'
      d='M17.234 40.3c-9.5-1.7-16.7-9.9-16.7-19.8 0-11 9-20 20-20s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9Z'
    />
    <path
      fill='#fff'
      d='m28.334 26.1.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8h2.6V8.7c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8v4.4h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V26.1h4.4Z'
    />
    <defs>
      <linearGradient
        id='a'
        x1={20.535}
        x2={20.535}
        y1={39.109}
        y2={0.493}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0062E0' />
        <stop offset={1} stopColor='#19AFFF' />
      </linearGradient>
    </defs>
  </svg>
);
