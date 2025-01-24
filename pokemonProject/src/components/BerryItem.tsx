import { useGetBerryByNameQuery } from '../services/berry'
import { Card, Space, } from 'antd'
import './pokemon.css'

export const BerryItem = ({
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
        <Space>
            <Card className="itemCard">
              <div className="cardContent">
                {data.item.sprites && data.item.sprites.default && (
                  <img src={data.item.sprites.default} alt={data.name} className="photo" />
                )}
                <b className="title">{data.name}</b>
              </div>
              <button className="button">Купить за 1000</button>
            </Card>
         </Space>
        
      ) : null}
    </>
  )
}