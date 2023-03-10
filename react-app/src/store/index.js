import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {sessionReducer }from './session'
import { reviewReducer } from './reviews';
import { booksReducer } from './books';
import { shelvesReducer } from './shelves';
import { tagsReducer } from './tags';
const rootReducer = combineReducers({
  session: sessionReducer,
  books: booksReducer,
  reviews: reviewReducer,
  shelves: shelvesReducer,
  tags: tagsReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
