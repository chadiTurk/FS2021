import anecdoteService from '../services/anecdoteService'

const reducer = (state = [], action) => {

  console.log('action',action)
  
  switch(action.type)
  {

    case 'INIT_ANECDOTES':
      return action.data.sort((firstAnec,secondAnec) => secondAnec.votes - firstAnec.votes)

    case 'VOTE_ANECDOTE':
      const anecdote = action.data.returnedAnecdote
      const id = anecdote.id
      const updatedAnecdotes = state.map(singleAnecdote => singleAnecdote.id !== id ? singleAnecdote : anecdote)
      return updatedAnecdotes.sort((firstAnec,secondAnec) => secondAnec.votes - firstAnec.votes)
      
    case 'ADD_ANECDOTE':
      return [...state,action.data]

    default:
      return state
  }

}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = {...anecdote,votes:anecdote.votes + 1}
    const response = await anecdoteService.voteAnecdote(updatedAnecdote)
    const returnedAnecdote = response.data

    console.log('returned anecdoteee is',returnedAnecdote)
    dispatch({
      type:'VOTE_ANECDOTE',
      data:{
        returnedAnecdote
      }
    })
  }
}


export const addAnecdote = newAnecdote => {
  return async dispatch => {
    const returnedAnecdote = await anecdoteService.addAnecdote(newAnecdote)
    dispatch({
      type:'ADD_ANECDOTE',
      data:{
        content:returnedAnecdote.data.content,
        id:newAnecdote.id,
        votes:returnedAnecdote.data.votes
      }
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data:anecdotes.data
    })
  }
}


export default reducer