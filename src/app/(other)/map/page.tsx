"use client"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image"
import Link from "next/link";
import { KaiseiDecol } from "@/app/fonts";
import { useEffect, useState } from "react";
import { getEvents } from "./getEventData";
import { SlArrowRightCircle } from "react-icons/sl";
import BackTo from "@/components/global/back_button";
import { title } from "process";

const kaiseiDecol = KaiseiDecol

type event = {
        id:number
        className:string;
        place:string;
        time:Array<string>;
        comment:string;
        title:string;
        available:boolean;
        img:string;
        types:Array<string>;
        tags:Array<string>;
        prevTime:number
        waitTime:number
    }

type events = Array<
    event
>

type area = {       
    name:string,
    positionX:string,
    positionY:string,
        width:string,
    height:string,
    width_num:number,
    height_num:number,
}   


export default function Page() {
    const [data, setData] = useState<events>()

    useEffect(() => {
        const getData = async () => {
            const result = await getEvents() 
            if(result == null) {
                return
            }
            setData(result)
        }

        getData()
    },[]);

    // 下のcoordinateはこのmap_imgの画像に合わせて配置されています
    // まだ下の画像を調整中ですが、（校舎の構造が変わらない限り）どの年度も対応できると思います
    const map_img = [
        {floor:1, href:"/floor1.png",size:[2635, 3714]},
        {floor:2, href:"/floor2.png",size:[2348,3529]},
        {floor:3, href:"/floor3.png",size:[1641,3847]},
        {floor:4, href:"/floor4.png",size:[2542, 3671]},
        {floor:5, href:"/floor5.png",size:[2114, 3511]},
    ];

    const coordinatesOfArea = [
        {coordinate:"57,2895,645,3515", name:"食堂",floor:1}, 
        {coordinate:"1384,2332,2049,2920", name:"南高ホール",floor:1}, 
        {coordinate:"1155,2224,1378,2330", name:"エントランス前",floor:1}, 
        {coordinate:"906,932,2113,1668", name:"くすのき広場",floor:1}, 
        {coordinate:"1348,302,2172,611", name:"駐車場",floor:1}, 
        {coordinate:"429,2113,566,2335", name:"職員室前",floor:1}, 
        {coordinate:"645,2451,733,2588", name:"エレベーター前",floor:1}, 
        {coordinate:"104,91,524,653", name:"サブアリーナ",floor:2}, 
        {coordinate:"526,94,1115,1135", name:"メインアリーナ",floor:2}, 
        {coordinate:"1163,2261,1656,2867", name:"南高ホール",floor:2}, 
        {coordinate:"916,2214,1167,2356", name:"パイの実",floor:2},
        {coordinate:"1442,1275,1986,2159", name:"図書館",floor:2},
        {coordinate:"525,1384,722,1576", name:"中学1年4組",floor:2},
        {coordinate:"525,1577,721,1770", name:"中学1年3組",floor:2},
        {coordinate:"524,1775,718,1968", name:"中学1年2組",floor:2},
        {coordinate:"523,1968,720,2160", name:"中学1年1組",floor:2},
        {coordinate:"108,1577,448,1769", name:"工芸室",floor:2},
        {coordinate:"105,1966,251,2283", name:"美術室",floor:2},
        {coordinate:"106,2457,452,2647", name:"書道室",floor:2},
        {coordinate:"253,2649,448,2841", name:"和室",floor:2},
        {coordinate:"255,3113,522,3426", name:"音楽室",floor:2},
        {coordinate:"523,3183,674,3427", name:"アンサンブル室",floor:2},
        {coordinate:"721,2455,919,2648", name:"高校1年5組",floor:2},
        {coordinate:"723,2650,921,2843", name:"高校1年4組",floor:2},
        {coordinate:"722,2843,920,3036", name:"高校1年3組",floor:2},
        {coordinate:"721,3040,919,3233", name:"高校1年2組",floor:2},
        {coordinate:"721,3233,919,3426", name:"高校1年1組",floor:2},
        {coordinate:"653,80,1134,610", name:"化学実験室",floor:3},
        {coordinate:"784,792,1135,1138", name:"生物・化学センター",floor:3},
        {coordinate:"122,1141,388,1491", name:"プラネタリウム",floor:3},
        {coordinate:"787,1321,1489,1842", name:"生物実験室",floor:3},
        {coordinate:"125,2025,651,2376", name:"理科講義室",floor:3},
        {coordinate:"1141,2021,1486,2549", name:"物理実験室",floor:3},
        {coordinate:"1135,3255,1490,3782", name:"地学実験室",floor:3},
        // 名前怪しい↓
        {coordinate:"1138,2728,1488,3079", name:"地学情報センター",floor:3},
        {coordinate:"300,2377,652,2638", name:"319教室",floor:3},
        {coordinate:"303,2636,654,2904", name:"320教室",floor:3},
        {coordinate:"303,2904,654,3172", name:"321教室",floor:3},
        {coordinate:"301,3170,652,3438", name:"322教室",floor:3},
        {coordinate:"304,3434,655,3702", name:"323教室",floor:3},
        {coordinate:"1112,240,1460,593", name:"高校2年5組",floor:4},
        {coordinate:"1112,596,1460,949", name:"高校2年4組",floor:4},
        {coordinate:"1114,949,1462,1302", name:"高校2年3組",floor:4},
        {coordinate:"1113,1300,1461,1653", name:"高校2年2組",floor:4},
        {coordinate:"1114,1654,1462,2007", name:"高校2年1組",floor:4},
        {coordinate:"1463,2179,1812,2531", name:"中学2年4組",floor:4},
        {coordinate:"1466,2534,1815,2886", name:"中学2年3組",floor:4},
        {coordinate:"1467,2885,1816,3237", name:"中学2年2組",floor:4},
        {coordinate:"1465,3238,1814,3590", name:"中学2年1組",floor:4},
        {coordinate:"628,1651,976,1999", name:"高校3年3組",floor:4},
        {coordinate:"628,2181,976,2529", name:"高校3年4組",floor:4},
        {coordinate:"627,2535,975,2883", name:"高校3年5組",floor:4},
        {coordinate:"627,2885,977,3455", name:"放送室",floor:4},
        {coordinate:"662,784,1010,1134", name:"中学3年4組",floor:5},
        {coordinate:"661,1136,1009,1486", name:"中学3年3組",floor:5},
        {coordinate:"662,1491,1010,1841", name:"中学3年2組",floor:5},
        {coordinate:"1016,2020,1364,2370", name:"中学3年1組",floor:5},
        {coordinate:"1014,2372,1274,2719", name:"高校3年5組",floor:5},
        {coordinate:"627,2535,975,2883", name:"数学科講義室",floor:5},
        {coordinate:"177,2018,525,2277", name:"512教室",floor:5},
        {coordinate:"176,2282,524,2541", name:"513教室",floor:5},
        {coordinate:"176,2550,524,2809", name:"514教室",floor:5},
    ]

    let map_filtered:Array<{floor:number, class:events, time_limited:events, other:events, areas:Array<area>}> = map_img.map((value) => 
        ({floor:value.floor, class:[], time_limited:[], other:[], areas:[]})
    );

    coordinatesOfArea.forEach((d) => {
        const coordinates_splitted = d.coordinate.split(",").map((item) => Number(item))
        const img_width = map_img[d.floor - 1].size[0]
        const img_height = map_img[d.floor - 1].size[1]

        const push_data = {
            name:d.name, positionX:String(coordinates_splitted[0] / img_width * 100), positionY:String(coordinates_splitted[1] / img_height * 100), width:String((coordinates_splitted[2] - coordinates_splitted[0]) / img_width * 100), height:String(coordinates_splitted[3] - coordinates_splitted[1] / img_height * 100), height_num:(coordinates_splitted[3] - coordinates_splitted[1]), width_num:(coordinates_splitted[2] - coordinates_splitted[0]) 
        }

        map_filtered[d.floor - 1].areas.push(push_data)
    })

    data?.forEach((value) => {
        let name_modified = ""
        if(value.place != null) {
            if(value.place.includes("教室")) {
                name_modified = value.place.replace("教室","");
            } if(value.place.includes("-")) {
                let name_splitted = value.place.split("-");
                name_modified = name_splitted[0] + "年" + name_splitted[1] + "組" 
            }
        }
        

        const place_found = coordinatesOfArea.find(d => {
            return d.name == name_modified
        })

        let target_floor:number = 0;
        if(place_found != undefined) {
            target_floor = map_filtered.findIndex(d => {
                return d.floor = place_found.floor
            })
        }

        if (!(value.time[0] == "終日開催" || value.time[0] == "")) {
            map_filtered[target_floor].time_limited.push(value)
            return
        }

        if(value.types != undefined) {
            if(value.types.includes("クラス展示")) {
                map_filtered[target_floor].class.push(value)
                return
            }
        }

        map_filtered[target_floor].other.push(value)
    })

    const [hovered, setHovered] = useState("")

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
        {floor:"1階", href:"/0001.png"},
        {floor:"2階-1", href:"/0002.png"},
        {floor:"2階-2", href:"/0003.png"},
        {floor:"3階", href:"/0004.png"},
        {floor:"4階", href:"/0005.png"},
        {floor:"5階", href:"/0006.png"},
    ]
    // const imgs = [
    //     {img:"/フロアマップ1.png", test:[
    //         {num:"1",name:"高校3年1組"},
    //         {num:"2",name:"高校3年2組"},
    //         {num:"3",name:"高校3年3組"},
    //         {num:"4",name:"高校3年4組"},
    //         {num:"5",name:"高校3年5組"},
    //         {num:"6",name:"生徒会本部"},
    //         {num:"7",name:"高校文芸同好会"},
    //         {num:"8",name:"書道部"},
    //     ]},
    //     {img:"/フロアマップ2.png", test:[
    //         {num:"9",name:"中学1年1組"},
    //         {num:"10",name:"中学1年2組"},
    //         {num:"11",name:"中学1年3組"},
    //         {num:"12",name:"中学1年4組"},
    //         {num:"13",name:"高校1年1組"},
    //         {num:"14",name:"高校1年2組"},
    //         {num:"15",name:"高校1年3組"},
    //         {num:"16",name:"高校1年4組"},
    //         {num:"17",name:"高校1年5組"},
    //         {num:"18",name:"M-box"},
    //         {num:"19",name:"美術部"},
    //         {num:"20",name:"図書委員会"},
    //         {num:"21",name:"書道部"},
    //         {num:"22",name:"高校軽音楽部"},
    //         {num:"23",name:"高校ダンス部"},
    //         {num:"24",name:"吹奏楽部"},
    //         {num:"25",name:"茶道部"},
    //         {num:"26",name:"中学演劇部"},
    //         {num:"27",name:"高校演劇部"},
    //         {num:"28",name:"弦楽部"},
    //     ]},
    //     {img:"/フロアマップ3.png", test:[
    //         {num:"29",name:"70・10周年委員会"},
    //         {num:"30",name:"PTA"},
    //         {num:"31",name:"PTA合唱団"},
    //         {num:"32",name:"風の章実行委員会"},
    //         {num:"33",name:"高校料理部"},
    //         {num:"34",name:"PTAリサイクル"},
    //         {num:"35",name:"科学部"},
    //         {num:"36",name:"プラネタリウム"},
    //     ]},
    //     {img:"/フロアマップ4.png", test:[
    //         {num:"37",name:"中学2年1組"},
    //         {num:"38",name:"中学2年2組"},
    //         {num:"39",name:"中学2年3組"},
    //         {num:"40",name:"中学2年4組"},
    //         {num:"41",name:"高校2年1組"},
    //         {num:"42",name:"高校2年2組"},
    //         {num:"43",name:"高校2年3組"},
    //         {num:"44",name:"高校2年4組"},
    //         {num:"45",name:"高校2年5組"},
    //     ]},
    //     {img:"/フロアマップ5.png", test:[
    //         {num:"46",name:"中学3年1組"},
    //         {num:"47",name:"中学3年2組"},
    //         {num:"48",name:"中学3年3組"},
    //         {num:"49",name:"中学3年4組"},
    //         {num:"50",name:"母親の読書会"},
    //         {num:"51",name:"学校説明"},
    //         {num:"52",name:"港南区選挙管理委員会"},
    //         {num:"53",name:"同窓会"},
    //     ]},
    // ]



    //今後高校の教室配置がたぶん変わるので過去の教室情報を参照してnameの場所だけ編集してください。
    //https://labs.d-s-b.jp/ImagemapGenerator/に上記のmap_imgを読み込ませて座標を取得しました




    

    return (
        <div className="py-[30vw] 2xl:py-40 lg:py-32">
            <title>フロアマップ</title>      
            <h1 className={`${kaiseiDecol.className} text-center text-[12vw]  lg:text-6xl 2xl:text-8xl`}>フロアマップ</h1>

            {/* <div className="hidden lg:block 2xl:mt-20 lg:mt-14">
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
            </div> */}
            <div className="hidden">
                {map_img.map((value, index) => (
                    <div key={index} className="w-[85vw] mx-auto flex flex-wrap">
                        <div className="w-full relative">  
                            <Image src={value.href} alt={`${value.floor}階の画像`} width={value.size[0]} height={value.size[1]} className="w-full" style={{aspectRatio:value.size[0]/value.size[1]}}>
                            </Image>
                            {map_filtered[index].areas.map((map_value, map_index) => (
                                <div key={map_index} id={map_value.name} 
                                style={{
                                    left:map_value.positionX+ "%",
                                    top:map_value.positionY + "%",
                                    width:map_value.width + "%",
                                    aspectRatio:map_value.width_num / map_value.height_num 
                                }}
                                className={`absolute bg-red-500 opacity-20 hidden ${hovered == map_value.name && "block"}`}>
                                </div>
                            ))}
                        </div>
                        <div className="w-full">

                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden lg:block 2xl:mt-20 lg:mt-14 xl:mx-40 mx-16">
                {mapImages.map((value, index) => (
                    <div className="w-full aspect-auto mb-20" key={index}>
                        <Image src={value.href} alt="フロアマップ" width={2000} height={1000} className="w-full aspect-auto"></Image>
                    </div>
                ))}
            </div>

            <div className="my-[15vw] w-full lg:hidden">
                {mapImages.map((value, index) => (
                    <div className="my-[15vw]" key={value.href}>
                        <div className="flex  mx-[4vw] mb-[7vw] relative">
                            <div className=" w-[2vw]   base-bg"></div>
                            <p className={`${kaiseiDecol.className} text-[10vw] ml-[2vw]  `}>{value.floor}</p>
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
                        {/* <div className="  mt-[3vw]">
                            <p className="text-center text-[3.5vw] text-gray-400">展示一覧</p>
                            <div className="flex flex-wrap mx-[4vw] justify-center mt-[1vw]">
                                {imgs[index].test.map((value, index) => (
                                    <div key={index} className="pr-[2vw]">
                                        <Link href={{pathname:"/event/introduction", query:{name:value.name}}} className="text-[2.8vw] text-gray-500">#{value.num} {value.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                ))}

            </div>
            <div>
                {/* <BackTo link="/" name="トップ"></BackTo> */}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}