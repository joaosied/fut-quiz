import React from "react";
import NavBar from "../components/NavBar";
import GreenButton from "../components/GreenButton";
import TwoLinesText from "../components/TwoLinesText";
import { MdSend } from "react-icons/md";

export default function PlayWithFriends() {
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins">
      <NavBar type={"logged"} />

      <h1
        className="mt-6 font-bebas-neue text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
        style={{
          textShadow: `
        0 2px 4px rgba(0,0,0,0.2),
        0 4px 8px rgba(0,0,0,0.2)
      `,
        }}
      >
        jogar com amigos
      </h1>

      <div className="flex-1 w-10/12 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <p>Convide seus amigos para jogar com você em tempo real!</p>
            <GreenButton text={"Criar Sala"} />
          </div>

          <TwoLinesText text={"OU"} />

          <div className="flex flex-col items-center gap-4 text-center">
            <p>Cole o código da sala abaixo e jogue com seus amigos!</p>
            <div className="w-8/12 mb-5 flex shadow-md/40">
              <input
                type="text"
                placeholder="Digite o código..."
                className="w-10/12 h-10 border border-white border-r-0 rounded-l-md text-white px-3"
              />
              <button className="w-2/12 bg-[#379268] border border-white rounded-r-md flex items-center justify-center text-xl hover:bg-green-700 transition">
                <MdSend />
              </button>
            </div>
          </div>
          <a href="/home" className="font-semibold underline">
            Voltar ao menu
          </a>
        </div>
      </div>
    </div>
  );
}
