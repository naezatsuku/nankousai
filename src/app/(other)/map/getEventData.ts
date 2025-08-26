"use server"
import { serverClient } from "@/utils/supabase/server"

export async function getEvents() {
    const supabase = await serverClient()

    const {data:event} = await supabase.from('contents').select(`*` );


    const allEvents = event

    if(allEvents == null) {
        return
    }

    return allEvents
}