import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // Type-in verification
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos)
    }



    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos ={todos} completeTodo ={completeTodo}/>
        </div>
    )
}
