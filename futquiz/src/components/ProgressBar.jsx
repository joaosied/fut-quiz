import React from "react";

export default function ProgressBar({ progress, background, progressColor }) {
  return (
    <div
      className="relative w-73 rounded-full h-7.5 font-poppins font-semibold overflow-hidden shadow-md "
      style={{ backgroundColor: background }}
    >
      <div
        className=" h-full rounded-full transition-all duration-300 "
        style={{ width: `${progress}%`, backgroundColor: progressColor }}
      ></div>

      <h1 className="absolute inset-0 flex items-center justify-center text-[0.75rem]">{progress}/100</h1>
    </div>
  );
}
