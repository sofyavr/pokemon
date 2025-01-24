import { useState } from 'react';
import { itemApi } from "../services/allItems";
import { berryApi } from "../services/berry";
import { BerryItem } from "./BerryItem";
import { ItemItem } from "./ItemItem";
import './pokemon.css';

const ItemContainer = () => {
    const { data: response } = itemApi.useGetAllItemsQuery('');
    const { data: berryResponse } = berryApi.useGetAllBerriesQuery('');

    const [filters, setFilters] = useState<string[]>([]); 

    const toggleFilter = (filter: string) => {
        setFilters(prevFilters => 
            prevFilters.includes(filter) 
                ? prevFilters.filter(f => f !== filter) 
                : [...prevFilters, filter]
        );
    };

    const filteredItems = response ? response.results.filter(item => item.name.endsWith('-ball')) : [];
    const filteredBerries = berryResponse ? berryResponse.results : [];

    return (
        <div>
            <div className="filter-container">
                <button 
                    className={'filter-button'} 
                    onClick={() => toggleFilter('balls')}
                >
                    Покеболы
                </button>
                <button 
                    className={'filter-button'} 
                    onClick={() => toggleFilter('berries')}
                >
                    Ягоды
                </button>
            </div>

            <div>
                {filters.length === 0 ? (
                    <>
                        {response && response.results.map((item) => (
                            <ItemItem key={item.name} name={item.name} pollingInterval={0} />
                        ))}
                        {berryResponse && berryResponse.results.map((item) => (
                            <BerryItem key={item.name} name={item.name} pollingInterval={0} />
                        ))}
                    </>
                ) : (
                    <>
                        {filters.includes('balls') && filteredItems.map((item) => (
                            <ItemItem key={item.name} name={item.name} pollingInterval={0} />
                        ))}
                        {filters.includes('berries') && filteredBerries.map((item) => (
                            <BerryItem key={item.name} name={item.name} pollingInterval={0} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemContainer;
// import {  useState } from 'react';
// import { itemApi } from "../services/allItems";
// import { berryApi } from "../services/berry";
// import { BerryItem } from "./BerryItem";
// import { ItemItem } from "./ItemItem";
// import './pokemon.css';

// const ItemContainer = () => {
//     const { data: response } = itemApi.useGetAllItemsQuery('');
//     const { data: berryResponse } = berryApi.useGetAllBerriesQuery('');

//     const [filters, setFilters] = useState<string[]>([]); 

//     const toggleFilter = (filter: string) => {
//         setFilters(prevFilters => 
//             prevFilters.includes(filter) 
//                 ? prevFilters.filter(f => f !== filter) 
//                 : [...prevFilters, filter] 
//         );
//     };

//     const filteredItems = response ? response.results.filter(item => item.name.endsWith('-ball')) : [];
//     const filteredBerries = berryResponse ? berryResponse.results : [];

//     return (
//         <div>
//             <div className='filter-container'>
//                 <button className='filter-button' onClick={() => toggleFilter('balls')}>Покеболы</button>
//                 <button className='filter-button' onClick={() => toggleFilter('berries')}>Ягоды</button>
//                 <button className='filter-button' onClick={() => setFilters([])}>Сбросить фильтры</button> 
//             </div>

//             <div>
//                 {filters.length === 0 && (
//                     <>
//                         {response && response.results.map((item) => (
//                             <ItemItem key={item.name} name={item.name} pollingInterval={0} />
//                         ))}
//                         {berryResponse && berryResponse.results.map((item) => (
//                             <BerryItem key={item.name} name={item.name} pollingInterval={0} />
//                         ))}
//                     </>
//                 )}
//                 {filters.includes('balls') && filteredItems.map((item) => (
//                     <ItemItem key={item.name} name={item.name} pollingInterval={0} />
//                 ))}
//                 {filters.includes('berries') && filteredBerries.map((item) => (
//                     <BerryItem key={item.name} name={item.name} pollingInterval={0} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemContainer;
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
