import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="text-xs flex justify-between border-b border-gray-700 pb-3 items-center">
      <div className="flex items-center text-xl font-semibold">
        <div className="h-[30px] w-[30px] ">
          <Logo />
        </div>
        Raft
      </div>
      <div className="flex gap-10 text-gray-400">
        <p>Solutions</p>
        <p>Learn</p>
        <p>About</p>
      </div>

      <div className="font-semibold flex gap-4">
        <button className="">Login</button>
        <button className="rounded-full py-1 px-3 bg-[#2B892E] ">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
