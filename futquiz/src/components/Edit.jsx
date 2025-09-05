import React from "react";
import { MdEdit } from "react-icons/md";

export default function Edit() {
  function handleClick() {
    console.log("Ícone clicado!");
  }

  return (
    <button style={{cursor:"pointer"}} onClick={handleClick}>
      <MdEdit />
    </button>
  );
}
