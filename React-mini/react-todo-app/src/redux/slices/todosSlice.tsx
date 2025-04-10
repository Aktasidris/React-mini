import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TodoInitialState, TodoType} from '../types//todoInitialState'


const initialState: TodoInitialState = {
  todos:[],
  loading:false
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{
      state.todos=[...state.todos,action.payload]

    },removeTodoById:(state:TodoInitialState,action:PayloadAction<number>)=>{
      state.todos=[...state.todos.filter((todo:TodoType)=>todo.id!==action.payload)]

    },updateTodo:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{

      state.todos=[...state.todos.map((todo:TodoType)=>todo.id!==action.payload.id ? todo:action.payload)]
    },setCheckedState: (
      state: TodoInitialState,
      action: PayloadAction<TodoType>
    ) => {
      state.todos = state.todos.map((todo: TodoType) =>
        todo.id === action.payload.id
          ? { ...todo, checked: action.payload.checked }
          : todo
      );
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { createTodo,removeTodoById,updateTodo,setCheckedState} = todosSlice.actions

export default todosSlice.reducer