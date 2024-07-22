import { Card as CardFB } from "flowbite-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  heading: string;
  text: string;
};

const cardTheme = {
  root: {
    base: "flex",
    children: "flex h-full flex-col justify-center",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
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

const Card: React.FC<Props> = (props) => {
  return (
    <CardFB
      theme={cardTheme}
      className="min-w-sm"
      renderImage={() => (
        <Image width={400} height={500} src={props.image} alt="image 1" />
      )}
    >
      <h5 className="text-xl tracking-tight mt-4 font-semibold">
        {props.heading}
      </h5>
      <a href="" className="underline">
        {props.text}
      </a>
    </CardFB>
  );
};

export default Card;
