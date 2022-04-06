import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from './reducers/PostReducer'
import PostDetailsReducer from './reducers/PostDetailsReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    postState: PostReducer,
    postDetailsState: PostDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store