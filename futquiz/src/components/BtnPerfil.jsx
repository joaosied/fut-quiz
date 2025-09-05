import React from 'react'

export default function BtnPerfil({children, text,}) {
  return (
    <div  className='text-[0.75rem] flex items-center rounded-xl p-2 border-2 gap-2 border-white/30 font-bold'>
      {children}
      <h1>{text}</h1>
    </div>
  )
}
