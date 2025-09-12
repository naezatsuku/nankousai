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
import { table } from "console";
import { PiPolygon } from "react-icons/pi";
import path from "path";
import { number } from "motion/react";

const kaiseiDecol = KaiseiDecol

type event = {
    id:number
    className:string;
    place:string;
    place_modified:string;
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
    width_relative:string,
    height_relative:string,
    width_num:number,
    height_num:number,
    coordinate:Array<number>,
    path:string,
    type:string
}   

type filtered = {floor:number, class:events, all:events, time_limited:events, other:events}


export default function Page() {
    const [filteredData, setFilteredData] =useState<Array<filtered>>() 

    useEffect(() => {
        let filtered:Array<filtered> = map_img.map((value) => 
        ({floor:value.floor ,class:[], time_limited:[], all:[],other:[]}));

        const getData = async () => {
            const result = await getEvents() 
            if(result == null) {
                return 
            }


            result.forEach((value) => {

                let name_modified = ""
                if(value.place != null) {
                    name_modified = value.place
                    if(value.place.includes("教室")) {
                        name_modified = value.place.replace("教室","");
                    } if(value.place.includes("-")) {
                        let name_splitted = name_modified.split("-");
                        name_modified = name_splitted[0] + "年" + name_splitted[1] + "組" 
                    }
                }
                

                let floor:Array<number> = []
                coordinatesOfArea.forEach((d) => {
                    if(d.name == name_modified) {
                        floor.push(d.floor)
                    }
                })

                value.place_modified = name_modified 
                if(floor.length > 0) {
                    floor.forEach((n) => {
                        filtered[n - 1].all.push(value)
                        if (!(value.time[0] == "終日開催" || value.time[0] == "")) {
                            filtered[n -1].time_limited.push(value)
                            return
                        } else if(value.types != undefined) {
                            if(value.types.includes("クラス展示")) {
                                filtered[n-1].class.push(value)
                                return
                            } else {
                                filtered[n -1].other.push(value)
                            }
                        } else {
                            filtered[n -1].other.push(value)
                        }
                        
                        console.log(filtered[n-1])
                    })
                }
            })

             setFilteredData(filtered)
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
        {coordinate:"648,3507,115,3507,115,3425,87,3425,85,3395,59,3395,59,3004,83,3002,87,2979,113,2974,115,2888,646,2890", name:"食堂",floor:1, type:"polygon"}, 
        {coordinate:"1433,2334,1994,2334,1991,2809,2047,2809,2050,2918,1382,2918,1377,2809,1435,2806", name:"南高ホール",floor:1, type:"polygon"}, 
        {coordinate:"1375,2332,1155,2223", name:"エントランス前",floor:1, type:"rect"}, 
        {coordinate:"906,932,2113,1750", name:"くすのき広場",floor:1, type:"rect"}, 
        {coordinate:"2210,606,1337,296", name:"駐車場",floor:1, type:"rect"}, 
        {coordinate:"564,2334,421,2113", name:"職員室前",floor:1, type:"rect"}, 
        {coordinate:"645,2451,733,2588", name:"エレベーター前",floor:1, type:"rect"}, 
        {coordinate:"104,91,524,653", name:"サブアリーナ",floor:2, type:"rect"}, 
        {coordinate:"526,94,1115,1135", name:"メインアリーナ",floor:2, type:"rect"}, 
        {coordinate:"1163,2261,1656,2867", name:"南高ホール",floor:2, type:"rect"}, 
        {coordinate:"916,2214,1167,2356", name:"パイの実",floor:2, type:"rect"},
        {coordinate:"1458,2157,1780,2159,1780,1769,2002,1767,2000,1477,2024,1475,2024,1454,2049,1452,2049,1427,2074,1427,2074,1355,2053,1353,2049,1330,2026,1328,2026,1305,2002,1303,2002,1284,1929,1282,1929,1305,1900,1303,1900,1330,1875,1328,1881,1353,1757,1355,1759,1695,1680,1695,1680,1718,1705,1720,1707,1768,1460,1774", name:"図書館",floor:2, type:"polygon"},
        {coordinate:"525,1384,722,1576", name:"中学1年4組",floor:2, type:"rect"},
        {coordinate:"525,1577,721,1770", name:"中学1年3組",floor:2, type:"rect"},
        {coordinate:"524,1775,718,1968", name:"中学1年2組",floor:2, type:"rect"},
        {coordinate:"523,1968,720,2160", name:"中学1年1組",floor:2, type:"rect"},
        {coordinate:"108,1577,448,1769", name:"工芸室",floor:2, type:"rect"},
        {coordinate:"105,1966,251,2283", name:"美術室",floor:2, type:"rect"},
        {coordinate:"106,2457,452,2647", name:"書道室",floor:2, type:"rect"},
        {coordinate:"253,2649,448,2841", name:"和室",floor:2, type:"rect"},
        {coordinate:"255,3113,522,3426", name:"音楽室",floor:2, type:"rect"},
        {coordinate:"523,3183,674,3427", name:"アンサンブル室",floor:2, type:"rect"},
        {coordinate:"721,2455,919,2648", name:"高校1年5組",floor:2, type:"rect"},
        {coordinate:"723,2650,921,2843", name:"高校1年4組",floor:2, type:"rect"},
        {coordinate:"722,2843,920,3036", name:"高校1年3組",floor:2, type:"rect"},
        {coordinate:"721,3040,919,3233", name:"高校1年2組",floor:2, type:"rect"},
        {coordinate:"721,3233,919,3426", name:"高校1年1組",floor:2, type:"rect"},
        {coordinate:"650,258,784,257,782,80,1136,84,1134,610,655,607", name:"化学実験室",floor:3, type:"polygon"},
        {coordinate:"784,792,1135,1138", name:"生物・化学センター",floor:3, type:"rect"},
        {coordinate:"122,1141,388,1491", name:"プラネタリウム",floor:3, type:"rect"},
        {coordinate:"786,1316,1136,1319,1136,1489,1487,1492,1485,1839,788,1839", name:"生物実験室",floor:3, type:"polygon"},
        {coordinate:"125,2025,651,2376", name:"理科講義室",floor:3, type:"rect"},
        {coordinate:"1141,2021,1486,2549", name:"物理実験室",floor:3, type:"rect"},
        {coordinate:"1135,3255,1490,3782", name:"地学実験室",floor:3, type:"rect"},
        // 名前怪しい↓
        {coordinate:"1138,2728,1488,3079", name:"地学情報センター",floor:3, type:"rect"},
        {coordinate:"300,2377,652,2638", name:"319教室",floor:3, type:"rect"},
        {coordinate:"303,2636,654,2904", name:"320教室",floor:3, type:"rect"},
        {coordinate:"303,2904,654,3172", name:"321教室",floor:3, type:"rect"},
        {coordinate:"301,3170,652,3438", name:"322教室",floor:3, type:"rect"},
        {coordinate:"304,3434,655,3702", name:"323教室",floor:3, type:"rect"},
        {coordinate:"1112,240,1460,593", name:"高校2年5組",floor:4, type:"rect"},
        {coordinate:"1112,596,1460,949", name:"高校2年4組",floor:4, type:"rect"},
        {coordinate:"1114,949,1462,1302", name:"高校2年3組",floor:4, type:"rect"},
        {coordinate:"1113,1300,1461,1653", name:"高校2年2組",floor:4, type:"rect"},
        {coordinate:"1114,1654,1462,2007", name:"高校2年1組",floor:4, type:"rect"},
        {coordinate:"1463,2179,1812,2531", name:"中学2年4組",floor:4, type:"rect"},
        {coordinate:"1466,2534,1815,2886", name:"中学2年3組",floor:4, type:"rect"},
        {coordinate:"1467,2885,1816,3237", name:"中学2年2組",floor:4, type:"rect"},
        {coordinate:"1465,3238,1814,3590", name:"中学2年1組",floor:4, type:"rect"},
        {coordinate:"628,1651,976,1999", name:"高校3年3組",floor:4, type:"rect"},
        {coordinate:"628,2181,976,2529", name:"高校3年4組",floor:4, type:"rect"},
        {coordinate:"627,2535,975,2883", name:"高校3年5組",floor:4, type:"rect"},
        {coordinate:"627,2885,977,3455", name:"放送室",floor:4, type:"rect"},
        {coordinate:"662,784,1010,1134", name:"中学3年4組",floor:5, type:"rect"},
        {coordinate:"661,1136,1009,1486", name:"中学3年3組",floor:5, type:"rect"},
        {coordinate:"662,1491,1010,1841", name:"中学3年2組",floor:5, type:"rect"},
        {coordinate:"1016,2020,1364,2370", name:"中学3年1組",floor:5, type:"rect"},
        {coordinate:"1014,2372,1274,2719", name:"高校3年5組",floor:5, type:"rect"},
        {coordinate:"1013,2725,1273,3068", name:"数学科講義室",floor:5, type:"rect"},
        {coordinate:"177,2018,525,2277", name:"512教室",floor:5, type:"rect"},
        {coordinate:"176,2282,524,2541", name:"513教室",floor:5, type:"rect"},
        {coordinate:"176,2550,524,2809", name:"514教室",floor:5, type:"rect"},
    ]

    

    let map_filtered:Array<{floor:number ,areas:Array<area>}> = map_img.map((value) => 
        ({floor:value.floor ,areas:[]})
    );

    coordinatesOfArea.forEach((d) => {
        const coordinate_string = d.coordinate.split(",")
        const coordinates_splitted = coordinate_string.map((item) => Number(item))

        const img_width = map_img[d.floor - 1].size[0]
        const img_height = map_img[d.floor - 1].size[1]

        let coordinates_relativeToPosition = [];
        for(let i = 0; i < coordinates_splitted.length; i++) {
            if(i % 2 ==0) {
                coordinates_relativeToPosition.push(coordinates_splitted[i] - img_width)
            } else {
                coordinates_relativeToPosition.push(coordinates_splitted[i] - img_height)
            }
        }

        let tableForRect = [0,0,0,0]

        const minimum_x = (data:Array<number>) => {
            let filterX:Array<number> = []
            data.forEach((n, index) => {if(index % 2 ==0){filterX.push(n)}})

            let minimum:number = 0
            let maximum:number = 0
            if(filterX.length != 0) {
                minimum = filterX.reduce((a, b) => {return Math.min(a,b)})
                maximum = filterX.reduce((a,b) => {return Math.max(a,b) })
            }
            

            tableForRect[0] = minimum
            tableForRect[2] = maximum

            return minimum
        }

        const minimum_y = (data:Array<number>) => {
            let filterY:Array<number> = []
            data.forEach((n, index) => {if(index % 2 !=0){filterY.push(n)}})
            let minimum = filterY.reduce((a, b) => {return Math.min(a,b)})
            let maximum = filterY.reduce((a,b) => {return Math.max(a,b) })

            tableForRect[1] = minimum
            tableForRect[3] = maximum

            return minimum
        }

        const minimumX =minimum_x(coordinates_splitted)
        const minimumY = minimum_y(coordinates_splitted) 

        let path = ""
        coordinates_splitted.forEach((e,index) => {
            if(index % 2 == 0) {
                if(index == 0) {
                    path = path + "M "
                } else {
                    path = path + "L "
                }
                let modify = e - tableForRect[0]
                path = path + String(modify) +" "
            } else {
                let modify = e - tableForRect[1]
                path = path + String(modify) + " "  
            }
        })

        const push_data = {
            name:d.name, positionX:String(minimumX / img_width * 100), positionY:String(minimumY / img_height * 100), width_relative:String((tableForRect[2] - tableForRect[0]) / img_width * 100), height_relative:String(tableForRect[3] - tableForRect[1] / img_height * 100), height_num:(tableForRect[3] - tableForRect[1]), width_num:(tableForRect[2] - tableForRect[0]), type:d.type, coordinate:coordinates_relativeToPosition , path:path
        }

        map_filtered[d.floor - 1].areas.push(push_data)
    })

    type modal_position = {
        floor:number,
        name:string,
        positionX:string,
        positionY:string
    }

    const [hovered, setHovered] = useState("")
    const [map_hovered, setMapHovered] = useState("")
    const [modal_data, setModal] = useState<{position:modal_position, data:Array<event>}>()
    const [name_modal, setNameModal] = useState<{position:string, floor:number, data:(event)}>()

    const filterEventByPlace = (name:string, floor:number, positionX:string, positionY:string) => {
        let data:Array<filtered> = []
        if(filteredData != undefined) {
            data = filteredData
        }
        let filter_floor = data[floor]
        let filter_name = filter_floor?.all.filter((n) => {
            return n.place_modified == name
        })

        setModal({position:{floor:floor, name:name, positionX:positionX ,positionY:positionY}, data:filter_name})
    }

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
    //https://labs.d-s-b.jp/ImagemapGenerator/に上記のmap_imgを読み込ませて座標を取得しました




    

    return (
        <div className="py-[30vw] 2xl:py-40 lg:py-32">
            <title>フロアマップ</title>      
            <h1 className={`${kaiseiDecol.className} text-center text-[12vw]  lg:text-6xl 2xl:text-8xl`}>フロアマップ</h1>
            <div className="mt-16 xl:mt-24">
                {map_img.map((value, index) => (
                    <div key={index} className={`w-full mx-auto mb-20 md:mb-28 lg:w-[95%] xl:mb-36`}>
                        <div className="relative flex mx-4 mb-3 md:mx-6 lg:mb-6 lg:items-center lg:hidden">
                            <div className=" w-[2vw] lg:w-3  lg:h-16 bg-gradient-to-br from-rose-500 to-rose-300"></div>
                            <p className={`${kaiseiDecol.className}  text-[#f74b69] text-[10vw] ml-[2vw] lg:ml-3 lg:text-5xl  text-nowrap z-10`}>{index+1}階</p>
                        </div>
                        <div className={`w-full mx-auto flex flex-wrap lg:flex-nowrap px-2 md:px-6 lg:px-0 box-border`}>
                            <div className={`${index == 2 ? "w-[40vw]" : "w-[70vw]"} lg:w-[45%] lg:shrink-0 mx-auto mb-5`}>
                                <div className="relative  mx-6 mb-6  lg:items-center lg:flex hidden">
                                    <div className=" w-[2vw] lg:w-3  lg:h-16 bg-gradient-to-br from-rose-500 to-rose-300"></div>
                                    <p className={`${kaiseiDecol.className}  text-[#f74b69] lg:ml-3 lg:text-5xl  text-nowrap z-10`}>{index+1}階</p>
                                </div>  
                                <div className={`${index == 2 ? "lg:w-[50%]" : "lg:w-[65%]"} w-full relative mx-auto`}>
                                    <div style={{
                                        top:String(Number(modal_data?.position?.positionY) + 10) + "%",
                                        left:String(Number(modal_data?.position?.positionX) + 10) + "%"
                                    }}
                                    className={`${modal_data?.position?.floor == index ? " lg:block hidden " : " hidden "} absolute w-[500px] z-20 rounded-xl border border-gray-400 shadow-lg bg-white text-black pb-2`}>
                                        <div className="flex p-5 pb-0 justify-between">
                                            <div  className="flex items-center">
                                                <div className=" flex items-center justify-center  bg-[#f9a1bd]  rounded-full w-16 aspect-square">
                                                    <p className="text-white z-10 text-2xl">{index + 1}F</p>
                                                </div>
                                                <p className="text-2xl pl-2">{modal_data?.position.name}</p>
                                            </div>
                                            <Image src={"/クロス (1).png"} alt="閉じる" width={200} height={200} className="mt-2 w-10 h-10 cursor-pointer" onClick={() => {setModal({position:{floor:99, name:"", positionX:"" ,positionY:""}, data:[]})}}></Image>           
                                            </div>
                                            {modal_data?.data?.length == 0 && 
                                            <div className="w-full text-center md:text-xl pt-1 pb-4 md:py-5 md:pt-2">
                                                見つかりませんでした
                                            </div>
                                            }
                                            
                                        {modal_data?.data?.map((modal_value, modal_index) => 
                                            <Link href={{pathname:"/event/introduction", query:{name:modal_value.className}}} key={modal_index}>
                                                <div key={"modal:" + String(modal_index)} className="px-5">
                                                    <div className={`${(modal_index == 0 || modal_data.data.length == 0) ? "" : "border-t"} border-gray-400 py-3 flex justify-between items-center  ${modal_index == modal_data.data.length - 1 && "pb-3 md:pb-4"}`} key={"modal_data"+ String(modal_index)}>
                                                        <div className=" overflow-hidden pr-2">
                                                            <p className="text-lg">{modal_value.className}</p>
                                                            <p className="text-3xl text-nowrap whitespace-nowrap ">{modal_value.title}</p>
                                                            <div className="flex text-lg pt-1">
                                                                <p className="max-w-24 text-nowrap overflow-hidden">{modal_value.time[0]}</p>
                                                                <p className="pl-5">待ち時間:{modal_value.waitTime}分</p>
                                                            </div>
                                                        </div>
                                                        {modal_value.img == null ? 
                                                            <Image src={"/pexels-aulsh99-2860705.jpg"} alt="展示いらすと" width={400} height={400} className="aspect-square rounded-full w-40"></Image> :
                                                            <Image src={modal_value.img} alt="展示いらすと" width={400} height={400} className="aspect-square rounded-full  w-40"></Image>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            </Link>
                                            
                                        )}
                                    </div>
                                    <div style={{
                                        top:String(Number(modal_data?.position?.positionY) + 20) + "%",
                                        left:"-10%"
                                    }}
                                    className={`${modal_data?.position?.floor == index ? " lg:hidden block  " : " hidden "} absolute w-80 md:w-[500px] z-20 rounded-xl border border-gray-400 shadow-lg bg-white text-black `}>
                                        <div className="flex p-3 md:p-4 md:pb-0 pb-0 justify-between ">
                                            <div className="flex items-center">
                                                <div className=" flex items-center justify-center  bg-[#f9a1bd]  rounded-full w-12 md:w-16 aspect-square">
                                                    <p className="text-white z-10 text-xl md:text-2xl">{index + 1}F</p>
                                                </div>
                                                <p className="text-xl md:text-2xl pl-2">{modal_data?.position.name}</p> 
                                            </div>
                                            <Image src={"/クロス (1).png"} alt="閉じる" width={200} height={200} className="w-8 h-8 mt-1 aspect-square cursor-pointer" onClick={() => {setModal({position:{floor:99, name:"", positionX:"" ,positionY:""}, data:[]})}}></Image> 
                                        </div>
                                            {modal_data?.data?.length == 0 && 
                                            <div className="w-full text-center md:text-xl pt-1 pb-4 md:py-5 md:pt-2">
                                                見つかりませんでした
                                            </div>
                                        }
                                        {modal_data?.data?.map((modal_value, modal_index) => 
                                        <Link href={{pathname:"/event/introduction", query:{name:modal_value.className}}} key={modal_index}>
                                            <div key={"modal:" + String(modal_index)} className="px-4 md:px-5">
                                                <div className={`${(modal_index == 0 || modal_data.data.length == 0) ? "" : "border-t"} border-gray-400 py-2 flex justify-between items-center ${modal_index == modal_data.data.length - 1 && "pb-3 md:pb-4"}`} key={"modal_data"+ String(modal_index)}>
                                                    <div className="overflow-hidden pr-2">
                                                        <p className="text-xs md:text-base">{modal_value.className}</p>
                                                        <p className="text-xl md:text-2xl text-nowrap whitespace-nowrap py-1 ">{modal_value.title}</p>
                                                        <div className="flex text-xs md:text-base">
                                                            <p>{modal_value.time[0]}</p>
                                                            <p className="pl-3">待ち時間:{modal_value.waitTime}分</p>
                                                        </div>
                                                    </div>
                                                    {modal_value.img == null ? 
                                                        <Image src={"/pexels-aulsh99-2860705.jpg"} alt="展示いらすと" width={400} height={400} className="aspect-square rounded-full w-24 md:w-32 bg-white"></Image> :
                                                        <Image src={modal_value.img} alt="展示いらすと" width={400} height={400} className="aspect-square rounded-full  w-24  md:w-32"></Image>
                                                    }
                                                    
                                                </div>
                                            </div>
                                            </Link>
                                        )}
                                        
                                    </div>
                                    <Image src={value.href} alt={`${value.floor}階の画像`} width={600} height={800} className="w-full" style={{aspectRatio:value.size[0]/value.size[1]}}>
                                    </Image>
                                    {map_filtered[index].areas.map((map_value, map_index) => (
                                        <div key={map_index} id={map_value.name} 
                                        style={{
                                            left:map_value.positionX+ "%",
                                            top:map_value.positionY + "%",
                                            width:map_value.width_relative + "%"
                                        }} 
                                        onMouseEnter={() => {setMapHovered(map_value.name)}} onMouseLeave={() => {setMapHovered("")}}
                                        onClick={() => {filterEventByPlace(map_value.name,index,map_value.positionX,map_value.positionY)}}
                                        className={`absolute  cursor-pointer fill-white mix-blend-screen   ${map_hovered == map_value.name ? "opacity-50" :"opacity-0"}`}>
                                            <svg  className="w-full " style={{aspectRatio:map_value.width_num/map_value.height_num}} viewBox={`0 0 ${map_value.width_num} ${map_value.height_num}`}>
                                                {map_value.type == "rect" && 
                                                    <rect  x={0} y={0} height={map_value.height_num} width={map_value.width_num}></rect>     
                                                }
                                                {map_value.type == "polygon" &&
                                                    <path d={map_value.path}></path>
                                                }
                                            </svg>
                                            
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                            <div className="w-full text-black border-rose-400 lg:border-none lg:shadow-none border-2  rounded-xl shadow-md relative ">
                                <p className={`${kaiseiDecol.className} absolute top-4 right-4 text-xl md:text-3xl md:top-6 md:right-6 text-[#f74b69] lg:hidden`}>{index + 1}階</p>
                                {filteredData != undefined &&
                                
                                    <div className="p-2 pb-1 pt-4 md:p-4 md:pt-6 lg:p-0">
                                        {[{data_set:filteredData[index].class, name:"クラス展示"}, {data_set:filteredData[index].time_limited, name:"時限開催展示"}, {data_set:filteredData[index].other, name:"そのほかの展示"}].map((list_type_value, list_index) => 
                                            <>  
                                                
                                                {list_type_value.data_set.length > 0 &&
                                                    <div className="w-full" key={list_index}>
                                                        <div className="flex items-center mb-4  md:mb-5 lg:m-0 lg:mb-5 relative lg:right-7 xl:right-9" >
                                                            <Image src={"/classLogo.png"} alt={list_type_value.name + "ロゴ"} width={300} height={300} className="aspect-square w-11 md:w-16 xl:w-20"></Image>
                                                            <p className={`pl-1 text-[#f74b69] text-xl md:text-3xl xl:text-4xl xl:pl-4 font-semibold ${KaiseiDecol.className}`}>{list_type_value.name}</p>
                                                        </div>
                                                        <div className="flex flex-wrap pl-2 justify-between w-full overflow-hidden mb-2 md:mb-5 lg:mb-4 box-border">
                                                            {list_type_value.data_set.map((class_value, class_index) => (
                                                                <Link href={{pathname:"/event/introduction", query:{name:class_value.className}}} className={`w-[100%] md:w-[48%] relative overflow-hidden flex items-center pb-4 md:pb-4 lg:pb-4 xl:pb-7 cursor-pointer ${hovered == class_value.className && " opacity-60"}`} key={`${class_index} + "map`}  onMouseEnter={() => {setHovered(class_value.className)}} onMouseLeave={() => {setHovered("")}}>
                                                                    <div className="min-w-14 md:min-w-24 xl:min-w-32 flex items-center px-2 justify-center shrink-0 text-white bg-[#f9a1bd] rounded-full py-1">
                                                                        <p className="text-[10px] md:text-base lg:text-sm xl:text-lg  text-nowrap whitespace-nowrap">{class_value.className.replace("年", "-").replace("組", "").replace("学", "").replace("校", "")} </p>
                                                                    </div>
                                                                    <div className="pl-2 md:pl-4 overflow-hidden flex">
                                                                        <p className="  text-sm md:text-lg lg:text-base xl:text-2xl text-nowrap whitespace-nowrap g">{class_value.title}</p>
                                                                        
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                }
                                            </>
                                        )}   
                                    </div>
                                } 
                            </div>
                        </div>
                        
                        
                    </div>
                ))}
            </div>

        
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}