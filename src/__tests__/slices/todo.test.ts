import todo, {getTodoAction, postTodoAction} from '../../slices/todo'

describe('todo reducer', () => {
  it('initial state', () => {
    expect(todo.reducer(undefined, {type: undefined})).toEqual({"entities": {}, "ids": []})
  })

  it('get todo is pending', async () => {
    const action = {type: getTodoAction.pending.type}
    const state = todo.reducer({"entities": {}, "ids": []}, action)
    expect(state.ids.length).toEqual(0)
  })

  it('get todo is fulfilled', async () => {
    const action = {
      type: getTodoAction.fulfilled.type,
      payload: [
        {
          id: 1,
          title: 'hoge',
          completed: false,
        },
      ],
    }

    const state = todo.reducer({"entities": {}, "ids": []}, action)
    expect(state.ids.length).toEqual(1)
  })

  it('get todo is rejected', async () => {
    const action = {type: getTodoAction.rejected.type}
    const state = todo.reducer([], action)
    expect(state.length).toEqual(0)
  })

  it('post todo is pending', async () => {
    const action = {type: postTodoAction.pending.type}
    const state = todo.reducer([], action)
    expect(state.length).toEqual(0)
  })

  it('post todo is fulfilled', async () => {
    const action = {
      type: postTodoAction.fulfilled.type,
      payload:
        {
          id: 2,
          title: 'hoge',
          completed: false,
        },
    }

    const initialState = [{
      id: 1,
      title: 'title',
      completed: false
    }]
    const state = todo.reducer(initialState, action)
    expect(state.length).toEqual(2)
    expect(state[0].id).toEqual(1)
    expect(state[0].title).toEqual('title')
    expect(state[0].completed).toEqual(false)
    expect(state[1].id).toEqual(2)
    expect(state[1].title).toEqual('hoge')
    expect(state[1].completed).toEqual(false)
  })

  it('post todo is rejected', async () => {
    const action = {type: postTodoAction.rejected.type}
    const state = todo.reducer([], action)
    expect(state.length).toEqual(0)
  })
})
