import React, {useState} from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

import './style.css'

const MovieTile = ({details}) => {
    const [showMovieActions, setShowMovieActions] = useState(false)
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const releaseYear = details.release_date.split('-')[0]

    const onMovieActionsToggleClick = () => setShowMovieActions(!showMovieActions)

    return (
        <div className='movie-tile'>
            <Link
                to={`/${details.id}?searchBy=genres&genre=${searchParams.get('genre')}&sortBy=${searchParams.get('sortBy')}`}
                state={{previousLocation: location}}
            >
                <img src={details.poster_path} alt={details.title} />
                <div className='d-flex space-between movie-title'>
                    <h3>{details.title}</h3>
                    <span className='movie-year'>{releaseYear}</span>
                </div>
                <p className="movie-genres">{details.genres.join(', ')}</p>
            </Link>

            <button className='movie-actions-toggle' onClick={onMovieActionsToggleClick}></button>
            {showMovieActions && (
                <div className='movie-actions'>
                    <Link to={`/${details.id}/edit`} state={{previousLocation: location}}>Edit</Link>
                    <Link to={`/${details.id}/delete`} state={{previousLocation: location}}>Delete</Link>
                    <button className='close-btn' onClick={onMovieActionsToggleClick}>&#10006;</button>
                </div>
            )}
        </div>
    )
}

export default MovieTile;