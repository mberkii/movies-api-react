import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MovieTile from ".";
import { useSearchParams } from 'react-router-dom';

const mockMovieDetails = {
    id: '000',
    title: 'Pulp Fiction',
    release_date: '1994-01-01',
    poster_path: './../assets/pulp-fiction.png',
    genres: ['Action & Adventure'],
    runtime: '200',
    overview: 'Lorem ipsum..............',
    vote_average: '9.0'
}

jest.mock('react-router-dom', () => ({
    Link: (props) => <div data-testid="link">{props.children}</div>,
    useParams: () => jest.fn().mockReturnValueOnce({}),
    useSearchParams: () => [{get: () => {}}, () => {}],
    useLocation: () => ({state: {previousLocation: {}}})
}))

test('should render movie tile component', () => {
    render(<MovieTile details={mockMovieDetails} selectMovie={() => {}} />)
    expect(screen.getByText(/pulp fiction/i)).toBeInTheDocument()
})

test('should show/hide movie actions menu', () => {
    render(<MovieTile details={mockMovieDetails} selectMovie={() => {}} />)

    const menuShowButton = screen.getByRole('button')

    userEvent.click(menuShowButton)
    expect(screen.getAllByTestId(/link/i)[1]).toBeInTheDocument()

    const menuCloseButton = screen.getAllByRole('button')[1]

    userEvent.click(menuCloseButton)    
    expect(screen.getAllByTestId(/link/i)[1]).toBeUndefined()
})
