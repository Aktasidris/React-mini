import React from 'react'
import { useState } from 'react'
import { IoIosAdd } from "react-icons/io";


export default function CreateTodo({addnewtodo}) {
   const [todoitem,setTodoitem]=useState(' ')
   const onClick = () => {
    if (!todoitem.trim()) return;
  
    const itemshema = {
      id: Date.now(),
      content: todoitem,
      done: false,
    };
  
    addnewtodo(itemshema);
    setTodoitem("");
  };
  return (
    <div className='flex gap-1 my-3 w-full border-b-1 border-gray-500 pb-1'>
        <input value={todoitem} type='text' className='w-full text-sm ps-1' placeholder='Write a task' onChange={(e)=>setTodoitem(e.target.value)}/>

        <button className='text-xl hover:text-lime-300 hover:bg-lime-600 rounded-full' onClick={onClick}><IoIosAdd /></button>

    </div>
  )
}
