import { supabase } from '@/lib/supabaseClient';
import React, { useEffect, useState } from 'react'


type CardProps = {
    TimeMap:any;
}


const ShowTime:React.FC<CardProps> = ({TimeMap} ) => {
  const [differenceTime,setDifferenceTime] = useState<number>(0);
   
   const waitTime = TimeMap?.waitTime ?? 0;
   const prevTime = TimeMap?.prevTime ?? 0;
   
   const calculateTime = ()=>{
    const differenceTime = waitTime - prevTime;
    setDifferenceTime(differenceTime);
   }
   useEffect(()=>{
      calculateTime();

   },[waitTime,prevTime])
  return (
    <>
      <div className='font-medium text-[2.5vw] leading-[160%] lg:text-sm flex text-nowrap '>現在の待ち時間{waitTime}分</div>
      <div className={`font-medium text-[2.5vw] leading-[160%] lg:text-sm flex text-nowrap `}>
        前回比
        <span className={` ${differenceTime < 0 ? "text-green-500" : differenceTime > 0 ? "text-red-500" : "text-gray-500"}`}>
            {differenceTime}<span className=' text-black'>分</span>
        </span>
      </div>
    </>
  )
}

export default ShowTime