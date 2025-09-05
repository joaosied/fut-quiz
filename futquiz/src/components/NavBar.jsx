import React from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavBar({ type }) {
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate("/login");
  };
  const HandleSignUp = () => {
    navigate("/signup");
  };
  return (
    <nav className="w-full h-10 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      {type === "landing" && (
        <>
          <div className="m-2 w-1/4 h-full flex items-center justify-start">
            <img src="../logo.png" alt="" className="w-5 h-5" />
          </div>

          <div className="w-2/4 h-full flex items-center justify-evenly">
            <button
              onClick={HandleLogin}
              className="w-18 h-6 rounded-sm bg-[#3A3A5C] font-poppins text-[0.6rem] cursor-pointer"
            >
              Entrar
            </button>

            <button
              onClick={HandleSignUp}
              className="w-18 h-6 rounded-sm bg-[#1E1E2F] font-poppins text-[0.6rem] cursor-pointer"
            >
              Cadastrar
            </button>
          </div>
        </>
      )}
      {type === "logged" && (
        <>
          <div className="m-2 w-1/4 h-full flex items-center justify-start">
            <img src="../logo.png" alt="" className="w-5 h-5" />
          </div>

          <div className="w-2/4 h-full flex items-center justify-end gap-4 mr-2">
            <button className="">
              <FaBell />
            </button>

            <button className=" w-6 h-6 rounded-full bg-amber-50 flex justify-center items-center"></button>
          </div>
        </>
      )}
    </nav>
  );
}
