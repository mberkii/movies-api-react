import React, {useState} from 'react'

import './style.css'

const MovieTile = ({details, selectMovie}) => {
    const [showMovieActions, setShowMovieActions] = useState(false)
    const onMovieActionsToggleClick = () => setShowMovieActions(!showMovieActions)
    const onMovieTileClick = () => {
        selectMovie(details)
        window.scrollTo(0, 0)
    }

    return (
        <div className='movie-tile'>
            <div onClick={onMovieTileClick}>
                <img src={details.image} />
                <div className='d-flex movie-title'>
                    <h3>{details.name}</h3>
                    <span className='movie-year'>{details.releaseYear}</span>
                </div>
                <p className="movie-genres">{details.genres.join(', ')}</p>
            </div>

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