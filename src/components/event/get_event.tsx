export const dynamic   = "force-dynamic";
export const revalidate = 0;

import { serverClient } from "@/utils/supabase/server";
import ShowEvent from "./show_event_all";
import { fileURLToPath } from "url";

export default async function GetEvent() {
    const supabase = await serverClient()
    
    const {data:events} = await supabase.from('contents').select(`*` );
    const {data:new_event} = await supabase.from('new_content').select(`*` );

    const allEvents = events?.concat(new_event);
    console.log(allEvents)
    let eventData = []
    

   

    
    for(let i = 0; i < allEvents!.length; i++) {
        const item = allEvents![i]
        let tags = [item.type, item.className]
        let types = [item.type]
        
        let keyword = ["高校", "中学"] 
        for(let i = 0; i < keyword.length; i++) {
            if(item.className.includes(keyword[i])) {
                tags.push(keyword[i])
            }
        }

        if(item.className.includes("組")) {
            tags.push(item.className.slice(0, -2))
        }

        if(item.className.includes("高校3年")) {
            tags.push("フード")
        }

        if(item.type.includes("展示")) {
            tags.push("展示")
        }

        if(item.genre != null) {
            tags.push(item.genre)
            types.push(item.genre)
        }

        if(item.time == null) {
            item.time = ["終日開催"]
        } else {
            const splitTime = item.time.split(" ")
            const editedTimeText = splitTime.map((value:string) => (
                value.split("~")
            ))
            var newTimes:any = []
            for(let i = 0; i < editedTimeText.length; i++) {
                const time = editedTimeText[i]
                const newTime = time.map((value:string) =>(
                    value.replace("2024-", "").split("-")
                ))
                const timeNeo = newTime.map((value:Array<string>) => {
                    // console.log(item.name)
                    // console.log(splitTime + " "+ value[3])
                    if(value[3].length == 1){
                        return value[2] + ":0" + value[3]
                    } else {
                        return value[2] + ":" + value[3]
                    }
                })

                var result:string = ""
                if(time[0].includes("9-7")) {

                    result = "9/7 "+ timeNeo[0] + "~" + timeNeo[1]
                } else {
                    result = "9/8 "+ timeNeo[0] + "~" + timeNeo[1]
                }
                newTimes.push(result)
            }
            item.time= newTimes
        }
 

        item.types = types
        item.tags = tags
        if(item.imageURL){
            const filePath = item.imageURL;
            const version = item.imageVersion;
            const {data}= supabase
            .storage
            .from("class-img")
            .getPublicUrl(filePath)
            const url = `${data.publicUrl}?v=${version}`;
            item.img=url;
        }else{
            item.img= null;
        }
        
        
        const {type,language, genre, create_at, ...newItem} = item

        eventData.push(newItem)
    }


    console.log(eventData)
    return(
        <div>
            <ShowEvent contents={eventData}></ShowEvent>
            
        </div>
    )
}