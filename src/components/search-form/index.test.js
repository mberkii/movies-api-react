import { render, screen } from '@testing-library/react'

import SearchForm from '.'

test('should render input and button', () => {
    render(<SearchForm placeholderText='Type' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
})
