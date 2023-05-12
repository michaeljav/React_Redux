import React from 'react';
import { useSelector } from 'react-redux';

const CantidadPokemonHook = () => {
  //useSelector : para obtener estados
  //useDispatch:  enviar acciones
  const game_shop = useSelector((state) => state.game_shop);

  return <React.Fragment>Unidades: {game_shop.pokemon}</React.Fragment>;
};

export default CantidadPokemonHook;
