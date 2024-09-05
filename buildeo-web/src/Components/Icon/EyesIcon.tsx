import { FC } from "react";

interface EyesIconProps {
     width?: number,
     height?: number,
     color?: string,
}

const EyesIcon: FC<EyesIconProps> = ({ width, height, color }) => (

     <svg width={width} height={height}
          viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="9" r="5.25" stroke={color} stroke-width="1.5" />
          <path d="M1 9.74656C15.9903 -1.68077 22.0569 -2.14794 36.5 9.74656C21.3532 19.4107 15.309 19.4249 1 9.74656Z" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
     </svg>
);

export default EyesIcon;

