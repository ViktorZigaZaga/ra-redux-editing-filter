import { combineReducers, compose, legacy_createStore } from 'redux';
import addReducer from '../reducers/addReducer';
import listReducer from '../reducers/listReducer';
import filterReducer from '../reducers/filterReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      add: addReducer,
      list: listReducer,
      filter: filterReducer,
    }),
    compose(ReactReduxDevTools)
  );
}