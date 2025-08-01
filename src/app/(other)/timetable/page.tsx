import { headers } from 'next/headers';
import { KaiseiDecol } from "@/app/fonts";
import { serverClient } from "@/utils/supabase/server"
import AllPlace from "@/components/timetable/allPlace";
import { Suspense } from "react";
import type { Metadata } from "next";
import BackTo from '@/components/global/back_button';

const kaiseiDecol = KaiseiDecol

export const metadata: Metadata = {
    title: "タイムテーブル | 第71回南高祭・展示の部2024",
    description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
};

export default async function page() {
    const headersList = headers();
    const header_url = headersList.get('x-url') || "";

    const supabase = await serverClient()

    const {data:event} = await supabase.from('new_content').select(`title, name, place, time`)

    if(event == null) {
        console.log("failed")
        return "failed"
    }

    const places = [
        "メインアリーナ", "サブアリーナ", "南高ホール", "職員室前", "プラネタリウム", "513教室", "和室"
    ]

    console.log("allイベント:" + event.length)

    const event_filter = places.map((value) => {
        const test = event.filter((e) => e.place.includes(value))
        console.log("place:" + test)

        return    {place:value, event:event.filter((e) => e.place.includes(value))}
    })

    const newEvent:any = []

    for(let i = 0; i < event_filter.length; i++) {
        const event = event_filter[i].event
        const edit_times = event_filter[i].event.map(({time}) => (
            time
        ))
        
        const newEventData:any = {onSep7:[], onSep8:[]}

        for(let n = 0; n < edit_times.length; n++) {
            const split_time_space = edit_times[n].split(" ")
            const timeStamp:any = []

            const [startDate97, endDate97, startDate98, endDate98] = [new Date(2024,8,7,9,0), new Date(2024,8,7,16,0), new Date(2024,8,8,9,0), new Date(2024,8,8,16,0)].map((value) => ( Math.floor(value.getTime() / 1000)))

            const [length97, length98] = [endDate97 - startDate97, endDate98 - startDate98] 

            // console.log("Date0907"+ new Date(2024,9,7,9,0))


            // if(split_time_space.length == 1) {
            //     console.log(split_time_space[0])
            //     const split:Array<string> = split_time_space[0].split("~")
            //     const edit_Times = split.map((value) => (
            //         value.split("-").map((value) => {if(value.length == 1){return "0"+value} else {value} }).join("-")
            //     ))
            //     const edit_times = split.map((value) => (
            //         value.split("-")
            //     ))
                
            //     console.log(edit_times[0])
            //     const timesForDate = edit_Times.map((value) => new Date(value))
                
            //     const TimeStamps = timesForDate.map((value) => (Math.floor(value.getTime() / 1000)))

            //     var [startPercent, contentPercent] = [0, 0]

            //     if(edit_Times[0].includes("09-07")) {
            //         const startLength = TimeStamps[0] - startDate97
            //         startPercent = startLength / length97 * 100
            //         const contentLength = TimeStamps[1] - TimeStamps[0]
            //         contentPercent = contentLength / length97 * 100
            //     }   else {
            //         const startLength = TimeStamps[0] - startDate98
            //         startPercent = startLength / length98 * 100
            //         const contentLength = TimeStamps[1] - TimeStamps[0]
            //         contentPercent = contentLength / length98 * 100
            //     }
            //     timeStamp.push({start:edit_Times[0], end:edit_Times[1], name:event[n].name, title:event[n].title, startPosition:startPercent, contentLength:contentPercent})
            // } else {
            //     for(let m = 0; m < split_time_space.length; m++) {
            //         const split:Array<string> = split_time_space[m].split("~")
            //         const edit_Times = split.map((value) => (
            //             value.split("-").map((value) => {if(value.length == 1){return "0"+value} else {value} }).join("-")
            //         ))
            //         console.log("edit_time" + edit_Times[0])
            //         const timesForDate = edit_Times.map((value) => new Date(value))

            //         const TimeStamps = timesForDate.map((value) => (Math.floor(value.getTime() / 1000)))

            //         var [startPercent, contentPercent] = [0, 0]
            //         var [startText, contentText] = ["", ""]

            //         if(edit_Times[0].includes("09-07")) {
            //             const startLength = TimeStamps[0] - startDate97
            //             startPercent = startLength / length97 * 100
            //             const contentLength = TimeStamps[1] - TimeStamps[0]
            //             contentPercent = contentLength / length97 * 100
            //         }   else {
            //             const startLength = TimeStamps[0] - startDate98
            //             startPercent = startLength / length98 * 100
            //             const contentLength = TimeStamps[1] - TimeStamps[0]
            //             contentPercent = contentLength / length98 * 100
            //         }

            //         startText = "top-[" + startPercent.toString() + "]"
            //         contentText = "h-["+ contentPercent.toString()+ "]"

            //         timeStamp.push({start:edit_Times[0], end:edit_Times[1], name:event[n].name, title:event[n].title, startPosition:startText, contentLength:contentText})
            //     }
            // }
            for(let m = 0; m < split_time_space.length; m++) {
                const split:Array<string> = split_time_space[m].split("~")
                const edit_TimesA = split.map((value) => (
                    value.split("-")
                ))

                const edit_timeB = edit_TimesA.map((value) => (
                    value.map((e) => (
                        Number(e)
                    ))
                ))

                const edit_Times = edit_TimesA.map((value) => (
                    value.join("-")
                ))

                // const edit_timeA = split.map((value) => (
                //     value.split("-")
                // ))
                // console.log("editA" + edit_timeA)

                // const edit_timeB = edit_timeA.map((value) => (
                //     value.map((e) => {if(e.length == 1){return "0"+e} else{return e} })
                // ))                
                // console.log("editB" + edit_timeB)

                // const edit_timeC = edit_timeB.map((value) => (
                //     value.join("-")
                // ))
                // console.log("editC" + edit_timeC)

                const timesForDate = edit_timeB.map((e) => {
                    // console.log(`times_number:${e[0]},${e[1]}, ${e[2]},${e[3]}`)
                    return new Date(e[0], e[1] - 1, e[2], e[3], e[4])
                })

                // const test = edit_timeB[0]
                // console.log("date"+ new Date(test[0], test[1] -1, test[2], test[3], test[4]))
                
                // console.log("time:"+ edit_timeB+ "  " + "name:" + event[n].name)
                // console.log("date:" + timesForDate)
                const TimeStamps = timesForDate.map((value) => (Math.floor(value.getTime() / 1000)))
                // console.log("timestamp:" + TimeStamps)

                var [startPercent, contentPercent] = [0, 0]
                var [startText, contentText] = ["", ""]

                // console.log(split[0])
                if(split[0].includes("9-7")) {
                    const startLength = TimeStamps[0] - startDate97
                    startPercent = startLength / length97 * 100
                    const contentLength = TimeStamps[1] - TimeStamps[0]
                    contentPercent = contentLength / length97 * 100
                }   else {
                    const startLength = TimeStamps[0] - startDate98
                    startPercent = startLength / length98 * 100
                    const contentLength = TimeStamps[1] - TimeStamps[0]
                    contentPercent = contentLength / length98 * 100
                }

                const [startPerString, contentPerString] = [startPercent, contentPercent].map((value) => (
                    (Math.round(value * 10) / 10).toString()
                ))

                startText = startPerString + "%"
                contentText = contentPerString + "%"

                // console.log("位置："+ startText)
                // console.log( "高さ:"+contentText + "\n")

                timeStamp.push({start:split[0], end:split[1], name:event[n].name, title:event[n].title, startPosition:startText, contentLength:contentText})
            }

            // newEventData.push({title:event[n].title, name:event[n].name, times:timeStamp})

            // console.log(timeStamp)

            const onSep7 = timeStamp.filter((e:any) => e.start.includes("9-7"))
            const onSep8 = timeStamp.filter((e:any) => e.start.includes("9-8"))
            // console.log( "9/7 " +onSep7,)
            // console.log("9/8 " +onSep8)
            // console.log("onSep7:"+onSep7)
            // console.log("onSep8:"+onSep8)

            const anyArray = onSep7.map((t:any) => {
                newEventData.onSep7.push(t)
            })
            const anyArray2 = onSep8.map((t:any) => {
                newEventData.onSep8.push(t)
            })
            // newEventData.onSep7 = onSep7
            // newEventData.onSep8 = onSep8
            // console.log(newEventData)
        }

        // console.log("newEventData:"+newEventData)
        newEvent.push({place:event_filter[i].place, event:newEventData})
        console.log(newEvent)
    }

    // const test = newEvent.map((value:any) => (
    //     console.log("onSep7:"+ value.event.onSep7.length + "\n"
    //         + "onSep8:" + value.event.onSep8.length
    //     )
    // ))


    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "南高祭",
        "startDate": "2025-09-07T09:30",
        "location": {
            "@type": "Place",
            "name": "横浜市立南高等学校・附属中学校",
            "address": {
            "@type": "PostalAddress",
            "addressRegion": "神奈川県",
            "addressLocality": "横浜市",
            "streetAddress": "港南区東永谷2丁目1-1"
                }
        },
        "description": "イベントのタイムテーブルです。一部開催時間が限られているイベントがございますのでご注意ください。",
        "image": [
            "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
        ],
    };

    return(
        <div className="py-[30vw] 2xl:py-40 lg:py-32 h-full bg-white">
            <h2 className={`${kaiseiDecol.className} text-center text-[12vw] 2xl:text-8xl lg:text-6xl text-[darkturquoise]`}>タイムテーブル</h2>
            {/* <div className="my-[10vw]">
                <NotReady></NotReady>
            </div> */}
            <div className="mt-[5vw]  lg:mt-0 lg:pl-0">
                <Suspense>
                    <AllPlace content={newEvent}></AllPlace>
                </Suspense>
                
            </div>
            <div>
                <BackTo link="/" name="トップ"></BackTo>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}