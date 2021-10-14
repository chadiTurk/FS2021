import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdoteService'
const AnecdoteForm = () =>{ 

    const dispatch = useDispatch()
    
    const add = event =>{
        event.preventDefault()
        const anecdote = event.target.anecdoteInput.value
        const newAnecdote = {
            content:anecdote,
            votes:0
        }
    
        anecdoteService.addAnecdote(newAnecdote)
        .then(result => dispatch(addAnecdote(result.data)))
        .catch(error => console.log(`Error with adding an anecdote ${error}`))

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