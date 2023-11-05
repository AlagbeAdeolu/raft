import React from "react";

const CTA = () => {
  const features = [
    {title: 'No minimal balance fees', desc: 'Say goodbye to minimum balance fees. Your account, your balance - no hidden charges.'},
    {title: 'No minimal balance fees', desc: 'Say goodbye to minimum balance fees. Your account, your balance - no hidden charges.'},
    {title: 'No minimal balance fees', desc: 'Say goodbye to minimum balance fees. Your account, your balance - no hidden charges.'},
    {title: 'No minimal balance fees', desc: 'Say goodbye to minimum balance fees. Your account, your balance - no hidden charges.'},
  ]
  return (
    <>
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
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-2/3">
              <img src="" alt="" />
              <div>
                <h2>Seamless Payments</h2>
                <p>
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <img src="" alt="" />
              <div>
                <h2>Seamless Payments</h2>
                <p>
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="w-2/3">
              <img src="" alt="" />
              <div>
                <h2>Seamless Payments</h2>
                <p>
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <img src="" alt="" />
              <div>
                <h2>Seamless Payments</h2>
                <p>
                  Enjoy secure, seamless transactions that make managing your
                  money a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl w-[600px] text-center mb-4 capitalize">
            Your financial freedom, your way
          </h1>
          <p className=" text-center w-[480px] text-xs text-[#BDBDBD]">
            We believe that managing your finances should be effortless and
            cost-effective. That's why we offer you the freedom you deserve
          </p>
        </div>
        <div>
          <img className="rounded-xl" src="/assets/hero.jpeg" alt="" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {features.map((feature,idx) => <div key={idx}>
            <h1 className="font-semibold">{feature.title}</h1>
            <p className="text-sm text-[#BDBDBD]">{feature.desc}</p>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default CTA;
