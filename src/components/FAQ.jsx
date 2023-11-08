import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      question: "How do I create an account with RAFT?",
      answer:
        'Creating an account with RAFT is a seamless process that can be completed in a matter of minutes. Simply visit the RAFT website or open the RAFT mobile app, click on the "Create Account" button, and provide your personal information, including your name, email address, and phone number. Set a strong password for your account, review and accept the terms and conditions, and click on the "Create Account" button. Verify your email address, and you\'ll be ready to log in to your RAFT account and start utilizing the platform\'s comprehensive financial management features.',
    },
    {
      question: "How does RAFT ensure the security of my financial data?",
      answer:
        "RAFT places the security of your financial data at the forefront of its priorities by implementing a robust security framework that encompasses data encryption, a multi-layered security architecture, regular security audits, employee security awareness training, secure login mechanisms, data loss prevention, vulnerability management, continuous monitoring, compliance with industry security standards, and regular security updates. These measures work in tandem to safeguard your financial information and provide you with confidence when using the RAFT platform.",
    },
    {
      question: "What types of transactions can I perform with RAFT?",
      answer:
        "With RAFT, you can manage your finances seamlessly and securely, performing a wide range of transactions from the comfort of your home or on the go.",
    },
    {
      question: "What benefits does RAFT offer for wealth management?",
      answer:
        "RAFT empowers individuals to take control of their financial future and achieve long-term goals with its comprehensive wealth management solutions. Personalized financial planning, expert investment guidance, convenient access, goal-based planning, tax-efficient strategies, ongoing financial guidance, and a full suite of wealth management services ensure that your financial needs are fully addressed.",
    },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  console.log(selected);

  return (
    <div className="px-4 md:px-0 my-8 flex flex-col gap-4">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">
          Frequently asked questions
        </h1>
      </div>
      <div>
        <div>
          {data.map((item, idx) => (
            <div
              className="border-b border-gray-700 pt-2 pb-3 my-4 font-SP"
              key={idx}
            >
              <div
                onClick={() => toggle(idx)}
                className="cursor-pointer flex gap-2  items-center justify-between"
              >
                <h2>{item.question}</h2>
                <span className="transition-all duration-500 ease-linear">
                  {selected === idx ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </span>
              </div>
              <div className={selected === idx ? "mt-4 mb-2 h-auto max-h-full transition-all duration-500 ease-out" :"max-h-0 overflow-hidden transition-all duration-500 ease-in"}>
                
                <>{item.answer}</>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
