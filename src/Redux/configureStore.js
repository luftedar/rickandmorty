import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from './characters/characters';
import locationsReducer from './locations/locations';

const reducer = combineReducers({
  charactersReducer,
  locationsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
