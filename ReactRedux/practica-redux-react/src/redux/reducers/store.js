import { createStore } from 'redux';
import rootReducers from './rootReducers';
//para ver el store en el navegador. este es un middleware
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducers, composeWithDevTools());

export default store;
