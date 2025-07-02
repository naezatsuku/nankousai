import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { Database, PostData } from "@/types";

type ClassData={
    className:string;
    waitTime:number;
}
export const GET = async (req:Request)=>{
    try{
        const {searchParams} = new URL(req.url);
        const CardId =Number( searchParams.get("CardId"));
        const {data,error} = await supabase.from("contents").select("*").eq("id",CardId);
        
        const waitTime = data?.[0]?.waitTime ?? 0;
        const prevTime = data?.[0]?.prevTime ?? 0;
        
    return NextResponse.json({message:"成功しました",CardId,error,waitTime,prevTime},{status:200})
    }catch(err){
    return NextResponse.json({message:"error",err},{status:500})
    }
   
}
export const PATCH = async (req: Request) => {
  try {
    const {data,error} = await supabase.from("contents").select("*");
     
    return NextResponse.json({data}, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Server error', error: error.message || error.toString() },
      { status: 500 }
    );
  }
};
