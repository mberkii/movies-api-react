import React from 'react'
import { useParams } from 'react-router-dom'

import './style.css'
import { formatRuntime } from '../../utils'
import { useMoviesContext } from '../../contexts'

const MovieDetails = () => {
    const {id} = useParams()
    const {moviesData} = useMoviesContext()

    const details = moviesData?.data?.find((movie) => movie.id === Number(id))
    const releaseYear = details?.release_date?.split('-')[0]
    const runtime = formatRuntime(details?.runtime)

    return (
        <>
            {
                details && (
                    <div className='movie-details'>
                        <img src={details.poster_path} alt={details.title} />
                        <div className='w-70'>
                            <div className='movie-header'>
                                <h1>{details.title}</h1>
                                <p className='movie-rating'>{details.vote_average}</p>
                            </div>
                            <p className='movie-genre'>{details.genres.join(', ')}</p>
                            <p className='movie-stats'>
                                <span>{releaseYear}</span>
                                <span>{runtime}</span>
                            </p>
                            <p>{details.overview}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MovieDetails
