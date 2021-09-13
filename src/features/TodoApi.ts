import axios from 'axios'
import {Todo} from '../stores/todoSlice'

export const getTodos = async () => {
  const response = await axios.get<Todo[]>('/todos')
  return response.data
}

export const postTodos = async (title: string) => {
  const requestJson = {title}
  const response = await axios.post<Todo>('/todos', JSON.stringify(requestJson))
  return response.data
}
