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
    
    const updateTodo = (todoId, newValue) => {
      // Type-in verification
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
        setTodos(prev => prev.map((todo) => (todo.id === todoId? newValue : todo )))
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

    const removeTodo = id => {
        const afterRemoveArray= [...todos].filter(todo => todo.id !== id) 
        setTodos(afterRemoveArray);
    }



    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos ={todos} completeTodo ={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
