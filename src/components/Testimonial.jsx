import React from "react";

const Testimonial = () => {
  const reviews = [
    {
      name: "Rebert Fox",
      role: "Happy RAFT User",
      comment:
        "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future",
    },
    {
      name: "Rebert Fox",
      role: "Happy RAFT User",
      comment:
        "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future",
    },
    {
      name: "Rebert Fox",
      role: "Happy RAFT User",
      comment:
        "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-black py-14 bg-[#48D64C]">
      <div>
        <h1 className="text-4xl">Join over 3 million members</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {reviews.map((review, idx) => <div className="border-l-2 border-black pl-2 w-4/5" key={idx}>
            <h2>{review.comment}</h2>
            <p>{review.name}</p>
            <p>{review.role}</p>
        </div>)}
      </div>
    </div>
  );
};

export default Testimonial;
