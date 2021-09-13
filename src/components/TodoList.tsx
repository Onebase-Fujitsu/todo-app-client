import {useSelector} from 'react-redux'
import {RootState} from '../stores/store'

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <ul data-testid='TodoList'>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
