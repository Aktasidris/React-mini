import React, { useState } from 'react'
import Todo from './Todo'

export default function ListTodo({listtodo,deleteitem}) {
  return (
    <ul className='flex flex-col min-h-30 max-h-50 overflow-scroll overflow-x-hidden gap-1 '>
      {
        listtodo.map((todo)=>(
          <Todo key={todo.id} todo={todo} deleteitem={deleteitem}></Todo>
        ))
      }
    </ul>
  )
}

