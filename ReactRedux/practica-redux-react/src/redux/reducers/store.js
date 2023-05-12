import { applyMiddleware, createStore } from 'redux';
import rootReducers from './rootReducers';
//para ver el store en el navegador. este es un middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//agregado applymiddleware thunk para  hacer peticion
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
