import { configureStore } from "@reduxjs/toolkit";
import { addTodo } from "../slices/todoSlice";

export const store=configureStore({
    reducer:{
        addTodo,
    }
})