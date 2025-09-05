import React from "react";

export default function BtnRoom({ text, activated }) {
  return (
    <div
      className={`w-28 h-10 rounded-sm flex items-center justify-center border border-[#676767] ${
        activated ? "bg-[#1E1E2F]" : "bg-[#3A3A5C]"
      }`}
    >
      {text}
    </div>
  );
}
