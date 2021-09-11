import {cleanup, screen} from '@testing-library/react'
import {render} from '../../test-utils'
import TodoList from '../../components/TodoList'

describe('TodoList Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('ステートが空ならリストも空', () => {
    const initialState = {todos: []}
    render(<TodoList />, {preloadedState: initialState})
    expect(screen.getByRole('list').hasChildNodes()).toEqual(false)
  })

  it('リストアイテムを表示する', () => {
    const initialState = {todos: [{id: 1, title: 'hoge', completed: false}]}
    render(<TodoList />, {preloadedState: initialState})
    expect(screen.getByRole('listitem').textContent).toEqual('hoge')
  })
})
