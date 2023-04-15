import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            console.log("runned");
            state.value +=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByNumber:(state,action)=>{
            state.value+=action.payload
        }
    }
})

export const {increment,decrement,incrementByNumber} = CounterSlice.actions;
export default CounterSlice.reducer;