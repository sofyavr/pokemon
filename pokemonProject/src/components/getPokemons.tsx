// import { useGetPokemonByNameQuery } from '../services/pokemon'
// import { Card, Space, } from 'antd'
// import { SettingFilled } from '@ant-design/icons';
// import './pokemon.css'

// export const Pokemon = ({
//   name,
//   pollingInterval,
// }: {
//   name: string
//   pollingInterval: number
// }) => {
//   const { data, error, isLoading, } = useGetPokemonByNameQuery(
//     name,
//     {
//       pollingInterval,
//     },
//   )
//     const calculateMoneyPerSecond = (weight: number) => {
//         return weight / 10;
//     };

//     const moneyPerSecond = data ? calculateMoneyPerSecond(data.weight) : 0;

//   return (
//     <>
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <Space>
//             <Card className="pokemonCard">
//                 <b className='namePoke'>{data.species.name} <SettingFilled className='SettingFilled'/> </b>
//                 <img src={data.sprites.front_shiny} alt={data.species.name} className='pokeImg'/>
//                 <div className='namePoke'> <b>Вес </b> {data.weight} кг</div> 
//                 <div className='namePoke'>
//                     <b>Деньги/сек</b> {moneyPerSecond} $
//                 </div>
//             </Card>
//          </Space>
        
//       ) : null}
//     </>
//   )
// }