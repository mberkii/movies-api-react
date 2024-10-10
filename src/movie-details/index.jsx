import React from 'react'

import './style.css'

const MovieDetails = ({details}) => {
    return (
        <div className='movie-details'>
            <img src={details.image} />
            <div className='w-70'>
                <div className='movie-header'>
                    <h2>{details.name}</h2>
                    <p className='movie-rating'>{details.rating}</p>
                </div>
                <p className='movie-genre'>{details.genres.join(', ')}</p>
                <p className='movie-stats'>
                    <span>{details.releaseYear}</span>
                    <span>{details.duration}</span>
                </p>
                <p>{details.description}</p>
            </div>
        </div>
    )
}

export default MovieDetails
