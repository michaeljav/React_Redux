import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//class component
// import CantidadPokemon from './components/CantidadPokemon';
// import CompraPokemon from './components/CompraPokemon';

//HOOKS
import CompraPokemonHook from './components/CompraPokemon.hook';
import CantidadPokemonHook from './components/CantidadPokemon.hook';
//PARA CONECTAR REDUX CON REACT
import store from './redux/reducers/store';
import { Provider } from 'react-redux';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {
  console.log(store.getState());

  return (
    // <Provider store={store}> CON ESTO SE CONECTA REACT A REDUS SOLAMENTE
    <Provider store={store}>
      <div className='App container'>
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{ maxWidth: '370px' }}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img
                    src={require('./img/pockemon.jpg')}
                    alt='pokemon'
                    className='card-img'
                  />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      {/* <CantidadPokemon />
                      <CompraPokemon /> */}
                      <CantidadPokemonHook />
                      <CompraPokemonHook />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 mt-4 border-top pt-3'>
            <BuscadorPokemon />
          </div>
          <div className='col-12'>
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
