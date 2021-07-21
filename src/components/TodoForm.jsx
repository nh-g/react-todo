import React, {useState} from 'react'

export default function TodoForm() {
    const [input, setInput] = useState("")

    return (
        <form action="" className="form">
            <input 
            type="text" 
            className="input" 
            placeholder="Add a todo" 
            value ={input} 
            name="text"
            />
            <button className="button">Add</button>
        </form>

    )
}

