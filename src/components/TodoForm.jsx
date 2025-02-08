import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()
    
    const add =(e) =>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo})//, completed: false})
        setTodo("")

    }
  return (
    <form  onSubmit={add} className='flex'>
        <input type="text" 
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
        placeholder='Write Todos...'/>
        <button className='px-3 py-1.5 rounded-r-lg bg-green-600  hover:bg-green-300  h-full text-violet-50' 
        type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm