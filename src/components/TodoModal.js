import React, {useState} from 'react'
import style from "../styles/modules/modal.module.scss"
import {MdOutlineClose} from "react-icons/md"
import Button from './Button';

function TodoModal({type,modalOpen,setModalOpen}) {
  const [title,setTitle]=useState("")
  const [status, setStatus] = useState("pending")
  function handleSubmit(event){
    event.preventDefault()
    console.log({title,status})
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
            <h1 className={style.formTitle}>Add Task</h1>
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
                Add Task
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