import {Link} from 'react-router-dom'
import {HomeIcon, PencilAltIcon} from '@heroicons/react/solid'

const Header = () => (
  <div data-testid="Header" className="h-screen w-48 border-r bg-white">
    <h1 className="font-semibold p-4 text-xl tracking-tight">Todo App</h1>
    <div className="h-3/4 flex flex-col justify-start text-gray-500">
      <Link
        to="/"
        className="p-4 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in"
      >
        <h2 className="text-sm flex items-center">
          <HomeIcon className="w-5 mr-3" />
          <span className="hover:text-black transition duration-200 ease-linear">
            Home
          </span>
        </h2>
      </Link>
      <Link
        to="/newTask"
        className="p-4 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in"
      >
        <h2 className="text-sm flex items-center">
          <PencilAltIcon className="w-5 mr-3" />
          <span className="hover:text-black transition duration-200 ease-linear">
            New Task
          </span>
        </h2>
      </Link>
    </div>
  </div>
)

export default Header
