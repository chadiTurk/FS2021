import { createStore, combineReducers} from 'redux'
import reducerAnecdote from './reducers/anecdoteReducer'
import reducerNotification from './reducers/notificationReducer'


console.log('reducerAnecdote',reducerAnecdote)
console.log('reducerNotification',reducerNotification)

const reducer = combineReducers({
    reducerAnecdote:reducerAnecdote,
    reducerNotification:reducerNotification
  })

const store = createStore(reducer)

export default store