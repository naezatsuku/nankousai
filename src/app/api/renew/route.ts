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
    const requestData = await req.json();

    const results = await Promise.all(
      requestData.map(async (newData: any) => {
        
        const { className, waitTime: newWaitTime } = newData;
        const { data: record, error: selectError } = await supabase
          .from('contents')
          .select('id, waitTime')
          .eq('className', className)
          .single();
        
        if (selectError || !record) {
          return { className, error: selectError || 'Record not found' };
        }

        // 現在の waitTime 
        const currentWaitTime = record.waitTime;

        // prevTimeに現在のwaitTimeに、waitTimeに新しい時間を更新
        const { data: updatedData, error: updateError } = await supabase
          .from('contents')
          .update({
            prevTime: currentWaitTime,
            waitTime: newWaitTime,
          })
          .eq('id', record.id)
          .select();
          
         console.log(updatedData,updateError);
        if (updateError) {
          return { className, error: updateError };
        }
        return { className, updated: updatedData };
      })
    );

    return NextResponse.json({ results }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Server error', error: error.message || error.toString() },
      { status: 500 }
    );
  }
};
