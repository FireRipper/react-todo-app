import React from 'react'
import './TodoList.css'
import TodoListItem from '../TodoListItem'

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        
        const { id, ...itemProps } = item

        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...itemProps }
                onDeleted={() => console.log('test - del')} />
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