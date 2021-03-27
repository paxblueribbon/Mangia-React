import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';
import thunk from 'redux-thunk';


export const ConfigureStore = () => {
  return createStore(
    Reducer,
    initialState
    )
}