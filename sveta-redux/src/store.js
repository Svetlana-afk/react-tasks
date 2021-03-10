import { createStore } from 'redux';
import fwRducer from './reducers/fwReducer';

const store = createStore(fwRducer);

export default  store;