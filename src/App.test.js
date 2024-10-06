import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logo = screen.getAllByText(/netflix/i)[0];
  expect(logo).toBeInTheDocument();
});
