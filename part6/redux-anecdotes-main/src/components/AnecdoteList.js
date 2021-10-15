import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { initAnecdotes } from '../reducers/anecdoteReducer'
const AnecdoteList = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(initAnecdotes())
    },[])
    
    let anecdotes = useSelector(state => {
        return state.reducerAnecdote})

    const vote = (id,content) => {
        dispatch(voteAnecdote(id))
        dispatch(showNotification('you voted ' + content))
     }

     let filterValue = useSelector(state => state.reducerFilter)
     if(filterValue !== '')
         anecdotes = anecdotes.filter(anecdote => (anecdote.content.toLowerCase()).includes(filterValue.toLowerCase()))

     return(
        <div>
              {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                </div>
            
                </div>
            )}
        </div>
     )
  
}


export default AnecdoteList