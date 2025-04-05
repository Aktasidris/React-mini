import { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment } from './app/counterSlice'
import { store } from './app/store'


function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    
    <div className='flex justify-center mt-10 gap-2'>
  
      <button className='size-6 bg-lime-600 rounded' onClick={() => dispatch(increment())}>+</button>
      <p>
        {count}
      </p>
      <button  className='size-6 bg-rose-600 rounded' onClick={() => dispatch(decrement())}>-</button>
     

    </div>
  )
}

export default App
