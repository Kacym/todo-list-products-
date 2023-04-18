import React from 'react'

const Input = (props) => {
  const {value, change, placeholder, inputType} = props
  return (
    <input 
      value={value}
      onChange={change}
      type={inputType}
      placeholder={placeholder}
      style={{
            fontSize: "24px",
            width: '80%',
            height: '40px',
            marginTop: "50px",
            backgroundColor: "orange",
            }} 

      
       />
  )
}

export default Input