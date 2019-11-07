import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import TodoList from '../TodoList'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import './app.css'

export default class App extends Component {

    // initial state
    state = {
        todoData: [
            { id: 1, label: 'Drink coffee', important: false },
            { id: 2, label: 'Make app', important: true },
            { id: 3, label: 'Have a lunch', important: false },
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            // find index element how we want delete 
            const idx = todoData.findIndex((el) => el.id === id)
          
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    render() {

        return (
            <div className="TodoApp" >
                <AppHeader toDo={1} done={3} />
                <div className="TopPanel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        )
    }
}