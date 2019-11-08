import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import TodoList from '../TodoList'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import InputAdd from '../InputAdd'
import ButtonAdd from '../ButtonAdd'
import './app.css'

export default class App extends Component {

    maxId = 100

    // initial state
    state = {
        todoData: [
            { id: 1, label: 'Drink coffee', important: false },
            { id: 2, label: 'Make app', important: true },
            { id: 3, label: 'Have a lunch', important: false },
        ]
    }

    //Delete item, get id item, and create new array with change data
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

    addItem = (text) => {
        //generate id
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        // add item in array
        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ]

            return {
                todoData: newArr
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

                    //call function deleteItem
                    onDeleted={this.deleteItem}
                />
                <div className='d-flex justify-content-around AddPanel'>
                    <InputAdd />
                    <ButtonAdd onAdd={this.addItem} />
                </div>
            </div>
        )
    }
}