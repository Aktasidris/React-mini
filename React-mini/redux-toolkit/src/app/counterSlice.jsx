import { createSlice } from '@reduxjs/toolkit'
const initialState={
    value:0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state)=>{
            state.value +=1
        },decrement:(state)=>{
            state.value -=1
        }

    },

})

export const  {increment,decrement} = counterSlice.actions//initial state içindeki değerler için useSelector ile erişilir
export default counterSlice.reducer//fonlsiyonlar için useDispacth ile erişilir