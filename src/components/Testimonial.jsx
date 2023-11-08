import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useState } from "react";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const prevButton = () => {
    if (currentTestimonial === 0) {
      return;
    }
    setCurrentTestimonial((prev) => prev - 1);
  };
  const nextButton = () => {
    if (currentTestimonial >= testimonials.length - 1) {
      return;
    }
    setCurrentTestimonial((prev) => prev + 1);
  };
 
  const testimonials = [
    {
      avatar: "/assets/pot1.jpg",
      name: "Foluke Adams",
      role: "CEO, Medicare",
      comment:
        "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future",
    },
    {
      avatar: "/assets/pot2.jpg",
      name: "Yinka Williams",
      role: "Banker, UBA",
      comment:
        "I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
    },
    {
      avatar: "/assets/pot3.jpg",
      name: "Aborisade Babafeyijimi",
      role: "Product Designer, META",
      comment:
        "RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
    },
  ];

  const isPrevButtonDisabled = currentTestimonial === 0;
  const isNextButtonDisabled = currentTestimonial === testimonials.length - 1;
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-black py-14 bg-[#48D64C]">
      <div className="md:w-1/2 mb-2">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl">
          Join over 3 million members
        </h1>
      </div>
      <div className="">
        {testimonials.map((testimonial, idx) =>
          currentTestimonial === idx ? (
            <div className="px-4 " key={idx}>
              <blockquote>
                <p className="text-gray-800 h-48 md:h-36 text-xl md:text-2xl">
                  {testimonial.comment}
                </p>
              </blockquote>
              <div className="mt-6 ">
                <img
                  className="w-16 h-16 mx-auto rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="flex items-center justify-center flex-col mt-3">
                  <p className="block font-semibold font-SP  ">
                    {testimonial.name}
                  </p>
                  <p className="block text-gray-600 text-sm mt-0.5 font-SP">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="">
        <div className="mt-6 flex gap-3">
          <div
            className={`p-2 border-gray-400 bg-slate-100 rounded-full border duration-150 ring-offset-2 ring-indigo-600 focus:ring `}
            onClick={prevButton}
          >
            <ArrowBack color={isPrevButtonDisabled ? 'disabled' : ''} />
          </div>
          <div
            className={`p-2 border-gray-400 bg-slate-100 rounded-full border duration-150 ring-offset-2 ring-indigo-600 focus:ring`}
            onClick={nextButton}
          >
            <ArrowForward color={isNextButtonDisabled ? 'disabled' : ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
