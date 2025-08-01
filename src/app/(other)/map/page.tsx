"use client"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image"
import Link from "next/link";
import { KaiseiDecol } from "@/app/fonts";
import { useEffect, useState } from "react";
import { getEvents } from "./getEventData";
import { SlArrowRightCircle } from "react-icons/sl";
import BackTo from "@/components/global/back_button";

const kaiseiDecol = KaiseiDecol

type events = Array<
    {
        className:string
        title:string,
        comment:string,
        place:string,
        time:string,
        type:string,
        available:boolean
    }
>

export default function Page() {
    const [data, setData] = useState<events>()

    useEffect(() => {
        if(name == undefined) {
            return
        }

        const getData = async () => {
            const result = await getEvents() 
            if(result == null) {
                return
            }
            setData(result)
        }

        getData()
    },[])

    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "南高祭",
        "startDate": "2024-09-07T09:30",
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
        "description": "全体のフロアマップです。ご興味のある展示の開催場所を確認できます。",
        "image": [
            "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
        ],
    };

    const mapImages = [
        {floor:"1階", href:"/フロアマップ1.png"},
        {floor:"2階", href:"/フロアマップ2.png"},
        {floor:"3階", href:"/フロアマップ3.png"},
        {floor:"4階", href:"/フロアマップ4.png"},
        {floor:"5階", href:"/フロアマップ5.png"},
    ]
    const imgs = [
        {img:"/フロアマップ1.png", test:[
            {num:"1",name:"高校3年1組"},
            {num:"2",name:"高校3年2組"},
            {num:"3",name:"高校3年3組"},
            {num:"4",name:"高校3年4組"},
            {num:"5",name:"高校3年5組"},
            {num:"6",name:"生徒会本部"},
            {num:"7",name:"高校文芸同好会"},
            {num:"8",name:"書道部"},
        ]},
        {img:"/フロアマップ2.png", test:[
            {num:"9",name:"中学1年1組"},
            {num:"10",name:"中学1年2組"},
            {num:"11",name:"中学1年3組"},
            {num:"12",name:"中学1年4組"},
            {num:"13",name:"高校1年1組"},
            {num:"14",name:"高校1年2組"},
            {num:"15",name:"高校1年3組"},
            {num:"16",name:"高校1年4組"},
            {num:"17",name:"高校1年5組"},
            {num:"18",name:"M-box"},
            {num:"19",name:"美術部"},
            {num:"20",name:"図書委員会"},
            {num:"21",name:"書道部"},
            {num:"22",name:"高校軽音楽部"},
            {num:"23",name:"高校ダンス部"},
            {num:"24",name:"吹奏楽部"},
            {num:"25",name:"茶道部"},
            {num:"26",name:"中学演劇部"},
            {num:"27",name:"高校演劇部"},
            {num:"28",name:"弦楽部"},
        ]},
        {img:"/フロアマップ3.png", test:[
            {num:"29",name:"70・10周年委員会"},
            {num:"30",name:"PTA"},
            {num:"31",name:"PTA合唱団"},
            {num:"32",name:"風の章実行委員会"},
            {num:"33",name:"高校料理部"},
            {num:"34",name:"PTAリサイクル"},
            {num:"35",name:"科学部"},
            {num:"36",name:"プラネタリウム"},
        ]},
        {img:"/フロアマップ4.png", test:[
            {num:"37",name:"中学2年1組"},
            {num:"38",name:"中学2年2組"},
            {num:"39",name:"中学2年3組"},
            {num:"40",name:"中学2年4組"},
            {num:"41",name:"高校2年1組"},
            {num:"42",name:"高校2年2組"},
            {num:"43",name:"高校2年3組"},
            {num:"44",name:"高校2年4組"},
            {num:"45",name:"高校2年5組"},
        ]},
        {img:"/フロアマップ5.png", test:[
            {num:"46",name:"中学3年1組"},
            {num:"47",name:"中学3年2組"},
            {num:"48",name:"中学3年3組"},
            {num:"49",name:"中学3年4組"},
            {num:"50",name:"母親の読書会"},
            {num:"51",name:"学校説明"},
            {num:"52",name:"港南区選挙管理委員会"},
            {num:"53",name:"同窓会"},
        ]},
    ]

    const getTitle = (name:string) => {
        console.log(name)
        const found = data?.find((value) => (
            value.className == name
        ))

        return found?.title 
    }

    

    return (
        <div className="py-[30vw] 2xl:py-40 lg:py-32">
            <title>フロアマップ</title>      
            <h1 className={`${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise] lg:text-6xl 2xl:text-8xl`}>フロアマップ</h1>

            <div className="hidden lg:block 2xl:mt-20 lg:mt-14">
                {imgs.map((value, index) => (
                    <div key={index} className={`grid grid-cols-[repeat(2,1fr)] min-h-[500px]  w-[90%] mx-auto 2xl:mb-32 mb-16 relative
                    ${value.test.length < 10 ? "grid-rows-[80svh]" : "xl:grid-rows-[140svh] grid-rows-[150svh]"}`}>
                        <div className="absolute ">
                            <p className="text-6xl text-gray-500">{index + 1}F</p>
                        </div>
                        <div className="">
                            <Image src={value.img} alt="フロアマップ" width={1000} height={2000} className="h-full object-contain"></Image>
                        </div>
                        <div className={`flex content-start flex-wrap `}>
                            <div className={`${data! ? "hidden": "block"} `}>
                                <p className="text-xl my-10 mx-10">Loading...</p>        
                            </div>
                            {value.test.map((n,i) => (
                                <Link href={{pathname:"/event/introduction", query:{name:n.name}}} key={i} className={`rounded-lg flex-grow-0 items-center bg-white drop-shadow-sm border-2 border-slate-100 relative text-blue-900 block w-[45%] h-auto 2xl:py-5 py-4 2xl:px-4 px-2 2xl:mx-5 lg:mx-2 2xl:my-3 my-2  ${data! ? "opacity-100" : "opacity-0"} `}>
                                    <p className="2xl:text-sm text-xs 2xl:mb-2 mb-1" >#{n.num}&ensp;{n.name}</p> 
                                    <p className="2xl:text-xl xl:text-base text-xs flex justify-between items-center text-nowrap w-full overflow-hidden">{getTitle(n.name)} <SlArrowRightCircle className="2xl:mr-4 mr-2 absolute right-0 bg-white rounded-full shadow-lg shadow-slate-200"></SlArrowRightCircle></p>
                                    
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-[15vw] w-full lg:hidden">
                {mapImages.map((value, index) => (
                    <div className="my-[15vw]" key={value.href}>
                        <div className="flex  mx-[4vw] mb-[7vw] relative">
                            <div className=" w-[2vw] bg-[darkturquoise]"></div>
                            <p className={`${kaiseiDecol.className} text-[10vw] ml-[2vw] text-[darkturquoise] `}>{value.floor}</p>
                            <p className="left-1/2 -translate-x-1/2 -bottom-1/3 absolute text-nowrap text-[3vw] bg-gray-300 px-[2vw] text-white rounded-xl">ズーム・ドラッグで全体を見渡せます</p>
                        </div>
                        <TransformWrapper
                            smooth={true} 
                            wheel={{
                                step:0.5,
                                smoothStep:0.003
                            }}
                            initialPositionX={-100}
                            initialPositionY={-100}
                            centerZoomedOut={false}

                            initialScale={1.2}
                            minScale={0.5}
                        >
                            <TransformComponent
                                wrapperStyle={{
                                    width:"auto",
                                    aspectRatio:"1/1",
                                    margin:"0 4vw",
                                    borderRadius:"2vw",
                                    cursor:"pointer",
                                    border:"solid",
                                    borderWidth:"0.8vw",
                                    borderColor:"#EEEEEE"
                                }}

                                contentStyle={{
                                    width:"120vw",
                                    padding:"10vw",
                                }}
                            >
                                <Image src={value.href} alt="フロアマップ" width={1000} height={2000}></Image>
                            </TransformComponent>
                        </TransformWrapper>
                        <div className="  mt-[3vw]">
                            <p className="text-center text-[3.5vw] text-gray-400">展示一覧</p>
                            <div className="flex flex-wrap mx-[4vw] justify-center mt-[1vw]">
                                {imgs[index].test.map((value, index) => (
                                    <div key={index} className="pr-[2vw]">
                                        <Link href={{pathname:"/event/introduction", query:{name:value.name}}} className="text-[2.8vw] text-gray-500">#{value.num} {value.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

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