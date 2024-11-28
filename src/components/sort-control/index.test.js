import React from 'react'
import { render, screen } from '@testing-library/react'

import SortControl from "."

jest.mock('react-router-dom', () => ({
    useSearchParams: () => [{get: () => {}}, () => {}]
}))

jest.mock('../../contexts', () => ({
    useMoviesContext: () => ({searchMovies: () => {}})
}))

test('should render sort control component', () => {
    render (<SortControl setSortedBy={() => {}}/>)

    expect(screen.getByText(/sort by/i)).toBeInTheDocument()
    expect(screen.getByText(/date/i)).toBeInTheDocument()
    expect(screen.getByText(/title/i)).toBeInTheDocument()
})
