import React from 'react'

import SearchForm from '../search-form'
import MovieDetails from '../movie-details'

import './style.css'

const Header = ({movieDetails}) => {
    return (
        <div className='header'>
            <p className='color-red mb-1'><b>netflix</b>roulette</p>
            {movieDetails
                ? <MovieDetails details={movieDetails} />
                : <div className='movie-search'>
                    <h2>Find your movie</h2>
                    <SearchForm placeholderText="What do you want to watch?"/>
                </div>
            }
        </div>
    )
}

export default Header