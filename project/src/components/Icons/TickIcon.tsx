import { SVGProps } from "react";

export const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#00AC4F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m24.067 31.75 2.533 2.533 5.067-5.066M20.267 18.117a3.024 3.024 0 0 0-.55 0c-3.967-.133-7.117-3.383-7.117-7.383-.016-4.084 3.3-7.4 7.384-7.4 4.083 0 7.4 3.316 7.4 7.4 0 4-3.167 7.25-7.117 7.383ZM19.983 36.35c-3.033 0-6.05-.767-8.35-2.3-4.033-2.7-4.033-7.1 0-9.783 4.584-3.067 12.1-3.067 16.684 0"
    />
  </svg>
);
