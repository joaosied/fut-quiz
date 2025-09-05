import { useState } from "react";
import GreenButton from "../components/GreenButton";
import TwoLinesText from "../components/TwoLinesText";
import Google from "../components/Google";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao fazer login");
        return;
      }

      localStorage.setItem("token", data.token);

      const meResponse = await fetch("http://localhost:4000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      if (meResponse.ok) {
        const userData = await meResponse.json();
        localStorage.setItem("user", JSON.stringify(userData));
      }

      navigate("/perfil");
    } catch (err) {
      console.error("Erro no login:", err);
      alert("Erro no servidor. Tente novamente.");
    }
  };

  const HandleSignUp = () => {
    navigate('/signup')
  }

   const HandleForgotPassword = () => {
    navigate('/forgot-password')
  }
  
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full h-[60vh] flex flex-col items-center justify-center gap-6">
        <img src="./logoBlue.png" alt="Logo" className="w-20" />
        <form
          onSubmit={HandleLogin}
          id="login"
          className="w-8/12 h-auto flex flex-col items-center gap-3"
        >
          {/* Email */}
          <div id="email" className="w-full flex flex-col items-center">
            <div className="w-52.5 flex">
              <h2 className="font-poppins font-semibold text-[0.6rem] pl-1">
                E-mail
              </h2>
            </div>
            <input
              className="bg-[#1E1E2F] w-52.5 h-8 border border-[#3A3A5C] rounded-lg font-poppins text-[0.75rem] pl-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Senha */}
          <div id="senha" className="w-full flex flex-col items-center">
            <div className="w-52.5 flex">
              <h2 className="font-poppins font-semibold text-[0.6rem] pl-1">
                Senha
              </h2>
            </div>
            <input
              className="bg-[#1E1E2F] w-52.5 h-8 border border-[#3A3A5C] rounded-lg font-poppins text-[0.75rem] pl-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="w-52.5 flex">
              <a onClick={HandleForgotPassword} className="font-poppins font-semibold text-[0.55rem] underline text-[#939393] pl-1 cursor-pointer">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <GreenButton text={"Entrar"} />
        </form>
      </div>

      <TwoLinesText text={"Continuar com"} />

      <div className="w-full h-30 flex flex-col items-center justify-center gap-4">
        <Google />
        <a onClick={HandleSignUp} className="font-poppins underline text-[0.7rem] cursor-pointer">
          Não tem conta? Crie uma clicando aqui!
        </a>
      </div>
    </div>
  );
}
