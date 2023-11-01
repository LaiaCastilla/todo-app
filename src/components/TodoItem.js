import React, { useState, useEffect } from 'react'
import style from "../styles/modules/todoItem.module.scss"
import { getClasses } from '../utils/getClasses'
import { MdDelete, MdEdit} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTodo,editTodo } from '../slices/todoSlice';
import { toast } from 'react-hot-toast';
import TodoModal from './TodoModal';
import CheckButton from './CheckButton';


function TodoItem({todo}) {
const dispatch=useDispatch();
const [checked,setChecked]=useState(false)
const [editModalOpen,setEditModalOpen]=useState(false)

useEffect(()=>{
  if(todo.status==="complete"){
    setChecked(true)
  }else{
    setChecked(false)
  }
}, [todo.status])

  const handleDelete=()=>{
    dispatch(deleteTodo(todo.id))
    toast.success("Task deleted succesfully")
  }
    const handleEdit = () => {
      setEditModalOpen(true)
    };

  const handleCheck=()=>{
    // the opposite of the current check
    setChecked(!checked)
    dispatch(editTodo({...todo,
    status:checked?"pending":"complete"}))
    
  };

  return (
    <div>
      <div className={style.item}>
        <div className={style.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck}/>
          <div className={style.texts}>
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
      <TodoModal todo={todo} type="edit"  modalOpen={editModalOpen} setModalOpen={setEditModalOpen}/>
    </div>
  );
}

export default TodoItem