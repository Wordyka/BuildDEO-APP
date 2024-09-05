import { FC } from "react";

interface MessageIconProps{
     width?:number,
     height?:number,
     color?:string,
}

const MessageIcon: FC<MessageIconProps>= ({width,height,color})=>(

     <svg  width={width} height={height}
     viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6673 2.33325H9.33398C4.66732 2.33325 2.33398 4.66659 2.33398 9.33325V24.4999C2.33398 25.1416 2.85898 25.6666 3.50065 25.6666H18.6673C23.334 25.6666 25.6673 23.3333 25.6673 18.6666V9.33325C25.6673 4.66659 23.334 2.33325 18.6673 2.33325Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.16797 11.0835H19.8346" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.16797 16.9167H16.3346" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export default MessageIcon;

