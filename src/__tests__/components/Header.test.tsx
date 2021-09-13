import {cleanup, screen} from '@testing-library/react'
import Header from '../../components/Header'
import {render} from '../../test-utils'

describe('Header', () => {
  afterEach(() => {
    cleanup()
  })

  it('ヘッダーの初期表示', () => {
    render(<Header />)
    expect(screen.getByText('Todo App')).toBeInTheDocument()
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('New Task').closest('a')).toHaveAttribute(
      'href',
      '/newTask'
    )
  })
})
