import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from '../Redux/characters/characters';

const reducer = combineReducers({
  charactersReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
