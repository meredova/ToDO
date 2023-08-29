import { useState } from "react"
import uuid from 'react-uuid'
import './styles/NewTodoForm.css'

const NewToDoForm = ({create}) => {

    const [newTodo, setNewTodo] = useState('')

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newTodo.trim() === '') {
            return
        }
        const newTodoObj = {id: uuid(), task: newTodo, completed: false}
        create(newTodoObj)
        setNewTodo(' ')
        const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        const updatedTodos = [...storedTodos, newTodoObj];
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    return(
        <form
        className="Form"
        onSubmit={handleSubmit}>
            <input 
            className="Input"
            placeholder="New Todo"
            onChange={handleChange}
            value={newTodo}/>
            <button className="Add-todo">Add todo</button>
        </form>
    )
}

export default NewToDoForm