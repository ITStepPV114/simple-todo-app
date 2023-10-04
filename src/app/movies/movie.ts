import { Time } from "@angular/common";

export interface IMovie{
    title:string;
    description?: string;
    year:number;
    duration:Time;
    isCurrent:boolean;
    genres?:string[];
}