import Card from './components/Card'
import GenreSelect from './components/GenreSelect'
import SortControl from './components/SortControl'

import { getMoviesData } from '../../src/utils'

const App = async ({searchParams}) => {
	const queries = await searchParams

	const initialQueries = {
		searchBy: 'title',
		sortBy: 'title',
		genre: 'all',
		limit: 12
	}

	const sortCriteria = queries?.genre || queries?.query ? {...initialQueries, ...queries} : initialQueries
	const moviesData = await getMoviesData(sortCriteria)
	const movies = moviesData?.data

    return (
		<div className='main'>
			<div className='d-flex align-center space-between mb-2 nav'>
				<GenreSelect queries={sortCriteria} />
				<SortControl queries={sortCriteria} />
			</div>
			<p className="text-left mb-2"><b>{moviesData?.totalAmount}</b> movies found</p>
			<div className="d-flex align-center movies-grid">
				{movies?.map((movie) => <Card key={movie.id} details={movie} />)}
			</div>
		</div>
  	)
}

export default App
