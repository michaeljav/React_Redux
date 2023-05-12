import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {
  //para buscar el estado actual del state in el store redux
  const buscador = useSelector((state) => state.buscador);
  console.log(buscador);
  console.log('buscador.pokemon.length', buscador.pokemon);

  return (
    <div>
      <h3 className='text-white'>Resultado:</h3>
      {buscador.loading && <div className='text-warning'>Buscando...</div>}

      {buscador.pokemon.length >= 1 && (
        <div className='text-success'>
          <img src={buscador.pokemon[0].sprites.front_default} alt='Pokemon' />
          <span>{buscador.pokemon[0].name}</span>
        </div>
      )}
      {buscador.error !== '' && (
        <span className='text-danger'>{buscador.error}</span>
      )}
    </div>
  );
};

export default ResultadoPokemon;
