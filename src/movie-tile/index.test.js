import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MovieTile from ".";

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

test('should render movie tile component', () => {
    render(<MovieTile details={mockMovieDetails} selectMovie={() => {}} />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})

test('should show/hide movie actions menu', () => {
    render(<MovieTile details={mockMovieDetails} selectMovie={() => {}} />)

    const menuShowButton = screen.getByRole('button')

    userEvent.click(menuShowButton)

    expect(screen.getByText(/edit/i)).toBeInTheDocument()
    expect(screen.getByText(/delete/i)).toBeInTheDocument()

    const menuCloseButton = screen.getAllByRole('button')[1]

    userEvent.click(menuCloseButton)
    
    expect(screen.queryByText(/edit/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/delete/i)).not.toBeInTheDocument()
})
