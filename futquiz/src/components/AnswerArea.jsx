import React from "react";

export default function AnswerArea({ number, img, name, points }) {
  return (
    <div className="w-full h-10 rounded-md shadow-md/40 flex bg-[#3A3A5C] border border-[#787878] font-poppins">
      <div className="w-2/12 border-0 border-r-1 border-[#777777] font-light flex items-center justify-center">
        {number}º
      </div>
      <div className="w-8/12 flex items-center justify-start ml-2 gap-2">
        <img className="w-6" src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="w-2/12 flex items-center justify-center font-light">
        <p>{points}</p>
      </div>
    </div>
  );
}
