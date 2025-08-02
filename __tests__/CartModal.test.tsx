import { render, screen } from '@testing-library/react'
import CartModal from '../components/CartModal'

jest.mock('../components', () => ({
  useCartModal: () => ({
    items: [],
    isOpen: true,
    total: 0,
    itemCount: 0,
    handleQuantityChange: jest.fn(),
    handleRemoveItem: jest.fn(),
    handleClearAll: jest.fn(),
    handleClose: jest.fn(),
  }),
  CartHeader: ({ children }: { children?: React.ReactNode }) => <div data-testid="cart-header">{children}</div>,
  CartContent: ({ children }: { children?: React.ReactNode }) => <div data-testid="cart-content">{children}</div>,
  CartFooter: ({ children }: { children?: React.ReactNode }) => <div data-testid="cart-footer">{children}</div>,
}))

jest.mock('@mui/material', () => ({
  Dialog: ({ children, open }: { children: React.ReactNode; open: boolean }) => 
    open ? <div role="dialog" data-testid="dialog">{children}</div> : null,
}))

describe('CartModal', () => {
  it('renders when open', () => {
    render(<CartModal />)
    
    expect(screen.getByTestId('dialog')).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    render(<CartModal />)
    
    expect(document.body).toBeInTheDocument()
  })
})
