import React from "react";
import GreenButton from "../components/GreenButton";
import NavBar from "../components/NavBar";
import BtnRoom from "../components/BtnRoom";

export default function MakePrivateRoom() {
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins">
      <NavBar type={"logged"} />

      <h1
        className="mt-6 mb-6 font-bebas-neue text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
        style={{
          textShadow: `
            0 2px 4px rgba(0,0,0,0.2),
            0 4px 8px rgba(0,0,0,0.2)
          `,
        }}
      >
        criar sala privada
      </h1>

      <div className="w-full flex flex-col items-center gap-6">
        <h2 className="font-bold">MODO DE JOGO</h2>
        <div className="w-full grid grid-cols-3 place-items-center gap-y-4">
          <BtnRoom text={"Aleatório"} activated={true} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
        </div>

        <h2 className="font-bold">LIGA/PAÍS</h2>
        <div className="w-full grid grid-cols-3 place-items-center gap-y-4">
          <BtnRoom text={"Aleatório"} activated={true} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
          <BtnRoom text={"Aleatório"} />
        </div>

        <GreenButton text={"Criar sala"} />
      </div>
    </div>
  );
}
