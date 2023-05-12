import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';

const BuscadorPokemon = () => {
  //componente para invocar accioens useDispatch
  const dispatch = useDispatch();
  //estado para los nombres del pokemon
  const [pokemon_name, set_Pokemon_name] = useState('mewtwo');
  return (
    <div className='form-group'>
      <label htmlFor='buscar_pokemon' className='text-white'>
        Buscar Pokemon
      </label>
      <input
        type='text'
        className='form-control'
        id='buscar_pokemon'
        value={pokemon_name}
        onChange={(event) => {
          set_Pokemon_name(event.target.value);
        }}
      />
      <button
        className='btn btn-primary mt-3'
        onClick={() => {
          //la funcion fetchPokemon donde esta los dispatcher
          //para hacer la peticion  minuto 3:30 ep.19
          dispatch(fetchPokemon(pokemon_name));
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default BuscadorPokemon;
