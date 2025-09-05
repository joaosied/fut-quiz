import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GreenButton from "../components/GreenButton";
import Edit from "../components/Edit";

export default function RegisterNick() {
  const navigate = useNavigate();
  const registerData = JSON.parse(
    sessionStorage.getItem("registerData") || "{}"
  );

  const [username, setUsername] = useState("");
  const [description] = useState("Jogador iniciante do FutQuiz ⚽");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("handleRegister disparado!");

    // Junta os dados da etapa 1 com os da etapa 2
    const finalData = {
      ...registerData,
      username,
      description,
    };

    console.log("finalData:", finalData); // <--- verifica os dados que serão enviados

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();
      console.log("Resposta do backend:", data);

      if (response.ok) {
        alert("✅ Usuário registrado com sucesso!");
        sessionStorage.removeItem("registerData");
        navigate("/login");
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Erro:", err);
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center">
      <form
        onSubmit={handleRegister}
        className="w-full h-[80vh] flex flex-col items-center justify-center gap-4"
      >
        <img src="./logoBlue.png" alt="" className="w-20" />
        <div className="w-8/12 flex flex-col gap-8 items-center">
          <div className="w-20 h-20 rounded-full bg-purple-300 flex items-end justify-end">
            <Edit />
          </div>
          <div className="w-full h-30 flex flex-col items-center">
            <div
              id="nicknameSession"
              className="w-full flex flex-col items-center gap-8"
            >
              <div className="w-full flex flex-col items-center">
                <div className="w-52.5 flex ">
                  <h2 className=" font-poppins font-semibold text-[0.6rem] pl-1">
                    Nickname
                  </h2>
                </div>
                <div>
                  <input
                    className="bg-[#1E1E2F] w-52.5 h-8 border border-[#3A3A5C] rounded-lg font-poppins text-[0.75rem] pl-1"
                    type="text"
                    name="nickname"
                    id="nickname"
                    placeholder="Digite seu nome no jogo..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <GreenButton text={"Continuar"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
