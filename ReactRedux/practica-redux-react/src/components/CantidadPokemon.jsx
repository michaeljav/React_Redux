import React, { Component } from 'react';
//Para conectar los componentes
import { connect } from 'react-redux';

class CantidadPokemon extends Component {
  render() {
    return (
      <React.Fragment>Unidades: {this.props.game_shop.pokemon}</React.Fragment>
    );
  }
}

//funcion currificada: una funcion que devuelve otra funcion:  connect()()
//--> en la segunda funcion que esta devolviendo, se
//pega el componente
//---> para pasar el estado que esta en el store como props al componente.
//-Ya arriba podremos acceder a esos props.
const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};

export default connect(mapStateToProps)(CantidadPokemon);
