import React from 'react'
import './SearchPanel.css'

const SearchPanel = ({ term, update }) => {

    const changeSeachLabel = (e) => {
        update({
            term: e.target.value.toLowerCase()
        })
    }

    return (
        <input
            type="text"
            placeholder='type to search'
            value={term}
            onChange={changeSeachLabel}
            className="form-control SearchInput" />
    )
}


export default SearchPanel