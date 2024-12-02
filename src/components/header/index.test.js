import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '.'

jest.mock('react-router-dom', () => ({
    Link: () => <></>,
    Outlet: () => <div data-testid="movie-details" />,
    useParams: () => jest.fn().mockReturnValueOnce({}).mockReturnValue({id: '001'}),
    useLocation: () => ({})
}))

/* eslint-disable react/display-name */
jest.mock('../search-form', () => () => <div data-testid="search-form" />)
jest.mock('../movie-details', () => () => <div data-testid="movie-details" />)

test('should render search form if no movie details are provided', () => {
    render(<Header />)
    expect(screen.getByTestId(/search-form/)).toBeInTheDocument()
})

test('should render movie details if movie details are provided', () => {
    render(<Header />)
    expect(screen.getByTestId(/movie-details/)).toBeInTheDocument()
})
