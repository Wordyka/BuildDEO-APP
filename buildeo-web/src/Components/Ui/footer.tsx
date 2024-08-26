import logo from '../../../public/logoOrange.png'
export default function Footer() {
  return (
    <div className="bg-white] border border-top border-[1.5px] mt-4 flex flex-wrap justify-between p-[89px]">
     <div className=""><img src={logo} alt="" className='h-[82px] md:mt-[-39px]'/></div>
     <div className="grid grid-cols-2 gap-20 text-[20px] md:mt-[-39px]">
          <div className="">
               <div className="">Home</div>
               <div className="">Menu</div>
               <div className="">About</div>
          </div>
          <div className="">
               <div className="">Menu</div>
               <div className="">Contact us</div>
               <div className="">Help center</div>
          </div>
     </div>
    </div>
  )
}
