import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import {normalize, schema} from "normalizr"
import {getTodos, postTodos} from '../features/TodoApi'

export interface Todo {
    id: number
    title: string
    completed: boolean
}

const todoAdapter = createEntityAdapter<Todo>({
})

const todoSchema: schema.Entity<Todo> = new schema.Entity("todos", {}, {idAttribute: "id"})

export const getTodoAction = createAsyncThunk(
    'get /todos',
    async () => {
        const todos = await getTodos()
        console.log(normalize<any,
            {
                todos: Todo
            }>(todos, todoSchema))
        return normalize<any,
            {
                todos: { [key: string]: Todo }
            }>(todos, todoSchema)
    }
)

export const postTodoAction = createAsyncThunk(
    'post /todos',
    async (arg: {title: string}) => {
        const newTodo = postTodos(arg.title)
        return normalize<any,
            {
                todos: { [key: string]: Todo }
            }>(newTodo, todoSchema)
    }
)

export const todo = createSlice({
    name: 'todos',
    initialState: todoAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodoAction.fulfilled, (state, action) => action.payload.result)
        builder.addCase(postTodoAction.fulfilled, (state, action) => todoAdapter.updateOne(state, action.payload.result))
    },
})

export default todo
