import React from "react";
import { useNavigate } from "react-router-dom";

export default function Google() {
  const navigate = useNavigate();

  const HandleGoogle = () => {
    navigate("/");
  };

  return (
    <button
      onClick={HandleGoogle}
      className="w-64 h-10 bg-[#E6E6E6] rounded-full flex items-center justify-center pl-2 text-center shadow-lg/30 cursor-pointer"
    >
      <img src="./google.svg" alt="" className="w-6 " />
      <h1 className="font-poppins text-sm text-[#1c1c1c] font-semibold flex-1">
        Continuar com Google
      </h1>
    </button>
  );
}
