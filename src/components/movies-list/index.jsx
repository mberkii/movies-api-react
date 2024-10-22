import React, {useState, useRef, useEffect} from 'react'

import { useMoviesContext } from '../../contexts'

import Header from '../header'
import GenreSelect from '../genre-select'
import SortControl from '../sort-control'
import MovieTile from '../movie-tile'

const MoviesList = () => {
	const {moviesData, genres, searchMovies} = useMoviesContext()
	const [selectedMovie, setSelectedMovie] = useState()
    const [selectedGenre, setSelectedGenre] = useState('all')
	const [sortedBy, setSortedBy] = useState('title')

	const moreRef = useRef(0)
	const movies = moviesData?.data
    const onMovieTileClick = (event, details) => {
        event.preventDefault()
        setSelectedMovie(details)
        window.scrollTo(0, 0)
    }

    const onGenreClick = async (event) => {
		event.preventDefault()

		const genre = event.target.dataset.name
		setSelectedGenre(genre)

		await searchMovies({
			search: genre !== 'all' && genre,
			searchBy: 'genres',
			offset: 0
		})
	}

	const onMoreClick = async (event) => {
		event.preventDefault()

		moreRef.current += moviesData.limit

		await searchMovies({
			offset: moreRef.current
		}, true)
	}

	useEffect(() => {
		searchMovies({sortBy: 'title', limit: 12})
	}, [searchMovies])

    return (
        <>
			<Header movieDetails={selectedMovie} />
			<div className='main'>
				<div className='d-flex space-between mb-2 nav'>
					<GenreSelect genres={genres} selected={selectedGenre} onClick={onGenreClick} />
					<SortControl currentValue={sortedBy} setSortedBy={setSortedBy} />
				</div>
				<p className="text-left mb-2"><b>{moviesData?.totalAmount}</b> movies found</p>
				<div className="d-flex movies-grid">
					{movies?.map((movie) =>
						<MovieTile key={movie.id} details={movie} onClick={onMovieTileClick}/>
					)}
				</div>
				<div className="text-center">
					<a href="/" onClick={onMoreClick}>More</a>
				</div>
			</div>
        </>
    )
}

export default MoviesList
