import { render, screen } from '@testing-library/react'

import MovieDetails from '.'

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

test('should render movie details component', () => {
    render(<MovieDetails details={mockMovieDetails} />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})
