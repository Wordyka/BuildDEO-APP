import { Link, useNavigate } from "react-router-dom";
import { Input } from "./input";

export default function LoginModals() {
     const navigate = useNavigate();
     const regist = () =>{
          navigate('/register');
     }
     const home = () =>{
          navigate('/home');
     }
  return (
     <div className="bg-white rounded-[30px] p-[29px] w-[450px]">
     <div className="text-[#FF460A] text-[30px] font-bold text-center">Login</div>



     <div className="text-[14px] text-center mt-[15px]">
     <div>
               Already registered in another role, 
               {/* <button
                    className='text-[#FF460A] bg-transparent font-bold border-none cursor-pointer'
                    onClick={handleClick}
               >
                    {isCraftman ? ' Login as craftman' : ' Login as buyer'}
               </button> */}
          </div>

     </div>

     <form action="">
          <div className="mt-[25px]">
               <Input placeholder='e-mail' type='email' className=' bg-white h-[50px] rounded-[15px] pl-[26px] text-[16px]' />
          </div>
          <div className="mt-[13px]">
               <Input placeholder='password' type='password' className='bg-white h-[50px] rounded-[15px] pl-[26px] text-[16px]' />
          </div>
          <div className="text-end text-[#FF460A] font-bold mt-[37px] mb-[37px]">
               <Link to={''} className='text-end'>
                    Passwort vergessen?
               </Link>
          </div>
          <div className="">
               <button onClick={home} className='bg-[#FF460A] font-bold rounded-[40px] text-white text-center w-full'>
                    <div className="p-4">Login</div>
               </button>
          </div>
     </form>
     <div className="flex items-center m-4">
          <div className="flex-grow border-t border-black"></div>
          <span className="mx-4 text-black">Sie haben kein Konto?</span>
          <div className="flex-grow border-t border-black"></div>
     </div>
     <div className="">
          <button onClick={regist} className='bg-white text-[#FF460A] font-bold rounded-[40px] border border-[#FF460A] text-center w-full'>
               <div className="p-4">Registrieren</div>
          </button>
     </div>
</div>
  )
}
