"use client" 
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { getBandData } from "@/components//introduction/get_band";
import { MdMusicNote } from "react-icons/md";
import Loading from "../global/parts/loading";
import { FaMusic } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image" 
import { UUID } from "crypto";
type band_type = {
    name:string,
    time:string,
    comment:string,
    available:boolean
}
type band_time ={
    date:string,
    time:string;
}
type new_data = {
    id:UUID,
    date:string,
    time:string,
    name:string,
    comment:string,
    available:boolean,
    imgURL:string
}

export default function Keion() {
    console.log("軽音楽部だよ")
    const [data, setData] = useState<Array<new_data>>()
    const [num, setNum] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const result = await getBandData()
            console.log(result);
            if(result == null || result == "failed") {
                console.log("failed")
                return
            }
            setData(result)
        }

        getData()
    },[])

    const variants = {
        open:{
            height:"auto"
        },
        close: {
            height:0
        }
    }

    const view_variants ={
        open:{
            display:"none"
        },
        close: {
            display:"block"
        }
    }
    const numCon = (e:number) => {
        if(num == e + 1) {
            setNum(0)
        } else {
            setNum(e+1)
        }
    }

    return(
        <div className="w-full px-[5vw] sm:px-0 lg:px-6 lg:pb-8">
            {data? 
                <div className="w-[90%] mx-auto lg:w-[70%]">
                {data.map((value, index) => (
                    <motion.div initial={{opacity:0.9, scale:1}} whileHover={{opacity:1, scale:1.02}} transition={{ease:"easeInOut", duration:0.2}}  key={index} className="cursor-pointer rounded-xl my-[5vw] lg:my-12 shadow-sm drop-shadow-sm border-2 bg-white border-slate-100 " onClick={() => (numCon(index))}>
                        <div>
                            <div className="font-medium px-[3vw] pt-[2vw] lg:pt-4 lg:px-6 text-[3.5vw] lg:text-2xl flex items-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent  ">
                                <span className="pr-[1vw]">{value.date}</span>
                                <GoClockFill className="relative top-[0.12vw] mr-[1vw] scale-90 text-purple-400"></GoClockFill>
                                <span>{value.time}</span>
                                
                        </div>
                        <div className="flex  items-center justify-end italic bg-gradient-to-br from-fuchsia-500  to-sky-400 bg-clip-text text-transparent text-[6vw] lg:text-4xl pt-[1.5vw] pb-[2vw] pr-[5%] lg:pt-4 lg:pb-5">
                                <MdMusicNote className="mr-[1vw] relative top-[0.1vw] text-purple-400 rotate-6"></MdMusicNote>
                                <p>{value.name}</p>
                            </div>
                            <motion.div className="" animate={num == index + 1 ? "open": "close"} variants={view_variants} >
                                <p className="flex text-[2.5vw] lg:text-2xl  items-center absolute bottom-[10%] left-[3%] opacity-65">
                                <MdKeyboardDoubleArrowLeft className="translate-y-1.5"></MdKeyboardDoubleArrowLeft>
                                view more
                            </p>
                            </motion.div>
                            
                        </div>
                        <motion.div className="w-[95%] mx-auto mb-1.5 opacity-85 rounded-lg border-2 border-slate-100 overflow-hidden" animate={num == index + 1 ? "open": "close"} variants={variants}>   
                            <div className="mx-4">
                                <div className="flex justify-center items-center italic text-gray-800 text-[6vw] lg:text-4xl pt-[1.5vw] pb-[2vw] pr-[5%] lg:pt-4 lg:pb-5">
                                    
                                    <div>{value.name}</div>
                                </div>
                            </div>
                            <div className="mx-4 px-2 py-2 rounded-xl bg-slate-300">
                                {data.filter((e) => (e.id== value.id))
                                .map((content,n)=>(
                                        <div key={n} className="flex items-center">
                                        <p className={`text-[3.5vw] font-medium tracking-tight text-slate-500  bg-white px-[3vw] py-[0.2vw] rounded-full  inline-block  text-left  my-[0.7vw] translate-y-[0%]     lg:text-lg  `}>
                                            Live{n+1}         
                                        </p>
                                        <div className="font-medium px-[3vw] py-[2vw] lg:py-2 text-[3.5vw] lg:text-2xl flex items-center text-white  ">
                                            <span className="pr-[1vw]">{content.date}</span>
                                            <GoClockFill className="relative top-[0.12vw] mr-[1vw] scale-90 text-white"></GoClockFill>
                                            <span>{content.time}</span>
                                            
                                            <p className="border-t-2 translate-y-1/2"></p>
                                        </div>
                                    </div>

                                    )
                                )
                                
                            }
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
                              <div className="whitespace-pre-wrap text-blue-600 ml-[2vw] mr-[3vw] my-[3vw] text-[4vw] lg:ml-4 lg:mr-6 lg:text-2xl lg:my-5 lg:leading-[150%]  font-light tracking-[-0.01rem]  opacity-80 leading-[160%]  text-left  sm:flex-1 w-full px-2">
                                {value.comment}
                              </div>

                              <div className="relative overflow-hidden ml-[2vw] mr-[3vw]  lg:ml-4 lg:mr-6 rounded-xl shadow-lg group w-full sm:w-[40%] aspect-square">
                              <Image
                                src={value.imgURL && !value.imgURL.includes("NOIMAGE") ? value.imgURL : "/NOIMAGE.png"}
                                alt="バンド画像"
                                fill
                                sizes="(max-width: 640px) 100vw, 30vw"
                                className="object-cover "
                              />

                              
                            </div>

                            </div>




                        </motion.div>   
                    </motion.div>
                ))}
            </div>
            :
            <div className="pt-[10vw]">
                    <Loading></Loading>
                    {/* <p className={`text-[5vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>・・・読み込み中・・・</p> */}
            </div>}  
        </div>
    )
}