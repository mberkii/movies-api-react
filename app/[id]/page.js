import { getMovie, formatRuntime } from '../../src/utils'

import '../../src/components/movie-details/style.css'

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/movies')
    const movies = await res.json()

    return movies.data.map((movie) => ({
        id: movie.id.toString(),
    }))
}

const MovieDetails = async ({params}) => {
    const id = (await params)?.id
    const details = await getMovie(id)

    return (
        <>
            {details && (
                <div className='movie-details'>
                    <img src={details.poster_path} alt={details.title} />
                    <div className='w-70'>
                        <div className='movie-header'>
                            <h1>{details.title}</h1>
                            <p className='movie-rating'>{details.vote_average}</p>
                        </div>
                        <p className='movie-genre'>{details.genres.join(', ')}</p>
                        <p className='movie-stats'>
                            <span>{details.release_date.split('-')[0]}</span>
                            <span>{formatRuntime(details.runtime)}</span>
                        </p>
                        <p>{details.overview}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieDetails
