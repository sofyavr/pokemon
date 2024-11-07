import  { FC } from "react";
import { IArray } from "./IArray";

interface ItemItemProps{
    item: IArray;
}

const ItemItem: FC<ItemItemProps> = ({item}) => {
    return (
        <div>
            {item.name}
        </div>
    );
};

export default ItemItem;