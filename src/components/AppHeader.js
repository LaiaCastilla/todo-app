import React, {useState} from 'react'

import Button, {SelectButton} from './Button'
import TodoModal from './TodoModal';
import style from "../styles/modules/app.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  const [modalOpen,setModalOpen]=useState(false);
  const filterStatus=useSelector(state=>state.todo.filterStatus)
  
  const dispatch=useDispatch();


  const upateFilter=(event)=>{
    
    dispatch(updateFilterStatus(event.target.value))
  }

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
      <SelectButton id="status" value={filterStatus} onChange={upateFilter}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="in progress">In progress</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader