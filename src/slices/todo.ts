import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getTodos, postTodos} from '../features/TodoApi'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const getTodoAction = createAsyncThunk<Todo[]>(
  'get /todos',
  async (): Promise<Todo[]> => getTodos()
)

export const postTodoAction = createAsyncThunk<Todo, {title: string}>(
  'post /todos',
  async (arg): Promise<Todo> => postTodos(arg.title)
)

export const todo = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoAction.fulfilled, (state, action) => action.payload)
    builder.addCase(postTodoAction.fulfilled, (state, action) => [...state, action.payload])
  },
})

export default todo
