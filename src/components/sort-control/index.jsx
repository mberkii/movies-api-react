import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMoviesContext } from '../../contexts'
import './style.css'

const SortControl = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {searchMovies} = useMoviesContext()

    const defaultValue = searchParams.get('sortBy')

    const onChange = (event) => {
        const params = {}
        searchParams.forEach((value, key) => params[key] = value)

        params.sortBy = event.target.value

        setSearchParams(params)
        searchMovies(params)
    }

    return (
        <div className='d-flex align-center space-between sort-control'>
            <p>Sort by</p>
            <select onChange={onChange} defaultValue={defaultValue}>
                <option value="title">Title</option>
                <option value="release_date">Release date</option>
            </select>
        </div>
    )
}

export default SortControl
