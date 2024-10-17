import {act} from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '.'

test('should render with initial value', () => {
    render(<Counter initialValue={4}/>)
    expect(screen.getByText(/4/i)).toBeInTheDocument();
})

test('should increment initial value', async () => {
    render(<Counter initialValue={4}/>)

    const button = screen.getAllByRole('button')[0]

    await act(async () => userEvent.click(button))
    expect(screen.getByText(/5/i)).toBeInTheDocument();
})

test('should decrement initial value', async () => {
    render(<Counter initialValue={4}/>)

    const button = screen.getAllByRole('button')[1]

    await act(async () => userEvent.click(button))
    expect(screen.getByText(/3/i)).toBeInTheDocument();
})
