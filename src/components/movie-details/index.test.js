import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieDetails from '.'

const mockMovieDetails = {
    id: 123,
    title: 'Pulp Fiction',
    release_date: '1994-01-01',
    poster_path: './../assets/pulp-fiction.png',
    genres: ['Action & Adventure'],
    runtime: '200',
    overview: 'Lorem ipsum..............',
    vote_average: '9.0'
}

jest.mock('react-router-dom', () => ({
    useParams: () => ({id: '123'}),
    Outlet: () => <></>
}))

jest.mock('../../contexts', () => ({
    useMoviesContext: () => ({moviesData: {data: [mockMovieDetails]}})
}))

test('should render movie details component', () => {
    render(<MovieDetails />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})
