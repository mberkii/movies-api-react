import React from 'react'

import './style.css'

const MovieDetails = ({details}) => {
    const releaseYear = details.releaseDate.split('-')[0]

    return (
        <div className='movie-details'>
            <img src={details.image} alt={details.name} />
            <div className='w-70'>
                <div className='movie-header'>
                    <h1>{details.name}</h1>
                    <p className='movie-rating'>{details.rating}</p>
                </div>
                <p className='movie-genre'>{details.genres.join(', ')}</p>
                <p className='movie-stats'>
                    <span>{releaseYear}</span>
                    <span>{details.duration}</span>
                </p>
                <p>{details.description}</p>
            </div>
        </div>
    )
}

export default MovieDetails
