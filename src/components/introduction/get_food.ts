"use server"

import { serverClient } from "@/utils/supabase/server";




export async function getFoodData(name:string) {
    const supabase = await serverClient()

    const {data:food} = await supabase.from('food').select(`*`).eq("className",name );
    console.log(food?.[0].informarion);
    if(food == null) {
        return "failed"
    }

    return food?.[0].information
}