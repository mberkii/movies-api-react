import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useMoviesContext } from './contexts'

import Dialog from './components/dialog'
import MovieForm from './components/movie-form'
import DeleteNote from './components/delete-note'
import MoviesList from './components/movies-list'

function App() {
	const {updateMovie, addMovie} = useMoviesContext()

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
	}

	const onMovieAddSubmit = (event) => {
		const dataToSend = createMovieData(event)

		addMovie(dataToSend)
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <></>
		},
		{
			path: '/:id',
			children: [
				{
					path: 'edit',
					element: <Dialog title="Edit movie" content={<MovieForm title="Edit movie" onSubmit={onMovieEditSubmit}/>} />
				},
				{
					path: 'delete',
					element: <Dialog title="Delete movie" content={<DeleteNote />} />
				}
			]
		},
		{
			path: '/add',
			element: <Dialog title="Add movie" content={<MovieForm onSubmit={onMovieAddSubmit}/>} />
		}
	])

  	return (
		<div className="App">
			<MoviesList />
			<RouterProvider router={router} />
			<footer><p className='color-red text-center'><b>netflix</b>roulette</p></footer>
		</div>
  	)
}

export default App
