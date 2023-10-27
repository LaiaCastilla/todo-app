import React from 'react'
import style from "../styles/modules/todoItem.module.scss"
import { getClasses } from '../utils/getClasses'



function TodoItem({todo}) {
  return (
    <div className={style.item}>
      <div className={style.todoDetails}>
        [ ]
        <div className={style.text}>
          <p
            className={getClasses([
              style.todoText,
              todo.status === "complete" && style["todoText--completed"],
              todo.status === "in progress" && style["todoText--inprogress"],
              todo.status === "pending" && style["todoText--pending"],
            ])}
          >
            {todo.title}
          </p>
          <p className={style.time}>{todo.time}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem