import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
export default function Todo({todos,completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete"
        />
        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit" />
        <div className="icon"></div>
      </div>
    ));
}

