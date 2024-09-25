import {act} from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchForm from '.'

const mockHandleSubmit = (event, callback) => {
    event.preventDefault()
    callback(event.target.querySelector('input').value)
}

test('should render initial value', () => {
    render(<SearchForm initialValue='Type' />)
    expect(screen.getByText(/type/i)).toBeInTheDocument()
})

test('should render typed input on button submit', async() => {
    render(<SearchForm initialValue='Type' handleSubmit={mockHandleSubmit} />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await act(async () => {
        await userEvent.type(input, 'query')
        await userEvent.click(button)
    })

    expect(screen.getByText(/query/)).toBeInTheDocument()
})

test('should render typed input on enter click', async() => {
    render(<SearchForm initialValue='Type' handleSubmit={mockHandleSubmit} />)

    const input = screen.getByRole('textbox')

    await act(async () => userEvent.type(input, 'new query{enter}'))
    expect(screen.getByText(/new query/i)).toBeInTheDocument()
})
