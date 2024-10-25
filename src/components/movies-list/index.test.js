import { render, screen } from '@testing-library/react'

import MoviesList from "."

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
    Link: (props) => <div>{props.children}</div>,
    Outlet: () => <></>,
    useSearchParams: () => [{get: () => {}}, () => {}],
    useLocation: () => ({state: {previousLocation: {}}}),
    useParams: () => jest.fn().mockReturnValueOnce({})
}))

jest.mock('../../contexts', () => ({
    useMoviesContext: () => ({
        genres: [{id: '000', name: 'action'}],
        moviesData: {data: [mockMovieDetails]},
        searchMovies: () => {}
    })
}))

test('should render movies list', () => {
    render(<MoviesList />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})
