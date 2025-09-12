"use client"
import Image from 'next/image';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css";
import 'swiper/css/effect-fade';
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import { SquareButtonPinkWhite } from '../global/parts/square_button';  
import Link from 'next/link';
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Pamphlet () {
    const img = [
        "/0001.webp",
        "/0002.webp",
        "/0003.webp",
        "/0004.webp",
        "/0005.webp",
        "/0006.webp",
        "/0007.webp",
        "/0008.webp",
        "/0009.webp",
        "/00010.webp",
        "/00011.webp",
        "/00012.webp",
        "/00016.webp",
    ]

    const half_img = [
        "/0002-1.webp",
        "/0002-2.webp",
        "/0003-1.webp",
        "/0003-2.webp",
        "/0004-1.webp",
        "/0004-2.webp",
        "/0005-1.webp",
        "/0005-2.webp",
        "/0006-1.webp",
        "/0006-2.webp",
        "/0007-1.webp",
        "/0007-2.webp",
        "/0008-1.webp",
        "/0008-2.webp",
        "/0009-1.webp",
        "/0009-2.webp",
        "/0010-1.webp",
        "/0010-2.webp",
        "/0011-1.webp",
        "/0011-2.webp",
        "/0012-1.webp",
        "/0012-2.webp",
        "/0016-1.webp",
    ]


    return(
        <div className="w-full">
            <h2 className={` ${kaiseiDecol.className} text-center text-[12vw] 2xl:text-8xl lg:text-6xl  text-color-base`}>パンフレット</h2>
            <div className='mx-auto flex justify-center mt-[3vw] lg:mt-10 pb-[4vw] lg:pb-12 gap-[3vw] lg:gap-12'>
                <div className="w-[35vw] lg:w-56 opacity-95">
                        <Link href={"/rondo(デジタル版).pdf"} target='_blank'>
                            <SquareButtonPinkWhite text="PDFダウンロード"></SquareButtonPinkWhite>
                        </Link>
                        {/* <RoundButtonTarqu text="申し込みページへ" size={50}></RoundButtonTarqu> */}
                        {/* <SquareButtonPinkWhite text="申し込みページへ"></SquareButtonPinkWhite> */}        
                </div>
            </div>
            <div className='relative hidden lg:block'>
                <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    // centeredSlides={true}
                    // slidesPerView={1}
                    speed={300}
                    navigation={{
                        prevEl: "#button_prev",
                        nextEl: "#button_next"
                    }}
                    pagination={{ type:"fraction"}}
                    effect={'fade'}
                    className='drop-shadow-md'
                >
                    {img.map((value) => (
                        <SwiperSlide key={value} className=''>
                            <div className="w-[75vw] 2xl:w-[55%] lg:w-[65%] mx-auto">
                                <Image src={value} alt='パンフレット' width={2000} height={1000} className='w-full aspect-auto' placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`} ></Image>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className='relative -top-full'>
                    <div className='swiper-pagination !relative  text-[3vw] lg:text-xl' id='pagination'></div>
                </div> */}
                <div className='w-full px-[1.5vw] 2xl:w-[70%] lg:w-[80%] lg:-translate-x-1/2 lg:translate-y-5 lg:left-1/2 absolute top-[calc(50%_-_5.5vw)] -translate-y-1/3 flex justify-between z-10 text-[8vw] 2xl:text-6xl lg:text-4xl opacity-80 text-color-base'>
                    <div id="button_prev" className="relative cursor-pointer">
                        <SlArrowLeft></SlArrowLeft>
                    </div>
                    <div id="button_next" className="relative cursor-pointer">
                        <SlArrowRight></SlArrowRight>
                    </div>
                </div>
            </div>
            <div className='lg:hidden relative'>
                <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    speed={200}
                    navigation={{
                        prevEl: "#button_prev",
                        nextEl: "#button_next"
                    }}
                    pagination={{ type:"fraction"}}
                    effect={'fade'}
                    className='drop-shadow-xl
                    [&_.swiper-pagination]:text-[7px]'
                >
                    {half_img.map((value,i) => (
                        <SwiperSlide key={i} className=''>
                            <div className="w-[75vw] mx-auto">
                                <Image src={value} alt='パンフレット' width={2000} height={1000} className='w-full aspect-auto' placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`} ></Image>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='w-full px-[4vw] absolute top-[calc(50%_-_5.5vw)]  flex justify-between z-10 text-[6vw] opacity-80 text-color-base'>
                    <div id="button_prev" className={`relative cursor-pointer`}>
                        <SlArrowLeft></SlArrowLeft>
                    </div>
                    <div id="button_next" className="relative cursor-pointer">
                        <SlArrowRight></SlArrowRight>
                    </div>
                </div>
            </div>
        </div>
    )
}