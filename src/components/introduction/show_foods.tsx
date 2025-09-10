"use client"
import { useState, useEffect } from "react"
import { getFoodData } from "./get_food"
import Loading from "../global/parts/loading";
import { MdOutlineRestaurant } from "react-icons/md";
import { KaiseiDecol } from "@/app/fonts";
import Image from "next/image";

const kaiseiDecol = KaiseiDecol

type foods = {
    name:string,
    menu:string,
    value:number,
    type:string,
    image:string,
    imageVersion:string,
    introduction:string,
    imageVisible:boolean
}

type Props = {
    name:string
}

export default function GetFood(
    {name}:Props
) {
    const [data, setData] = useState<Array<foods>>()

    useEffect(() => {
        const getData = async () => {
            
            const result = await getFoodData(name)
            console.log(result);
            if(result == null || result == "failed") {
                console.log("failed")
                return
            }
            
            setData(result)
        }

        getData()
    },[])


    

    return (
        <div className="w-full">
            {data? <div className="w-full">
                <div className="flex text-[10vw] lg:text-5xl items-center text-orange-400 justify-center mb-[4vw] lg:mb-8">
                    <MdOutlineRestaurant className="relative top-[0.5vw] lg:top-0"></MdOutlineRestaurant>
                    <p className={`${kaiseiDecol.className} ml-[0.5vw]`}>メニュー</p>
                </div>
                {data.map((value, index) => (
                    <div key={index} className="w-full  lg:mx-auto border-2 shadow-md border-gray-200 h-auto mb-[5vw] p-2  lg:mb-8">
                      {!(value.image=="/NOIMAGE" || value.imageVisible==false)?
                        <div className="p-2 border-2 border-orange-300">
                          <div className="grid grid-cols-6 gap-2">
                              <div className="col-span-4 flex flex-col justify-between">
                                  <p className=" text-2xl sm:text-5xl lg:text-3xl text-slate-500 border-b-2 sm:p-2 lg:p-1"><span></span>{value.menu}</p>
                                  <div className="p-1 text-base sm:text-2xl break-words">
                                    <p>{value.introduction}</p>
                                  </div>
                                  <div className="mb-0 p-1 text-2xl text-black flex justify-between items-center">
                                    <div className="text-base sm:text-4xl lg:text-3xl">
                                      価格：{value.value} 円
                                    </div>
                                    <div className="flex text-base sm:text-4xl lg:text-3xl items-center">
                                      在庫：
                                      <span className="flex items-center justify-center px-2 py-1 bg-orange-100 text-black font-bold text-inherit rounded-md">
                                        {value.type}
                                      </span>
                                    </div>
                                    
                                  </div>

                              </div>
                              <div className="col-span-2">
                                <div className="w-[100%] aspect-square">
                                  <Image 
                                    src={value.image}
                                    alt={value.menu} 
                                    width={200}
                                    height={200}
                                    className="h-full w-full rounded-r-md object-cover"
                                  />
                                </div>

                              </div>
                          </div>
                        <div>

                        </div>                          
                        </div>:
                        <div className="border-2 h-full p-2 border-orange-300 flex items-center text-[5vw] lg:text-3xl text-gray-500">
                            <p className="ml-[2vw] flex-grow lg:ml-6">{value.menu}</p>
                            <div className="flex items-center w-[30vw] lg:w-[160px] gap-[1vw] mr-[2vw] ">
                              <p className="flex items-center justify-center w-[8vw] h-[8vw] lg:w-[40px] lg:h-[40px] bg-orange-100 text-black  font-bold text-[5vw] lg:text-2xl   rounded-md">
                                {value.type}
                              </p>
                              <p className="flex items-center h-full text-black">
                                {value.value}円
                              </p>
                            </div>

                        </div>
                    }
                        
                        
                    </div>
                ))}
                <div className="flex flex-wrap justify-center gap-[2vw] text-center text-[4vw] lg:text-2xl text-gray-600">
                  <span className="flex items-center gap-[1vw]">
                    <span className="w-[6vw] lg:w-[30px] h-[6vw] lg:h-[30px] flex items-center justify-center bg-orange-100 rounded-md">◎</span>
                    <span>在庫あり</span>
                  </span>
                  <span className="flex items-center gap-[1vw]">
                    <span className="w-[6vw] lg:w-[30px] h-[6vw] lg:h-[30px] flex items-center justify-center bg-orange-100 rounded-md">○</span>
                    <span>6割くらい</span>
                  </span>
                  <span className="flex items-center gap-[1vw]">
                    <span className="w-[6vw] lg:w-[30px] h-[6vw] lg:h-[30px] flex items-center justify-center bg-orange-100 rounded-md">△</span>
                    <span>3割くらい</span>
                  </span>
                  <span className="flex items-center gap-[1vw]">
                    <span className="w-[6vw] lg:w-[30px] h-[6vw] lg:h-[30px] flex items-center justify-center bg-orange-100 rounded-md">✕</span>
                    <span>在庫なし</span>
                  </span>
                </div>
            </div> : <div className="pt-[10vw]">
                <Loading></Loading>
            </div> }
        </div>
    )
}