import React from 'react'
import { render, screen } from '@testing-library/react'

import GenreSelect from '.'

const mockGenres = [
    {id: '000', name: 'horror'},
    {id: '001', name: 'comedy'}
]

jest.mock('react-router-dom', () => ({
    useSearchParams: () => [
        {get: () => 'comedy'},
        () => {}]
}))

test('should render all genres', () => {
    render(<GenreSelect genres={mockGenres} />)
    expect(screen.getByText(/horror/i)).toBeInTheDocument()
    expect(screen.getByText(/comedy/i)).toBeInTheDocument()
})

test('should highlight selected genre', () => {
    render(<GenreSelect genres={mockGenres} />)
    expect(screen.getByText(/comedy/i).classList.contains('active')).toBe(true)
})
