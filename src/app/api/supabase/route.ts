import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export const GET = async (req:Request)=>{
    try{
        const {data,error} = await supabase.from("contents").select("*");
        if(error){
                return NextResponse.json({message:"失敗しました",error},{status:500})
        }
    return NextResponse.json({message:"成功しました",data},{status:200})
    }catch(err){
    return NextResponse.json({message:"error",err},{status:500})
    }
   
}

