import { render, screen } from '@testing-library/react'

import Header from '.'

jest.mock('react-router-dom', () => ({
    Link: () => <></>
}))

jest.mock('../search-form', () => () => <div data-testid="search-form" />)
jest.mock('../movie-details', () => () => <div data-testid="movie-details" />)

test('should render search form if no movie details are provided', () => {
    render(<Header />)
    expect(screen.getByTestId(/search-form/)).toBeInTheDocument()
})

test('should render movie details if movie details are provided', () => {
    render(<Header movieDetails={{}} />)
    expect(screen.getByTestId(/movie-details/)).toBeInTheDocument()
})
