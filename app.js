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

console.log('Estado Inicial', store.getState());

store.subscribe(() => {
  console.log('Cambio estado desde el subscribe metodo', store.getState());
});

store.dispatch(buy_pokemon_action(3));
