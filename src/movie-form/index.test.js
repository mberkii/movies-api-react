import { render, screen } from '@testing-library/react'
import MovieForm from '.'

const mockGenres = [
	{id: '001', name: 'documentary'},
	{id: '002', name: 'horror'},
	{id: '003', name: 'crime'}
]

jest.mock('../contexts', () => ({
    useMoviesContext: () => ({genres: mockGenres})
}))

test('should render movie form', () => {
    render(<MovieForm />)

    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/release date/i)).toBeInTheDocument()
    expect(screen.getByText(/image url/i)).toBeInTheDocument()
    expect(screen.getByText(/overview/i)).toBeInTheDocument()
    expect(screen.getByText(/genre/i)).toBeInTheDocument()
    expect(screen.getByText(/rating/i)).toBeInTheDocument()
    expect(screen.getByText(/runtime/i)).toBeInTheDocument()
})
