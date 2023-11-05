import React from "react";

const CTA = () => {
  return (
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
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <h2>Seamless Payments</h2>
              <p>Enjoy secure, seamless transactions that make managing your money a breeze.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CTA;
