import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo=()=>{
    const localTodoList=window.localStorage.getItem("todoList");
    if(localTodoList){
        return JSON.parse(localTodoList)
    }
}

const initialValue={
    todoList:getInitialTodo()
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    // add our todo
    addTodo:(state,action)=>{state.todoList.push(action.payload);
        // we get todolist from localstorage
    const todoList=window.localStorage.getItem("todoList");
    // if we have a to do list we add a new one, we push it and we make an array back in the local storage
    if(todoList){
         const todoListArray=JSON.parse(todoList);
        //  add the newone
        todoListArray.push({...action.payload,});
        window.localStorage.setItem("todoList",JSON.stringify(todoListArray));
    }else{
        // if we do not have a todo list in our local storage, we make it
        window.localStorage.setItem("todoList",JSON.stringify([{...action.payload}]))
    }}
  },
});
export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;
