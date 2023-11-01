import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import {AnimatePresence, motion} from 'framer-motion';
import style from "../styles/modules/app.module.scss";

const container= {
  hidden :{opacity:1},
  visible: {
    opacity:1,
    scale:1,
    transition:{
      staggerChildren:0.2,
    },
  },
};

const child={
  hidden:{y:20, opacity:0},
  visible:{
    y:0,
    opacity:1,
  }
};

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  // copy of todoList ...todoList
  const sortedTodoList= [...todoList];
  // sort to do list
  sortedTodoList.sort((a,b)=>new Date(b.time)-new Date(a.time));
  // filter
  const filterStatus=useSelector((state)=>state.todo.filterStatus);
  const filteredTodoList=sortedTodoList.filter((item) => {if(filterStatus==="all")
  {return true;
  }
return item.status === filterStatus;
});
   
  
  return (
    <motion.div className={style.content__wrapper}
    variants={container}
    initial="hidden"
    animate="visible">
      <AnimatePresence>
      {filteredTodoList && filteredTodoList.length > 0 ?
        filteredTodoList.map((todo)=><TodoItem key={todo.id} todo={todo}/>)
      : <motion.p className={style.emptyText} variants={child}>No task found</motion.p>}
      </AnimatePresence>
    </motion.div>
  )
}

export default AppContent