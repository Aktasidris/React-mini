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

    }
    
  },
})

// Action creators are generated for each case reducer function
export const { createTodo} = todosSlice.actions

export default todosSlice.reducer