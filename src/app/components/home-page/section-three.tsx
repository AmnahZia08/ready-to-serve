import Image from "next/image";
import Button from "../button";

const SectionThree = () => {
  return (
    <div className="py-10 px-5 items-center flex gap-8 flex-col lg:flex-row">
      <div className="flex-1 flex justify-start">
        <Image
          src="/assets/section-three.png"
          width={608}
          height={406}
          alt="next generation of delivery"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold">
            Meet the next generation of delivery!
          </p>
          <p className="text-xl">
            In a world where the quest for financial independence often seems
            daunting, "Ready to Serve" emerged as a beacon of hope and
            empowerment.
          </p>
          <Button showRightIcon className="w-40 mt-7">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
