import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

    // initial state
    state = {
        done: false,
        important: false
    }

    // change state object done
    onLabelClick = () => { 
        this.setState(({done}) =>{
            return {
                done: !done
            }
        })
    }

    // change state object important
    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    render() {

        //get label, onDeleted by props (onDelete we get in App)
        const { label, onDeleted } = this.props

        //get done, important by state
        const { done, important } = this.state

        let classNames = 'TodoListItem'

        if(done) {
            classNames += ' done'
        }

        if(important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span
                    className="TodoListItemLabel"
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>
                <button
                    type="button"
                    onClick={this.onMarkImportant}
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
}