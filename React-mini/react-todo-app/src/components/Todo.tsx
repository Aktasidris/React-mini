import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FaEdit,FaCheck  } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { TodoType } from '../redux/types/todoInitialState';
import { useDispatch } from 'react-redux';
import { removeTodoById,updateTodo,setCheckedState } from '../redux/slices/todosSlice';
interface TodoProps {
  todo: TodoType;
}

export default function Todo({todo}:TodoProps) {
  const{id,content,checked}=todo
  const dispatch=useDispatch()
  const[edit,setEdit]=useState(false)
  const[newtodo,setNewtodo]=useState(content)
  const [isChecked,setChecked]=useState(checked)
  const removetodo=()=>{
    dispatch(removeTodoById(id))
  }
  const handleupdateTodo=()=>{
    const payload:TodoType={
      id,content:newtodo,checked:isChecked
    }
    dispatch(updateTodo(payload))

    setEdit(!edit)
  }
  const handlechecked=()=>{
    dispatch(setCheckedState({ id, content,checked: !isChecked }));
    setChecked(!isChecked)
    
  }
  return (
    <div className='border-b-2 p-2 me-3 grid grid-cols-6 items-center'>
      <div className="col-span-5">
        <Checkbox onClick={handlechecked} checked={isChecked} />

        {edit ? (
          <input
            type="text"
            className="bg-white px-2 py-1 w-10/12 outline-none"
            value={newtodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewtodo(e.target.value)
            }
          />
        ) : (
          <span
            className={`capitalize transition-all duration-300 truncate ${
              isChecked ? "text-red-500 line-through" : ""
            }`}
          >
            {content}
          </span>
        )}
      </div>
      
      <div className="flex flex-row w-full text-right gap-1 text-2xl ps-9">

        {!isChecked && (
          <>
            {edit ? (
              <FaCheck
                className="hover:scale-115 hover:text-blue-600"
                onClick={handleupdateTodo}
              />
            ) : (
              <FaEdit
                className="hover:scale-115"
                onClick={() => setEdit(true)}
              />
            )}
          </>
        )}

        <FaTrashCan
          className="hover:scale-115 hover:text-rose-600"
          onClick={removetodo}
        />
      </div>

    </div>
  )
}
