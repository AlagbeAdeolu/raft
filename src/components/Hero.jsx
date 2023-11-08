import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  const images = [
    { src: "/assets/forbes.jpg" },
    { src: "/assets/CNBC.jpg" },
    { src: "/assets/bloomberg.jpg" },
    { src: "/assets/reuters.jpeg" },
    { src: "/assets/CNN.jpg" },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center gap-6 mt-20 mb-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-[#2c2b2b] flex items-center gap-2 text-lg py-1 rounded-full px-5 mb-6">
            Introducing Raft Cards
            <div className="text-xs">
              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl lg:w-[600px] text-center mb-4">
            Building the future of banking.
          </h1>
          <p className=" text-center lg:w-[450px] text-[#BDBDBD]">
            Experience the future of banking with RAFT. We're here to empower
            your financial journey
          </p>
        </div>

        <button className="rounded-full py-2 px-5 bg-[#2B892E] ">
          Get Started
        </button>
      </div>
      <div className=" mb-20">
        <img className="rounded-xl w-[950px]" src="/assets/Hero.jpeg" alt="" />
      </div>
      <div className="flex flex-col w-full md:w-auto overflow-hidden md:overflow-auto gap-6">
        <p className="uppercase text-center font-bold text-[#BDBDBD]">
          Featured and seen in
        </p>
        <div className="flex justify-center w-[600px] gap-6 lg:gap-10 items-center">
          {images.map((image, idx) => (
            <div className="w-full h-full" key={idx}>
              <img
                className="px-5 md:px-0 w-full"
                src={image.src}
                alt={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
