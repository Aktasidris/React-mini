import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { TodoType } from '../redux/types/todoInitialState'
import { RootState } from '../redux/store'
export default function TodoList() {
  const {todos}=useSelector((state:RootState)=>state.todos)
  return (
    <div className='min-h-[400px] max-h-[600px] overflow-y-scroll '>
        {
          todos&& todos.map((todo:TodoType)=>(
            <Todo key={todo.id} todo={todo}></Todo>
          ))
        }
    </div>
  )
}
