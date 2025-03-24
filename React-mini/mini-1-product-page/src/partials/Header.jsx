import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='logo p-10 bg-rose-400 mb-3 flex justify-between text-white'>
          <div className='text-white text-xl font-bold hover:underline'>LOGO</div>
          <ul className='flex gap-3 text-md'>
            <li className='hover:underline'>Products</li>
            <li className='hover:underline'>Campain</li>
            <li className='text-gray-700 hover:underline'>Login</li>
          </ul>
        </div>

    </div>
  )
}
