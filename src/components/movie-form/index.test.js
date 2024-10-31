import { render, screen } from '@testing-library/react'
import MovieForm from '.'

const mockGenres = [
	{id: '001', name: 'documentary'},
	{id: '002', name: 'horror'},
	{id: '003', name: 'crime'}
]

const mockMovieDetails = {
    id: '000',
    title: 'Pulp Fiction',
    release_date: '1994-01-01',
    poster_path: './../assets/pulp-fiction.png',
    genres: ['Action & Adventure'],
    runtime: '200',
    overview: 'Lorem ipsum..............',
    vote_average: '9.0'
}

jest.mock('react-router-dom', () => ({
    useNavigate: () => {},
    useLocation: () => ({state: {previousLocation: {}}}),
    useParams: () => ({id: '000'})
}))

jest.mock('../../contexts', () => ({
    useMoviesContext: () => ({
        genres: mockGenres,
        moviesData: {data: [mockMovieDetails]}
    })
}))

test('should render movie form', () => {
    render(<MovieForm />)

    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/release date/i)).toBeInTheDocument()
    expect(screen.getByText(/image url/i)).toBeInTheDocument()
    expect(screen.getByText(/overview/i)).toBeInTheDocument()
    expect(screen.getByText(/genre/i)).toBeInTheDocument()
    expect(screen.getByText(/rating/i)).toBeInTheDocument()
    expect(screen.getByText(/runtime/i)).toBeInTheDocument()
})
