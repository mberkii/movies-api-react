import React from 'react'
import './style.css'

const SortControl = ({setSortedBy}) => {
    const onChange = (event) => setSortedBy(event.target.value)

    return (
        <div className='d-flex space-between sort-control'>
            <p>Sort by</p>
            <select onChange={onChange}>
                <option value="date">Release date</option>
                <option value="title">Title</option>
            </select>
        </div>
    )
}

export default SortControl
