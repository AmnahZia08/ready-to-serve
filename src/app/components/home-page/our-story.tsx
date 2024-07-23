import Button from "../button";

const OurStory = () => {
  return (
    <div className="flex flex-col justify-center gap-3 py-10 px-5 items-center bg-section-gray">
      <p className="text-center text-4xl font-semibold">Our Story</p>
      <p className="text-center text-xl">
        In a world where the quest for financial independence often seems
        daunting, &quot;Ready to Serve&quot; emerged as a beacon of hope and empowerment.
      </p>
      <Button className="w-40 mt-7" showRightIcon>
        Read more
      </Button>
    </div>
  );
};

export default OurStory;
