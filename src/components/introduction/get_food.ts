"use server"

import { serverClient } from "@/utils/supabase/server";

type Data = {
    menu:string,
    value:number,
    type:string,
    image:string,
    imageVersion:string,
    introduction:string,
    imageVisible:boolean
}
type FData = {
    name:string
    menu:string,
    value:number,
    type:string,
    image:string,
    imageVersion:string,
    introduction:string,
    imageVisible:boolean
}

export async function getFoodData(name:string) {
    const supabase = await serverClient()

    const {data:food} = await supabase.from('food').select(`information`).eq("className",name );
    
    if(food == null) {
        return "failed"
    }
    const Data = food?.[0].information as Data[];
    const fData:FData[] = Data.map((value)=>{
        const { data } = supabase.storage
          .from('food-img')
          .getPublicUrl(value.image);
        let imageUrl:string = "/NOIMAGE"
        console.log(data.publicUrl)
        if(!value.image || value.image == ""){
            
        }else{
            imageUrl = `${data.publicUrl}?v=${value.imageVersion}`;
        }
        

        return {
            ...value,
            name:name,
            image:imageUrl
        }
    })
    console.log(fData);
    return fData
}