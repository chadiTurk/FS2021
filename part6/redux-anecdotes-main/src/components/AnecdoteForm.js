import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote} from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () =>{ 

    const dispatch = useDispatch()
    
    const add = event =>{
        event.preventDefault()
        const anecdote = event.target.anecdoteInput.value
        const newAnecdote = {
            content:anecdote,
            votes:0
        }

        dispatch(addAnecdote(newAnecdote))
        dispatch(showNotification('you added ' + anecdote))
       
      }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit = {add}>
                <div><input name = "anecdoteInput"/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm