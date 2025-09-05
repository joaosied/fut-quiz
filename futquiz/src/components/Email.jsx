import React from "react";
import { useNavigate } from "react-router-dom";

export default function Email({ children }) {
  const navigate = useNavigate();

  const HandleSignUp = () => {
    navigate("/register-email");
  };

  return (
    <button
      style={{ cursor: "pointer" }}
      className="w-64 h-10 border rounded-full flex items-center justify-center shadow-lg/30"
      onClick={HandleSignUp}
    >
      <h1 className="font-poppins text-sm text-white font-semibold ">
        Continuar com e-mail{" "}
      </h1>
      {children}
    </button>
  );
}
