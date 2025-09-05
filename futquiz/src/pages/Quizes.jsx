import React from "react";
import NavBar from "../components/NavBar";
import CardQuiz from "../components/CardQuiz";

export default function Quizes() {
  return (
    <div className=" w-full min-h-screen flex flex-col gap-6 font-bebas-neue">
      <NavBar type={"logged"} />
      <div className="flex items-center justify-center">
        <h1
          className="text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
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
      <div className="flex flex-col items-center gap-3">
        <div className="w-full flex justify-center gap-3 pb-2">
          <CardQuiz text={"Top 10"} />
          <CardQuiz text={"Top 10"} />
        </div>
        <div className="w-full flex justify-center gap-3 pb-2">
          <CardQuiz text={"Top 10"} />
          <CardQuiz text={"Top 10"} />
        </div>
        <div className="w-full flex justify-center gap-3 pb-2">
          <CardQuiz text={"Top 10"} />
          <CardQuiz text={"Top 10"} />
        </div>
      </div>
    </div>
  );
}
