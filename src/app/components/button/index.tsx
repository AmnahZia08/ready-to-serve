"use client";

import { ButtonType } from "@/types";
import {
  Button as ButtonFB,
  ButtonProps,
  CustomFlowbiteTheme,
} from "flowbite-react";
import React from "react";

type Props = ButtonProps & {
  variant?: ButtonType;
};

const customTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary:
      "bg-dark text-white border-2 border-dark hover:bg-white hover:text-dark",
    secondary:
      "bg-white text-dark border-2 border-dark hover:bg-dark hover:text-white",
  },
};

const Button: React.FC<Props> = ({
  variant = ButtonType.PRIMARY,
  ...props
}) => {
  return (
    <ButtonFB
      theme={customTheme}
      color={
        variant === ButtonType.PRIMARY
          ? ButtonType.PRIMARY
          : ButtonType.SECONDARY
      }
      {...props}
      className={`rounded-md font-poppins w-full ${props.className ?? ""}`}
    >
      {props.children}
    </ButtonFB>
  );
};

export default Button;
