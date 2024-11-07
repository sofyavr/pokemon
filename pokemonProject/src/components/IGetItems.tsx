import { IArray } from "./IArray";
export interface IGetItems {
    count: number;

    next: string|null;
    
    previous: string|null;
    
    results: IArray[];
}