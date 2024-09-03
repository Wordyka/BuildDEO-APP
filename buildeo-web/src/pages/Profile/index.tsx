import NavbarSearch from '../../Components/Ui/headerSearhc'
import Footer from '../../Components/Ui/footer'
import cover from '../../../public/cover.png'
import PaymentMethod from '../../Components/Ui/payment'
export default function ProfilePage() {
  return (
    <>
      <div className="">
        <NavbarSearch />
        <div className="mt-[10px] ml-[80px] mr-[80px] mb-[50px]">
          <div className="text-[32px] font-bold mb-4"> Personal Information</div>
          <div className="flex flex-wrap">
            <div className="mr-[50px]"><img src={cover} alt="" className="rounded-[10px]" /></div>
            <div className="">
              <table className='text-[20px]'>
                <tr >
                  <td colSpan={2} className=' font-bold'>User Personal Data</td>
                </tr>
                <tr>
                  <td className='w-[120px]'>Name</td>
                  <td className='w-[450px]'>Marvis Ckugila</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>email@gmail.com</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>No 15 uti street off ovie palace road effurun delta state</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="text-[32px] font-bold mt-[20px] mb-6">Payment</div>
          <PaymentMethod/>
        </div>
        <Footer />
      </div>
    </>
  )
}
