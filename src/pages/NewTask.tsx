import HeaderComponent from '../components/header/HeaderComponent'
import NewTaskFormComponent from '../components/todo/NewTaskFormComponent'

const NewTask = () => (
  <div data-testid="NewTask" className="flex">
    <HeaderComponent />
    <NewTaskFormComponent />
  </div>
)

export default NewTask
