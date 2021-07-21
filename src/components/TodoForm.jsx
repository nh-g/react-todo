import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState("")

    // Handle change
    const handleChange = e => {
        setInput(e.target.value)
    }
    // Handle submit to prevent from reloading page when click to Add button
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })
        setInput('')
    }

    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="input" 
            placeholder="Add a todo" 
            value ={input} 
            name="text"
            onChange={handleChange}
            />
            <button className="button">Add</button>
        </form>

    )
}

