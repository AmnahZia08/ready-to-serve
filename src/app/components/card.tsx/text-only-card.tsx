import { Card } from "flowbite-react";
import Button from "../button";

type Props = {
  heading: string;
  text: string;
  btnText: string;
  containerClass?: string;
};

const TextOnlyCard: React.FC<Props> = ({ containerClass = "", ...props }) => {
  const cardTheme = {
    root: {
      base: "flex",
      children: `flex flex-col justify-center bg-section-gray py-5 px-3 ${containerClass}`,
      horizontal: {
        off: "flex-col",
        on: "flex-col md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  };

  return (
    <Card theme={cardTheme}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-5">
        {props.text}
      </p>
      <Button showRightIcon className="w-48 mt-5">
        {props.btnText}
      </Button>
    </Card>
  );
};

export default TextOnlyCard;
