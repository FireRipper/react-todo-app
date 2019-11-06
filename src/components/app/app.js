import React from 'react'
import AppHeader from '../AppHeader'
import TodoList from '../TodoList'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import './app.css'

const App = () => {

    const todoData = [
        { id: 1, label: 'Drink coffee', important: false },
        { id: 2, label: 'Make app', important: true },
        { id: 3, label: 'Have a lunch', important: false },
    ]

    return (
        <div className="TodoApp">
            <AppHeader toDo={1} done={3} />
            <div className="TopPanel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    )
}

export default App