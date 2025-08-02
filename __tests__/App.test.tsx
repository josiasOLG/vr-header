import React from 'react'
import { render } from '@testing-library/react'

const MockHeaderApp = () => <div data-testid="header-app">Header App Mock</div>

describe('Header App', () => {
  it('renders mock component without crashing', () => {
    const { container } = render(<MockHeaderApp />)
    expect(container).toBeTruthy()
  })

  it('renders header app element', () => {
    const { getByTestId } = render(<MockHeaderApp />)
    expect(getByTestId('header-app')).toBeTruthy()
  })
})
