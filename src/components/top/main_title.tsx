"use client"

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image"
import { KaiseiDecol } from "@/app/fonts";
import { RiArrowDownWideFill } from "react-icons/ri";
import Link from "next/link";
import { animate, delay, easeIn, easeInOut, easeOut, useAnimate } from "framer-motion";
import { motion, scale } from "motion/react"
import { openAsBlob } from "fs";
const kaiseiDecol = KaiseiDecol


export default function MainTitle() {
    const [count, setCount] = useState(0);
    const [button, animateButton] = useAnimate();
    
    useEffect(() => {
        if(count == 0) {
            const initial_time = setInterval(()=> {
                setCount((prevCount) => prevCount + 1)
            },2500)

            return () => {
                clearInterval(initial_time)
            }
        }
        const permanent_time = setInterval(() => {
            animateButton(button.current)
            console.log(count)
            setCount((prevCount) => prevCount + 1)
        }, 2000)
        return () => {
            clearInterval(permanent_time)
        }

    }, [])

    const variants = {
    }

    const ripples_animations = {
        initial:{
            opacity:0
        },
        animate:{
            opacity:0
        },
        loop_initial: {
            scale:0.8,
            opacity:1
        },
        loop_animate:(index:number) => ({
            scale:[0.8, 1.5, 2, 0.8, 0.8],
            opacity:[1, 0.2, 0, 0, 1],
            transition:{
                delay:3 + index,
                duration:2,
                times:[0, 0.3, 0.5, 0.9, 1],
                repeatDelay:(5),
                repeat:Infinity,
            }
        })
    }

    const button_animations = {
        initial:{
            opacity:0,
            y:30,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                easeOut
            }
        } ,
        loop_initial:{
            scale:1,
            opacity:1,
            y:0,
        },

        loop_animate:{
            scale:[1,0.92,1],
            opacity:1,
            y:0,
            transition:{
                duration:7,
                times:[0, 0.4, 1],
                repeatDelay:0,
                repeat:Infinity,
            }
        },
        
    }

    const eyeCatch_animations = {
        initial: {
            opacity:0,
            x:-400
        },
        animate:(index:number) => ({
            opacity:1,
            x:0,
            transition:{
                duration:0.25,
                easeInOut,
                delay:index*0.25
            }
        }),
    }

    const bg_image_animation= {
        initial:(index:number) => ( {
            width:index
        }),
        animate: {
            width:0,
            transition:{delay:0.8, duration:0.3, easeInOut}
        },
    }

    
    const eyeCatch_positions_src = [
        {pos:" top-[3svh] right-[-8svh] h-[22svh] aspect-[4/1]", src:"/SEPT13.webp", alt:"sept13", size:[500,2000]},
        {pos:" top-[20svh] right-[-2svh] h-[22svh] aspect-[9/5]", src:"/and14.webp", alt:"sept13", size:[500,900]},
        {pos:" top-[37svh] right-[-7svh] h-[22svh] aspect-[4/1]", src:"/visitUs.webp", alt:"sept13" ,size:[500,2000]}
    ]

    const ripple_rugs = [
        {name:"展示一覧ボタン用", times:[0.3,0.8,1.1], style:" top-[0svh] left-[-3svh] h-[55svh]"},
        {name:"事前登録ボタン用", times:[0.5], style:" top-[35svh] left-[55svh] h-[28svh]"},
    ]

    const sun_halo = [
        " z-10  rounded-full bg-yellow-500 blur-xl mix-blend-multiply",
        " z-[11] rounded-full bg-orange-600 blur-2xl",
        " z-[12] rounded-full bg-amber-400 blur-2xl mix-blend-overlay",
        " z-[13]  rounded-full bg-yellow-400 blur-2xl mix-blend-overlay"
    ]

    let ripples:Array<{name:string, style:string, time_rug:number}> = []
    
    const ripple_properties = ripple_rugs.map((item) => {
        return item.times.map((time) => {
            ripples.push( {name:item.name, style:item.style, time_rug:time})
        })
    })

    return(
        <div className="w-full h-[100svh] overflow-hidden">
            {/* デスクトップPC用レイアウト */}
            <div className="hidden xl:block h-full w-full  relative" >
                <motion.div animate={{opacity:0}} transition={{delay:0.2, duration:0.5}} className="w-full h-full absolute top-0 left-0 z-40 flex justify-center items-center pointer-events-none">
                    <p className={`text-4xl text-yellow-400 ${kaiseiDecol.className}`}>welcome</p>
                </motion.div>
                <Image height={800} width={2400} src={"/pc背景決.webp"} alt="背景用ポスター画像" className=" aspect-auto h-full w-full object-cover object-right-top -z-10" priority></Image>
                {/* ポスターのエマージングアニメーション用赤幕 */}
                <motion.div variants={bg_image_animation} className="bottom-0 right-0 absolute z-0 h-full w-full bg-[#F02004]" initial="initial" custom={4000} whileInView="animate"></motion.div>
                {/* 二つのボタン */}
                <motion.div variants={variants} initial={count == 0?"initial" :"loop_initial"} animate={count == 0?"animate" :"loop_animate"} ref={button} >
                    <SunButton name="展示一覧" pos=" top-[0svh] left-[-3svh] h-[55svh] "></SunButton>
                    <SunButton name="事前登録" pos=" top-[35svh] left-[55svh] h-[28svh] "></SunButton>
                </motion.div>
                {/* VISIT US!!の部分 */}
                <motion.div variants={variants} initial="initial" whileInView="animate">
                    {eyeCatch_positions_src.map((value, index) => 
                        <motion.div className={"absolute" + value.pos} custom={index} variants={eyeCatch_animations} key={index}>
                            <Image src={value.src} alt={value.alt} height={value.size[0] / 5} width={value.size[1] / 5} className="aspect-auto w-full h-full"></Image>
                        </motion.div>
                    )}
                </motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:0.7}} transition={{delay:0.5, duration:0.5}} className="absolute text-white  top-2 right-3">
                    <p>イラスト：安住はな</p>
                </motion.div>
            </div>
            {/* ノートPC,タブレット用(ipadPro)レイアウト */}
            <div  className="h-full w-full hidden lg:max-xl:block relative">
                <motion.div initial={{opacity:0}} animate={{opacity:0.7}} transition={{delay:0.5, duration:0.5}} className="z-30 absolute text-white  top-2 right-3 ">
                    <p>イラスト：安住はな</p>
                </motion.div>
                <motion.div animate={{opacity:0}} transition={{delay:0.2, duration:0.5}} className="w-full h-full absolute top-0 left-0 z-40 flex justify-center items-center pointer-events-none">
                    <p className={`text-4xl text-yellow-400 ${kaiseiDecol.className}`}>welcome</p>
                </motion.div>
                <motion.div variants={bg_image_animation} custom={1500} className="bottom-0 right-0 absolute z-[5] h-full w-full bg-[#F02004]" initial="initial" whileInView="animate"></motion.div>
                <Image height={600} width={1800} src={"/pc背景決.webp"} alt="背景用ポスター" className="  w-full object-cover object-right-top absolute bottom-0 right-0 h-[125svh] aspect-[3/1] z-0" priority></Image>
                
                <motion.div variants={variants} initial={count == 0?"initial" :"loop_initial"} animate={count == 0?"animate" :"loop_animate"} ref={button} >
                    <SunButton name="展示一覧" pos=" top-[-2svh] left-[-3svw] h-[55svh] max-h-[50svw]  "></SunButton>
                    <SunButton name="事前登録" pos=" top-[30svh] left-[40svw] h-[33svh] max-h-[28svw]"></SunButton>
                </motion.div>
            </div>
            {/* タブレット用レイアウト */}
            <div className="h-full w-full hidden md:max-lg:block relative
            ">
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:0.5}} className="absolute text-white  bottom-1 right-3 text-2xl" >
                    <p>イラスト：安住はな</p>
                </motion.div>
                <motion.div animate={{opacity:0}} transition={{delay:0.2, duration:0.5}} className="w-full h-full absolute top-0 left-0 z-40 flex justify-center items-center pointer-events-none">
                    <p className={`text-3xl text-yellow-400 ${kaiseiDecol.className}`}>welcome</p>
                </motion.div>
                <Image height={900} width={1600} src={"/2025_nankouposter.webp"} alt="背景用ポスター" className="aspect-auto h-full w-full object-cover object-left-top -z-10" priority></Image>
                <motion.div variants={bg_image_animation} custom={1000} className="bottom-0 right-0 absolute z-0 h-full w-full bg-[#F02004]" initial="initial" whileInView="animate"></motion.div>
                <motion.div variants={variants} initial={count == 0?"initial" :"loop_initial"} animate={count == 0?"animate" :"loop_animate"} ref={button} >
                    <SunButton name="展示一覧" pos=" bottom-[5vw] right-[5vw] w-[38svw] "></SunButton>
                </motion.div>
            </div>
            {/* スマホ用レイアウト */}
            <div className="h-full w-full md:hidden relative">
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:0.5}} className="absolute text-white  bottom-7 right-3">
                    <p>イラスト：安住はな</p>
                </motion.div>
                <motion.div animate={{opacity:0}} transition={{delay:0.2, duration:0.5}} className="w-full h-full absolute top-0 left-0 z-40 flex justify-center items-center pointer-events-none">
                    <p className={`text-3xl text-yellow-400 ${kaiseiDecol.className}`}>welcome</p>
                </motion.div>
                 <Image height={1800} width={600} src={"/南高祭スマホ.webp"} alt="背景用ポスター" className="aspect-auto h-full w-full object-cover object-right-bottom -z-10" priority></Image>   
                 <motion.div variants={bg_image_animation} className="bottom-0 right-0 absolute z-0 h-full w-full bg-[#F02004]" initial="initial" whileInView="animate" custom={800}></motion.div>
                 <motion.div variants={variants} initial={count == 0?"initial" :"loop_initial"} animate={count == 0?"animate" :"loop_animate"} ref={button} >
                    <SunButton name="展示一覧" pos=" top-[12vw]  right-[-2vw] w-[50svw] max-w-[20svh] "></SunButton>
                    <SunButton name="事前登録" pos=" top-[8vw] left-[10vw] w-[30svw] max-w-[16svh] "></SunButton>
                </motion.div>
            </div>
        </div>
    )
}

