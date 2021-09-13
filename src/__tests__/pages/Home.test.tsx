import {cleanup, screen} from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import flushPromises from 'flush-promises'
import {render} from '../../test-utils'
import Home from '../../pages/Home'

describe('Home画面', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
    cleanup()
  })

  it("画面構成", () => {
    render(<Home />)
    expect(screen.queryByTestId('Header')).toBeTruthy()
    expect(screen.queryByTestId('TodoList')).toBeTruthy()
  })

  it('ホーム画面の初期表示', async () => {
    mock.onGet('/todos').reply(200, [
      {
        id: 1,
        title: 'title',
        completed: false,
      },
    ])
    const initialState = {todos: []}
    render(<Home />, {preloadedState: initialState})

    expect(screen.getByText('Todo App')).toBeInTheDocument()
    expect(mock.history.get[0].url).toEqual('/todos')
    await flushPromises()
    expect(screen.getByText('title')).toBeInTheDocument()
  })
})
