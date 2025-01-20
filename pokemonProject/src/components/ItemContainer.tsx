// import { itemApi } from "../services/allItems";
// // import { IArray } from "../models/IArray";
// import {ItemItem} from "./ItemItem";
// import {Card} from 'antd'
// import './pokemon.css'

// const ItemContainer = () => {
//     // const { data: response } = itemApi.useGetAllItemsQuery('');
//     // console.log(response);
//     const { data: greatball } = itemApi.useGetGreatBallQuery('');
//     const { data: duskball } = itemApi.useGetDuskBallQuery('');
//     const { data: netball } = itemApi.useGetNetBallQuery('');
//     const { data: antidote } = itemApi.useGetAntidoteQuery('');
//     const { data: iceheal } = itemApi.useGetIceHealQuery('');
//     const {data: itemid} = itemApi.useGetItemByNameQuery('');
//     return (
//         <div>
//             <div>
//                 {/* {
//                     response && response.results.map((item: IArray) =>
//                         <ItemItem key={item.name} item={item} />
//                     )
//                 } */}
//                 {
//                     itemid && (
//                         <ItemItem key={itemid.results.name} name={itemid.results.name}  pollingInterval={0}/>
//                     )
//                 }
//                                 {
//                     itemid && (
//                         <Card className="itemCard">
//                             <div className="cardContent">
//                                 {itemid.sprites && itemid.sprites.default && (
//                                     <img src={itemid.sprites.default} alt={itemid.name} className="photo"/>
//                                 )}
//                                 <b className="title">{itemid.name}  </b>
//                             </div>
//                             <button className="button">Кнопка</button>
//                         </Card>
//                     )
//                 }
//                 {
//                     greatball && (
//                         <Card className="itemCard">
//                             <div className="cardContent">
//                                 {greatball.sprites && greatball.sprites.default && (
//                                     <img src={greatball.sprites.default} alt={greatball.name} className="photo"/>
//                                 )}
//                                 <b className="title">{greatball.name}  </b>
//                             </div>
//                             <button className="button">Кнопка</button>
//                         </Card>
//                     )
//                 }
//                                 {
//                     duskball && (
//                         <Card className="itemCard">
//                             <div className="cardContent">
//                                 {duskball.sprites && duskball.sprites.default && (
//                                     <img src={duskball.sprites.default} alt={duskball.name} className="photo"/>
//                                 )}
//                                 <b className="title">{duskball.name}  </b>
//                             </div>
//                             <button className="button">Кнопка</button>
//                         </Card>
//                     )
//                 }                {
//                     netball && (
//                         <Card className="itemCard">
//                             <div className="cardContent">
//                                 {netball.sprites && netball.sprites.default && (
//                                     <img src={netball.sprites.default} alt={netball.name} className="photo"/>
//                                 )}
//                                 <b className="title">{netball.name}  </b>
//                             </div>
//                             <button className="button">Кнопка</button>
//                         </Card>
//                     )
//                 }                {
//                     antidote && (
//                         <Card className="itemCard">
//                             <div className="cardContent">
//                                 {antidote.sprites && antidote.sprites.default && (
//                                     <img src={antidote.sprites.default} alt={antidote.name} className="photo"/>
//                                 )}
//                                 <b className="title">{antidote.name}  </b>
//                             </div>
//                             <button className="button">Кнопка</button>
//                         </Card>
//                     )
//                 }                {
//                     iceheal && (
//                         <Card className="itemCard">
//                             <div className="cardContent">
//                                 {iceheal.sprites && iceheal.sprites.default && (
//                                     <img src={iceheal.sprites.default} alt={iceheal.name} className="photo"/>
//                                 )}
//                                 <b className="title">{iceheal.name}  </b>
//                             </div>
//                             <button className="button">Кнопка</button>
//                         </Card>
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

// export default ItemContainer;
import { itemApi } from "../services/allItems";
import { ItemItem } from "./ItemItem";
import './pokemon.css';

const ItemContainer = () => {
    // Получаем список всех айтемов
    const { data: response } = itemApi.useGetAllItemsQuery('');

    // Проверяем, есть ли данные и есть ли хотя бы один айтем в списке
    const itemName = response && response.results.length > 0 ? response.results[17].name : '';

    // Получаем данные конкретного айтема по имени
    const { data: itemid } = itemApi.useGetItemByNameQuery(itemName);
    console.log(itemid);
    return (
        <div>
            <div>
                {/* Отображаем список айтемов, если они есть */}
                {
                    response && response.results.map((item) => (
                        <ItemItem key={item.name} name={item.name} pollingInterval={0}/>
                    ))
                }

                {/* Отображаем конкретный айтем, если он загружен */}
                {
                    itemid && (
                        <ItemItem key={itemid.name} name={itemid.name} pollingInterval={0}/>
                    )
                }
            </div>
        </div>
    );
};

export default ItemContainer;