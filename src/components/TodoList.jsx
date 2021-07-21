import React, {useState} from 'react'
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
        console.log(todo, ...todos);
    }

    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}
