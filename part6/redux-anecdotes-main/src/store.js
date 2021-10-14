import { createStore, combineReducers} from 'redux'
import reducerAnecdote from './reducers/anecdoteReducer'
import reducerNotification from './reducers/notificationReducer'
import filterReducer from './reducers/filterReduer'
import { composeWithDevTools } from 'redux-devtools-extension'

console.log('reducerAnecdote',reducerAnecdote)
console.log('reducerNotification',reducerNotification)

const reducer = combineReducers({
    reducerAnecdote:reducerAnecdote,
    reducerNotification:reducerNotification,
    reducerFilter:filterReducer
  })

const store = createStore(reducer,composeWithDevTools())

export default store