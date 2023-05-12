import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  buy_pokemon_action,
  return_pokemon_action,
} from '../redux/actions/gameShopAction';

class CompraPokemon extends Component {
  render() {
    return (
      <div>
        <button
          className='btn btn-dark btn-sm '
          onClick={() => {
            this.props.buy_pokemon_action(1);
          }}
        >
          Comprar Pokemon
        </button>
        <button
          className='btn btn-dark btn-sm '
          onClick={() => {
            this.props.return_pokemon_action(1);
          }}
        >
          Regresar Pokemon
        </button>
      </div>
    );
  }
}

//dispatch enviar datos al store
const mapDispatchtToProps = {
  buy_pokemon_action,
  return_pokemon_action,
};
//export default CompraPokemon;
//ya que no usamos los estados, sino que enviarmo datos con el action a travez de ejecutar los dispatch que son lo que  usa la funcion redux para modificar  el store
///dejamos el primer parametro null
export default connect(null, mapDispatchtToProps)(CompraPokemon);
