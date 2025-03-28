import React, { use, useState } from 'react'
import { CiSquareRemove, CiEdit, CiSquareCheck } from "react-icons/ci";


export default function Todo({todo ,deleteitem}) {
  const [checked,setChecked]=useState(false)
  const[editable,setEditable]=useState(false)
  const [editText, setEditText] = useState(todo.content);

  const handleEdit = () => {
    if (editable) {
      todo.content = editText;
    }
    setEditable(!editable);
  };
 return (
    <li key={todo.id} className='flex flex-row aling-middle justify-between w-full border-b-1 border-gray-500 '>
      <div className='flex'>
      {!editable && (
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="w-4 h-4 me-1 cursor-pointer"
          />
        )}
       {editable ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="bg-white mb-1 rounded h-4"
          />
        ) : (
          <p
            className={`text-sm font-medium transition-all ${
              checked ? "line-through text-red-500" : "text-black"
            }`}
          >
            {todo.content}
          </p>
        )}

      </div >
        <div className='flex '>
        {editable ? (
          <CiSquareCheck
            className="hover:text-green-500 cursor-pointer"
            onClick={handleEdit}
          />
        ) : (
          <CiEdit
            className={`hover:text-blue-500 cursor-pointer ${
              checked ? "hidden" : ""
            }`}
            onClick={handleEdit}
          />
        )}
        <CiSquareRemove
         className='hover:text-red-600 ' onClick={()=>deleteitem(todo.id)}/>
        </div>
    </li>
  )
}
