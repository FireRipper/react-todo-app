import React from 'react'
import './ButtonAdd.css'

const ButtonAdd = ({onAdd}) => {

    return (
        <button 
            className='btn btn-outline-primary ButtonAdd'
            onClick={() => onAdd('hello')}>Add </button>
    )
}


export default ButtonAdd