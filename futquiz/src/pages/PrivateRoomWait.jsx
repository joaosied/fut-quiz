import React from "react";
import NavBar from "../components/NavBar";
import { MdContentCopy } from "react-icons/md";
import BtnRoom from "../components/BtnRoom";
import GreenButton from "../components/GreenButton";

export default function PrivateRoomWait() {
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins gap-6">
      <NavBar type={"logged"} />

      <h1
        className=" font-bebas-neue text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
        style={{
          textShadow: `
                0 2px 4px rgba(0,0,0,0.2),
                0 4px 8px rgba(0,0,0,0.2)
              `,
        }}
      >
        sala de espera
      </h1>

      <div className="">
        <h2 className="font-bold">CÓDIGO:</h2>
        <span className="flex items-center gap-1">
          <h3>ABC123</h3> <MdContentCopy />{" "}
        </span>
      </div>

      <div className="w-full flex justify-evenly">
        <div className="flex flex-col items-center">
          <h2>MODO DE JOGO</h2>
          <BtnRoom text={"Aleatório"} activated={true} />
        </div>
        <div className="flex flex-col items-center">
          <h2>LIGA/PAÍS</h2>
          <BtnRoom text={"Aleatório"} activated={true} />
        </div>
      </div>

      <h2 className="font-bold text-[#006CD4] text-lg">
        105 JOGADORES ESPERANDO...
      </h2>

      <div>
        <div className="flex flex-col gap-4">
          <GreenButton text={"Iniciar Jogo"} />
          <button className="w-35 h-8 rounded-full bg-[#D40000] font-semibold font-poppins text-[0.75rem] shadow-xl/25">
            Encerrar Sessão
          </button>
        </div>
      </div>
    </div>
  );
}
