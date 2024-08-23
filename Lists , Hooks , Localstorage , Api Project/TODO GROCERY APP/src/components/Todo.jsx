import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

function Todo({task, deleteTodo, editTodo, toggleComplete}) {
  
  return (
    <div className='inputs'>
  <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={()=> toggleComplete(task.id)} >{task.task}</p>
    </div>
    
        <div className='icons'>
        <span><FontAwesomeIcon className="delete-icon" icon={faTrashCan} size="xl" onClick={()=> deleteTodo(task.id)}/></span>&nbsp;&nbsp;&nbsp;
        <span><FontAwesomeIcon className="edit-icon" icon={faPenToSquare} size="xl" onClick={()=> editTodo(task.id)}/></span>
        
        
        
        </div>
    </div>
  )
}


export default Todo