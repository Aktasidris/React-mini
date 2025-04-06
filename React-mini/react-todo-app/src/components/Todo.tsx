import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FaEdit,FaCheck  } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { TodoType } from '../redux/types/todoInitialState';


export default function Todo({todo}:TodoType) {
  
  const[edit,setEdit]=useState(false)
  return (
    <div className='border-b-2 p-2 me-3 grid grid-cols-6 items-center'>
      <div className='col-span-5 '>
      <Checkbox />
      <span>{todo.content}</span>
      </div >
      
      <div className='flex flex-row w-full text-right gap-1 text-2xl ps-9'>
        {
          edit?(<FaCheck className='hover:scale-115 hover:text-blue-600' onClick={()=>setEdit(!edit)}/>):(<FaEdit className='hover:scale-115' onClick={()=>setEdit(!edit)}/>)
        }
        <FaTrashCan className='hover:scale-115 hover:text-rose-600' />
        
      </div>

    </div>
  )
}
