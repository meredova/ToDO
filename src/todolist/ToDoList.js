import { useState, useEffect } from 'react' 
import './styles/ToDo.css'
import './styles/Project.css'
import NewToDoForm from './NewToDoForm.js'
import ToDo from './ToDo.js'
import Header from './Header.js'

const ToDoList = () => {

    const [todos, setTodos] = useState([])

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const create = (newTodoObj) => {
        setTodos([...todos, newTodoObj])
    }

    const remove = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const update = (id, newTask) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, task: newTask } : todo);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    useEffect(() => setTodos(JSON.parse(localStorage.getItem('todos')) || []), []);

   const todoList = todos.map(todo => (
        <ToDo
        key = {todo.id}
        todo = {todo}
        update = {update}
        remove = {remove}
        toggleComplete = {toggleComplete}
        />
   ))

    return(
        <div className={'ToDoList-container' + (todos.length === 0 ? ' animate' : '')}>
            <Header/>
            {todoList}
            <div className='NewTodo-container'><NewToDoForm create = {create}/></div>
        </div>
    )
}
export default ToDoList