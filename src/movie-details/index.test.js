import { render, screen } from '@testing-library/react'

import MovieDetails from '.'

const mockMovieDetails = {
    id: '000',
    name: 'Pulp Fiction',
    releaseYear: '1994',
    image: './assets/pulp-fiction.png',
    genres: ['Action & Adventure'],
    duration: '2hrs',
    description: 'Lorem ipsum..............',
    rating: '9.0'
}

test('should render movie details component', () => {
    render(<MovieDetails details={mockMovieDetails} />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})
