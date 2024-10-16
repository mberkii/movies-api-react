import './App.css'

import {useState, useRef} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { useMoviesContext } from './contexts'

import Header from './components/header'
import GenreSelect from './components/genre-select'
import SortControl from './components/sort-control'
import MovieTile from './components/movie-tile'
import Dialog from './components/dialog'
import MovieForm from './components/movie-form'
import DeleteNote from './components/delete-note'

function App() {
	const {genres, movies, updateMovie, addMovie} = useMoviesContext()
    const [selectedGenre, setSelectedGenre] = useState(genres[0].name)
	const [selectedMovie, setSelectedMovie] = useState()
	const [sortedBy, setSortedBy] = useState()

	const movieToEditRef = useRef()
	const navigate = useNavigate()

	const getSortedMovies = () => {
		if (sortedBy === 'title') {
			return movies.sort((prev, next) => prev.name.localeCompare(next.name))
		}
	
		return movies.sort((prev, next) => prev.releaseYear - next.releaseYear)
	}

	const getMovieToEditDetails = () => movies.find((movie) => movie.id === movieToEditRef.current)

	const moviesList = sortedBy ? getSortedMovies() : movies

	const onClose = () => navigate('/')
	const onSelect = (event) => {
		event.preventDefault()
		setSelectedGenre(event.target.dataset.name)
	}

    const onMovieTileClick = (event, details) => {
        event.preventDefault()
        setSelectedMovie(details)
        window.scrollTo(0, 0)
    }

	const createMovieData = (event, movieId) => {
		event.preventDefault()

		const form = event.currentTarget

		return {
			id: movieId || window.crypto.randomUUID(),
			name: form.title.value,
			releaseDate: form.date.value,
			image: form.url.value,
			genres: [form.genre.value],
			duration: form.time.value,
			description: form.overview.value,
			rating: form.rating.value
		}
	}

	const onMovieEditSubmit = (event, movieId) => {
		const dataToSend = createMovieData(event, movieId)

		updateMovie(dataToSend)
		onClose()
	}

	const onMovieAddSubmit = (event) => {
		const dataToSend = createMovieData(event)

		addMovie(dataToSend)
		onClose()
	}

  	return (
		<div className="App">
			<Routes>
				<Route
					path='/add'
					element={<Dialog title="Add movie" content={<MovieForm onSubmit={onMovieAddSubmit} />} onClose={onClose}/>}
				/>
				<Route
					path='/:id/edit'
					element={<Dialog title="Edit movie" content={<MovieForm details={getMovieToEditDetails()} onSubmit={onMovieEditSubmit} />} onClose={onClose} />} 
				/>
				<Route
					path='/:id/delete'
					element={<Dialog title="Delete movie" content={<DeleteNote />} onClose={onClose}/>}
				/>
			</Routes>

			<Header movieDetails={selectedMovie}/>
			<div className='main'>
				<div className='d-flex space-between mb-2 nav'>
					<GenreSelect
						genres={genres}
						selected={selectedGenre}
						onClick={onSelect}
					/>
					<SortControl setSortedBy={setSortedBy} />
				</div>
				<p className="text-left mb-2"><b>{movies?.length}</b> movies found</p>
				<div className="d-flex movies-grid">
					{moviesList.map((movie) =>
						<MovieTile key={movie.id} details={movie} onClick={onMovieTileClick} movieToEditRef={movieToEditRef}/>
					)}
				</div>
			</div>
			<footer><p className='color-red'><b>netflix</b>roulette</p></footer>
		</div>
  	)
}

export default App
