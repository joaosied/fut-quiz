import React from "react";

export default function CardGames({ text, onClick, img }) {
  return (
    <div style={{ cursor: "pointer" }} className="flex flex-col">
      <button
        className="w-30 h-30 rounded-t-lg bg-amber-50 shadow-md/40"
        onClick={onClick}
      >
        <img src={img} alt="" />
      </button>
      <button className="w-30 h-10 rounded-b-lg bg-gradient-to-r from-[#7A7AC2] to-[#3A3A5C] shadow-md/40 font-bebas-neue text-2xl">
        {text}
      </button>
    </div>
  );
}
