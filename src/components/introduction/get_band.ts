"use server"


import { serverClient } from "@/utils/supabase/server"
import { UUID } from "crypto"
type Time_slot = {
    date:string,
    time:string
}
type RowData = {
    id:UUID;
    name:string,
    time:Array<Time_slot>,
    comment:string,
    available:boolean,
    imgURL:string,
    imageVersion:string
}
type Slot = {
    id:UUID,
    name:string,
    time:string,
    date:string,
    comment:string,
    available:boolean,
    imgURL:string,
    imageVersion:string
}
type GroupedSlot = Record<string,Slot[]>
type new_data = {
    name:string,
    time:string,
    comment:string,
    available:boolean,
    timeStamp:Array<number>,
    timeText:Array<string>
}

export async function getBandData() {
    const supabase = await serverClient()

    const {data:band} = await supabase.from('band').select(`*` );

    if(band == null) {
        return "failed"
    }
    console.log("band",band)
    const edited_data = await Promise.all(
        band.map(async(value)=>{
            const {data} = await supabase.storage.from("band-img").getPublicUrl(value.imgURL);
            const url = `${data.publicUrl}?v=${value.imageVersion}`
            return {
                ...value,
                imgURL:url || "not-found.png"
            }
    })
)   
    const formatData = edited_data as RowData[];
    const grouped :GroupedSlot ={}

    for(const slot of formatData){
        const {time,...other} = slot;

        time.map((value,index)=>{
            if(!grouped[value.date]){
                grouped[value.date] =[]
            }
            const result ={...other,date:value.date,time:value.time}
            grouped[value.date].push(result)
        })
    }
    for(const date in grouped){
        grouped[date].sort((a,b)=>{
            const t1 = a.time.split("~")[0];
            const t2 = b.time.split("~")[0];
            return t1.localeCompare(t2);
        })
    }
    const resultedData: Slot[] = Object.keys(grouped)
        .sort((a, b) => a.localeCompare(b)) 
        .flatMap((date) => grouped[date]);

    
    return resultedData;
    const new_data:Array<new_data>  = []
}