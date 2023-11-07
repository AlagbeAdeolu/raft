import { AccountBalance, Paid, Savings } from "@mui/icons-material";
import React from "react";

const CTA = () => {
  const features = [
    {
      icon: <Paid />,
      title: "No minimal balance fees",
      desc: "Say goodbye to minimum balance fees. Your account, your balance - no hidden charges.",
    },
    {
      icon: <Savings />,
      title: "No monthly fees",
      desc: "Bank with us without worrying about monthly fees. Keep more of your money where it belongs - in your account.",
    },
    {
      icon: <AccountBalance />,
      title: "No bank transfer fees",
      desc: "Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.",
    },
  ];
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl lg:text-6xl lg:w-[600px] text-center mb-4 capitalize">
            Elevate your financial Journey with RAFT
          </h1>
          <p className=" text-center w-3/4 lg:w-[450px] text-xs text-[#BDBDBD]">
            RAFT offers a world of financial possibilities. From investment to
            payements , we've got you covered. Join us and unlock your financial
            potential today.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <div className="flex flex-col md:flex-row px-8 gap-4">
            <div className="md:w-2/3">
              <img src="" alt="" />
              <div className="h-[300px] px-4 flex flex-col justify-end bg-[#272829] rounded-xl">
                <h2 className="font-semibold mb-2">Seamless Payments</h2>
                <p className="font-thin text-sm mb-6">
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <img src="" alt="" />
              <div className="h-[300px] px-4 flex flex-col justify-end bg-[#272829] rounded-xl">
                <h2 className="font-semibold mb-2">Smart Investing</h2>
                <p className="font-thin text-sm mb-6">
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse px-8 gap-4">
            <div className="md:w-2/3">
              <img src="" alt="" />
              <div className="h-[300px] px-4 flex flex-col justify-end bg-[#272829] rounded-xl">
                <h2 className="font-semibold mb-2">Financial Planning</h2>
                <p className="font-thin text-sm mb-6">
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <img src="" alt="" />
              <div className="h-[300px] px-4 flex flex-col justify-end bg-[#272829] rounded-xl">
                <h2 className="font-semibold mb-2">Wealth Management</h2>
                <p className="font-thin text-sm mb-6">
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl lg:text-5xl lg:w-[600px] text-center mb-4 capitalize">
            Your financial freedom, your way
          </h1>
          <p className=" text-center font-extralight mb-10 lg:w-[480px] text-xs text-[#BDBDBD]">
            We believe that managing your finances should be effortless and
            cost-effective. That's why we offer you the freedom you deserve
          </p>
          <div>
            <img className="rounded-xl w-[950px]" src="/assets/ff.jpeg" alt="" />
          </div>
        </div>
        <div className="grid my-8 gap-2 lg:grid-cols-3 place-items-center">
          {features.map((feature, idx) => (
            <div className="px-4 md:px-0 md:w-4/5" key={idx}>
              <div className="flex gap-2 mb-4">
                {feature.icon}
                <h1 className="font-semibold">{feature.title}</h1>
              </div>
              <p className="text-sm text-[#BDBDBD]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CTA;
