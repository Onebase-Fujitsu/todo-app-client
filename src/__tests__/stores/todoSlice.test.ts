import todoSlice, {getTodoAction} from '../../stores/todoSlice'

describe('todo reducer', () => {
  it('initial state', () => {
    expect(todoSlice.reducer(undefined, {type: undefined})).toEqual([])
  })

  it('get todo is pending', async () => {
    const action = {type: getTodoAction.pending.type}
    const state = todoSlice.reducer([], action)
    expect(state.length).toEqual(0)
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

    const state = todoSlice.reducer([], action)
    expect(state.length).toEqual(1)
    expect(state[0].id).toEqual(1)
    expect(state[0].title).toEqual('hoge')
    expect(state[0].completed).toEqual(false)
  })

  it('get todo is rejected', async () => {
    const action = {type: getTodoAction.rejected.type}
    const state = todoSlice.reducer([], action)
    expect(state.length).toEqual(0)
  })
})
