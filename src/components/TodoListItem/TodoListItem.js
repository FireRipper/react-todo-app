import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

    onLabelClick = () => { 
        console.log(`Done: ${this.props.label}`) 
    }

    render() {
        const { label, important = false } = this.props

        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <span className='TodoListItem'>
                <span
                    style={spanStyle}
                    className="TodoListItemLabel"
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                >
                    <i className="fa fa-exclamation" />
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                >
                    <i className="fa fa-trash"></i>
                </button>
            </span>
        )
    }
}