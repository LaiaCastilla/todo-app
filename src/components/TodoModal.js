import React, {useEffect, useState} from 'react'
import style from "../styles/modules/modal.module.scss"
import {MdOutlineClose} from "react-icons/md"
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../slices/todoSlice';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';




function TodoModal({type,modalOpen,setModalOpen,todo}) {
  const dispatch = useDispatch()
  const [title,setTitle]=useState("")
  const [status, setStatus] = useState("pending")

  useEffect(()=>{
    if (type==="edit" && todo){
      setTitle(todo.title)
      setStatus(todo.status)
    }else{
         setTitle("");
         setStatus("pending");

    }
  }, [type,todo, modalOpen]);
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(title===""){
      toast.error("Please enter a title for your task");
      return
    }
    console.log({title,status})
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title: title,
            status: status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added Successfully");
      }
      if(type==="edit"){
        console.log("editing task")
        if(todo.title !== title || todo.status !== status){
          dispatch(
            editTodo({
              ...todo,
              title,
              status
            })
          )
           toast.success("Task Updated Successfully");
        }else{
          toast.error("No changes made")
        }
      }
       setModalOpen(false);
    } 
    }

  return (
    modalOpen && (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div
            className={style.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form
            className={style.form}
            onSubmit={(event) => handleSubmit(event)}
          >
            <h1 className={style.formTitle}>
              {type === "edit" ? "Edit" : "Add"} Task
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
                <option value="in progress">In progress</option>
              </select>
            </label>
            <div className={style.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === "edit" ? "Edit" : "Add"} Task
              </Button>
              {/* I need to put this span with these options for it to work (???) */}
              <span
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                tabIndex={0}
              >
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal