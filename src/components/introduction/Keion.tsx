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
import { KaiseiDecol } from "@/app/fonts"
import { roboto } from "@/app/fonts"
import {notoSansJP} from "@/app/fonts"
import Image from "next/image" 
import { UUID } from "crypto";
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import Link from "next/link";
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
type Slot = {
    id:UUID,
    name:string,
    time:string,
    date:string,
    comment:string,
    available:boolean,
    imgURL:string,
    imageVersion:string,
    instagram:string
}
type groupedData = {
    date:string,
    data:Slot[]
}
export default function Keion() {
    console.log("軽音楽部だよ")
    const [data, setData] = useState<groupedData[]>()
    const [dates,setDates] = useState<string[]>();//使わないかも
    const [showData,setShowData] = useState<Slot[]>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
    useEffect(() => {
        const getData = async () => {
            const {groupedByDate:result,dates} = await getBandData()
            console.log(result,dates);
            if(result == null) {
                console.log("failed")
                return
            }
            
            setData(result)
            setDates(dates)
            setShowData(result[0].data)
        }

        getData()
    },[])
    const setDate = (date:string) =>{
        const target = data?.find(item => item.date == date);
        if(!target) return
        setShowData(target.data);
    }
    useEffect(() => {
      if (data && data[currentIndex]) {
        setDate(data[currentIndex].date);
      }
    }, [currentIndex, data]);
    const handlePrev = () => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };
    
    const handleNext = () => {
      if (data && currentIndex < data.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return(
        <div className={`w-full  md:px-[5vw] sm:px-0 lg:px-6 lg:pb-20 text-white `} style={{
            backgroundImage:
      'linear-gradient(0deg, transparent, rgba(178, 53, 53, 1) 10%, rgba(15, 6, 6, 1) 20%, rgba(15, 18, 40, 1) 49%, rgba(20, 8, 8, 1) 80%, rgba(185, 59, 59, 1) 90%, transparent)',

          }}
        >
            {data? 
            <div className="w-[90%] mx-auto lg:w-[80%] lg:py-36 py-20">
                <div className="flex flex-col justify-center py-8">
                    <div className={`flex justify-center min-h-[64px] text-3xl py-2 ${KaiseiDecol.className} font-bold border-t-2 border-b-2 items-center `}>高校軽音楽部</div>
                    <div className="flex justify-center text-3xl py-8">{showData && showData[0].date}</div>
                    <div className="flex items-center justify-center gap-4 py-4">
                      <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="px-4 py-2  text-white rounded disabled:opacity-0"
                      >
                        <AiFillCaretLeft size={40}></AiFillCaretLeft>
                      </button>

                      <div className="text-xl font-bold">{data[currentIndex].date}</div>

                      <button
                        onClick={handleNext}
                        disabled={currentIndex === data.length - 1}
                        className="px-4 py-2  text-white rounded disabled:opacity-0"
                      >
                        <AiFillCaretRight size={40}/>
                      </button>
                    </div>                    
                </div>
                <div className={`flex flex-col   text-2xl pb-20`}>
                    {showData && 
                    showData.map((value,i)=>(
                    <div key={i} onClick={() => setSelectedSlot(value)} className=" grid grid-cols-10 border-b-[0.5px] py-1 border-slate-700 lg:border-b-[0.5px] lg:border-slate-900">
                      <div className={`hidden lg:col-span-2 lg:flex items-center justify-end border-r-[0.5px] border-slate-900 font-bold text-xl px-4 ${KaiseiDecol.className} `}>
                        {value.time.split("~")[0]}
                      </div>
                      <div className={`underline-offset-4 underline hidden lg:flex lg:col-span-6 px-4 py-2 font-semibold  text-xl  items-center justify-start ${roboto.className}`}>
                        {value.name}
                      </div>
                      <div className="flex justify-start items-center col-span-8 lg:hidden p-3">
                        <div className="sm:flex sm:flex-col  "> 
                            <div className={`items-center  border-slate-50 font-bold text-base  ${roboto.className} `}>
                                {value.time}
                            </div>
                            <div className={`items-center  border-slate-50 font-bold text-lg underline underline-offset-4 ${roboto.className} `}>
                             {value.name}
                            </div>
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1 aspect-square relative overflow-hidden">
                        <Image src={value.imgURL || "/NOIMAGE"} alt={value.name} fill className="object-cover" />
                      </div>
                    </div>

                    ))
                    }
                </div>
                <div className="flex flex-col justify-center py-8">
                    <div className="flex items-center justify-center gap-4 py-4">
                      <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="px-4 py-2  text-white rounded disabled:opacity-0"
                      >
                        <AiFillCaretLeft size={40}></AiFillCaretLeft>
                      </button>

                      <div className="text-xl font-bold">{data[currentIndex].date}</div>

                      <button
                        onClick={handleNext}
                        disabled={currentIndex === data.length - 1}
                        className="px-4 py-2  text-white rounded disabled:opacity-0"
                      >
                        <AiFillCaretRight size={40}/>
                      </button>
                    </div>                    
                </div>
            </div>
            :
            <div className="pt-[10vw]">
                    <Loading></Loading>
                    {/* <p className={`text-[5vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>・・・読み込み中・・・</p> */}
            </div>}  

        {/* モーダル表示用 */}
        {selectedSlot && (
          <div 
          className=" fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedSlot(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white text-black rounded-lg p-6 w-[90%] max-w-[600px] shadow-xl relative flex flex-col gap-6"
            >
              <div className="absolute top-4 right-4 w-[130px] h-[130px] rounded overflow-hidden shadow-md">
                <Image
                  src={selectedSlot.imgURL || "/NOIMAGE"}
                  alt={selectedSlot.name}
                  fill
                  className="object-cover"
                />
              </div>


              <button
                onClick={() => setSelectedSlot(null)}
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black z-10"
              >
                ×
              </button>


              <div className="flex flex-col gap-2">
                <h2 className={`text-2xl font-bold ${KaiseiDecol.className}`}>
                  {selectedSlot.name}
                </h2>
                <div className="flex gap-2">
                  <div className="py-[1px] px-2 border-[0.5px] border-black rounded-sm">
                    {selectedSlot.date}
                  </div>
                  <div className="py-[1px] px-2 border-[0.5px] border-black rounded-sm">
                    {selectedSlot.time}
                  </div>
                </div>
                <div className="flex gap-2">
                    {(selectedSlot.instagram && selectedSlot.instagram.trim() != "") &&
                      <Link href={selectedSlot.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={32} className="text-[#E1306C] hover:scale-110 transition" />
                    </Link>
                    }
                    <div className="flex items-center">
                        {selectedSlot.name}
                    </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <p className={`text-base ${roboto.className}`}>{selectedSlot.comment}</p>
              </div>
            </motion.div>
          </div>
        )}
        </div>
    )
}