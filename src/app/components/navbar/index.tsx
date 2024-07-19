"use client";

import { FlowbiteNavbarTheme, Navbar as NavbarFB } from "flowbite-react";
import Button from "../button";
import Image from "next/image";
import React from "react";
import Container from "../container";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";

const navbarTheme: FlowbiteNavbarTheme = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    icon: "h-6 w-6 shrink-0",
  },
};

const Component = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="fixed z-50 w-screen">
      <Container>
        <NavbarFB fluid rounded theme={navbarTheme}>
          <div className="flex">
            <NavbarFB.Toggle onClick={() => setToggle(!toggle)} />
            <NavbarFB.Brand href="/">
              <Image
                className="ml-5"
                src={"/assets/logo.png"}
                height={40}
                width={60}
                alt="ready-to-serve"
              />
            </NavbarFB.Brand>
          </div>
          <div className="flex md:order-2 items-center">
            <p className="text-nowrap mr-3 text-sm">Log In</p>
            <Button className="text-sm">Sign Up</Button>
          </div>
          <NavbarFB.Collapse></NavbarFB.Collapse>
        </NavbarFB>
        {toggle ? (
          <div className="px-8 w-full md:w-1/2 max-w-[400px] flex flex-col bg-white py-5">
            <Button className="text-sm">Sign Up</Button>
            <p className="text-sm hover:underline my-3 font-poppins font-semibold w-full border-b text-center pb-3">
              Log In
            </p>
            <p className="mt-3 text-sm cursor-pointer hover:font-semibold font-poppins">
              About RTS
            </p>
            <p className="mt-3 text-sm cursor-pointer hover:font-semibold font-poppins">
              Newsroom
            </p>
            <p className="mt-3 text-sm cursor-pointer hover:font-semibold font-poppins">
              Careers
            </p>
            <p className="mt-3 text-sm cursor-pointer hover:font-semibold font-poppins border-b pb-3 mb-1">
              Contact
            </p>
            <p className="mt-3 text-sm cursor-pointer hover:font-semibold font-poppins">
              Become a partner
            </p>
            <p className="mt-3 text-sm cursor-pointer hover:font-semibold font-poppins border-b pb-3 mb-1">
              Sign up to deliver
            </p>
            <div className="flex gap-3 items-center mt-3">
              <div className="px-2 py-4 bg-dark rounded-lg">
                <Image
                  src={"/assets/logo.png"}
                  height={20}
                  width={40}
                  alt="ready-to-serve"
                />
              </div>
              <p className="text-sm font-poppins">
                More delights await in the app.
              </p>
            </div>
            <div className="flex gap-5 mt-3">
              <div className="flex gap-2 items-center bg-gray-100 px-3 py-2 rounded-lg">
                <AiOutlineApple size={18} />
                <p className="text-sm">iPhone</p>
              </div>
              <div className="flex gap-2 items-center bg-gray-100 px-3 py-2 rounded-lg">
                <AiOutlineAndroid size={18} />
                <p className="text-sm">Android</p>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default Component;
