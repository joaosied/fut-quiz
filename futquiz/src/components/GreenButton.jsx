import React from 'react'

export default function GreenButton({ text, onclick }) {
  return (
    <button onClick={onclick} type='submit' style={{cursor: "pointer"}}
      className="w-35 h-8 rounded-full bg-[#379268] font-semibold font-poppins text-[0.75rem] shadow-xl/25"
    >
      {text}
    </button>
  )
}
