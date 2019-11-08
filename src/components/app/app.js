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
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make app'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
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

    //Add item, get some text, generate new object with new id and text, put in array (todoData)
    addItem = (text) => {
        //generate id
        //create new object 
        const newItem = this.createTodoItem(text)

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

    togglePropety(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)

        //1. update object
        const oldItem = arr[idx]

        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }
        //2. construct new array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    //
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.togglePropety(todoData, id, 'important')
            }
        })
    }

    //
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.togglePropety(todoData, id, 'done')
            }
        })
    }

    render() {
        const { todoData } = this.state

        //get state, filter him (find element "done" === true and get length)
        // filter - created new array and We don't change our state !!
        const doneCount = todoData.filter((el) => el.done).length

        //get state (element done)  
        const todoCount = todoData.length - doneCount

        return (
            <div className="TodoApp" >
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="TopPanel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={todoData}
                    //call function deleteItem
                    onDeleted={this.deleteItem}
                    isImportant={this.onToggleImportant}
                    isDone={this.onToggleDone}
                />
                <div className='d-flex justify-content-around AddPanel'>
                    <InputAdd />
                    <ButtonAdd onAdd={this.addItem} />
                </div>
            </div>
        )
    }
}