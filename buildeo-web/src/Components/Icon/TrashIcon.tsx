import { FC } from "react";

interface TrashIconProps{
     width?:number,
     height?:number,
     color?:string,
}

const TrashIcon: FC<TrashIconProps>= ({width,height,color})=>(

     <svg  width={width} height={height}
     viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 5.98047C18.17 5.65047 14.82 5.48047 11.48 5.48047C9.5 5.48047 7.52 5.58047 5.54 5.78047L3.5 5.98047" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 4.97L9.22 3.66C9.38 2.71 9.5 2 11.19 2H13.81C15.5 2 15.63 2.75 15.78 3.67L16 4.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3504 9.13965L18.7004 19.2096C18.5904 20.7796 18.5004 21.9996 15.7104 21.9996H9.29039C6.50039 21.9996 6.41039 20.7796 6.30039 19.2096L5.65039 9.13965" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8301 16.5H14.1601" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12.5H15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export default TrashIcon;

