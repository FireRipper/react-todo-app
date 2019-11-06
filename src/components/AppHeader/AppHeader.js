import React from 'react'
import './AppHeader.css'

const AppHeader = ({toDo, done}) => (
    <div className="AppHeader d-flex">
        <h1>Todo list</h1>
        <h2>{toDo} more to do, {done} done</h2> 
    </div>
)

export default AppHeader