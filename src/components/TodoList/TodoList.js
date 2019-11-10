import React from 'react'
import './TodoList.css'
import TodoListItem from '../TodoListItem'

const TodoList = ({ todos, onDeleted, isImportant, isDone }) => {

    const elements = todos.map((item) => {

        // get id by item and any props by item
        const { id, ...itemProps } = item

        return (
            //pass id in key, another props pass in TodoListItem 
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    isImportant={() => isImportant(id)}
                    isDone={() => isDone(id)}
                />
            </li>
        )
    })


    //Generate list with elements
    return (
        <ul className="list-group TodoList">
            { elements }
        </ul>
    )
}


export default TodoList