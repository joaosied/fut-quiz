import React from "react";
import NavBar from "../components/NavBar";
import BtnRoom from "../components/BtnRoom";
import BtnDefault from "../components/BtnDefault";

export default function ConfigPage() {
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
        configurações
      </h1>

      <div className=" h-96 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <h2>Idioma</h2>
          <BtnRoom activated={true} />
        </div>
        <div className="flex flex-col items-center gap-6">
          <button className="w-35 h-8 rounded-full bg-[#D40000] font-semibold font-poppins text-[0.75rem] shadow-xl/25">
            Encerrar Sessão
          </button>
          <p className="font-bold underline">
            Termos de uso - Politica de Privacidade
          </p>
          <BtnDefault text={"Sobre o jogo"} />
        </div>
      </div>
      <p className=" fixed bottom-0 left-0 text-sm">
        Versão 1.0 Desenvolvido e Idealizado por Polacool
      </p>
    </div>
  );
}
