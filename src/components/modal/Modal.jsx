import React, { useState } from 'react'
import Input from '../UI/Input'
import "./Modal.css"
import Button from '../UI/Button'
import { products } from '../utils/helper'
import TodoItem from '../TodoItem/TodoItem'

const Modal = ( {changeState} ) => {

  const [todos, setTodos] = useState([]);

  const [inputText, setInputText] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [inputDate, setInputDate] = useState();

  function addTask(userInput) {
    if(userInput) {
      const newItem = {
        id: Math.floor(Math.random() * 10000),
        title: inputText,
        number: inputNumber,
        date: inputDate,
      }
      setTodos([...todos, newItem])
      products.push(newItem);

      products.map((todo) => {
        return <TodoItem 
          todo={todo}
          key={todo.id}
          date={todo.date}
          number={todo.number}/>
      })
    }

  }

 


  function changeValue (e) {
    setInputText(e.target.value);
  }

  function numberInputValue(e) {
    setInputNumber(e.target.value);
  }

  function dateInputValue(e) {
    setInputDate(e.target.value);
  }

  // console.log(inputNumber, inputText, inputDate);

  return (
    <div className='modal'>
        <div className="box" addTask={addTask}>
        <Input 
          inputType = "text"
          change={changeValue}
          value={inputText}
          placeholder = "Введите значение..."
          />

        <br />

        <Input
          inputType = "number"
          change={numberInputValue}
          value={inputNumber}
          placeholder = "Введите значение..."
          />

        <br />

        <Input 
          inputType = "date"
          change={dateInputValue}
          value={inputDate}
          placeholder = "Введите значение..."
          />

        <br />


        <Button 

          click={changeState} 
          style={{
            backgroundColor: "blue",
            color: "white", 
            marginTop: "40px",
            width: '200px',
            height: "50px",
            fontSize: "24px"
            }} 
            title="Cancel"/>


        <Button 
          click={addTask}
          title="add" 
          style={{
            backgroundColor: "blue",
            color: "white",
            marginLeft: "40px", 
            marginTop: "40px",
            width: '200px',
            height: "50px",
            fontSize: "24px"
          }}/>
        </div>
    </div>
  )
}

export default Modal