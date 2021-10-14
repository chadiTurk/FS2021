const initialState = "hello there"
const reducerNotification = (state = initialState,action) =>{ 
    switch (action.type) {
        case 'SHOW_NOTIFICATION': {
            state = action.data.notification
          return state
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