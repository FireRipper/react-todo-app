import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import TodoList from '../TodoList'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import FormAddTodo from '../FormAddTodo'
import './app.css'

export default class App extends Component {

    maxId = 100

    // initial state
    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make app'),
            this.createTodoItem('Wash ass'),
            this.createTodoItem('Kill Alexey'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all' //active, done, all
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

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    updateData = (config) => {
        this.setState(config)
    }

    searchTodo(items, term) {

        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().includes(term)
        })
    }


    //get array elements and current filter ( all/active/important/done )
    filterTodo(items, filter) {
        //check filter and return items with filter
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'important':
                return items.filter((item) => item.important && !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }
    }

    render() {
        
        //get data by initial state (elements: todoData, term and filter)
        const { todoData, term, filter } = this.state

        //filter our data if we have some filter and then we can search item or items
        const visibleItems = this.filterTodo(this.searchTodo(todoData, term)
            , filter)

        //get state, filter him (find element "done" === true and get length)
        // filter - created new array so we don't change our state !!
        const doneCount = todoData.filter((el) => el.done).length

        //get state (element done)  
        const todoCount = todoData.length - doneCount

        return (
            <div className="TodoApp" >
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="TopPanel d-flex">
                    <SearchPanel update={this.updateData} />
                    <ItemStatusFilter
                        filter={filter}
                        //function for update state (filter)!!
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList
                    todos={visibleItems}
                    //call function deleteItem
                    onDeleted={this.deleteItem}
                    isImportant={this.onToggleImportant}
                    isDone={this.onToggleDone}
                />

                <div className='AddPanel'>
                    <FormAddTodo onAdd={this.addItem} />
                </div>
            </div>
        )
    }
}
