import { useGetBerryByNameQuery } from '../services/berries'
import { Card, } from 'antd'
import './pokemon.css'

export const Pokemon = ({
  name,
  pollingInterval,
}: {
  name: string
  pollingInterval: number
}) => {
  const { data, error, isLoading, } = useGetBerryByNameQuery(
    name,
    {
      pollingInterval,
    },
  )

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        // <Space wrap style={{justifyContent:'space-between'}}>
        //     <Col span={23}>
            <Card className="pokemonCard">
                <b>{data.species.name} </b>
                <img src={data.sprites.front_shiny} alt={data.species.name} style={{width:'100%', marginTop:'15px'}}/>
            </Card>
        //     </Col>
        // </Space>
        
      ) : null}
    </>
  )
}