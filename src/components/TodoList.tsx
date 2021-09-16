import {useSelector} from 'react-redux'
import {RootState} from '../stores/store'

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <ul data-testid="TodoList" className="w-full p-8 flex flex-col">
      {todos.map((todo) => (
        <li key={todo.id} className="w-full flex justify-center items-center pb-4">
          <div className="border-2 flex border-gray-200 w-full rounded-lg shadow-lg p-4">
            <label className="inline-flex items-center mr-4">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" defaultChecked={todo.completed} />
            </label>
            <p className="text-xl font-bold">{todo.title}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
