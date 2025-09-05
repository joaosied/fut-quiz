import { useState } from "react";

export default function BtnDefault({ text }) {
  const [variant, setVariant] = useState(0);

  // Cores diferentes para cada clique
  const variants = [
    "bg-[#787C91] text-white", // primeira cor
    "bg-[#4CAF50] text-white", // segunda cor
    "bg-[#E24646] text-white", // terceira cor
  ];

  const handleClick = () => {
    setVariant((prev) => (prev + 1) % variants.length);
  };
  return (
    <button
      onClick={handleClick}
      className={`w-26 h-10 flex items-center justify-center font-poppins font-bold text-[0.75rem] border border-[#D0D0D0] rounded-md shadow-md/40 transition ${variants[variant]}`}
    >
      {text}
    </button>
  );
}
