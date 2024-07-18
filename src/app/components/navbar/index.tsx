"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../button";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  return (
    <>
      <div className="py-5 px-8 flex justify-between">
        <div className="flex items-center">
          <GiHamburgerMenu
            size={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
          <Image
            className="ml-5"
            src={"/assets/logo.png"}
            height={40}
            width={60}
            alt="ready-to-serve"
          />
        </div>
        <div></div>
        <div className="flex items-center">
          <p className="mr-4 text-sm">Log In</p>
          <Button className="w-30">
            <span className="text-sm">Sign Up</span>
          </Button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="px-8 w-full md:w-1/2 max-w-[400px] flex flex-col">
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
          <div className="flex gap-3 items-center">
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
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
