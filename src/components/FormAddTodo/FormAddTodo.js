import React, { Component } from 'react'
import './FormAddTodo.css'

export default class ButtonAdd extends Component {

    state = {
        label: ''
    }

    onLabelChange = e => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmitFormAdd = e => {
        e.preventDefault()

        if (this.state.label.length === 0) {
            console.log('Write something in input')
        } else {
            this.props.onAdd(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitFormAdd} className='d-flex'>
                <input
                    type='text'
                    onChange={this.onLabelChange}
                    placeholder='What needs to be done?'
                    value={this.state.label}
                    className='form-control mr-2' />
                <button className='btn btn-outline-primary'>Add</button>
            </form>
        )
    }
}