import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MovieTile from ".";

const mockMovieDetails = {
    id: '000',
    name: 'Pulp Fiction',
    releaseDate: '1994-01-01',
    image: './assets/pulp-fiction.png',
    genres: ['Action & Adventure'],
    duration: '2hrs',
    description: 'Lorem ipsum..............',
    rating: '9.0'
}

jest.mock('react-router-dom', () => ({
    Link: () => <div data-testid="link" />
}))

test('should render movie tile component', () => {
    render(<MovieTile details={mockMovieDetails} selectMovie={() => {}} />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})

test('should show/hide movie actions menu', () => {
    render(<MovieTile details={mockMovieDetails} selectMovie={() => {}} />)

    const menuShowButton = screen.getByRole('button')

    userEvent.click(menuShowButton)

    expect(screen.getAllByTestId('link')[0]).toBeInTheDocument()
    expect(screen.getAllByTestId('link')[1]).toBeInTheDocument()

    const menuCloseButton = screen.getAllByRole('button')[1]

    userEvent.click(menuCloseButton)
    
    expect(screen.queryByTestId('link')).not.toBeInTheDocument()
})
