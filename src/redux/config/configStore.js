import { combineReducers, createStore } from 'redux';
import counter from '../modules/counter';

const rootReducer = combineReducers({
  counter: counter
});

const store = createStore(rootReducer);

export default store;
