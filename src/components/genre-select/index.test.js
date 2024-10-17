import {act} from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GenreSelect from '.'

const mockGenres = [
    {id: '000', name: 'horror'},
    {id: '001', name: 'comedy'}
]

const mockOnClick = (event) => {
    event.preventDefault()
    event.target.classList.add('active')
}

test('should render all genres', () => {
    render(<GenreSelect genres={mockGenres} />)
    expect(screen.getByText(/horror/i)).toBeInTheDocument()
    expect(screen.getByText(/comedy/i)).toBeInTheDocument()
})

test('should highlight selected genre', () => {
    render(<GenreSelect genres={mockGenres} selected="comedy" />)
    expect(screen.getByText(/comedy/i).classList.contains('active')).toBe(true)
})

test('should change selected genre on click', async () => {
    render(<GenreSelect genres={mockGenres} selected='comedy' onClick={mockOnClick} />)

    const horrorGenre = screen.getByText(/horror/i)

    await act(async() => userEvent.click(horrorGenre))
    expect(horrorGenre.classList.contains('active')).toBe(true)
})
