import HeaderComponent from '../components/header/HeaderComponent'
import TodoListComponent from '../components/todo/TodoListComponent'

const Home = () => (
  <div data-testid="Home" className="flex">
    <HeaderComponent/>
    <TodoListComponent/>
  </div>
)

export default Home
