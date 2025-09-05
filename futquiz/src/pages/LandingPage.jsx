import React from "react";
import NavBar from "../components/NavBar";
import Google from "../components/Google";
import Email from "../components/Email";
import LineDivisor from "../components/LineDivisor";
import GreenButton from "../components/GreenButton";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
const navigate = useNavigate();

const HandleGuest = () => {
  navigate('/guest')
}

const HandleSignUp = () => {
  navigate('/signup')
}

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar type="landing" />
      <div id="main" className="w-full pt-5 flex flex-col items-center gap-6">
        <div id="entranceText" className="w-11/12 flex flex-col text-center">
          <h1 className="font-bebas-neue text-2xl">
            VOCÊ É CRAQUE NO FUTEBOL? PROVE AGORA!
          </h1>
          <h2 className="font-poppins text-[0.65rem]">
            Desafios diários, ranking com amigos, recompensas e diversão com
            minijogos de futebol.
          </h2>
        </div>

        <div
          id="signUpArea"
          className="w-10/12 h-69.5 bg-gradient-to-b from-[#0074E4] to-[#8C52FF] rounded-lg p-[0.2rem] shadow-lg"
        >
          <div className="w-full h-full flex flex-col justify-around items-center bg-gradient-to-b from-[#1C1F35] to-[#2A1D44] rounded-sm text-center py-3">
            <h1 className="font-poppins text-lg text-[#0074E4] font-bold">
              Cadastre-se para jogar
            </h1>
            <Google />
            <Email />
            <h2 onClick={HandleGuest} className="underline font-poppins text-[0.75rem] cursor-pointer ">
              Continuar como convidado
            </h2>
          </div>
        </div>

        <LineDivisor />

        <div className="w-10/12 h-35 flex flex-col items-center gap-2 justify-center ">
          <img src="./videogame.png" alt="" className="w-16" />
          <h2 className="text-[0.65rem] text-center font-poppins">
            Entre em campo com minijogos de futebol, desafie seus amigos ou
            jogue solo, suba no ranking e desbloqueie recompensas enquanto se
            diverte!
          </h2>
        </div>

        <LineDivisor />

        <div className="w-10/12 h-35 flex flex-col items-center gap-2 justify-center ">
          <img src="./videogame.png" alt="" className="w-16" />
          <h2 className="text-[0.65rem] text-center font-poppins">
            Dispute partidas, ganhe pontos e evolua nos elos. Mostre sua
            habilidade e chegue ao topo do ranking!
          </h2>
        </div>

        <LineDivisor />

        <div className="w-10/12 h-40 flex flex-col items-center gap-2 justify-around ">
          <div className="flex flex-col items-center gap-2">
            <img src="./present.png" alt="" className="w-16" />
            <h2 className="text-[0.65rem] text-center font-poppins">
              Complete desafios, suba de nível e desbloqueie recompensas
              exclusivas!
            </h2>
          </div>
          <GreenButton onclick={HandleSignUp} text={'Jogar Agora'}/>
        </div>
        <LineDivisor/>
        <Footer/>
      </div>
    </div>
  );
}
