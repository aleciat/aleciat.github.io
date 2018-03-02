import { combineReducers } from 'redux'
import postReducer from './post_reducer'
import commentsReducer from './comments_reducer'


const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentsReducer,
})

export default rootReducer;