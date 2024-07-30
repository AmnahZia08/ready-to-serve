import Card from "../card.tsx";

const CARDS = [
  {
    heading: "Homemade Kitchen",
    text: "Add your homemade kitchen",
    image: "kitchen.png",
  },
  {
    heading: "Grocery Store",
    text: "Add your grocery store",
    image: "grocery.png",
  },
  {
    heading: "Catering Services",
    text: "Add your catering services",
    image: "catering.png",
  },
];

const PartnerWithUs = () => {
  return (
    <div className="flex flex-col justify-center gap-3 py-10 px-5 items-center bg-section-gray">
      <p className="text-center text-4xl font-semibold mb-4">Partner with us</p>
      <div className="flex w-full gap-5 justify-evenly flex-wrap">
        {CARDS.map((card) => (
          <Card
            key={card.text}
            heading={card.heading}
            text={card.text}
            image={`/assets/home-page/${card.image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerWithUs;
