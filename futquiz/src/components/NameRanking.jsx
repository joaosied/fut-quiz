import React from "react";
import LineDivisor from "./LineDivisor";

export default function NameRanking( { textPosition, textUser } ) {
  return (
    <>
      <div className="w-11/12 h-7.5 flex items-center justify-between">
        <div className="flex gap-4">
          <h1>{textPosition}</h1>
          <h1>{textUser}</h1>
        </div>
        <button className=" w-5 h-5 rounded-full bg-amber-50 flex justify-center items-center"></button>
      </div>
    </>
  );
}
