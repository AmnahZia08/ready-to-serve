import Image from "next/image";
import Button from "../button";
import { BsApple } from "react-icons/bs";
import { PiGooglePlayLogoFill } from "react-icons/pi";

const SectionFour = () => {
  return (
    <div className="py-10 px-5 items-center flex gap-8 flex-col lg:flex-row-reverse">
      <div className="flex-1 flex justify-end">
        <Image
          src="/assets/section-four.png"
          width={608}
          height={406}
          alt="next generation of delivery"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold">Taste the convenience.</p>
          <p className="text-xl">
            Try us out! Delicious homemade food and speedy groceries are at your
            fingertips. Go ahead, download Ready-To-Serve now.
          </p>

          <div className="flex gap-3 mt-7">
            <Button className="w-[180px]">
              <div className="flex gap-2">
                <BsApple size={30} />
                <div>
                  <p className="font-thin text-xs">Download on the</p>
                  <p className="text-start">App Store</p>
                </div>
              </div>
            </Button>
            <Button className="w-[180px]">
              <div className="flex gap-2">
                <PiGooglePlayLogoFill size={30} />
                <div>
                  <p className="font-thin text-xs text-start">Get it on</p>
                  <p className="text-start">Google Play</p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
