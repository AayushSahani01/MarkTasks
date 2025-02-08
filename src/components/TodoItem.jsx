   import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg , setTodoMsg] = useState(todo.todo)
   // const [updateTodo , setUpdateTodo] = useState( )
   const {updateTodo, deleteTodo, toggleComplete} = useTodo()
   const editTodo = () => {
    updateTodo (todo.id, {...todo,todo: todoMsg})
    setIsTodoEditable(false)
   }

   const toggleCompleted = () =>{
    toggleComplete(todo.id)
   }
  return (
    <div className={`flex border border-black/10 riunded-lg px-3 py-1.5 gap-x-3 shadow-md shadow-white/50 duration-300 text-black ${todo.Completed ? "bg-[#c6e9a7]" :"ed-500"}`}
    > 
    <input type="checkbox" 
     className='cursor-pointer'
     checked={todo.Completed}
     onChange={toggleCompleted}
    />
    <input type="text"
    className={`border outline-none w-full bg-transparent rounded-lg 
    ${isTodoEditable ? "border-black/100 px-2" : "border-transparent"}`}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
     />
     <button className='inline-flex  rounded-lg text-sm justify-center items-center bg-gray-500 hover:bg-gray-400 shrink-0 disabled:opacity-50 text-white'
     onClick={() => {
        if(todo.Completed) return
        if(isTodoEditable) {
            editTodo()
        }else{
            setIsTodoEditable((previous) => !previous)
        }
    }}
     disabled={todo.Completed}
     >
     {isTodoEditable ? "Save" :"Edit" }
      </button>
     
     <button className='inline-flex  rounded-lg text-sm justify-center items-center bg-gray-500 hover:bg-gray-400 shrink-0 disabled:opacity-50 text-white'
     onClick={() => deleteTodo(todo.id)}
     >Delete</button>
    </div>
  )
}

export default TodoItem