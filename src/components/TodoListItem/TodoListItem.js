import React from 'react'
import './TodoListItem.css'

//get label, onDeleted by props (onDelete we get in App)
const TodoListItem = ({ label, onDeleted, isImportant, isDone, done, important }) => {
    
    let classNames = 'TodoListItem'

    if (done) {
        classNames += ' done'
    }

    if (important) {
        classNames += ' important'
    }

    return (
        <span className={classNames}>
            <span
                className="TodoListItemLabel"
                onClick={isDone}
            >
                {label}
            </span>
            <button
                type="button"
                onClick={isImportant}
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation" />
            </button>
            <button
                type="button"
                onClick={onDeleted}
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash"></i>
            </button>
        </span>
    )
}

export default TodoListItem