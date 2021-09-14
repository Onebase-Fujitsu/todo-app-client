import {cleanup, screen} from '@testing-library/react'
import {render} from '../../test-utils'
import Home from '../../pages/Home'

describe('Home画面', () => {
  afterEach(() => {
    cleanup()
  })

  it('画面構成', () => {
    render(<Home />)
    expect(screen.queryByTestId('Header')).toBeTruthy()
    expect(screen.queryByTestId('TodoList')).toBeTruthy()
  })
})
