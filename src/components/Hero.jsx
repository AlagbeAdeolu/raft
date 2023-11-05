import React from "react";

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
          <button className="bg-[#2c2b2b] py-1 rounded-full px-5">
            Introducing Raft Cards {">"}
          </button>

          <h1 className="text-6xl w-[600px] text-center mb-4">
            Building the future of banking.
          </h1>
          <p className=" text-center w-[450px] text-[#BDBDBD]">
            Experience the future of banking with RAFT. We're here to empower
            your financial journey
          </p>
        </div>

        <button className="rounded-full py-2 px-5 bg-[#2B892E] ">
          Get Started
        </button>
      </div>
      <div className="mb-20">
        <img className="rounded-xl" src="/assets/Hero.jpeg" alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <p className="uppercase text-center  text-[#BDBDBD]">Featured and seen in</p>
        <div className="flex justify-center gap-10 items-center">
          {images.map((image, idx) => (
            <div key={idx}>
              <img className="px-5 h-[30px] w-full" src={image.src} alt={image.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
