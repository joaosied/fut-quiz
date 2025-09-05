import React from "react";
import NavBar from "../components/NavBar";
import PositionRanking from "../components/PositionRanking";

export default function RankingPartida() {
  return (
    <div className="min-h-screen items-center flex flex-col gap-6 font-bebas-neue">
      <NavBar type={"logged"} />
      <div className=" w-12/12 flex flex-col items-center justify-center gap-6">
        <h1
          className="text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
          style={{
            textShadow: `
                     0 2px 4px rgba(0,0,0,0.2),
                     0 4px 8px rgba(0,0,0,0.2)
                   `,
          }}
        >
          Ranking Partida
        </h1>

        <div className="w-full">
          <PositionRanking
            position={"1"}
            name={"jappaaah"}
            points={"150"}
            bgColor={"#C3A400"}
          />
          <PositionRanking
            position={"2"}
            name={"kyon"}
            points={"150"}
            bgColor={"#AAAAAA"}
          />
          <PositionRanking
            position={"3"}
            name={"frifras"}
            points={"150"}
            bgColor={"#B26801"}
          />

          <PositionRanking
            position={"4"}
            name={"pedroso the death"}
            points={"150"}
          />

          <PositionRanking
            position={"5"}
            name={"nylzztn1"}
            points={"150"}
            bgColor={"#8C7600"}
            you={"you"}
          />
        </div>
      </div>
    </div>
  );
}
