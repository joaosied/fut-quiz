import React from "react";
import NavBar from "../components/NavBar";
import CardGames from "../components/CardGames";
import LineDivisor from "../components/LineDivisor";
import NameRanking from "../components/NameRanking";
import Footer from "../components/Footer";
import TwoLinesText from "../components/TwoLinesText";
import CardQuiz from "../components/CardQuiz";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center  gap-6 font-bebas-neue">
      <NavBar type="logged" />
      {/*  */}
      <div id="main" className="w-full flex flex-col items-center gap-6">
        <div id="helloText" className="w-full flex flex-col px-3 ">
          <h1 className="text-[1.4rem] ">Olá, NylzzTn1 👋</h1>

          <h1 className="text-[1.4rem] ">
            Pronto pra responder alguns desafios? 🤔
          </h1>
        </div>
        {/*  */}
        <div id="playRankedSession" className="w-full flex flex-col px-3 m-2">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl">🏆JOGAR RANQUEADA:</h1>
            <h2 className="text-[0.65rem] underline font-poppins">
              Ir para página da ranqueada
            </h2>
          </div>

          <div className="flex pt-1 gap-6">
            <CardGames text={"Jogar"} />
            <div className="w-50 h-40 bg-[#3A3A5C] border border-[#7A7AC2] shadow-md/40 rounded-lg flex flex-col items-center text-lg">
              <div className="w-11/12 h-7.5 flex items-center justify-between ">
                <h1>Seu Elo Atual:</h1>
                <h2 className="font-poppins text-white/70 text-[0.45rem] underline">
                  Ver Tudo
                </h2>
              </div>
              <LineDivisor />
              <NameRanking textPosition={"1º"} textUser={"jappaaah"} />
              <LineDivisor />
              <NameRanking textPosition={"2º"} textUser={"Kyon"} />
              <LineDivisor />
              <NameRanking textPosition={"3º"} textUser={"Frifras"} />

              <div className="w-full h-10 bg-[#8C7600] rounded-b-lg border border-[#7A7AC2] flex items-center justify-center">
                <div className="w-11/12 h-7.5 flex items-center justify-between">
                  <div className="flex gap-4 text-xl">
                    <h1>15º</h1>
                    <h1>NylzzTn1</h1>
                  </div>
                  <button className=" w-6 h-6 rounded-full bg-amber-50 flex justify-center items-center"></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="playDailySession" className="w-full flex flex-col m-2 px-3">
          <div className=" flex items-center">
            <h1 className="text-2xl">📅 DESAFIOS DIÁRIOS:</h1>
          </div>

          <div className="w-full flex overflow-x-scroll gap-3 pb-2  ">
            <CardGames text={"Top 10"} />
            <CardGames text={"Chuta Aí!"} />
            <CardGames text={"Escale o Time"} />
          </div>
        </div>
        <TwoLinesText text={"Ver Tudo"} underline={true} />
        {/*  */}
        <div id="playFriendSession" className="w-full flex flex-col m-2 px-3">
          <div className=" flex items-center">
            <h1 className="text-2xl">👥 CONVIDAR AMIGOS PARA JOGAR:</h1>
          </div>

          <div className="w-full flex items-center gap-3 ">
            <div className="flex flex-col ">
              <div className="w-40 h-18.5 bg-amber-50 rounded-t-lg shadow-md/40 "></div>
              <div className="w-40 h-6.5 flex items-center justify-center bg-gradient-to-r from-[#7A7AC2] to-[#3A3A5C] rounded-b-lg shadow-md/40 ">
                <h1 className="text-lg">Criar sala privada</h1>
              </div>
            </div>

            <div className="w-20 h-20 rounded-full bg-amber-50"></div>

            <div className="w-20 h-20 rounded-full bg-amber-50"></div>
          </div>
        </div>
        <LineDivisor />
        <div id="playFriendSession" className="w-full flex flex-col m-2 px-3">
          <div className=" flex items-center">
            <h1 className="text-2xl">🧐QUIZES PARA SE DIVERTIR:</h1>
          </div>

          <div className="  flex flex-col items-center gap-3 ">
            <div className=" w-full flex justify-between">
              <CardQuiz text={'Sabe tudo de corinthians?'} />
              <CardQuiz text={'Sabe tudo de barcelona?'} />
            </div>

            <div className=" w-full flex justify-between">
              <CardQuiz text={'Sabe tudo de fortaleza?'} />
              <CardQuiz text={'Sabe tudo de juventude?'} />
            </div>
          </div>
        </div>
        <TwoLinesText text={"Ver Tudo"} underline={true} />
        <LineDivisor />
        <Footer />
      </div>
    </div>
  );
}
