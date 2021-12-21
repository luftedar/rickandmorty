import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from './characters/characters';
import locationsReducer from './locations/locations';
import episodesReducer from './episodes/episodes';

const reducer = combineReducers({
  charactersReducer,
  locationsReducer,
  episodesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
