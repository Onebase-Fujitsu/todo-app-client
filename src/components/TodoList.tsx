import {useSelector} from 'react-redux'
import {ArchiveIcon} from "@heroicons/react/solid";
import {RootState} from '../stores/store'

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <ul data-testid="TodoList" className="w-full p-8 flex flex-col">
      {todos.map((todo) => (
        <li key={todo.id} className="w-full flex justify-center items-center pb-4">
          <div className="border-2 flex justify-between border-gray-200 w-full rounded-lg shadow-lg p-4">
            <div>
              <p className="text-xl font-bold">{todo.title}</p>
            </div>
            <button type="button">
              <ArchiveIcon className="w-6"/>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
