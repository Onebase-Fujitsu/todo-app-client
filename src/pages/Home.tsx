import Header from '../components/Header'
import TodoList from '../components/TodoList'

const Home = () => (
  <div data-testid="Home" className="flex">
    <Header/>
    <TodoList/>
  </div>
)

export default Home
