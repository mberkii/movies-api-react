import React from 'react'
import { Link } from 'react-router-dom'

import SearchForm from '../search-form'
import MovieDetails from '../movie-details'

import './style.css'

const Header = ({movieDetails}) => {
    return (
        <header className='header'>
            <p className='color-red mb-1'><b>netflix</b>roulette</p>
            <div className="btns-wrap">
                <Link to="/add" className="add-btn">+ Add movie</Link>
            </div>
            {movieDetails
                ? <MovieDetails details={movieDetails} />
                : <div className='movie-search'>
                    <h1>Find your movie</h1>
                    <SearchForm placeholderText="What do you want to watch?"/>
                </div>
            }
        </header>
    )
}

export default Header