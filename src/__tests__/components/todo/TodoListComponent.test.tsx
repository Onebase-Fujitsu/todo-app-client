import {cleanup, screen} from '@testing-library/react'
import {render} from '../../../test-utils'
import TodoListComponent from '../../../components/todo/TodoListComponent'

describe('TodoListComponent Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('ステートが空ならリストも空', () => {
    const initialState = {todos: []}
    render(<TodoListComponent />, {preloadedState: initialState})
    expect(screen.getByRole('list').hasChildNodes()).toEqual(false)
  })

  it('リストアイテムを表示する', () => {
    const initialState = {todos: [{id: 1, title: 'hoge', completed: false}]}
    render(<TodoListComponent />, {preloadedState: initialState})
    expect(screen.getByRole('listitem').textContent).toEqual('hoge')
  })
})
