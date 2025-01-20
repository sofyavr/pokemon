// import type { RootState } from '../../app/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
// import '/Users/sonechkavoronova/Documents/vscode/pokemonClicker/pokemonProject/src/components/pokemon.css'

// export function Counter() {
//   const count = useSelector((state: RootState) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <div className='headerLogoStyle'>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +1
//         </button>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -1
//         </button>
//             <img src="../img/coin.png" alt="coin" style={{height:'32px', width:'32px', marginRight:'5px', justifyContent:'flex-end'}}/>
//             <span className='YellowTextStyle'>{count}</span> 
//         </div>
//       <div></div>
//       </div>
//     </div>
//   )
// }

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import type { RootState } from '../../app/store';
import { Pokemon } from '/Users/sonechkavoronova/Documents/vscode/pokemonClicker/pokemonProject/src/components/getPokemons.tsx';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // Функция для расчета общего moneyPerSecond
  const totalMoneyPerSecond = Object.values(Pokemon).reduce((total, pokemon) => total + pokemon.moneyPerSecond, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(increment(totalMoneyPerSecond)); // Увеличиваем счетчик на totalMoneyPerSecond
    }, 1000);

    return () => clearInterval(interval); 
  }, [dispatch, totalMoneyPerSecond]); 

  return (
    <div>
      <div>
        <div className='headerLogoStyle'>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +1
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -1
          </button>
          <img src="../img/coin.png" alt="coin" style={{height:'32px', width:'32px', marginRight:'5px', justifyContent:'flex-end'}}/>
          <span className='YellowTextStyle'>{count}</span> 
        </div>
        <div></div>
      </div>
    </div>
  );
}