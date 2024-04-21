import React, { PropsWithChildren } from 'react';

interface Types {
  fill: string;
  stroke: string;
}

export default function HeartIcon(props: PropsWithChildren<Types>) {
  const { fill, stroke } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2232 19.1157L11.2217 19.1144C8.62662 16.7612 6.55384 14.879 5.1178 13.1233C3.69324 11.3817 3 9.88671 3 8.3252C3 5.79748 4.97228 3.8252 7.5 3.8252C8.93721 3.8252 10.3322 4.49913 11.2386 5.56353L12 6.4576L12.7614 5.56353C13.6678 4.49913 15.0628 3.8252 16.5 3.8252C19.0277 3.8252 21 5.79748 21 8.3252C21 9.88673 20.3068 11.3817 18.882 13.1248C17.4459 14.8818 15.3734 16.7661 12.7786 19.1241C12.7782 19.1245 12.7778 19.1248 12.7775 19.1251L12.0026 19.8252L11.2232 19.1157Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
      />
    </svg>
  );
}
