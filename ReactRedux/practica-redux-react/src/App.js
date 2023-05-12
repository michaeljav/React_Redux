import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon from './components/CantidadPokemon';
import CompraPokemon from './components/CompraPokemon';
function App() {
  return (
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
                    <CantidadPokemon />
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;