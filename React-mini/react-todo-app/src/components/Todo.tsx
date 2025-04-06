import React from 'react'
import Checkbox from '@mui/material/Checkbox';
export default function Todo() {
  return (
    <div className='bg-white p-2 me-3 grid grid-cols-6'>
     
      <div className='cols-span-4'>
      <Checkbox />
      <span>text</span>
      </div>
      <div>

      </div>

    </div>
  )
}
