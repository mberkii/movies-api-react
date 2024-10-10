import React, {useState} from 'react'

import './style.css'

const MovieTile = ({details, onClick}) => {
    const [showMovieActions, setShowMovieActions] = useState(false)
    const onMovieActionsToggleClick = () => setShowMovieActions(!showMovieActions)
    const onMovieTileClick = (event) => onClick(event, details)

    return (
        <div className='movie-tile'>
            <a href="/" onClick={onMovieTileClick}>
                <img src={details.image} />
                <div className='d-flex movie-title'>
                    <h3>{details.name}</h3>
                    <span className='movie-year'>{details.releaseYear}</span>
                </div>
                <p className="movie-genres">{details.genres.join(', ')}</p>
            </a>

            <button className='movie-actions-toggle' onClick={onMovieActionsToggleClick}></button>
            {showMovieActions && (
                <div className='movie-actions'>
                    <a href="/">Edit</a>
                    <a href="/">Delete</a>
                    <button className='close-btn' onClick={onMovieActionsToggleClick}>&#10006;</button>
                </div>
            )}
        </div>
    )
}

export default MovieTile;