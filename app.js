//const { createStore } = require('redux').createStore;
//import { createStore } from 'redux';
const { createStore } = require('redux');

//##### Actions
const BUY_POCKEMON = 'BUY_POKEMON';
const buy_pokemon_action = (cant) => {
  return {
    type: BUY_POCKEMON,
    payload: cant,
  };
};

//##### Reducers
const default_games_state = {
  pokemon: 10,
};

//estado previo
//cuando se ejecute la accion se envia al reducer y aqui dentro
//tendremos un switch case que hara la accion acorde al tipo enviado
//--> este reducer hay que nviarse lo al store
const games_reducer = (state = default_games_state, action) => {
  switch (action.type) {
    case BUY_POCKEMON: {
      /*state.pokemon: estado previo - action.payload: estado actual*/
      return { pokemon: state.pokemon - action.payload };
    }
    default:
      return state;
  }
};

//########## Store
const store = createStore(games_reducer);

//funcion que nos ayuda a saber que esta pasando dentro del store
// console.log(`Estado Inicial ${store.getState()}`);
console.log('Estado Inicial', store.getState());

//para que cuando  se cambie el estado de la appliccion  el estore
//envie un evento  actualizacion desde el store  hay que subscribirse.
store.subscribe(() => {
  // console.log(`Cambio estado desde el subscribe metodo ${store.getState()}`);
  console.log('Cambio estado desde el subscribe metodo', store.getState());
});

//Enviar los cambios con el action
//para hacerlo hay que ejecutar dispatch que el store tiene
//-->copio la accion (buy_pockemon_action) y 3 productos quiero comprar
store.dispatch(buy_pokemon_action(3));

/*
At its core, Redux provides a centralized store for managing the state of an application. This store holds all the data that the application needs and provides a set of methods for updating and querying that data.

Redux follows a unidirectional data flow pattern, where the state of the application can only be modified through actions, which are plain JavaScript objects that describe a change that needs to be made to the state. These actions are dispatched to the store, which passes them through a set of reducers, which are pure functions that take the current state and an action and return a new state. The new state is then used to update the store, and any subscribed components are notified of the change.

The main benefits of using Redux are that it provides a clear separation of concerns between the view layer and the data layer, and it makes it easy to reason about the state of an application at any given point in time. It also allows for easy debugging, testing, and maintainability of complex applications.*/
