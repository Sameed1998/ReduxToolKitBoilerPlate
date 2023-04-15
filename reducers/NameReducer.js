import { createSlice } from '@reduxjs/toolkit'

const initialState = {
name:'sameed'
}

const NameReducer = createSlice({
  name: 'name',
  initialState,
  reducers: {
    editname:(state,action)=>{
        state.name=action.payload
    }
  }
});

export const {editname} = NameReducer.actions

export default NameReducer.reducer