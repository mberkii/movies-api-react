import { createContext, useContext, useMemo, useState } from 'react'

const MoviesContext = createContext()

const movies = [
    {
        id: '000',
        name: 'Pulp Fiction',
        releaseDate: '1994-01-01',
        image: require('../assets/pulp-fiction.png'),
        genres: ['Action & Adventure'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '001',
        name: 'Bohemian Rhapsody',
        releaseDate: '2018-01-01',
        image: require('../assets/bohemian-rhapsody.png'),
        genres: ['Drama', 'Biography', 'Music'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '002',
        name: 'Kill Bill: Vol. 2',
        releaseDate: '2004-01-01',
        image: require('../assets/kill-bill.png'),
        genres: ['Oscar Winning Movie'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '003',
        name: 'Avengers: Infinity Wars',
        releaseDate: '2018-01-01',
        image: require('../assets/avengers.png'),
        genres: ['Action & Adventure'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '004',
        name: 'Inception',
        releaseDate: '2010-01-01',
        image: require('../assets/inception.png'),
        genres: ['Action & Adventure'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '005',
        name: 'Reservoir Dogs',
        releaseDate: '1992-01-01',
        image: require('../assets/reservoir-dogs.png'),
        genres: ['Oscar Winning Movie'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    }
]

const genres = [
	{id: '000', name: 'all'},
	{id: '001', name: 'documentary'},
	{id: '002', name: 'horror'},
	{id: '003', name: 'crime'},
	{id: '004', name: 'comedy'},
	{id: '005', name: 'romance'},
	{id: '006', name: 'biography'},
	{id: '007', name: 'music'}
]

export const MoviesProvider = ({children}) => {
    const [moviesList, setMoviesList] = useState(movies)
    const handleMovieUpdate = (details) => {
        const movieToUpdate = moviesList.find((movie) => movie.id === details.id)

        if (!movieToUpdate) {
            return
        }

        Object.keys(movieToUpdate).forEach((prop) => (movieToUpdate[prop] = details[prop]))
    }

    const handleMovieDelete = (id) => {
        const filteredMovies = moviesList.filter((movie) => movie.id !== id)

        setMoviesList(filteredMovies)
    }

    const value = useMemo(
        () => ({
            genres,
            movies: moviesList,
            addMovie: (details) => setMoviesList([...moviesList, details]),
            updateMovie: handleMovieUpdate,
            deleteMovie: handleMovieDelete
        }),
        [moviesList]
    )

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMoviesContext = () => useContext(MoviesContext)
