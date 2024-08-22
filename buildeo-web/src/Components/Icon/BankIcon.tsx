import { FC } from "react";

interface BankIconProps{
     width?:number,
     height?:number,
     color?:string,
}

const BankIcon: FC<BankIconProps>= ({width,height,color})=>(

     <svg  width={width} height={height}
     viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M5.91508 0.900391L0.402344 4.03263V4.81569H11.4278V4.03263L5.91508 0.900391ZM1.97741 5.59875L1.81991 11.0802H3.78874L3.55248 5.59875H1.97741ZM5.12755 5.59875L4.97004 11.0802H6.93888L6.70262 5.59875H5.12755ZM8.27768 5.59875L8.12018 11.0802H10.089L9.85275 5.59875H8.27768ZM0.402344 13.4293H11.4278V11.8632H0.402344V13.4293Z" fill={color}/>
     </svg>
);

export default BankIcon;

