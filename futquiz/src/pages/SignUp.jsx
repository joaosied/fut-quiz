import Google from "../components/Google";
import Email from "../components/Email";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  
  const HandleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-6">

        <img src="./logoBlue.png" alt="" className="w-20" />

        <h1 className="font-bebas-neue text-3xl">
          CADASTRE-SE JÁ!
        </h1>

        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="font-poppins font-semibold">Selecione a forma de registro</h2>
          <Google />
          <Email />
          <a onClick={HandleLogin} className=" font-poppins underline text-[0.7rem] cursor-pointer">
            Já tem uma conta? Entre clicando aqui!
          </a>
        </div>
      </div>
      <div className="w-8/12 text-center text-[#f8f8ff]/50">
        <h2 className=" font-poppins text-[0.5rem]">
          Ao criar uma conta, você concorda com os nossos{" "}
          <a className="underline" href="">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a className="underline" href="">
            Política de Privacidade
          </a>
          .
        </h2>
      </div>
    </div>
  );
}
