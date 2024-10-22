import { render, screen } from '@testing-library/react'
import Dialog from '.'

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: () => <div data-testid="dialog" />
}))

jest.mock('react-router-dom', () => ({
    useNavigate: () => {}
}))

test('should render dialog component', () => {
    render(<Dialog />)
    expect(screen.getByTestId('dialog')).toBeInTheDocument()
})
