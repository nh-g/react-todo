import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './TodoForm'
export default function Todo({todos,completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    
    if (edit.id) {
        return <TodoForm edit ={edit} onSubmit ={submitUpdate}/>
    }
    
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

