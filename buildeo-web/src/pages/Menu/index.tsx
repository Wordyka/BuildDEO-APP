import NavbarSearch from "../../Components/Ui/headerSearhc";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from "react";
import Card from "../../Components/Ui/cardMenu";
import Footer from "../../Components/Ui/footer";
export default function MenuPage() {
     const [value, setValue] = React.useState('one');

     const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue);
     };

     const cardData = Array(5).fill({
          title: 'Lay LVT: up to 20 m²',
          company: 'Floor Company',
          price: '119€'
     });


     return (
          <>
               <div className="">
                    <NavbarSearch />
                    <div className="ml-[80px]">
                         <div className="text-[32px] font-bold">Result</div>
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
                                   <Tab value="one" label="Painter" />
                                   <Tab value="two" label="Drywall" />
                                   <Tab value="three" label="Surface treatment" />
                              </Tabs>
                              {value === 'one' &&
                                   <div>
                                        <div className="mt-[20px] flex flex-wrap gap-[20px]">
                                             {cardData.map((card, index) => (
                                                  <Card
                                                       key={index}
                                                       title={card.title}
                                                       company={card.company}
                                                       price={card.price}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              }
                              {value === 'two' &&
                                   <div>
                                        <div className="mt-[20px] flex flex-wrap gap-[20px]">
                                             {cardData.map((card, index) => (
                                                  <Card
                                                       key={index}
                                                       title={card.title}
                                                       company={card.company}
                                                       price={card.price}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              }
                              {value === 'three' &&
                                   <div>
                                        <div className="mt-[20px] flex flex-wrap gap-[20px]">
                                             {cardData.map((card, index) => (
                                                  <Card
                                                       key={index}
                                                       title={card.title}
                                                       company={card.company}
                                                       price={card.price}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              }

                         </Box>
                    </div>
                    <Footer/>
               </div>
          </>
     )
}
