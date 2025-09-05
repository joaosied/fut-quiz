import React from "react";
import NavBar from "../components/NavBar";
import CardGames from "../components/CardGames";

export default function DailyGames() {
  return (
    <div className=" w-full min-h-screen flex flex-col gap-6">
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
          jogos diários
        </h1>
      </div>
      <div className="flex flex-col items-center m-2 gap-3">
          <div className="w-full flex overflow-x-scroll gap-3 pb-2">
            <CardGames text={"Top 10"} />
            <CardGames text={"Top 10"} />
            <CardGames text={"Top 10"} />
          </div>
          <div className="w-full flex overflow-x-scroll gap-3 pb-2">
            <CardGames text={"Top 10"} />
            <CardGames text={"Top 10"} />
            <CardGames text={"Top 10"} />
          </div>
          <div className="w-full flex overflow-x-scroll gap-3 pb-2">
            <CardGames text={"Top 10"} />
            <CardGames text={"Top 10"} />
            <CardGames text={"Top 10"} />
          </div>
      </div>
    </div>
  );
}
