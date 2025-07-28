
import { serverClient } from "@/utils/supabase/server";
import ShowEvent from "./show_event_all";

export default async function GetEvent() {
    const supabase = await serverClient()

    const {data:events} = await supabase.from('contents').select(`*` );

    

    const allEvents = events

    let eventData = []

    
    for(let i = 0; i < allEvents!.length; i++) {
        const item = allEvents![i]
        let tags = [item.type, item.className]
        let types = [item.type]
        
        const  keyword = ["高校", "中学"] 
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

        types.push(item.type);
        const genres = item.genre;
        if(!genres || genres.length == 0){
            //types.push("ジャンル未指定");
            
        }else{
            console.log(item.className,item.genre)
            tags = [...tags,...item.genre];
            types = [...types,...item.genre];
    }
        if(!item.time){
            item.time = ["終日開催"]
        }else{
            item.time = item.time;
        }


        item.types = Array.from(new Set(types));
        item.tags  = Array.from(new Set(tags));
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
     console.log(eventData);


    return(
        <div>
            <ShowEvent contents={eventData}></ShowEvent>
        </div>
    )
}