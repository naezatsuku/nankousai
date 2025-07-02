export type Database ={
    id:string;
    created_at:Date;
    comment:string;
    available: boolean;
    language:string;
    title:string;    
    place:string;
    time: number;
    type: string;
    genre:string;
    year:number;
}
export type PostData={
    id:string;
    time:number;
    title:string;
}