import React, {useState} from 'react'

import './style.css'

const MovieTile = ({details, onClick}) => {
    const [showMovieActions, setShowMovieActions] = useState(false)

    const releaseYear = details.release_date.split('-')[0]

    const onMovieActionsToggleClick = () => setShowMovieActions(!showMovieActions)
    const onMovieTileClick = (event) => onClick(event, details)

    return (
        <div className='movie-tile'>
            <a href="/" onClick={onMovieTileClick}>
                <img src={details.poster_path} alt={details.title} />
                <div className='d-flex space-between movie-title'>
                    <h3>{details.title}</h3>
                    <span className='movie-year'>{releaseYear}</span>
                </div>
                <p className="movie-genres">{details.genres.join(', ')}</p>
            </a>

            <button className='movie-actions-toggle' onClick={onMovieActionsToggleClick}></button>
            {showMovieActions && (
                <div className='movie-actions'>
                    <a href={`/${details.id}/edit`}>Edit</a>
                    <a href={`/${details.id}/delete`}>Delete</a>
                    <button className='close-btn' onClick={onMovieActionsToggleClick}>&#10006;</button>
                </div>
            )}
        </div>
    )
}

export default MovieTile;