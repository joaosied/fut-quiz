import React from "react";

export default function CardQuiz({img, text}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-40 h-25 bg-amber-50 rounded-lg shadow-md/40 ">
        <img src={img} alt="" />
      </div>
      <h1>{text}</h1>
    </div>
  );
}
