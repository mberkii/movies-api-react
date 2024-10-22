import React from 'react'
import { useMoviesContext } from '../../contexts'
import './style.css'

const SortControl = ({currentValue, setSortedBy}) => {
    const {searchMovies} = useMoviesContext()
    const onChange = (event) => {
        setSortedBy(event.target.value)
        searchMovies({
            sortBy: event.target.value
        })
    }

    return (
        <div className='d-flex space-between sort-control'>
            <p>Sort by</p>
            <select onChange={onChange} defaultValue={currentValue}>
                <option value="release_date">Release date</option>
                <option value="title">Title</option>
            </select>
        </div>
    )
}

export default SortControl
