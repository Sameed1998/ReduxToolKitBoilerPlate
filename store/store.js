import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reducers/CounterReducer";
import NameReducer from "../reducers/NameReducer";

export const store = configureStore({
    reducer:{
        counter:CounterReducer,
        name:NameReducer
    }
})