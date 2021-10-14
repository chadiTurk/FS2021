const filterReducer = (state = '',action) =>{

    switch(action.type)
    {
        case 'FILTER_ANECDOTES':
            return action.data.filter
        default:
            return state
    }
}

export const filterAnecdotes = filter =>{
    return{
        type:'FILTER_ANECDOTES',
        data:{
            filter
        }
    }
}

export default filterReducer