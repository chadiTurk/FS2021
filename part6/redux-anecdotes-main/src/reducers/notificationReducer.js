const initialState = "hello there"
const reducerNotification = (state = initialState,action) =>{ 
    switch (action.type) {
        case 'SHOW_NOTIFICATION': {
          return action.data.notification
        }
        default:
          return state
      }
}

export default reducerNotification