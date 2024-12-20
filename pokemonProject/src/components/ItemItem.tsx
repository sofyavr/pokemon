import  { FC } from "react";
import { IArray } from "../models/IArray";

interface ItemItemProps{
    key: string;
    item: IArray;
}

const ItemItem: FC<ItemItemProps> = ({item}) => {
    return (
        <div style={{color:"black"}}>
        {item.name}
        </div>
    );
};

export default ItemItem;