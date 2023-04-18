import React from 'react'

const Button = ( {title, click, style} ) => {
  return (
    <button style={style} onClick={click}>{title}</button>
  )
}

export default Button