type Button_prop = {
    name:string,
    pos:string
}

export function SunButton(
    {name, pos}:Button_prop
) {
    const [count, setCount] = useState(0);
    const [button, animateButton] = useAnimate();
    const [eventHalo, animateEventHalo] = useAnimate();
    const [registerHalo, animateRegisterHalo] = useAnimate();
    
    useEffect(() => {
        if(count == 0) {
            const initial_time = setInterval(()=> {
                setCount((prevCount) => prevCount + 1)
            },2500)

            return () => {
                clearInterval(initial_time)
            }
        }
        const permanent_time = setInterval(() => {
            animateButton(button.current)
            console.log(count)
            setCount((prevCount) => prevCount + 1)
        }, 2000)
        return () => {
            clearInterval(permanent_time)
        }

    }, [])

    const button_animations = {
        initial:{
            opacity:0,
            y:30,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                easeOut
            }
        } ,
        loop_initial:{
            scale:1,
            opacity:1,
            y:0,
        },

        loop_animate:{
            scale:[1,0.92,1],
            opacity:1,
            y:0,
            transition:{
                duration:7,
                times:[0, 0.4, 1],
                repeatDelay:0,
                repeat:Infinity,
            }
        },
        
    }

    const ripples_animations = {
        initial:{
            opacity:0
        },
        animate:{
            opacity:0
        },
        loop_initial: {
            scale:0.8,
            opacity:1
        },
        loop_animate:(index:number) => ({
            scale:[0.8, 1.5, 2, 0.8, 0.8],
            opacity:[1, 0.2, 0, 0, 1],
            transition:{
                delay:3 + index,
                duration:2,
                times:[0, 0.3, 0.5, 0.9, 1],
                repeatDelay:(5),
                repeat:Infinity,
            }
        })
    }

    const sun_halo = [
        " z-10  rounded-full bg-yellow-500 blur-xl mix-blend-multiply",
        " z-[11] rounded-full bg-orange-600 blur-2xl",
        " z-[12] rounded-full bg-amber-400 blur-2xl mix-blend-overlay",
        " z-[13]  rounded-full bg-yellow-400 blur-2xl mix-blend-overlay"
    ]

    let ripple_rug = {
        times:[0],
        style:""
    }

    // 各ボタンから出る波紋のDelayを設定する、配列の中の要素の数ほど波紋がでる
    if(name=="展示一覧") {
        ripple_rug.times = [0.3,0.8,1.1]
    } else  {
        ripple_rug.times = [0.5]
    }
    ripple_rug.style = " " + pos
    
    const ripple_properties = ripple_rug.times.map((item) => 
        ({style:ripple_rug.style, time_rug:item})
    )

    const openHalo = (e:any) => {
        if(name =="展示一覧") {
            animateEventHalo(eventHalo.current, {opacity:0.95}, {duration:0.4})
        } else {
            animateRegisterHalo(registerHalo.current, {opacity:0.95}, {duration:0.4})
        }
    }

    const closeHalo = (e:any) => {
        if(name =="展示一覧") {
            animateEventHalo(eventHalo.current, {opacity:0}, {duration:0.4})
        } else {
            animateRegisterHalo(registerHalo.current, {opacity:0}, {duration:0.4})
        }
    }

    return(
        <div>   
            <motion.div variants={button_animations} className={"absolute aspect-square z-20 " + pos}  onHoverStart={openHalo} onHoverEnd={closeHalo}>
                <Link href={name == "展示一覧"? "/event" : "/info"}>
                    <Image src={name == "展示一覧"?"/展示一覧ミニ.webp":"/事前登録ミニ.webp"} alt={name == "展示一覧" ?"展示一覧" :"事前登録" + "ジャンプボタン"} width={400} height={400} className="aspect-square object-cover w-full h-full "></Image>
                </Link>
            </motion.div>
            {/* ボタンをホバー時に出てくるヘイロー。大きいほうと小さいほうどっちも */}
            <div ref={name== "展示一覧"? eventHalo :registerHalo} className="opacity-0">
                {sun_halo.map((item, index) => 
                <div key={index} className={"absolute aspect-square " + item + pos}></div>
                )}  
            </div>
            
            {/* ボタンから出てくる波紋 */}
            {ripple_properties.map((item, index) => 
                <motion.div className={"absolute aspect-square z-10 opacity-0 border-2 border-yellow-400 rounded-full " + item.style} custom={item.time_rug} variants={ripples_animations} key={index}></motion.div>
            )}
        </div>
    )
}
