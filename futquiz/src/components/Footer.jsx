import React from "react";

export default function Footer() {
  return (
    <footer className="w-10/12 h-auto flex flex-col items-center justify-center gap-2 ">
      <img src="./logoBlue.png" alt="" className="w-14" />
      <h2 className="font-poppins text-[0.6rem] ">
        Plataforma de minijogos de futebol onde você pode testar seus
        conhecimentos, desafiar amigos, subir de elo e ganhar recompensas.
      </h2>
      <h2 className="font-poppins text-[0.6rem] ">
        Este site utiliza imagens de jogadores e clubes apenas para fins
        ilustrativos e de identificação. Não detemos direitos sobre essas
        imagens.
      </h2>
      <h3 className="font-poppins text-[0.75rem]">Email:fafusu@gmail.com</h3>
        <a href=""><p className="font-poppins font-bold text-[0.8rem] underline">[ Termos de uso ] - [ Política de Privacidade ] </p></a>
    </footer>
  );
}
