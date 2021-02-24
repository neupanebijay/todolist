import React from 'react'
import '../App.css'

export const Todo = ({index, todo, completeTodo, removeTodo}) => {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
            {todo.name}
                    {/* <button onClick={()=> completeTodo(index)}>Completed</button>
                    <button onClick={()=> completeTodo(index)}>X</button> */}
                    <div>
                    <button onClick={()=>completeTodo(index)} className="button">Completed</button>
                    <button onClick={()=>removeTodo(index)} >X</button>
                    </div>
        </div>
    )
}
