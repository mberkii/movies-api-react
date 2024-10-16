import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const MovieTile = ({details, onClick, movieToEditRef}) => {
    const [showMovieActions, setShowMovieActions] = useState(false)

    const releaseYear = details.releaseDate.split('-')[0]

    const onMovieActionsToggleClick = () => setShowMovieActions(!showMovieActions)
    const onMovieTileClick = (event) => onClick(event, details)
    const onEditClick = () => (movieToEditRef.current = details.id)

    return (
        <div className='movie-tile'>
            <a href="/" onClick={onMovieTileClick}>
                <img src={details.image} alt={details.name} />
                <div className='d-flex space-between movie-title'>
                    <h3>{details.name}</h3>
                    <span className='movie-year'>{releaseYear}</span>
                </div>
                <p className="movie-genres">{details.genres.join(', ')}</p>
            </a>

            <button className='movie-actions-toggle' onClick={onMovieActionsToggleClick}></button>
            {showMovieActions && (
                <div className='movie-actions'>
                    <Link to={`/${details.id}/edit`} onClick={onEditClick}>Edit</Link>
                    <Link to={`/${details.id}/delete`}>Delete</Link>
                    <button className='close-btn' onClick={onMovieActionsToggleClick}>&#10006;</button>
                </div>
            )}
        </div>
    )
}

export default MovieTile;