import { supabase } from '@/lib/supabaseClient';
import React, { useEffect, useState } from 'react'


type CardProps = {
    TimeMap:any;
}


const ShowTime:React.FC<CardProps> = ({TimeMap} ) => {
   
   const waitTime = TimeMap?.waitTime ?? 0;
  return (
    <>
      <div className='font-medium text-[2.5vw] leading-[160%] lg:text-sm  xl:text-xs 2xl:text-sm flex text-nowrap text-slate-800'>現在の待ち時間{waitTime}分</div>
      <div className={`font-medium text-[2.5vw] leading-[160%] lg:text-sm  xl:text-xs 2xl:text-sm flex text-nowrap `}>
      </div>
    </>
  )
}

export default ShowTime