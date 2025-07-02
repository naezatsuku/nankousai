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
      <div>現在の待ち時間{waitTime}</div>
      <div>前回比<span className={`text-lg font-medium ${differenceTime < 0 ? "text-green-500" : differenceTime > 0 ? "text-red-500" : "text-gray-500"}`}>
            {differenceTime}
            <span className='text-lg  text-black'>分</span>
        </span></div>
    </>
  )
}

export default ShowTime