import React,{useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import anecdoteService from './services/anecdoteService'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'
import Filter from './components/Filter'
const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    anecdoteService.getAll()
    .then(response => dispatch(initAnecdotes(response.data)))
  },[]) // eslint-disable-line react-hooks/exhaustive-deps 

 
  return (
    <div>
      <Notification />
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App