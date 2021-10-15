import anecdoteService from '../services/anecdoteService'

const reducer = (state = [], action) => {

  console.log('action',action)
  
  switch(action.type)
  {

    case 'INIT_ANECDOTES':
      return action.data

    case 'VOTE_ANECDOTE':
      const id = action.data.id
      const anecdote = state.find(anec => anec.id === id)
      const updatedAnecdote = {...anecdote,votes : anecdote.votes + 1}
      const updatedAnecdotes = state.map(singleAnecdote => singleAnecdote.id !== id ? singleAnecdote : updatedAnecdote)
      return updatedAnecdotes.sort((firstAnec,secondAnec) => secondAnec.votes - firstAnec.votes)
      
    case 'ADD_ANECDOTE':
      return [...state,action.data]

    default:
      return state
  }

}

export const voteAnecdote = id =>{
  return{
    type: 'VOTE_ANECDOTE',
    data:{
      id
    }
  }
}


export const addAnecdote = newAnecdote =>{
  return async dispatch =>{
    const returnedAnecdote = await anecdoteService.addAnecdote(newAnecdote)
    
    dispatch({
      type:'ADD_ANECDOTE',
      data:{
        content:returnedAnecdote.data.content,
        id:returnedAnecdote.data.id,
        votes:returnedAnecdote.data.votes
      }
    })
  }
}

export const initAnecdotes = () =>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data:anecdotes.data
    })
  }
}


export default reducer