import React from 'react'
import Button, {SelectButton} from './Button'
import TodoModal from './TodoModal';
import style from "../styles/modules/app.module.scss"

function AppHeader() {
  return (
    <div className={style.appHeader}>
      <Button variant="primary" >Add Task</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </SelectButton>
      <TodoModal/>
    </div>
  );
}

export default AppHeader