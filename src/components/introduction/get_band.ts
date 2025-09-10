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
    imageVersion:string,
    instagram:string
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
    instagram:string
}
type GroupedSlot = Record<string,Slot[]>
type groupedData = {
    date:string,
    data:Slot[]
}

export async function getBandData() {
    const supabase = await serverClient()

    const {data:band} = await supabase.from('band').select(`*` );

    if(band == null) {
        return {groupedByDate:null,dates:null}
    }
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
    const groupedByDate:groupedData[] = Object.entries(
      resultedData.reduce<Record<string, Slot[]>>((acc, item) => {
        if (!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
      }, {})
    ).map(([date, data]) => ({ date, data })).sort((a,b)=> {
        const d1 = new Date(`2025/${a.date}`);
        const d2 = new Date(`2025/${b.date}`);
        return d1.getTime() - d2.getTime()
    });
    //console.log("this",groupedByDate);
    const dates = groupedByDate.map((value)=>value.date);
    return {groupedByDate,dates};
}