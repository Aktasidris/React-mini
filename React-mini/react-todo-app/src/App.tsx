import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"

function App() {


  return (
    <div className="flex flex-col shadow-xl p-3 mt-15 bg-lime-200 text-lime-800 gap-2 rounded w-[600px] m-auto">
      <h1 className="text-center text-3xl font-bold p-1">Todo List</h1>
      <TodoCreate></TodoCreate>
      <TodoList></TodoList>

    </div>
  )
}

export default App
