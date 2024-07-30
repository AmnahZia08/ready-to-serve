import Card from "../card.tsx/text-only-card";

const SectionSix = () => {
  return (
    <div className="py-10 px-5 flex gap-8 flex-col md:flex-row">
      <Card
        heading="Big event? We've got you covered!"
        text="Planning a big event? We've got you covered! Explore the catering services that are offered by authentic vendors that offer a delicious selection of homemade dishes made with love and the freshest ingredients."
        btnText="Explore more"
      />
      <Card
        heading="Daily meals delivered to your doorstep!"
        text="Enjoy fresh homemade meals every day with our delivery service. Schedule daily homemade meals from our kitchen, and Ready-To-Serve will deliver them fresh at your chosen time. Savor the comfort of home-cooked food delivered right to your door!"
        btnText="Schedule now"
      />
    </div>
  );
};

export default SectionSix;
