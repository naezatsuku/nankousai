"use client"
import { KaiseiDecol } from "@/app/fonts";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { UndisclosedPage } from "@/components/global/parts/loading";

const kaiseiDecol = KaiseiDecol

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [visible,setVisible] = useState<boolean>(true);
    const [comment,setComment] = useState<string>("");
    // イベントが閲覧可能かどうかを確認
    useEffect(()=>{
        const fetch = async ()=>{
            const {data,error} = await supabase.from("others").select("data").eq("DATANAME","EventVisible")
            if(!data || data.length === 0 || error){
                setVisible(true);
                
                //ここでtrueにするのは、本番の時にたくさんのアクセスが集中してdatabaseから取得できない可能性があるから、
                //あくまでも、アクセスが少ない準備期間中に機能させたい
                 return console.log(error)
            };
            //console.log(data[0].data.available)
            setVisible(data[0].data.available);
            setComment(data[0].data.comment)
        }
        fetch();
    })

    return (
        <div>
            {visible ? (
              <div className="z-0">{children}</div>
            ) : (
              <UndisclosedPage message={comment}/>
            )}
        </div>
    );
}