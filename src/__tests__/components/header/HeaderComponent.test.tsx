import {cleanup, screen} from '@testing-library/react'
import HeaderComponent from '../../../components/header/HeaderComponent'
import {render} from '../../../test-utils'

describe('HeaderComponent', () => {
  afterEach(() => {
    cleanup()
  })

  it('ヘッダーの初期表示', () => {
    render(<HeaderComponent />)
    expect(screen.getByText('Todo App')).toBeInTheDocument()
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('New Task').closest('a')).toHaveAttribute(
      'href',
      '/newTask'
    )
  })
})
