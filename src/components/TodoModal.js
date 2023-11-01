import React, {useEffect, useState} from 'react'
import style from "../styles/modules/modal.module.scss"
import {MdOutlineClose} from "react-icons/md"
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../slices/todoSlice';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';
import { AnimatePresence,motion } from 'framer-motion';


const dropIn ={
  hidden:{
    opacity:0,
    transform:"scale(0.9)",
  },
  visible:{
    transform:"scale(1)",
    opacity:1,
    transition:{
      duration:0.1,
      type:"spring",
      damping:25,
      stiffness:500,
    },
  },
  exit:{
    transform:"scale(0.9)",
    opacity:0,
  }
};

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
          return;
        }
      }
       setModalOpen(false);
    } 
    }

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={style.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={style.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={style.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{top:40, opacity:0}}
            >
              <MdOutlineClose />
            </motion.div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal