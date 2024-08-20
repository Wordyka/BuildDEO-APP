import { FC } from "react";

interface ProfileIconProps{
     width?:number,
     height?:number,
     color?:string,
}

const ProfileIcon: FC<ProfileIconProps>= ({width,height})=>(

     <svg  width={width} height={height}
         viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M14.1405 14.91C14.0588 14.8983 13.9538 14.8983 13.8605 14.91C11.8072 14.84 10.1738 13.16 10.1738 11.095C10.1738 8.98331 11.8772 7.26831 14.0005 7.26831C16.1122 7.26831 17.8272 8.98331 17.8272 11.095C17.8155 13.16 16.1938 14.84 14.1405 14.91Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M21.8634 22.6101C19.7867 24.5117 17.0334 25.6667 14.0001 25.6667C10.9667 25.6667 8.21339 24.5117 6.13672 22.6101C6.25339 21.5134 6.95339 20.4401 8.20172 19.6001C11.3984 17.4767 16.6251 17.4767 19.7984 19.6001C21.0467 20.4401 21.7467 21.5134 21.8634 22.6101Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M14.0007 25.6666C20.444 25.6666 25.6673 20.4432 25.6673 13.9999C25.6673 7.5566 20.444 2.33325 14.0007 2.33325C7.55733 2.33325 2.33398 7.5566 2.33398 13.9999C2.33398 20.4432 7.55733 25.6666 14.0007 25.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
);

export default ProfileIcon;

