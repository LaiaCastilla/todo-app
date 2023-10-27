import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';


function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  // copy of todoList ...todoList
  const sortedTodoList= [...todoList];
  // sort to do list
  sortedTodoList.sort((a,b)=>new Date(b.time)-new Date(a.time));
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0 ?
        sortedTodoList.map((todo)=><TodoItem key={todo.id} todo={todo}/>)
      : "no todo found"}
    </div>
  )
}

export default AppContent