

import Image from "next/image"
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import { RoundButtonTurquoise } from "../../../global/parts/rounded_button";
import { RoundButtonPurple } from "../../../global/parts/rounded_button";
import { RoundButtonOrange } from "../../../global/parts/rounded_button";
import {Rounded_base} from "../../../global/parts/rounded_button";
import {Rounded_withShadow} from "../../../global/parts/rounded_button";
import Link from "next/link";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

// const classToEvent = (e:any) => {
//     const params = new URLSearchParams();
//     params.append("type", e.target.value)
//     const href = `/event?${params}`;
//     const router = useRouter();
//     router.push(href)
// }

export default function ClassEvent() {
    return(
        <div className="w-full aspect-[16/10] relative lg:w-1/3">
            <div className="absolute w-full h-full bg-white z-0 rounded-[20%] lg:rounded-[5rem] lg:aspect-video"></div>
            <div className="w-full text-color-base  absolute z-10 my-[4vw] flex flex-wrap items-center lg:my-0">
                <div className="flex flex-col w-[45%] ml-[8vw] lg:ml-0">
                    <p className={`${kaiseiDecol.className} text-left  text-[8vw] mt-[7vw] lg:my-0 lg:text-4xl`}>クラス展示</p>
                    <p className={` font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw] lg:text-2xl`}>27クラスによる色彩豊かな展示を体験できます。</p>
                </div>         
                <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                    <Image src={"/クラス展示.png"} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover " placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                </div>
                <div className="w-full mt-[7vw]">
                    <Link href={{pathname:"/event", query:{type:"クラス展示"}}}>
                        <button className="w-[28vw] mx-auto">
                            <RoundButtonTurquoise  text="もっと見る" size={40}></RoundButtonTurquoise >
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function ClubEvent() {
    return(
        <div className="w-full aspect-[16/10] relative lg:w-1/3">
            <div className="absolute w-full h-full bg-white z-0 rounded-[20%]"></div>
            <div className="w-full text-color-base  absolute z-10 my-[4vw] flex flex-wrap items-center">
                <div className="flex flex-col w-[45%] ml-[8vw] ">
                    <p className={`${kaiseiDecol.className} text-left  text-[8vw] mt-[7vw]`}>部活動展示</p>
                    <p className={` font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw]`}>中高の部活動によるアクティビティや体験の数々</p>
                </div>         
                <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                    <Image src={"/後夜祭写真.png"} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover " placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                </div>
                <div className="w-full mt-[7vw]">
                    <Link href={{pathname:"/event", query:{type:"部活動展示"}}}>
                        <button value={"部活動展示"} className="w-[28vw] mx-auto">
                            <RoundButtonPurple  text="もっと見る" size={40}></RoundButtonPurple>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function FoodEvent() {
    return(
        <div className="w-full  aspect-[16/10] relative lg:w-1/3">
            <div className="absolute w-full h-full bg-white z-0 rounded-[20%]"></div>
            <div className="w-full text-color-base  absolute z-10 my-[4vw] flex flex-wrap items-center">
                <div className="flex flex-col w-[45%] ml-[8vw] ">
                    <p className={`${kaiseiDecol.className} text-left  text-[8vw] mt-[7vw]`}>フード販売</p>
                    <p className={` font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw]`}>高校3年、食堂などによる絶品フードとドリンク</p>
                </div>         
                <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                    <Image src={"/burger-2762431_1920.jpg"} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover " placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                </div>
                <div className="w-full mt-[7vw]">
                    <Link href={{pathname:"/event", query:{type:"フード"}}}>
                        <button value={"フード"} className="w-[28vw] mx-auto">
                            <RoundButtonOrange   text="もっと見る" size={40}></RoundButtonOrange >
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function EventLinkMobile() {
    const eventData = [
        {title:"クラス展示",comment:"27クラスによる色彩豊かな展示を体験できます。", src:"/pleasant_cloud.jpg", value:"クラス展示", color:"light-gradient", text:" text-[#fc6579]"},
        {title:"部活動展示",comment:"中高の部活動によるアクティビティや体験の数々", src:"/fireworksSky.jpg", value:"部活動展示", color:"violet-gradient", text:" text-[#4f46e5]"},
        {title:"フード販売",comment:"高校3年、食堂などによる絶品フードとドリンク", src:"/burger-2762431_1920.jpg", value:"フード", color:"base-gradient", text:" text-[#ec3801]"},
    ]

    return(
        <div className="">
            {eventData.map((value, index) => (
                <div key={index} className="w-full  aspect-[16/10] relative lg:w-1/3 mb-[12vw]">
                    <div className="absolute w-full h-full bg-white z-0 rounded-[20%]"></div>
                    <div className={`w-full ${value.text}  absolute z-10 my-[4vw] flex flex-wrap items-center`}>
                        <div className="flex flex-col w-[45%] ml-[8vw] ">
                            <p className={`${kaiseiDecol.className} text-left  text-[8vw] mt-[7vw]`}>{value.title}</p>
                            <p className={` font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw]`}>{value.comment}</p>
                        </div>         
                        <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                            <Image src={value.src} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover " placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                        </div>
                        <div className="w-full mt-[7vw]">
                            <Link href={{pathname:"/event", query:{type:value.value}}}>
                                <button value={value.value} className="w-[28vw] mx-auto">
                                    <Rounded_withShadow text="もっと見る" size={40} color={value.color}></Rounded_withShadow>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export function EventLinkPC() {
    const eventData = [
        {title:"クラス展示",comment:"27クラスによる色彩豊かな展示を体験できます。", src:"/pleasant_cloud.jpg", value:"クラス展示", color:"light-gradient", text:" text-[#fc6579]"},
        {title:"部活動展示",comment:"中高の部活動によるアクティビティや体験の数々", src:"/fireworksSky.jpg", value:"部活動展示", color:"violet-gradient", text:" text-[#4f46e5]"},
        {title:"フード販売",comment:"高校3年、食堂などによる絶品フードとドリンク", src:"/burger-2762431_1920.jpg", value:"フード", color:"base-gradient", text:" text-[#ec3801]"},
    ]

    return(
        <div className="flex w-full justify-center flex-wrap">
            {eventData.map((value, i) => (
                <div key={i} className="w-[40%]   bg-white  rounded-2xl 2xl:mt-16 2xl:mx-16 mx-10 mt-10">    
                    <div className={"flex " + value.text}>
                    <div className=" w-[50%] aspect-square relative"> 
                            <Image src={value.src} alt="展示の様子" width={2000} height={2000} className="rounded-l-2xl opacity-90 object-cover w-full h-full" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                        </div>
                        <div className="flex flex-col text-wrap 2xl:mx-5 mx-2 justify-center items-center">
                            <p className={`${kaiseiDecol.className} text-left  2xl:text-5xl xl:text-3xl text-2xl`}>{value.title}</p>
                            <p className={` font-normal 2xl:text-base text-xs leading-[150%] 2xl:my-9 my-4 tracking-tight `}>{value.comment}</p>
                            <Link href={{pathname:"/event", query:{type:value.value}}}>
                                <button value={value.value} className="w-[28vw] 2xl:max-w-[180px] xl:max-w-[140px] max-w-[100px]  aspect-[3/1] opacity-90">
                                    {value.title == "クラス展示" &&
                                        <Rounded_base  text="もっと見る" size={40} color={value.color}></Rounded_base >
                                    }
                                    {value.title == "部活動展示" &&
                                        <Rounded_base  text="もっと見る" size={40} color={value.color}></Rounded_base >
                                    }
                                    {value.title == "フード販売" &&
                                        <Rounded_base  text="もっと見る" size={40} color={value.color}></Rounded_base >
                                    }
                                </button>
                            </Link>
                        </div> 
                    </div>    
                    
                    <div className="w-full ">
                        
                    </div>
                </div>
            ))}
        </div>
    )
}