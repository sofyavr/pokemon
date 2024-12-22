// import  { FC } from "react";
// import { IArray } from "../models/IArray";

// interface ItemItemProps{
//     key: string;
//     item: IArray;
// }

// const ItemItem: FC<ItemItemProps> = ({item}) => {
//     return (
//         <div style={{color:"black"}}>
//         {item.name}
//         </div>
//     );
// };

// export default ItemItem;
import { useGetItemByNameQuery } from '../services/allItems'
import { Card, Space, } from 'antd'
import { SettingFilled } from '@ant-design/icons';
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
            <Card className="pokemonCard">
                <b style={{display:'flex', justifyContent:'space-between'}}>{data.name} <SettingFilled style={{stroke:'rgba(54, 95, 172, 1)', color:'rgba(255, 204, 1, 1)', strokeWidth:'70px'}}/> </b>
                <img src={data.sprites.default} alt={data.name} style={{width:'100%', marginTop:'15px'}}/>
            </Card>
         </Space>
        
      ) : null}
    </>
  )
}