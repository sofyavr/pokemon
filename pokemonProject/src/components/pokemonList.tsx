import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import { fetchRandomPokemon } from '../features/pokemonsSlice'; 
import { RootState, AppDispatch } from '../app/store';
import { setMoneyPerSecond } from '../features/moneySlice';

const PokemonList = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const { pokemon, error } = useSelector((state: RootState) => state.pokemons);
  
  useEffect(() => {
    dispatch(fetchRandomPokemon()); 
  }, [dispatch]);
  useEffect(() => {
    if (pokemon) {
      const moneyPerSecond = calculateMoneyPerSecond(pokemon.weight);
      dispatch(setMoneyPerSecond(moneyPerSecond)); 
    }
  }, [dispatch, pokemon]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  const calculateMoneyPerSecond = (weight: number) => {
    return weight / 10;
};

const moneyPerSecond = pokemon ? calculateMoneyPerSecond(pokemon.weight) : 0;

  return (
    <div>
      {pokemon ? (
        <Card className="pokemonCard">
          <b className='namePoke'>{pokemon.name} <SettingFilled className='SettingFilled'/> </b>
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className='pokeImg'/>
          <div className='namePoke'> <b>Вес </b> {pokemon.weight} кг</div> 
          <div className='namePoke'>
              <b>Деньги/сек</b> {moneyPerSecond} $
          </div>
        </Card>
      ) : (
        <div>Загрузка...</div> 
      )}
    </div>
  );
};

export default PokemonList;