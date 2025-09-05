import React from "react";

export default function CardInfo({ children, img, imgFlame, text, textTitle }) {
  return (
    <div className="relative w-25 h-25 flex flex-col items-center justify-center text-center bg-[#3A3A5C] border border-[#A6A6A6]/25 rounded-xl shadow-md/40">
      {children}
      <img width={60} src={img} alt="" />
      <img className=" bottom-12 absolute" width={30} src={imgFlame} alt="" />
      <h1 className=" z-10 text-4xl font-bold">{textTitle}</h1>
      <h2 className="text-sm font-semibold"> {text} </h2>
    </div>
  );
}
