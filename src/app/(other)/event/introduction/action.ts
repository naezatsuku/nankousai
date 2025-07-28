"use server"

import { serverClient } from "@/utils/supabase/server";



export async function getEventDetails(name:string) {
    const supabase = await serverClient()

    const {data:event} = await supabase.from('contents').select(`*` );

    

    const allEvents = event

    if(allEvents == null) {
        
        return "failed"
    }

    const newContent = allEvents?.find((value) => (
        value.className == name
    ))

     //console.log(newContent)

    const {data:detail} = await supabase.from('introduction').select(`title, content`).eq("className", name)
    
    let details:any = []

    if(detail == null) {
        if(newContent != null) {
            details = [{title:"何か", content:"テキストテキスト"}]     
        } else {
            return "failed"
        }
    } else {
        details = detail
    }

    const newEvent = newContent
    
    if(!newEvent.time){
        newEvent.time=["終日開催"]
    }
    if(newContent.time == null) {   
        newEvent.time = ["終日開催"] 
    } else {
        newEvent.time = newEvent.time;
    }
   
    const tags = [newEvent.type]
    
    const keyword = ["高校", "中学"] 
    for(let i = 0; i < keyword.length; i++) {
        if(name.includes(keyword[i])) {
            tags.push(keyword[i])
        }
    }

    if(name.includes("組")) {
        tags.push(name.slice(0, -2))
    }

    if(newEvent.type.includes("展示")) {
        tags.push("展示")
    }

    if(newEvent.genre != null) {
        tags.push(newEvent.genre)
    }

    const flattened = tags.flat();  // tags.flat(1) と同義
    newEvent.tags = flattened.filter((tag, idx, arr) =>
      arr.indexOf(tag) === idx
    );

    // console.log(tags)
    //ここにURLを作る新しく作ったimgにそれを保存これは背景のがぞうのURLです
    if(newEvent.imageBackURL){
            const filePath = newEvent.imageBackURL;
            const version = newEvent.imageVersion;
            const {data}= supabase
            .storage
            .from("class-img")
            .getPublicUrl(filePath)
            const url = `${data.publicUrl}?v=${version}`;
            newEvent.img=url;
            console.log(newEvent.img)
        }else{
            newEvent.img= null;
        }

    const result = {
        event:newEvent, detail:details
    }
    
    return result
}
