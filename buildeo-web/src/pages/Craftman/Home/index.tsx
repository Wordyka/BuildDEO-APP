import Footer from "../../../Components/Ui/footer";
import NavbarSearch from "../../../Components/Ui/headerSearhc";
import cover from '../../../../public/cover.png'
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import media from '../../../../public/Media.png'
import Card from "../../../Components/Ui/cardMenu";
import { Avatar, AvatarFallback, AvatarImage } from "../../../Components/Ui/avatar";
import DynamicRating from "../../../Components/Ui/rating";
import { EyeIcon } from "lucide-react";
import NotestIcon from "../../../Components/Icon/NotesIcon";
import TrashIcon from "../../../Components/Icon/TrashIcon";
import PaymentMethod from "../../../Components/Ui/payment";

export default function HomeCompanyPage() {
     const [value, setValue] = React.useState('one');

     const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue);
     };

     const cardData = Array(5).fill({
          title: 'Lay LVT: up to 20 m²',
          company: 'Floor Company',
          price: '119€'
     });
     const text = "So lovely paint! I couldn't be happier with the results...";
     const maxLength = 30;

     return (
          <>
               <div className="">
                    <NavbarSearch />
                    <div className="ml-[80px] mr-[80px]">
                         <div className="text-[32px] font-bold mb-4"> Your Company Information</div>
                         <div className="flex flex-wrap mb-10">
                              <div className="mr-[50px]"><img src={cover} alt="" className="rounded-[250px]" /></div>
                              <div className="">
                                   <table className='text-[20px]'>
                                        <tr >
                                             <td colSpan={2} className=' font-bold'>Painter Company</td>
                                        </tr>
                                        <tr>
                                             <td className="w-[70px]">Email </td>
                                             <td>: email@gmail.com</td>
                                        </tr>
                                        <tr>
                                             <td>Type </td>
                                             <td>: Painter</td>
                                        </tr>
                                   </table>
                              </div>
                         </div>
                         <Box sx={{ width: '100%' }}>
                              <Tabs
                                   value={value}
                                   onChange={handleChange}
                                   TabIndicatorProps={{
                                        style: {
                                             backgroundColor: '#FF460A',
                                             color: '#FF460A'
                                        },
                                   }}
                                   sx={{
                                        '& .MuiTab-root': {
                                             color: '#9A9A9D',
                                        },
                                        '& .Mui-selected': {
                                             color: '#FF460A',
                                        },
                                   }}
                                   indicatorColor="secondary"
                              >
                                   <Tab value="one" label="Your Service" />
                                   <Tab value="two" label="Review and Rating" />
                                   <Tab value="three" label="Manage Service" />
                                   <Tab value="four" label="Payment" />
                                   <Tab value="five" label="Buyer Offer" />
                              </Tabs>
                              {value === 'one' &&
                                   <div>
                                        <div className="mt-[20px] flex flex-wrap gap-[9px]">
                                             {cardData.map((card, index) => (
                                                  <Card
                                                       key={index}
                                                       title={card.title}
                                                       company={card.company}
                                                       price={card.price}
                                                       img={cover}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              }
                              {value === 'two' &&
                                   <div>
                                        <div className="mt-[20px] grid grid-cols-2 gap-3 bg-white shadow p-4 rounded-[5px]">
                                             <div className="flex">
                                                  <div className="mr-10"><img src={media} alt="" className='w-[200px] h-[150px] rounded-[10px]' /></div>
                                                  <div className="text-[14px] flex flex-col justify-between">
                                                       <div className="font-bold text-[20px] ">Lay LVT: up to 20 m²</div>
                                                       <div className="flex justify-between text-[#9586A8] "><div className="">Item : 1</div><div className="">Price :  119€</div></div>
                                                       <div className="text-[#9586A8] mt-[50px]">Total Price</div>
                                                       <div className="text-[20px] font-bold">119€</div>
                                                  </div>
                                             </div>
                                             <div className="flex">
                                                  <div className="mr-4"><Avatar>
                                                       <AvatarImage src="https://github.com/shadcn.png" className='w-[50px] mr-10' />
                                                       <AvatarFallback>CN</AvatarFallback>
                                                  </Avatar>
                                                  </div>
                                                  <div className="">
                                                       <div className="text-[20px] font-bold">Maria Natalie</div>
                                                       <div className="flex items-center"><div className="mr-[20px]"><DynamicRating defaultValue={4.5} readOnly={true} /></div><div className="text-[16px] text-[#9586A8]">Jan 1 2024</div></div>
                                                       <div className="text-justify">{text.length > maxLength ? `${text.slice(0, maxLength)}...` : text}</div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              }
                              {
                                   value === 'three' &&

                                   <div>
                                        <div className="mt-[20px] bg-[#FEABB1] w-full flex items-center justify-between p-6">
                                             <div className=""><div className="font-bold text-[32px]">Sell Your Skills</div><div className="w-[200px]">add service that people want the most</div></div>
                                             <div className=""><button className="bg-[#E31E24] p-3 pl-6 pr-6 text-white rounded-[25px] font-medium">Add Service</button></div>
                                        </div>
                                        <div className="mt-4">
                                             <div className="font-bold text-[24px]">Service List</div>
                                             <table className="w-full">
                                                  <tr className=" text-[#9586A8] font-medium">
                                                       <td>Service Name</td>
                                                       <td>Service Sell</td>
                                                       <td>Manage Service</td>
                                                  </tr>
                                                  <tr>
                                                       <td className="w-[600px]">
                                                            <div className="">
                                                                 <div className="flex">
                                                                      <div className="mr-10"><img src={media} alt="" className='w-[100px] h-[100px] rounded-[10px]' /></div>
                                                                      <div className="text-[14px] flex flex-col ">
                                                                           <div className="font-bold text-[20px] ">Lay LVT: up to 20 m²</div>
                                                                           <div className="text-[#9586A8] mt-[10px]">added at : January 20 2024</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </td>
                                                       <td>
                                                            <div className="font-bold text-black text-[24px]">30</div>
                                                       </td>
                                                       <td className="w-[200px]">
                                                            <div className="grid grid-cols-3 ">
                                                                 <div className=""><EyeIcon color="black" /></div>
                                                                 <div className=""><NotestIcon color="black" width={24} /></div>
                                                                 <div className=""><TrashIcon color="black" width={24} /></div>
                                                            </div>
                                                       </td>
                                                  </tr>
                                             </table>
                                        </div>
                                   </div>
                              }
                              {
                                   value === "four" &&
                                   <div className="mt-[50px] mb-[100px]">
                                        <PaymentMethod />
                                   </div>
                              }
                              {
                                   value === 'five' &&
                                   <div>
                                        <div className="flex flex-wrap justify-between bg-white shadow p-4 rounded-[5px]">
                                             <div className="flex">
                                                  <div className="mr-10"><img src={media} alt="" className='w-[200px] h-[150px] rounded-[10px]' /></div>
                                                  <div className="text-[14px] flex flex-col justify-between">
                                                       <div className="font-bold text-[20px] ">Lay LVT: up to 20 m²</div>
                                                       <div className="flex justify-between text-[#9586A8] "><div className="">Item : 1</div><div className="">Price :  119€</div></div>
                                                       <div className="text-[#9586A8] mt-[50px]">Total Price</div>
                                                       <div className="text-[20px] font-bold">119€</div>
                                                  </div>
                                             </div>
                                             <div className="md:ml-[100px] flex flex-col items-center justify-center">
                                                  <div className="flex font-bold">
                                                       <button className='bg-[#FFFFFF] text-[#E31E24] border border-[#E31E24] rounded-[40px] w-[150px] p-[7px]'>View Detail</button>
                                                       <button className='bg-[#FFFFFF] text-[#E31E24] border border-[#E31E24] rounded-[40px] w-[150px] p-[7px] ml-10'>Reject</button>
                                                       <button className='bg-[#E31E24] text-white rounded-[40px] w-[150px] p-[7px] ml-10'>Accept</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              }
                         </Box>
                    </div>

                    <Footer />
               </div>
          </>
     )
}
