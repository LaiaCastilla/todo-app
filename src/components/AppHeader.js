import React, {useState} from 'react'
import Button, {SelectButton} from './Button'
import TodoModal from './TodoModal';
import style from "../styles/modules/app.module.scss"

function AppHeader() {
  
  const [modalOpen,setModalOpen]=useState(false);

  return (
    <div className={style.appHeader}>
      <Button variant="primary"
      onClick={() => setModalOpen(true)}

      >
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader