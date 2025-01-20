import { useGetItemByNameQuery } from '../services/allItems'
import { Card, Space, } from 'antd'
import './pokemon.css'

export const ItemItem = ({
  name,
  pollingInterval,
}: {
  name: string
  pollingInterval: number
}) => {
  const { data, error, isLoading, } = useGetItemByNameQuery(
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
                {data.sprites && data.sprites.default && (
                  <img src={data.sprites.default} alt={data.name} className="photo" />
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