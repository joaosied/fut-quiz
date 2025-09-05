import React from "react";
import BtnDefault from "../components/BtnDefault";
import NavBar from "../components/NavBar";
import TitleMiniGame from "../components/TitleMiniGame";
import DescriptionGame from "../components/DescriptionGame";
import GreenButton from "../components/GreenButton";

export default function MiniGameHome() {
  return (
    <div className="min-h-screen items-center flex flex-col gap-6 font-poppins">
      <NavBar type={"logged"} />
      <div className=" w-11/12 flex flex-col items-center justify-center gap-6">
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

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">TEMA DO DIA:</h2>
          <TitleMiniGame
            text={"OS 10 JOGADORES COM MAIS PARTIDAS NA CHAMPIONS LEAGUE"}
          />
          <DescriptionGame
            text={
              "Seu objetivo é acertar os 10 jogadores de futebol que completam a lista com base no título do desafio. Se decidir a dificuldade normal, o jogo revela as nacionalidades dos jogadores logo no início como dica. Mostre que você manja de futebol e complete a lista antes do tempo acabar!"
            }
          />
          <h5 className="font-bold text-sm">Modo Casual/Diário</h5>
        </div>

        <div className=" w-full flex flex-col gap-6">
          <div className="flex flex-col">
            <h6 className="font-extralight text-[0.75rem]">⏱️ Tempo:</h6>
            <div className="flex items-center justify-between">
              <BtnDefault text={"2 min"} />
              <BtnDefault text={"1 min"} />
              <BtnDefault text={"Sem Tempo"} />
            </div>
          </div>
          <div className="flex flex-col w-8/12">
            <h6 className="font-extralight text-[0.75rem]">🎯 Dificuldade:</h6>
            <div className="flex items-center justify-between">
              <BtnDefault text={"Difícil"} />
              <BtnDefault text={"Normal"} />
            </div>
          </div>
          <div className="w-full flex justify-center mb-10">
            <GreenButton text={"Jogar Agora"} />
          </div>
        </div>
      </div>
    </div>
  );
}
