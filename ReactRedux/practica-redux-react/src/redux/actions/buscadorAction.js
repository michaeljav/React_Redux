import Axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

//Action
export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: error,
  };
};

//envuelta en una gran accion que se ira intercambiando
// --> esta es una funcion currificada: una funcion que devuelve otra funcion.
//++++++cuando hagamos el dispatch esto returna una funcion
// y luego react thunk enviará el dispatch
const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure('No se encontro el pokemon'));
      });
  };
};

export default fetchPokemon;
