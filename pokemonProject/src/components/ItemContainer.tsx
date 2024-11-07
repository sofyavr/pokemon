import { itemApi } from "../services/items";
import { IArray } from "./IArray";
import ItemItem from "./ItemItem";

const ItemContainer = () => {
    const {data: response} = itemApi.useGetItemByNameQuery('')
    console.log(response)
    return (
        <div>
            <div>
                {
                    response && response.results.map( (item: IArray) =>
                        <ItemItem item={item}/>
                    )
                }
            </div>

        </div>
    );
};

export default ItemContainer;
// import { useGetItemByNameQuery } from '../services/items'
// import { Card, Space, } from 'antd'
// import { SettingFilled } from '@ant-design/icons';
// import './pokemon.css'

// export const ItemPok = ({
//   name,
//   pollingInterval,
// }: {
//   name: string
//   pollingInterval: number
// }) => {
//   const { data, error, isLoading, } = useGetItemByNameQuery(
//     name,
//     {
//       pollingInterval,
//     },
//   )

//   return (
//     <>
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <Space>
//             <Card className="pokemonCard">
//                 <b style={{display:'flex', justifyContent:'space-between'}}>{data.name} <SettingFilled style={{stroke:'rgba(54, 95, 172, 1)', color:'rgba(255, 204, 1, 1)', strokeWidth:'70px'}}/> </b>
//                 <img src={data.sprites.name} alt={data.name} style={{width:'100%', marginTop:'15px'}}/>
//             </Card>
//          </Space>
        
//       ) : null}
//     </>
//   )
// }