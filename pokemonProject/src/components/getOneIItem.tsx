import  { FC } from "react";
import { IArray } from "../models/IArray";

interface OneItemProps{
    key: string;
    item: IArray;
}

const OneItem: FC<OneItemProps> = ({item}) => {
    return (
        <div style={{color:"black"}}>
        {item.name}
        </div>
    );
};

export default OneItem;

