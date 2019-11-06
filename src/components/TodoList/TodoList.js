import React from 'react'
import './TodoList.css'
import TodoListItem from '../TodoListItem'

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        
        const { id, ...itemProps } = item

        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...itemProps } />
            </li>
        )
    })

    return (
        <ul className="list-group TodoList">
            { elements }
        </ul>
    )
}


export default TodoList