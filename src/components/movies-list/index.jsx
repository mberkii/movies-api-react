import React, {useState, useRef, useEffect} from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

import { useMoviesContext } from '../../contexts'

import Header from '../header'
import GenreSelect from '../genre-select'
import SortControl from '../sort-control'
import MovieTile from '../movie-tile'

const MoviesList = () => {
	const {moviesData, genres, searchMovies} = useMoviesContext()
	const [searchParams, setSearchParams] = useSearchParams()
	const [loadData, setLoadData] = useState(true)

	const location = useLocation()
	const moreRef = useRef(0)
	const movies = moviesData?.data

	const onMoreClick = async (event) => {
		event.preventDefault()

		moreRef.current += moviesData.limit

		await searchMovies({
			offset: moreRef.current
		}, true)
	}

	useEffect(() => {
		if (loadData) {
			const sortedBy = {
				sortBy: searchParams.get('sortBy'),
				searchBy: searchParams.get('searchBy'),
				genre: searchParams.get('genre') !== 'all' && searchParams.get('genre'),
				query: searchParams.get('query'),
				limit: searchParams.get('limit')
			}

			searchMovies(sortedBy)
		}

		if (location.pathname === '/' && !searchParams.size){
			setSearchParams({sortBy: 'title', limit: 12})
		}
	
    	return () => setLoadData(false)
	}, [searchMovies, searchParams, loadData])

    return (
        <>
			<Header />
			<div className='main'>
				<div className='d-flex space-between mb-2 nav'>
					<GenreSelect genres={genres} />
					<SortControl />
				</div>
				<p className="text-left mb-2"><b>{moviesData?.totalAmount}</b> movies found</p>
				<div className="d-flex movies-grid">
					{movies?.map((movie) =>
						<MovieTile key={movie.id} details={movie} />
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
