let initialState = {
    message:"Hello there",
    style:{
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        display:'none'
    
    }
}
const reducerNotification = (state = initialState,action) =>{ 
    console.log(state)
    switch (action.type) {
        case 'SHOW_NOTIFICATION': {
          const newMessage = action.data.notification
          return {...state,style:{...state.style,display:'block'},message:newMessage}
        }
        default:
          return state
      }
}

export const showNotification = notification =>{
    return{
        type:'SHOW_NOTIFICATION',
        data:{
            notification
        }
    }
}

export default reducerNotification