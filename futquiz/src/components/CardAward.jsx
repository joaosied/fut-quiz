import React from "react";

export default function CardAward({ children, background }) {
  return (
    <div
      style={{ backgroundColor: `${background}` }}
      className="w-18.5 h-25 border border-[#A6A6A6]/25 shadow-md/40 rounded-sm flex items-center justify-center"
    >
      {children}
    </div>
  );
}
