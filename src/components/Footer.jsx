import React from "react";
import Logo from "./Logo";
import QR from "./QR";
import AppleIcon from "@mui/icons-material/Apple";
import Playstore from "./Playstore";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="flex flex-col mt-auto mb-7 ">
      <div className="text-6xl flex items-center border-b border-gray-700 pb-7 mb-7 ">
        <div className="h-[100px] w-[100px]">
          <Logo />
        </div>
        Raft
      </div>
      <div className="mx-4 flex flex-col md:flex-row gap-8 ">
        <div className="lg:w-1/3">
          <div className=" flex gap-4 border border-dashed border-spacing-[100px] rounded-lg h-auto px-4 py-4">
            <div className="">
              <QR />
            </div>
            <div>
              Scan to download App on the Playstore and Appstore.
              <div className="flex gap-1">
                <AppleIcon />
                <Playstore />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
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
      <div className=" mx-4 mt-4 text-xs md:text-sm text-center md:text-left font-light font-sans flex justify-between items-center">
        <div className="flex items-center md:gap-1">
          English(United Kingdom)
          <span>
            <KeyboardArrowDown />
          </span>
        </div>
        <div>Designed by @AdeolaDEV, Developed by Adeolu</div>

        <p>© RAFT Corp, LLC.</p>
      </div>
    </div>
  );
}
