import Image from "next/image";
import { PiDotsNineBold } from "react-icons/pi";

type BtnType = {
  [key: string]: {
    text: string;
    image: string;
  };
};

const BTNS: BtnType = {
  home: {
    text: "Home-made meal",
    image: "/assets/home-made.png",
  },
  grocery: {
    text: "Grocery",
    image: "/assets/grocery.png",
  },
  catering: {
    text: "Catering",
    image: "/assets/catering.png",
  },
};

const ServiceBtns = () => {
  return (
    <div className="flex gap-5 mt-7">
      {Object.keys(BTNS).map((item) => {
        return (
          <div className="w-24 flex flex-col items-center cursor-pointer">
            <Image
              src={BTNS[item].image}
              height={68}
              width={68}
              alt={item}
              key={item}
              className="rounded-2xl"
            />
            <p className="text-white text-center mt-2">{BTNS[item].text}</p>
          </div>
        );
      })}
      <div className="w-24 flex flex-col items-center cursor-pointer">
        <div className="w-[68px] h-[68px] bg-white rounded-2xl flex justify-center items-center">
          <PiDotsNineBold color="black" size={35} />
        </div>
        <p className="text-white text-center mt-2">ALL</p>
      </div>
    </div>
  );
};

export default ServiceBtns;
