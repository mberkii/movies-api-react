import './App.css'

import { Route, Routes, useNavigate } from 'react-router-dom'

import { useMoviesContext } from './contexts'

import Dialog from './components/dialog'
import MovieForm from './components/movie-form'
import DeleteNote from './components/delete-note'
import MoviesList from './components/movies-list'

function App() {
	const {updateMovie, addMovie} = useMoviesContext()

	const navigate = useNavigate()

	const onClose = () => navigate('/')

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
					element={<Dialog title="Edit movie" content={<MovieForm onSubmit={onMovieEditSubmit} />} onClose={onClose} />} 
				/>
				<Route
					path='/:id/delete'
					element={<Dialog title="Delete movie" content={<DeleteNote />} onClose={onClose}/>}
				/>
			</Routes>
			<MoviesList />
			<footer><p className='color-red text-center'><b>netflix</b>roulette</p></footer>
		</div>
  	)
}

export default App
