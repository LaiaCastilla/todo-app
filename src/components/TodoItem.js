import React from 'react'
import style from "../styles/modules/todoItem.module.scss"
import { getClasses } from '../utils/getClasses'
import { MdDelete, MdEdit} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';


function TodoItem({todo}) {
  const dispatch=useDispatch();
  const handleDelete=()=>{
    console.log("Deleting")
    dispatch(deleteTodo(todo.id))
  }
    const handleEdit = () => {
      console.log("Editing");
    };
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
      <div className={style.todoActions}>
        <div
          className={style.icon}
          onClick={handleDelete}
          onKeyDown={handleDelete}
          role="button"
          tabIndex={0}
        >
          <MdDelete />
        </div>
        <div
          className={style.icon}
          onClick={handleEdit}
          onKeyDown={handleEdit}
          role="button"
          tabIndex={0}
        >
          <MdEdit />
        </div>
      </div>
    </div>
  );
}

export default TodoItem