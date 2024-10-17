import { render, screen } from '@testing-library/react'
import DeleteNote from '.'

jest.mock('react-router-dom', () => ({
    useNavigate: () => {},
    useParams: () => ({})
}))

jest.mock('../../contexts', () => ({
    useMoviesContext: () => ({})
}))

test('should show delete note', () => {
    render(<DeleteNote />)
    expect(screen.getByText(/Are you sure you want to delete this movie?/i)).toBeInTheDocument()
})
