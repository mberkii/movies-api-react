import './style.css'

import React from 'react'
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'

import Button from '../../common/button'
import Input from '../../common/input'
import { useMoviesContext } from '../../contexts'

const SearchForm = ({placeholderText}) => {
    const [, setSearchParams] = useSearchParams()
    const {searchMovies} = useMoviesContext()

	const onSubmit = (event) => {
		event.preventDefault()

        const params = {
            query: event.currentTarget.search.value,
            searchBy: 'title',
            sortBy: 'title',
            offset: 0
        }

        event.currentTarget.reset()
        searchMovies(params)
        setSearchParams(params)
	}

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <Input attributes={{placeholder: placeholderText}} name="search" />
                <Button text="search" />
            </form>
        </div>
    )
}

SearchForm.propTypes = {
    placeholderText: PropTypes.string
}

export default SearchForm