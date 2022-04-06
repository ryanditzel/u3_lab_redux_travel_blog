import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from './reducers/PostReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    postState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store