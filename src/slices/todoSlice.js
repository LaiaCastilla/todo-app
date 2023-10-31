import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo=()=>{
    const localTodoList=window.localStorage.getItem("todoList");
    if(localTodoList){
        return JSON.parse(localTodoList)
    }else{
        // if we dont have any local to do list, we create the array(empty)
        window.localStorage.setItem("todoList",JSON.stringify([]));
        return [];
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
      // if we dont have any local to do list, we create the array(empty)
      window.localStorage.setItem(
        "todoList",
        JSON.stringify([{ ...action.payload }])
      );
    }},
    deleteTodo:(state,action)=>{
    const todoList=window.localStorage.getItem("todoList");
    if(todoList){
      const todoListArray=JSON.parse(todoList);
      todoListArray.forEach((todo,index) => {
        if(todo.id===action.payload){
          todoListArray.splice(index,1);
        }
      });
      window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
      state.todoList=todoListArray;
    }
  },
  editTodo:(state,action)=>{
    const todoList=window.localStorage.getItem("todoList");
    if(todoList){
      const todoListArray=JSON.parse(todoList);
      todoListArray.forEach((todo,index)=>{
        if(todo.id===action.payload.id){
          todo.title=action.payload.title;
          todo.status=action.payload.status;
        }
      });
      window.localStorage.setItem("todoList",JSON.stringify(todoListArray));
      state.todoList=todoListArray;
    }
  }
  },

});
export const {addTodo,deleteTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;
