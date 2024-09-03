import NavbarSearch from '../../Components/Ui/headerSearhc'
import cover from '../../../public/cover.png'
import PaymentMethod from '../../Components/Ui/payment'
import Footer from '../../Components/Ui/footer'
export default function PaymentPage() {
  return (
     <>
          <div className="">
               <NavbarSearch/>
               <div className="pl-[80px] pr-[80px]">
                    <div className="text-[32px] font-bold">Paying</div>
                    <div className="flex mt-4 justify-between">
                         <div className="">
                              <div className="flex ">
                                   <div className=""><img src={cover} alt="" className='rounded-[5px]' /></div>
                                   <div className="ml-[20px]">
                                        <div className="text-[20px] font-bold">Your Items</div>
                                        <div className="text-[16px] text-[#9586A8]">Please make sure this order already correct</div>
                                        <div className="text-[20px] mt-4">Lay LVT: up to 20 m²</div>
                                        <div className="text-[20px]">price : 119€</div>
                                   </div>
                              </div>
                              <div className="text-[32px] font-bold mt-[70px]">Your Payment method</div>
                              <div className="text-[16px] text-[#9586A8]" >Choose yout  Payment method</div>
                              <div className="mt-10">
                                   <PaymentMethod/>
                              </div>
                         </div>
                         <div className="pb-[300px]">
                              <div className="bg-white border border-[1.5px] rounded-[10px] w-[370px] p-[20px] pr-[20px] pt-[32px] pb-[32px]">
                                   <div className="text-[20px] font-bold">Payment</div>
                                   <div className="flex justify-between text-[20px] text-[#9586A8] mt-[30px]"><div className="">Total items</div><div className="">12</div></div>
                                   <div className="flex justify-between text-[20px] text-[#9586A8]"><div className="">Total carftman</div><div className="">12</div></div>
                                   <div className="flex justify-between text-[20px] text-black font-medium mt-[30px]"><div className="">Total price</div><div className="">12e</div></div>
                                   <div className="text-[20px] mt-[50px] font-bold text-center text-white"><button className='bg-[#FF460A] rounded-[40px] p-[11px] w-full hover:bg-[#ffffff] hover:border hover:border-[1.5px] hover:border-[#ff460a] hover:text-[#ff460a] transition-colors duration-200'>Pay</button></div>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer/>
          </div>
     </>
)
}
