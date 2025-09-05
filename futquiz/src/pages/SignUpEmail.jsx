import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GreenButton from "../components/GreenButton";

export default function SignUpEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("❌ As senhas não conferem!");
      return;
    }
    sessionStorage.setItem("registerData", JSON.stringify({ email, password }));
    navigate("/register-nick");
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-6">
        <img src="./logoBlue.png" alt="" className="w-20" />

        <form
          onSubmit={handleNext}
          id="login"
          className=" w-8/12 h-auto flex flex-col items-center gap-4"
        >
          <div id="email" className="w-full flex flex-col items-center">
            <div className="w-52.5 flex ">
              <h2 className=" font-poppins font-semibold text-[0.6rem] pl-1">
                E-mail
              </h2>
            </div>
            <input
              className="bg-[#1E1E2F] w-52.5 h-8 border border-[#3A3A5C] rounded-lg font-poppins text-[0.75rem] pl-1"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div id="senha" className="w-full flex flex-col items-center">
            <div className="w-52.5 flex ">
              <h2 className=" font-poppins font-semibold text-[0.6rem] pl-1">
                Senha
              </h2>
            </div>
            <input
              className="bg-[#1E1E2F] w-52.5 h-8 border border-[#3A3A5C] rounded-lg font-poppins text-[0.75rem] pl-1"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div id="Confirmsenha" className="w-full flex flex-col items-center">
            <div className="w-52.5 flex ">
              <h2 className=" font-poppins font-semibold text-[0.6rem] pl-1">
                Confirmar Senha
              </h2>
            </div>
            <input
              className="bg-[#1E1E2F] w-52.5 h-8 border border-[#3A3A5C] rounded-lg font-poppins text-[0.75rem] pl-1"
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <GreenButton text={"Continuar"} />
        </form>
      </div>
    </div>
  );
}
