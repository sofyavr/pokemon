import { useGetPokemonByNameQuery } from '../services/pokemon'
import { Card, Space, } from 'antd'
import { SettingFilled } from '@ant-design/icons';
import './pokemon.css'

export const Pokemon = ({
  name,
  pollingInterval,
}: {
  name: string
  pollingInterval: number
}) => {
  const { data, error, isLoading, } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
    },
  )
    const calculateMoneyPerSecond = (weight: number) => {
        return weight / 10;
    };

    const moneyPerSecond = data ? calculateMoneyPerSecond(data.weight) : 0;



  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Space>
            <Card className="pokemonCard">
                <b style={{display:'flex', justifyContent:'space-between'}}>{data.species.name} <SettingFilled style={{stroke:'rgba(54, 95, 172, 1)', color:'rgba(255, 204, 1, 1)', strokeWidth:'70px'}}/> </b>
                <img src={data.sprites.front_shiny} alt={data.species.name} style={{width:'100%', marginTop:'15px'}}/>
                <div style={{display:'flex', justifyContent:'space-between'}}> <b>Вес </b> {data.weight} кг</div> 
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <b>Деньги/сек</b> {moneyPerSecond} $
                </div>
            </Card>
         </Space>
        
      ) : null}
    </>
  )
}