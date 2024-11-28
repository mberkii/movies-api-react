import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockGenres = [
	{id: '001', name: 'documentary'},
	{id: '002', name: 'horror'},
	{id: '003', name: 'crime'}
]

const mockMovies = [
  {
  id: '005',
  name: 'Reservoir Dogs',
  releaseDate: '1992-01-01',
  image: '../assets/reservoir-dogs.png',
  genres: ['Oscar Winning Movie'],
  duration: '2hrs',
  description: 'Lorem ipsum..............',
  rating: '9.0'
}]

jest.mock('react-router-dom', () => ({
  Link: () => <></>,
  Outlet: () => <></>,
  useParams: () => jest.fn().mockReturnValueOnce({}),
  useLocation: () => ({state: {previousLocation: {}}}),
  useSearchParams: () => [{get: () => {}}, () => {}]
}))

jest.mock('./contexts', () => ({
  useMoviesContext: () => ({genres: mockGenres, movies: mockMovies, searchMovies: () => {}})
}))

test('renders app', () => {
  render(<App />);
  const logo = screen.getAllByText(/netflix/i)[0];
  expect(logo).toBeInTheDocument();
});
