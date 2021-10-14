import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const dispatch = useDispatch()
    

    let anecdotes = useSelector(state => {
        console.log('state',state)
        return state.reducerAnecdote})

    const vote = (id,content) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
        dispatch(showNotification('you voted ' + content))
     }

     let filterValue = useSelector(state => state.reducerFilter)

     if(filterValue === '')
        console.log('no filter')
     else{
         anecdotes = anecdotes.filter(anecdote => (anecdote.content.toLowerCase()).includes(filterValue.toLowerCase()))
     }
     
 
    
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