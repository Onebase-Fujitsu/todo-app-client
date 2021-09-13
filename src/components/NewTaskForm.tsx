import {useState} from 'react'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../stores/store";
import {postTodoAction} from "../stores/todoSlice";

const NewTaskForm = () => {
  const [taskInput, setTaskInput] = useState('')
  const dispatch: AppDispatch = useDispatch()

  return (
    <form data-testid="NewTaskForm" className="w-full p-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="titleInput"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="titleInput"
            data-testid="TitleInput"
            type="text"
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-green-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={()=>dispatch(postTodoAction({title: taskInput}))}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewTaskForm
