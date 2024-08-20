import logo from '../../../public/Buildeo.png'
import { Link } from 'react-router-dom'
// import { DropdownMenu,
//      DropdownMenuContent,
//      DropdownMenuItem,
//      DropdownMenuTrigger, } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import MenuIcon from "../Icon/MenuIcon";
import TrellIcon from '../Icon/Trell';
import ProfileIcon from '../Icon/ProfileIcon';
// import ArrowIcon from "../Icon/ArrowIcon";


export default function Navbar() {
     const [navbar, setNavbar] = useState(false);
     return (
          <div className="navbar flex flex-wrap items-center justify-between pl-4 pr-4 text-white  text-[12px] z-[9]">
               <div className="md:flex p-1 justify-between md:items w-full">
                    <div className="flex mb-4 md:mr-20  items-center justify-between align-items-start">
                         <img src={logo} alt="buildeo.jpg"
                              width={163} height={32} className='p-4 md:mr-35 ' />
                         <div className="md:hidden flex mt-5  justify-end self-end "style={{ alignSelf: 'flex-start' }}>

                              <button onClick={() => setNavbar(!navbar)}>
                                   {navbar ? (
                                        <MenuIcon width={32} height={24} color={'white'} />
                                   ) : (
                                        <MenuIcon width={32} height={24} color={'white'} />
                                   )}
                              </button>
                         </div>


                    </div>
                    
                    <div className="mb-6 items-center flex pl-3 self-end">
                         <div className={`flex flex-col gap-6 text-left md:text-right text-[15px] md:flex md:items-center space-x-0 md:space-x-12   md:flex-row ${navbar ? "flex" : "hidden"
                              }`}>
                             
                              <div className="mb-4">
                                   <Link to={''}>
                                       Home
                                   </Link>
                              </div>
                              <div className="mb-4">
                                   <Link to={''}>
                                        Faq
                                   </Link>
                              </div>
                              <div className="mb-4">
                                   <Link to={''}>
                                        <TrellIcon width={25}/>
                                   </Link>
                              </div>
                              <div className="mb-4">
                                   <Link to={''}>
                                        <ProfileIcon width={20}/>
                                   </Link>
                              </div>
                             
                         </div>
                    </div>

               </div>
          </div>
     )
}
