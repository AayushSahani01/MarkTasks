import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext' 
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((previous) => [{id:Date.now(),...todo},...previous])
  }
  
  const updateTodo = (id, todo) =>{
    setTodos((previous) => previous.map((t) => (t.id === todo.id ? todo : t)))
  }
  const deleteTodo = (id) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((previous) => previous.map((t) => (t.id === id ?  {...t, completed:!t.completed}: t)))
  }
  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
    setTodos(todos)
    }
  }, 
    []
)
  useEffect(() =>{
   localStorage.setItem("todos", JSON.stringify(todos))
  },
    [todos]
  )

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <TodoForm />
     {
      todos.map((todos) =>(
        <div key={todos.id}>
           <TodoItem todo={todos}/>
        </div>
      ))
     }
     
    </TodoProvider>
  )
}

export default App
