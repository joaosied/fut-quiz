import React from "react";

export default function PositionRanking({ position, name, points, bgColor, you }) {
  return (
    <div
      className="flex justify-center"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="w-10/12 h-16 flex border-0 border-b border-b-[#5B5B5B] items-center">
        <div className="w-2/12 font-bold text-2xl ">
          <p>{position}º</p>
        </div>
        <div className="w-8/12 flex items-center gap-4 text-2xl">
          <div className="w-10 h-10 rounded-full border border-[#A6A6A6] bg-[#4D4C31]"></div>
          <h2>{name}</h2>
        </div>
        <div>
            {you}
        </div>
        <div className="w-2/12 text-end text-2xl">{points}</div>
      </div>
    </div>
  );
}
