import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import ListTodo from './components/ListTodo'

function App() {
  const [list, setList] = useState([])
  const [checked,setChecked]=useState(false)

  const onCreateTodo=(newtodo)=>{
    setList([...list,newtodo])

  }
  const onDelete=(id)=>{
    
    const remainarr=list.filter((item)=>
      item.id!==id
    )
    setList(remainarr)
  }
  console.log(list)
  return (
    <div className='flex  justify-center aling-middle w-[300px] shadow-lg  mx-auto mt-20 bg-violet-100'>
      <div className='gap-3  p-4 w-full'>
          <h1>My To-Do List</h1>
          <CreateTodo addnewtodo={onCreateTodo}></CreateTodo>
          <ListTodo listtodo={list} deleteitem={onDelete}></ListTodo>
      </div>
    </div>
  )
}

export default App
