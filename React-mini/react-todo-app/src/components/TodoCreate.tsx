import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/slices/todosSlice';
import { TodoType } from '../redux/types/todoInitialState';
export default function TodoCreate() {

    const[todoinput,setTodoinput]=useState<string>(' ')
    const dispatch=useDispatch();
    const addTask=()=>{
      if(todoinput.trim().length==0){
        alert('Enter a Todo!')
        return;

      }
      const payload:TodoType={
        id:Math.floor(Math.random()*9999999),
        content:todoinput,
        checked:false
      }
      dispatch(createTodo(payload))
      setTodoinput('')
      

    }
  return (
    <div className='flex flex-row gap-1 h-[60px] pt-3 pe-8'>
        <input value={todoinput} type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTodoinput(e.target.value)} className="w-full outline-none bg-white rounded-sm border-b-4 border-lime-800 px-2" placeholder='Write a todo...' />
        <button onClick={addTask} ><IoMdAddCircleOutline className='hover:scale-110 hover:text-white text-4xl rounded-full '/></button>
    </div>
  )
}
