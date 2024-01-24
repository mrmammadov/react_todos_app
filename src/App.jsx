import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

function App() {

  const [todos, setTodos] = useState([])
  const [idCounter, setIdCounter] = useState(0)
  const [todo, setTodo] = useState('')


  function addTodoItem(event) {
    event.preventDefault();

    const item = {
      id: idCounter,
      text: todo,
      completed: false
    }
    setTodos([...todos, item]);
    setIdCounter(idCounter + 1);
    setTodo('');

  }

  function removeTodoItem(event){
    const newTodos = todos.filter(todo => todo !== todos[event])
    setTodos(newTodos);
  }

  function completeTodo(event) {
    console.log(todos[event]);
    todos[event].completed = !todos[event].completed;
    setTodos([...todos]);
  }

  return (
    <>
      <h1>My To-Do List</h1>
      <div className="todo-container">
        <div className="new-todo">
          <form action="" className='todo-form'>
            <input type="text" placeholder="What are you planning?" 
            value={todo ? todo : ''}
            onChange={(event) => {setTodo(event.target.value)}}
            className='todo-input' />
            <button className='add-todo-btn'
            onClick={addTodoItem}><b>Add</b></button>
          </form>
        </div>
        <div className="todo-list">
          <ul className='todos'>
            {todos.map((todo) => {
              return (
                <div className='single-todo'>
                  <FontAwesomeIcon 
                  onClick={() => completeTodo(todo.id)}
                  icon={faCheck} />
                  <li key={todo.id}
                    style={{textDecoration: todo.completed ? 'line-through' : ''}}>
                      {todo.text}</li>
                  <FontAwesomeIcon 
                    onClick={() => {removeTodoItem(todo.id)}}
                  icon={faTrash} />
                </div>
              )
            })}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
