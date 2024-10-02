import React from 'react'

function Button({bg,text,onClickfx}) {
  return (
    <div onClick={onClickfx} className={`h-fit w-fit ${bg} rounded-full px-2 py-1 `}> {text}</div>
  )
}

export default Button