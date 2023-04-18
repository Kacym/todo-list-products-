import React from 'react'

const TodoItem = ( {todo} ) => {
  return (
    <li key={todo.id}>
        <p>{todo}</p>e
        <p>{todo.number}</p>
    </li>
  )
}

export default TodoItem