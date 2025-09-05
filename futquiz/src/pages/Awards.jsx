import React from "react";
import CardAward from "../components/CardAward";
import NavBar from "../components/NavBar";
import { MdLock } from "react-icons/md";

export default function Awards() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 ">
      <NavBar type={"logged"} />
      <div className="flex items-center justify-center">
        <h1
          className="font-bebas-neue text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
          style={{
            textShadow: `
      0 2px 4px rgba(0,0,0,0.2),
      0 4px 8px rgba(0,0,0,0.2)
    `,
          }}
        >
          conquistas
        </h1>
      </div>
      <div className="flex flex-col items-center gap-6 pb-6">
        <div className="w-11/12 flex items-center justify-around">
          <CardAward background={"#2A1E2F"} />
          <CardAward background={"#1E2F23"} />
          <CardAward background={"#2F2E1E"} />
          <CardAward background={"#1E1E2F"} />
        </div>
        <div className="w-11/12 flex items-center justify-around">
          <CardAward background={"#2F1E1E"} />
          <CardAward background={"#2F271E"} />
          <CardAward background={"#1E2D2F"} />
          <CardAward background={"#2F1E2D"} />
        </div>
        <div className="w-11/12 flex items-center justify-around">
          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>

          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>

          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>

          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>
        </div>

        <div className="w-11/12 flex items-center justify-around">
          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>

          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>

          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>

          <CardAward background={"#15151D"}>
            <MdLock />
          </CardAward>
        </div>
      </div>
    </div>
  );
}
