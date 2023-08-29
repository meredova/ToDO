import { useState } from "react"
import pencilIcon from '../assets/icons/edit.svg'
import trashIcon from '../assets/icons/delete.svg'

const ToDo = ({todo, update, remove, toggleComplete}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.task)

    const handleClick = () => {
        setIsEditing(!isEditing)
    }

    const editTask = (event) => {
        setTask(event.target.value)
    }

    const saveNewTodo = (event) => {
        event.preventDefault()
        update(todo.id, task)
        handleClick()
    }

    const handleDelete = () => {
        remove(todo.id)
        localStorage.removeItem('id', todo.id)
    }

    const handleCompleted = () => {
        toggleComplete(todo.id)
    }

    let result;

    if(!isEditing) {
        result = (
            <div className='ToDo'>
                <span onClick={handleCompleted}
                className={todo.completed ?  'Todo-task completed' : 'Todo-task'}
                >{todo.task}</span>
                <div>
                    <img src={pencilIcon} alt="edit"
                    onClick={handleClick}
                    className="Edit"/>
                    <img src={trashIcon} alt="delete"
                    onClick={handleDelete}
                    className="Delete"
                    />
                </div>
            </div>
        )
    } else {
        result = (
            <div className='ToDo'>
                <form onSubmit={saveNewTodo}>
                    <input
                    className='Input'
                    onChange={editTask}
                    value = {task}/>
                    <button className='Save'>save</button>
                </form>
            </div>
        )
    }
    return result
}

export default ToDo