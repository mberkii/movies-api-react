import './App.css'

import {useState} from 'react'

import Header from './header'
import GenreSelect from './genre-select'
import SortControl from './sort-control'
import MovieTile from './movie-tile'

const movies = [
    {
        id: '000',
        name: 'Pulp Fiction',
        releaseYear: '1994',
        image: require('./assets/pulp-fiction.png'),
        genres: ['Action & Adventure'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '001',
        name: 'Bohemian Rhapsody',
        releaseYear: '2018',
        image: require('./assets/bohemian-rhapsody.png'),
        genres: ['Drama', 'Biography', 'Music'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '002',
        name: 'Kill Bill: Vol. 2',
        releaseYear: '2004',
        image: require('./assets/kill-bill.png'),
        genres: ['Oscar Winning Movie'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '003',
        name: 'Avengers: Infinity Wars',
        releaseYear: '2018',
        image: require('./assets/avengers.png'),
        genres: ['Action & Adventure'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '004',
        name: 'Inception',
        releaseYear: '2010',
        image: require('./assets/inception.png'),
        genres: ['Action & Adventure'],
		duration: '2hrs',
		description: 'Lorem ipsum..............',
		rating: '9.0'
    },
    {
        id: '005',
        name: 'Reservoir Dogs',
        releaseYear: '1992',
        image: require('./assets/reservoir-dogs.png'),
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
	{id: '005', name: 'romance'}
]

function App() {
    const [selectedGenre, setSelectedGenre] = useState(genres[0].name);
	const [selectedMovie, setSelectedMovie] = useState();
	const [sortedBy, setSortedBy] = useState();

	const getSortedMovies = () => {
		if (sortedBy === 'title') {
			return movies.sort((prev, next) => prev.name.localeCompare(next.name))
		}
	
		return movies.sort((prev, next) => prev.releaseYear - next.releaseYear)
	}

	const moviesList = sortedBy ? getSortedMovies() : movies

	const onSelect = (event) => {
		event.preventDefault()
		setSelectedGenre(event.target.dataset.name)
	}

    const onMovieTileClick = (event, details) => {
        event.preventDefault()
        setSelectedMovie(details)
        window.scrollTo(0, 0)
    }

  	return (
		<div className="App">
			<Header movieDetails={selectedMovie}/>
			<div className='main'>
				<div className='d-flex mb-2 nav'>
					<GenreSelect
						genres={genres}
						selected={selectedGenre}
						onClick={onSelect}
					/>
					<SortControl setSortedBy={setSortedBy} />
				</div>
				<p className="text-left mb-2"><b>{movies?.length}</b> movies found</p>
				<div className="d-flex">
					{moviesList.map((movie) =>
						<MovieTile key={movie.id} details={movie} onClick={onMovieTileClick}/>
					)}
				</div>
			</div>
			<footer><p className='color-red'><b>netflix</b>roulette</p></footer>
		</div>
  	)
}

export default App
