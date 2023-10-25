import React from 'react'
import style from "../styles/modules/modal.module.scss"
import {MdOutlineClose} from "react-icons/md"
import Button from './Button';

function TodoModal() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.closeButton}>
          <MdOutlineClose />
        </div>
        <form className={style.form}>
          <h1 className={style.formTitle}>Add Task</h1>
          <label htmlFor="title">
            Title
            <input type="text" id="title" />
          </label>
          <label htmlFor="status">
            Status
            <select name="status" id="status">
              <option value="incomplete">Incomplete</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          <div className={style.buttonContainer}>
            <Button type="submit" variant="primary">
              Add Task
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal