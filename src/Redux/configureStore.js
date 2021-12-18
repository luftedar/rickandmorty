import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerWillChange from '';

const reducer = combineReducers({
  reducerWillChange,
})

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;