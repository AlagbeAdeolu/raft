import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex flex-col mt-auto ">
      <div className="text-6xl flex items-center border-b border-gray-700 pb-7 mb-7 ">
        <div className="h-[100px] w-[100px]">
          <Logo />
        </div>
        Raft
      </div>
      <div className="flex gap-8 ">
        <div className="w-1/3">
          <div></div>
          <div className="border border-dashed rounded-lg h-20">
            Scan to download App on the Playstore and Appstore.
          </div>
        </div>
        <div className="px-6  justify-between w-2/3 flex gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm">About Us</h3>
            <p className="font-thin text-xs">Our company</p>
            <p className="font-thin text-xs">Careers</p>
            <p className="font-thin text-xs">Press Kits</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm">Legal</h3>
            <p className="font-thin text-xs">Terms of use</p>
            <p className="font-thin text-xs">Privacy Policy</p>
            <p className="font-thin text-xs">About us</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm">Support </h3>
            <p className="font-thin text-xs">Contact us</p>
            <p className="font-thin text-xs">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
