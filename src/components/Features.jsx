import React from "react";
import Card from "./Card";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import DescriptionIcon from "@mui/icons-material/Description";
import { Lock } from "@mui/icons-material";

const Features = () => {
  const infos = [
    { amount: "50+", title: "cities" },
    { amount: "50,000+", title: "transactions" },
    { amount: "3M+", title: "users" },
    { amount: "5", title: "user ratings" },
  ];

  const features = [
    {
      icon: <DescriptionIcon />,
      title: "Contactless Tecnhology",
      desc: " Our new cards come equipped with contactless technlogy, allowing you you make swift, secure payments with a simple tap",
    },
    {
      icon: <ContactEmergencyIcon />,
      title: "Personalization",
      desc: "Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.",
    },
    {
      icon: <Lock />,
      title: "Enhanced Security",
      desc: " Your peace of mind is our priority. Our cards feature advanced security measures to protect your transcations and data.",
    },
  ];
  return (
    <div className="flex flex-col mx-auto">
      {/* Third Section */}
      <div className=" w-full flex items-center lg:px-20 my-8 text-black mx-auto h-1/3 bg-[#48D64C]">
        <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-medium  py-10 px-6 lg:px-0 ">
          Smart investments, secure payments, and expert guidance, all in one
          place.
        </h2>
      </div>

      <div className="text-left my-8">
        <div className="px-8 lg:px-20 mb-8">
          <h2 className="text-3xl   lg:text-5xl lg:w-[600px] mb-4 capitalize">
            Confidently Shape your financial future
          </h2>
          <p className=" lg:w-[480px] text-sm font-light text-[#BDBDBD]">
            At RAFT, we empower you to confidently shape your financial future.
            Our modern approach simplifies saving and investing, making it
            easier than ever.
          </p>
        </div>
        <div className="my-8 px-8 flex flex-col md:grid grid-cols-2 place-items-center gap-8">
          <div className="py-4 px-8 bg-[#131313] h-[300px] rounded-xl">
            <div className="w-2/3">
              <h1 className="font-semibold">Spend Better</h1>
              <p className="text-xs">
                Set and achieve financial goals with ease, automate your
                savings, and watch your money grow without the stress.
              </p>
            </div>
            <img src="" alt="" />
          </div>
          <div className="py-4 px-8 bg-[#131313] h-[300px] rounded-xl">
            <div className="w-2/3">
              <h1 className="font-semibold">Invest Better</h1>
              <p className="text-xs">
                Set and achieve financial goals with ease, automate your
                savings, and watch your money grow without the stress.
              </p>
            </div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-4 text-center">
          {infos.map((info, idx) => (
            <div className="flex flex-col gap-2" key={idx}>
              <h1 className="text-xl lg:text-4xl font-semibold">{info.amount}</h1>
              <p className="uppercase  lg:text-xs">{info.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full">
        <img className="w-full h-full" src="/assets/featuresimg.jpeg" alt="" />
      </div>

      <div className="flex flex-col text-center items-center justify-center gap-6">
        <div className="grid place-items-center gap-8 mt-10">
          <p className="text-[#2B892E] font-bold">Introducing</p>
          <h1 className=" text-3xl w-full lg:text-6xl lg:w-[600px]">
            Introducing RAFT's Next-Gen Cards.
          </h1>
          <p className="text-xs w-3/4 px-2 text-[#bdbdbd] leading-5 lg:w-[400px]">
            Discover RAFT's latest innovation - our new cars. Elevate your
            banking experience with cutting-edge features, security, and
            unprecedented convinience.
          </p>
          <div>
            <Card />
          </div>
        </div>

        <div className="place-items-center text-left px-4 md:grid my-8 md:grid-cols-3 gap-2">
          {features.map((feature, idx) => (
            <div className="px-4 py-4 md:px-0 lg:w-4/5" key={idx}>
              <div className="flex items-center gap-2 mb-2">
                {feature.icon}
                <h1 className="font-semibold">{feature.title}</h1>
              </div>
              <p className="text-sm text-[#BDBDBD]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
