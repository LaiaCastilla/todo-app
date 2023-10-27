import React, {useState} from 'react'
import Button, {SelectButton} from './Button'
import TodoModal from './TodoModal';
import style from "../styles/modules/app.module.scss"

function AppHeader() {
  
  const [modalOpen,setModalOpen]=useState(false);

  return (
    <div className={style.appHeader}>
      {/* I need to put this span with these options for it to work (???) */}
      <span
        onClick={() => setModalOpen(true)}
        onKeyDown={() => setModalOpen(true)}
      >
        <Button
          variant="primary"
          onClick={() => setModalOpen(true)}
          onKeyDown={() => setModalOpen(true)}
        >
          Add Task
        </Button>
      </span>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Pending</option>
        <option value="in progress">In progress</option>
        <option value="completed">Complete</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader