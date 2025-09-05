import React from "react";
import NavBar from "../components/NavBar";
import TitleMiniGame from "../components/TitleMiniGame";
import AnswerArea from "../components/AnswerArea";
import { MdSend } from "react-icons/md";

export default function Top10GameScreen() {
  return (
    <div className="min-h-screen items-center flex flex-col gap-6 font-poppins">
      <NavBar type={"logged"} />
      <div className=" w-10/12 flex flex-col items-center justify-center gap-6">
        <h1
          className="font-bebas-neue text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
          style={{
            textShadow: `
              0 2px 4px rgba(0,0,0,0.2),
              0 4px 8px rgba(0,0,0,0.2)
            `,
          }}
        >
          Top 10
        </h1>
        <h2 className="text-center">
          <TitleMiniGame
            text={"OS 10 JOGADORES COM MAIS PARTIDAS NA CHAMPIONS LEAGUE"}
          />
        </h2>
        <div className="w-full flex flex-col items-center gap-4">
          <AnswerArea
            number={"1"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"2"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"3"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"4"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"5"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"6"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"7"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"8"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"9"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />

          <AnswerArea
            number={"10"}
            img={"../br.png"}
            name={"Cristiano Ronaldo"}
            points={"150"}
          />
        </div>

        <div className="w-26 h-10 flex items-center justify-center rounded-md shadow-sm border border-[#006CD4] font-orbitron">
          <p className="font-semibold text-2xl">05:00</p>
        </div>
        <div className="mb-5 flex">
          <input
            type="text"
            placeholder="Digite o nome aqui..."
            className="font-semibold w-10/12 h-10 bg-[#B9B9B9] border border-white border-r-0 rounded-l-md text-[#1b1b1b] px-3"
          />
          <button className="w-2/12 bg-green-800 border border-white rounded-r-md flex items-center justify-center text-xl hover:bg-green-700 transition">
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
}
