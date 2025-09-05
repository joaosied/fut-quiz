import React from 'react'

export default function TwoLinesText({text, underline}) {
  return (
    <div className={`w-11/12 h-[0.1rem] flex items-center justify-around font-poppins ${underline ? "underline": ""}`}>
        <div className='w-4/12 h-full bg-[#F8F8FF]/24'></div>
        <h2 className='w-3/12 text-center text-[0.65rem] text-[#F8F8FF]/60'>{text}</h2>
        <div className='w-4/12 h-full bg-[#F8F8FF]/24'></div>
    </div>
  )
}
