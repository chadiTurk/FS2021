
const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {

  console.log('action',action)
  
  switch(action.type)
  {
    case 'VOTE_ANECDOTE':
      const id = action.data.id
      const anecdote = state.find(anec => anec.id === id)
      const updatedAnecdote = {...anecdote,votes : anecdote.votes + 1}
      const updatedAnecdotes = state.map(singleAnecdote => singleAnecdote.id !== id ? singleAnecdote : updatedAnecdote)
      return updatedAnecdotes.sort((firstAnec,secondAnec) => secondAnec.votes - firstAnec.votes)
      
    case 'ADD_ANECDOTE':
      return [...state,action.data]
    
    case 'INIT_ANECDOTES':
      return action.data
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

export const addAnecdote = content =>{
  return{
    type: 'ADD_ANECDOTE',
    data:{
      content,
      id:getId(),
      votes:0
    }
  }
}

export const initAnecdotes = anecdotes =>{
  return{
    type:'INIT_ANECDOTES',
    data:anecdotes
  }
}


export default reducer