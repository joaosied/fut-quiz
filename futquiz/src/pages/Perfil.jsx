import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import NavBar from "../components/NavBar";
import ProgressBar from "../components/ProgressBar";
import BtnPerfil from "../components/BtnPerfil";
import CardInfo from "../components/CardInfo";
import { MdEdit } from "react-icons/md";
import LineDivisor from "../components/LineDivisor";
import { MdKeyboardArrowRight } from "react-icons/md";
import CardAward from "../components/CardAward";
import CardStats from "../components/CardStats";
import FriendOn from "../components/FriendOn";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Carregando perfil...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 font-poppins ">
      <NavBar type={"logged"} />
      {/* SessionInfos */}
      <div className="flex flex-col gap-3">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={user.profilePic || "./default-avatar.png"}
            alt="Foto de perfil"
            className="w-25 h-25 bg-amber-50 rounded-full"
          />
          <div className="absolute right-4">
            <BsThreeDotsVertical className="text-white/70 text-xl" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="flex gap-1 items-center">
            <h2 className="font-bold text-2xl">{user.username}</h2>
            <img src="./br.png" alt="" className="w-4 h-3" />
          </span>
          <h2 className="text-sm font-semibold text-[#B9B9B9]">
            {user.description}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ProgressBar
            progress={50}
            background={"#3A3A5C"}
            progressColor={"#7A7AC2"}
          />
          <h2 className="text-[0.65rem] font-semibold">
            LVL {user.level || 1}
          </h2>
        </div>
        <div className="flex justify-end">
          <BtnPerfil text={"Editar Perfil"}>
            <MdEdit />
          </BtnPerfil>
        </div>
      </div>
      <div className="w-full flex justify-evenly items-center">
        <CardInfo img={"./videogame.png"} text={"ELO ATUAL"}>
          <h2 className="text-[0.65rem] font-semibold text-[#A6A6A6]">
            FERRO 3
          </h2>
        </CardInfo>
        <CardInfo textTitle={"174º"} text={"Nº RANKING"} />
        <CardInfo
          imgFlame={"./flame.png"}
          textTitle={"16"}
          text={"MAX. WIN STREAK"}
        />
      </div>
      <LineDivisor />
      <div className="w-11/12 flex flex-col items-center gap-3 ">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold">Conquistas</h1>
          <span className="flex items-center text-[0.7rem] text-white/50 font-semibold">
            <h2>15</h2>
            <MdKeyboardArrowRight />
          </span>
        </div>
        <div className="w-full flex justify-between">
          <CardAward background={"#1E1E2F"} />
          <CardAward background={"#1E1E2F"} />
          <CardAward background={"#1E1E2F"} />
          <CardAward background={"#1E1E2F"} />
        </div>
      </div>
      <LineDivisor />
      <div className="w-11/12 flex flex-col items-center gap-3 ">
        <div className="w-full flex items-center justify-start">
          <h1 className="font-bold">Estatísticas</h1>
        </div>
        <div className="w-full flex justify-between">
          <CardStats />
          <CardStats />
          <CardStats />
          <CardStats />
        </div>
      </div>
      <LineDivisor />
      <div className="w-11/12 flex flex-col items-center gap-3 ">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold">Amigos</h1>
          <span className="flex items-center text-[0.7rem] text-white/50 font-semibold">
            <h2>15</h2>
            <MdKeyboardArrowRight />
          </span>
        </div>
        <div className="w-full flex justify-between">
          <FriendOn online={true} />
          <FriendOn />
          <FriendOn />
          <FriendOn />
        </div>
      </div>
      <LineDivisor />
    </div>
  );
}
