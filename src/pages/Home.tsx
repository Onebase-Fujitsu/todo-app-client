import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import {AppDispatch} from '../stores/store'
import {getTodoAction} from '../stores/todoSlice'

const Home = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodoAction())
  })

  return (
    <div>
      <Header />
      <TodoList />
    </div>
  )
}

export default Home
