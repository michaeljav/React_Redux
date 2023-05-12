const { createStore, combineReducers } = require('redux');

//##### Actions
const BUY_POCKEMON = 'BUY_POKEMON';
const RETURN_POCKEMON = 'RETURN_POKEMON';
const BUY_YOSHI = 'BUY_YOSHI';
const RETURN_YOSHI = 'RETURN_YOSHI';

const buy_pokemon_action = (cant) => {
  return {
    type: BUY_POCKEMON,
    payload: cant,
  };
};
const return_pokemon_action = (cant) => {
  return {
    type: RETURN_POCKEMON,
    payload: cant,
  };
};
const buy_yoshi_action = (cant) => {
  return {
    type: BUY_YOSHI,
    payload: cant,
  };
};
const return_yoshi_action = (cant) => {
  return {
    type: RETURN_YOSHI,
    payload: cant,
  };
};

const BUY_SWITCH = 'BUY_SWITCH';
const buy_switch_action = (cant) => {
  return {
    type: BUY_SWITCH,
    payload: cant,
  };
};

//##### Reducers
const default_games_state = {
  pokemon: 10,
  yoshi: 10,
};

const games_reducer = (state = default_games_state, action) => {
  switch (action.type) {
    case BUY_POCKEMON: {
      /*state.pokemon: estado previo - action.payload: estado actual*/
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };
    }
    case RETURN_POCKEMON: {
      /*state.pokemon: estado previo - action.payload: estado actual*/
      return {
        ...state,
        pokemon: state.pokemon + action.payload,
      };
    }
    case BUY_YOSHI: {
      /*state.pokemon: estado previo - action.payload: estado actual*/
      return {
        ...state,
        yoshi: state.yoshi - action.payload,
      };
    }
    case RETURN_YOSHI: {
      /*state.pokemon: estado previo - action.payload: estado actual*/
      return {
        ...state,
        yoshi: state.yoshi + action.payload,
      };
    }
    default:
      return state;
  }
};

const default_consoles_state = {
  ps5: 30,
  switch: 30,
};
const consoles_reducer = (state = default_consoles_state, action) => {
  switch (action.type) {
    case BUY_SWITCH: {
      /*state.pokemon: estado previo - action.payload: estado actual*/
      return {
        ...state,
        switch: state.switch - action.payload,
      };
    }

    default:
      return state;
  }
};
//########## Store
//para usar de dos en adelante reducer hay que usar una funcion de combien reducers
const rootReducers = combineReducers({
  games_reducer,
  consoles_reducer,
});
const store = createStore(rootReducers);

console.log('Estado Inicial', store.getState());
store.subscribe(() => {
  console.log(
    'Cambio en el store estado desde el subscribe metodo',
    store.getState()
  );
});

// store.dispatch(buy_pokemon_action(3));
// store.dispatch(return_pokemon_action(2));
// store.dispatch(buy_yoshi_action(3));
// store.dispatch(return_yoshi_action(2));

store.dispatch(buy_switch_action(3));
