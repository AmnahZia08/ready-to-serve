"use client";

import { ButtonType } from "@/types";
import {
  Button as ButtonFB,
  ButtonProps,
  CustomFlowbiteTheme,
} from "flowbite-react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = ButtonProps & {
  variant?: ButtonType;
  textClassnames?: string;
  showRightIcon?: boolean;
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
  textClassnames = "",
  showRightIcon = false,
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
      <div className={`text-sm ${textClassnames}`}>{props.children}</div>
      {showRightIcon ? <BsArrowRight className="self-center ml-3"/> : null}
    </ButtonFB>
  );
};

export default Button;
