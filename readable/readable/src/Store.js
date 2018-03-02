import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './Reducers/post_reducer'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);
const store = createStore(postReducer, composeEnhancers(middleware));

export default store;