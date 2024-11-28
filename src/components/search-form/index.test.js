import React from 'react'
import { render, screen } from '@testing-library/react'

import SearchForm from '.'

jest.mock('react-router-dom', () => ({
    useSearchParams: () => [{get: () => {}}, () => {}]
}))

jest.mock('../../contexts', () => ({
    useMoviesContext: () => ({
        searchMovies: () => {}
    })
}))

test('should render input and button', () => {
    render(<SearchForm placeholderText='Type' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
})
