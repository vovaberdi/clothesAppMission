import { createStore } from 'redux';
import rootReducer from './clothsState';

const store = createStore(rootReducer);

export default store;
