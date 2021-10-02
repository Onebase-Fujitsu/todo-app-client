import {useState} from 'react'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../stores/store";
import {postTodoAction} from "../../slices/todo";

const NewTaskFormComponent = () => {
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
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            id="titleInput"
            data-testid="TitleInput"
            placeholder="Title Input"
            type="text"
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

export default NewTaskFormComponent
