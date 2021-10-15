import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducerAnecdote from './reducers/anecdoteReducer'
import reducerNotification from './reducers/notificationReducer'
import filterReducer from './reducers/filterReduer'


console.log('reducerAnecdote',reducerAnecdote)
console.log('reducerNotification',reducerNotification)

const reducer = combineReducers({
    reducerAnecdote:reducerAnecdote,
    reducerNotification:reducerNotification,
    reducerFilter:filterReducer
  })

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store