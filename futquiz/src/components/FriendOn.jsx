import React from "react";

export default function FriendOn({ online , name }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-18.5 h-18.5 rounded-full shadow-md/40 border 
        ${
          online
            ? "bg-[#232F1E] border-[#00FF00]"
            : "bg-[#1E1E2F] border-[#A6A6A6]/25"
        }`}
      ></div>
      <h1 className=" text-[0.75rem] font-poppins">{name}</h1>
    </div>
  );
}
