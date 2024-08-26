import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Ui/header";
import { Input } from "../../Components/Ui/input";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Card from "../../Components/Ui/cardMenu";
export default function Home() {

  const cardData = Array(5).fill({
    title: 'Lay LVT: up to 20 m²',
    company: 'Floor Company',
    price: '119€'
  });

  return (
    <>
      <div className="landing n">
        <Navbar />
        <div className="text-white text-[28px] font-bold text-center mt-[120px]">
          Einfach günstigeren Handwerker finden
        </div>
        <div className="text-white text-[18px] text-center">
          Finden Sie hochwertige Handwerker zu erschwinglichen Preisen in Ihrer Nähe
        </div>
        <div className="flex justify-center mt-[20px] pb-[0px]">
          <div className="relative w-[476px]">
            <FontAwesomeIcon icon={faSearch} className="absolute top-[18px] left-[10px] " color="grey" />
            <Input
              placeholder="search"
              className="pl-[29px] rounded-[10px] h-[47px]"
            />
          </div>
        </div>
      </div>
      {/* selection-1 */}
      <div className="bg-[#FFDED2] pl-[59px] pr-[59px] pb-[60px]">
        <div className="">
          <div className="font-bold text-[28px] pt-6">Floor Layers</div>
          <div className="text-[16px] font-medium">enjoy a home with beautiful floors</div>
        </div>
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

      {/* selection-2 */}
      <div className="bg-[#4A9AEB] pl-[59px] pr-[59px] pb-[60px]">
        <div className="text-white">
          <div className="font-bold text-[28px] pt-6">Painter</div>
          <div className="text-[16px] font-medium">beautiful wall beautiful smile</div>
        </div>
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

      {/* selection-3 */}
      <div className="bg-[#ffffff] pl-[59px] pr-[59px] pb-[60px]">
        <div className="">
          <div className="font-bold text-[28px] pt-6">Building Application</div>
          <div className="text-[16px] font-medium">every line of code is build to solve your problem</div>
        </div>
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

      {/* selection-4 */}
      <div className="bg-[#ffffff] pl-[59px] pr-[59px] pb-[60px]">
        <div className="">
          <div className="font-bold text-[28px] pt-6">Flooring Adhesive</div>
          <div className="text-[16px] font-medium">make your floor great again</div>
        </div>
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

    </>
  )
}
