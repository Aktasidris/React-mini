import { configureStore } from '@reduxjs/toolkit'
import todosReducer from'./slices/todosSlice.tsx'
export const store = configureStore({
  reducer: {
    todos:todosReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch