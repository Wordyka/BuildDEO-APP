import NavbarSearch from "../../Components/Ui/headerSearhc";
import bgp from '../../../public/bgp.png'
import principle from '../../../public/principle.png'
import Footer from "../../Components/Ui/footer";
export default function PrinciplePage() {
     return (
          <>
               <div className="">
                    <NavbarSearch />
                    <div className="">
                         <div className="">
                              <div className="z-index-[-9] ">
                                   <img src={bgp} alt="" className="md:bg-blend-darken "/>
                              </div>
                              <div className="text-white z-index-[99] text-center mt-[-200px]">
                                   <div className="text-[32px] font-bold">The Buildeo Principal</div>
                                   <div className="text-[20px] ">Get the cheapest quote for home services and materials</div>
                              </div>
                         </div>
                         <div className="mt-[180px] ml-[60px] mr-[60px]">
                              <div className="grid grid-cols-3 gap-10">
                                   <div className=""><img src={principle} alt=""/></div>
                                   <div className="text-justify"><div className="font-bold">How does Buildeo work?</div><div className="">Upload your existing offer to a craft service, wait for the results and in the end benefit from a cheaper, high-quality offer. We take over the stressful, cost-intensive search for offers for you. Just upload, wait and you're done!</div></div>
                                   <div className="text-justify"><div className="font-bold">How can you offer a cheaper deal?</div><div className="">Thanks to our specially trained employees, partnerships in Hadnwerk, and our intelligent system, we have the opportunity to undercut your offer. Simply upload your previous offers and we will take care of the rest! We will then send you a more favorable offer as soon as we have one. Just upload, wait and you're done!</div></div>
                              </div>
                              <div className="grid grid-cols-3 gap-10 mt-6">
                                   <div className="text-justify"><div className="font-bold">What if I like an offer?</div><div className="">If you like our offer, simply let us know in writing. All further details can then be discussed with the company carrying out the work. Payment and troubleshooting continues through us.</div></div>
                                   <div className="text-justify"><div className="font-bold">How does payment processing work?</div><div className="">Payment is made via BUILDEO. Pay securely via PayPal, Klarna, Payment in advance, credit card for your order. As part of these payment methods, you are then entitled to buyer protection. You can report this directly to the payment service provider.</div></div>
                                   <div className=""><img src={principle} alt=""/></div>
                              </div>
                              <div className="grid grid-cols-3 gap-10">
                                   <div className=""><img src={principle} alt=""/></div>
                                   <div className="text-justify"><div className="font-bold">What do I do if I don't like the result?</div><div className="">If you don't like the result of your service, you should first discuss this with the company carrying out the work. It should be considered whether an agreement between both parties is possible without BUILDEO or a payment service provider. If this is not possible, BUILDEO can be switched on as a mediator.</div></div>
                                   <div className="text-justify"><div className="font-bold">What costs will I incur?</div><div className="">You negotiate a set price with your craftsman before placing the order. If additional costs arise, for example due to different materials, unforeseeable additional work or similar, these will be charged immediately to be agreed with BUILDEO and with the customer from the executing company. This way you can be sure that you don't have any unpleasant surprises at the end. 
                                   You have full cost control - at any time!</div></div>
                              </div>
                              <div className="grid grid-cols-3 gap-10 mt-6">
                                   <div className="text-justify"><div className="font-bold">How are the partner companies selected?</div><div className="">BUILDEO selects its partners based on a variety of factors. On the one hand, there are test criteria that every company must pass in order to be considered for a partnership. Employees in partner management contact the partners and evaluate the companies based on other characteristics in order to guarantee a minimum level for the customer.</div></div>
                                   <div className="text-justify"><div className="font-bold">How does communication take place?</div><div className="">All aspects regarding payment, contract conditions, problems or contract-relevant aspects must be clarified with BUILDEO. Further conditions, such as making an appointment, procedure or questions about the service, should be discussed directly with the company carrying out the work.</div></div>
                                   <div className=""><img src={principle} alt=""/></div>
                              </div>
                         </div>
                         
                    </div>
                    <Footer/>
               </div>
          </>
     )
}
