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
          <h1 className="text-6xl w-[600px] text-center mb-4 capitalize">
            Elevate your financial Journey with RAFT
          </h1>
          <p className=" text-center w-[450px] text-xs text-[#BDBDBD]">
            RAFT offers a world of financial possibilities. From investment to
            payements , we've got you covered. Join us and unlock your financial
            potential today.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <div className="flex gap-4">
            <div className="w-2/3">
              <img src="" alt="" />
              <div className="h-[300px] px-4 flex flex-col justify-end bg-[#272829] rounded-xl">
                <h2 className="font-semibold mb-2">Seamless Payments</h2>
                <p className="font-thin text-sm mb-6">
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
            <div className="w-1/3">
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
          <div className="flex flex-row-reverse gap-4">
            <div className="w-2/3">
              <img src="" alt="" />
              <div className="h-[300px] px-4 flex flex-col justify-end bg-[#272829] rounded-xl">
                <h2 className="font-semibold mb-2">Financial Planning</h2>
                <p className="font-thin text-sm mb-6">
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
            <div className="w-1/3">
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
          <h1 className="text-5xl w-[600px] text-center mb-4 capitalize">
            Your financial freedom, your way
          </h1>
          <p className=" text-center font-extralight mb-10 w-[480px] text-xs text-[#BDBDBD]">
            We believe that managing your finances should be effortless and
            cost-effective. That's why we offer you the freedom you deserve
          </p>
          <div>
            <img className="rounded-xl" src="/assets/ff.jpeg" alt="" />
          </div>
        </div>
        <div className="grid my-8 gap-2 grid-cols-3 place-items-center">
          {features.map((feature, idx) => (
            <div className="w-4/5" key={idx}>
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
