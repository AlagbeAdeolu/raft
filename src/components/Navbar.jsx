import React, { useState } from "react";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className="container  mx-auto text-xs flex justify-between border-b border-gray-700 my-2 py-3 px-3 items-center">
        <div className="flex items-center text-xl font-semibold">
          <div className="h-[30px] w-[30px] ">
            <Logo />
          </div>
          Raft
        </div>

        <div className="hidden lg:flex gap-10 text-gray-400">
          <p className="cursor-pointer hover:font-bold hover:underline">Solutions</p>
          <p className="cursor-pointer hover:font-bold hover:underline">Learn</p>
          <p className="cursor-pointer hover:font-bold hover:underline">About</p>
        </div>

        <div className="font-semibold hidden lg:flex gap-4">
          <button className="">Login</button>
          <button className="rounded-full font-semibold py-1 px-3 bg-[#2B892E] ">
            Get Started
          </button>
        </div>
        <div className="lg:hidden" onClick={handleClick}>
          {isOpen ? <Close /> : <MenuIcon />}
        </div>
      </div>
      <>
        {isOpen && (
          <>
            <div className="z-10  py-2  cursor-pointer h-screen w-full fixed left-0 top-0 bg-black">
              <div className="border-b border-gray-700 py-3 flex justify-between items-center text-xl font-semibold">
                <div className=" px-3 flex items-center ">
                  <div className="h-[30px] w-[30px] ">
                    <Logo />
                  </div>
                  Raft
                </div>
                <div className="pr-3" onClick={closeMenu}>
                  <Close />
                </div>
              </div>
              <div className=" flex flex-col font-semibold h-full text-center justify-center items-center">
                <div className="flex flex-col text-lg mb-8 gap-3 text-gray-400">
                  <p className="cursor-pointer">Solutions</p>
                  <p className="cursor-pointer">Learn</p>
                  <p className="cursor-pointer">About</p>
                </div>

                <div className="px-6 font-semibold w-full flex flex-col gap-4">
                  <button className="">Login</button>
                  <button className="rounded-full font-semibold py-1 px-3 bg-[#2B892E] ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
};

export default Navbar;
