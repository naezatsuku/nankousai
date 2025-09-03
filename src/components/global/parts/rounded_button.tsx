"use client"
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { KaiseiDecol } from "@/app/fonts";
import styles from "./parts.module.css"
import { useState } from "react";
const kaiseiDecol = KaiseiDecol

type Props = {
    text:string,
    size:number
}

export function RoundButtonOrange(
    {text, size}:Props
) {
    const font_size = size;

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.65},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.02, top:"-0.3vw", left:"-1%", opacity:0.95},
        click:{scale:1, top:"12%",left:"2.3%"}
    }

    return(
        <motion.div whileTap={"click"} whileHover={"hover"} variants={variantsA} className="relative">
            <motion.div variants={variants} transition={{ease:"easeOut", duration:0.08}}  className={`bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 flex justify-center w-full aspect-[3.2/1] rounded-full p-[1.8%] opacity-90 brightness-105 relative`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <p
                    className={
                        font_size == 50?
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[4.5vw] 2xl:text-xl lg:text-lg text-white inline-block w-full text-transparent font-normal  z-20`:
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[3.5vw] 2xl:text-xl lg:text-xs text-white inline-block w-full text-transparent font-normal tracking-wide  z-20`} >
                        {text}
                    </p>
                    {/* <button
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[5vw] rounded-full  bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text inline-block w-full text-transparent font-medium z-20">
                        {text}
                    </button> */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 rounded-full top-0 opacity-80 z-10"></div>
                </div>
            </motion.div>
            <motion.div variants={variantsB} transition={{ease:"easeOut", duration:0.08}} className={`bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 flex justify-center w-full aspect-[3.2/1] rounded-full absolute top-[12%] left-[2.3%] -z-10 saturate-[1.8] brightness-[0.75] opacity-80`}></motion.div>
        </motion.div>
    )
}

export function RoundButtonPurple(
    {text, size}:Props
) {
    const font_size = size;

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.65},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.02, top:"-0.3vw", left:"-1%", opacity:0.95},
        click:{scale:1, top:"12%",left:"2.3%"}
    }

    return(
        <motion.div whileTap={"click"} whileHover={"hover"} variants={variantsA} className="relative">
            <motion.div variants={variants} transition={{ease:"easeOut", duration:0.08}} className={`bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 400 flex justify-center w-full aspect-[3.2/1] rounded-full p-[1.8%] opacity-85 brightness-105 relative`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <p
                    className={
                        font_size == 50?
                        `absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 text-[4.5vw]  2xl:text-xl lg:text-lg text-white inline-block w-full text-transparent font-normal  tracking-wide z-20`:
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[3.5vw] 2xl:text-xl lg:text-xs text-white inline-block w-full text-transparent font-normal tracking-wide  z-20`} >
                        {text}
                    </p>
                    {/* <button
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[5vw] rounded-full  bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text inline-block w-full text-transparent font-medium z-20">
                        {text}
                    </button> */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 -400 rounded-full top-0 opacity-80 z-10"></div>
                </div>
            </motion.div>
            <motion.div variants={variantsB} transition={{ease:"easeOut", duration:0.08}}  className={`bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 flex justify-center w-full aspect-[3.2/1] rounded-full absolute top-[12%] left-[2.3%] -z-10 saturate-[1.8] brightness-[0.75] opacity-80`}></motion.div>
        </motion.div>
    )
}


export  function RoundButtonTurquoise(
    {text, size}:Props
) {
    const font_size = size;

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.7},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.02, top:"-0.3vw", left:"-1%", opacity:0.95},
        click:{scale:1, top:"12%",left:"2.3%"}
    }

    return(
        <motion.div whileTap={"click"} whileHover={"hover"} variants={variantsA}  className="relative">
            <motion.div variants={variants} transition={{ease:"easeOut", duration:0.08}}   className={`bg-gradient-to-br blue-button flex justify-center w-full aspect-[3.2/1] rounded-full p-[1.8%] opacity-85 brightness-105 relative`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <p
                    className={
                        font_size == 50?
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[4.5vw] 2xl:text-xl lg:text-lg text-white inline-block w-full text-transparent font-normal tracking-wide z-20`:
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[3.5vw] 2xl:text-xl lg:text-xs text-white inline-block w-full text-transparent font-normal tracking-wide z-20`} >
                        {text}
                    </p>
                    {/* <button
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[5vw] rounded-full  bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text inline-block w-full text-transparent font-medium z-20">
                        {text}
                    </button> */}
                    <div className="absolute w-full h-full bg-gradient-to-br   base-gradient rounded-full top-0 opacity-90 z-10"></div>
                </div>
            </motion.div>
            {/* <div className={`bg-gradient-to-br   base-gradient flex justify-center w-full aspect-[3.2/1] rounded-full p-[2.3%] absolute top-[12%] left-[2%] -z-10 saturate-150 brightness-[0.8] opacity-80`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <div className="absolute w-full h-full bg-gradient-to-br   base-gradient rounded-full top-0 opacity-80 z-10"></div>
                </div>
            </div> */}
            <motion.div variants={variantsB} transition={{ease:"easeOut", duration:0.08}}   className={`bg-gradient-to-br   base-gradient flex justify-center w-full aspect-[3.2/1] rounded-full absolute top-[12%] left-[2.3%] -z-10 saturate-[1.8] brightness-[0.75] opacity-80`}></motion.div>
        </motion.div>
    )
}

export  function RoundButtonBlue(
    {text, size}:Props
) {

    const size_style  = "w-[" + size.toString() + "vw]"

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.9},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.03, top:"-0.5vw", left:"-0.5vw", opacity:0.95},
        click:{scale:1, top:"15%",left:"1.5%"}
    }

    return(
        <motion.div whileHover={"hover"} whileTap="click" variants={variantsA} className="relative">
            <motion.div variants={variants} transition={{type:"spring", duration:0.25, bounce:0.3}} className={`border-4 border-sky-500 flex aspect-[3.2/1] rounded-full relative w-full z-10 opacity-90`}>
                <div className="bg-sky-500 w-full h-full rounded-full relative z-0  opacity-95 saturate-[1.1] ">
                </div>
                <p className={`absolute top-1/2 -translate-y-1/2 text-center text-[4.5vw]  text-white opacity-90 w-full z-10 font-normal `}>{text}</p>
            </motion.div>
            <motion.div variants={variantsB} transition={{type:"spring", duration:0.25, bounce:0.3}} className={`border-4 border-sky-500 flex aspect-[3.2/1] rounded-full absolute top-[15%] left-[1.5%] brightness-[0.8] saturate-[1.2] w-full`}>
                <div className="bg-sky-500 w-full h-full rounded-full relative z-0 saturate-150 opacity-80 brightness-[0.8]">
                </div>
            </motion.div>
        </motion.div>
    )
}

export  function RoundButtonRed(
    {text, size}:Props
) {

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.9},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.03, top:"-0.5vw", left:"-0.5vw", opacity:0.95},
        click:{scale:1, top:"15%",left:"1.5%"}
    }

    return(
        <motion.div whileHover={"hover"} whileTap="click" variants={variantsA} className="relative brightness-95 opacity-95">
            <motion.div variants={variants} transition={{type:"spring", duration:0.25, bounce:0.3}} className={`border-4 border-rose-500 flex w-full aspect-[3.2/1] rounded-full relative z-10 opacity-90`}>
                <div className="bg-rose-500 w-full h-full rounded-full relative z-0  opacity-90 ">
                </div>
                <p className="absolute top-1/2 -translate-y-1/2 text-center text-[4.5vw] text-white opacity-90 w-full z-10 font-normal">{text}</p>
            </motion.div>
            <motion.div variants={variantsB} transition={{type:"spring", duration:0.25, bounce:0.3}} className={`border-4 border-rose-400 flex w-full aspect-[3.2/1] rounded-full absolute top-[15%] left-[1.5%] brightness-[0.8] saturate-[1.2]`}>
                <div className="bg-rose-400 w-full h-full rounded-full relative z-0 saturate-150 opacity-80 brightness-[0.8]">
                </div>
            </motion.div>
        </motion.div>
    )
}


export default function RoundButtonPink(
    {text, size}:Props
) {
    const font_size = size;

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.72},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.03, top:"-0.5vw", left:"-0.5vw", opacity:0.95},
        click:{scale:1, top:"12%",left:"2.3%"}
    }

    return(
        <motion.div className="relative" whileTap="click" whileHover="hover" variants={variantsA}>
            <motion.div variants={variants} transition={{type:"spring", duration:0.25, bounce:0.3}} className={`relative bg-gradient-to-br from-fuchsia-500 to-sky-500 flex justify-center w-full aspect-[3.2/1] rounded-full p-[1.5%] opacity-90 brightness-105`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <p
                    className={
                        font_size == 50?
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[4.5vw]  text-white inline-block w-full text-transparent font-normal tracking-wide z-20  opacity-80`:
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[3.5vw]text-white inline-block w-full text-transparent font-light tracking-wide z-20`} >
                        {text}
                    </p>
                    {/* <button
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[5vw] rounded-full  bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text inline-block w-full text-transparent font-medium z-20">
                        {text}
                    </button> */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-fuchsia-500 to-sky-500 rounded-full top-0 opacity-80 z-10"></div>
                </div>
            </motion.div>
            {/* <div className={`bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-500 flex justify-center w-full aspect-[3.2/1] rounded-full p-[2.3%] absolute top-[12%] left-[2%] -z-10 saturate-150 brightness-[0.8] opacity-80`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <div className="absolute w-full h-full bg-gradient-to-br from-fuchsia-500 to-sky-500 rounded-full top-0 opacity-80 z-10"></div>
                </div>
            </div> */}
            <motion.div variants={variantsB} transition={{type:"spring", duration:0.25, bounce:0.3}} className={`bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-500 flex justify-center w-full aspect-[3.2/1] rounded-full p-[2.3%] absolute top-[12%] left-[2.3%] -z-10 saturate-[1.8] brightness-[0.75] opacity-80`}>
                {/* <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <div className="absolute w-full h-full bg-gradient-to-br from-fuchsia-500 to-sky-500 rounded-full top-0 opacity-80 z-10"></div>
                </div> */}
            </motion.div>
        </motion.div>
    )
}

type NewButton = {
    text:string,
    size:number,
    color:string
}

export function Rounded_withShadow(
    {text, size, color}:NewButton 
){
const font_size = size;

    const variantsA = {
        hover:{opacity:1}
    }

    const variantsB = {
        hover:{ opacity:0.7},
        click:{opacity:1}
    }

    const variants = {
        hover:{scale:1.02, top:"-0.3vw", left:"-1%", opacity:0.95},
        click:{scale:1, top:"12%",left:"2.3%"}
    }

    return(
        <motion.div whileTap={"click"} whileHover={"hover"} variants={variantsA}  className="relative">
            <motion.div variants={variants} transition={{ease:"easeOut", duration:0.08}}   className={`bg-gradient-to-br ${color} flex justify-center w-full aspect-[3.2/1] rounded-full p-[1.8%] opacity-85 brightness-105 relative`}>
                <div className="w-full h-full bg-white rounded-full text-center relative z-0">
                    <p
                    className={
                        font_size == 50?
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[4.5vw] 2xl:text-xl lg:text-lg text-white inline-block w-full text-transparent font-normal tracking-wide z-20`:
                        `absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[3.5vw] 2xl:text-xl lg:text-xs text-white inline-block w-full text-transparent font-normal tracking-wide z-20`} >
                        {text}
                    </p>
                    <div className={`absolute w-full h-full bg-gradient-to-br rounded-full top-0 opacity-90 z-10 ${color}`}></div>
                </div>
            </motion.div>
            <motion.div variants={variantsB} transition={{ease:"easeOut", duration:0.08}}   className={`bg-gradient-to-br   ${color} flex justify-center w-full aspect-[3.2/1] rounded-full absolute top-[12%] left-[2.3%] -z-10 saturate-[1.8] brightness-[0.75] opacity-80`}></motion.div>
        </motion.div>
    )
}

export function Rounded_base(
    {text, size, color}:NewButton 
) {
    const [hovered, setHovered] = useState(false)

    const button_variants = {
        hover: {
            scale:1.08,
        }
    }

    const light_variants = {
        hover:{
            opacity:1,
            // y:[0, 80, 80, 0, 0],
            // x:[0, 0, 80, 80,0],
            // transition:{
            //     duration:3,
            //     repeat: Infinity z-20
            // }
        }
    }

    return(
        <div className="relative w-full h-full">
            <motion.div variants={button_variants} onHoverStart={() => {setHovered(true)}} onHoverEnd={() => {setHovered(false)}} transition={{type:"spring", duration:0.4, bounce:0.4}}  whileHover="hover" className={"top-0 flex justify-center items-center left-0 absolute z-20 w-full h-full rounded-full bg-gradient-to-br " + color}>
                <p className="text-white font-thin text-base md:text-3xl lg:text-xs xl:text-base  2xl:text-xl ">{text}</p>

                <motion.div className={`-top-3 pointer-events-none -left-3 scale-110 absolute w-full h-full z-30 rounded-full bg-white  mix-blend-soft-light blur-xl ${hovered? styles.light_move: "opacity-40"}`}></motion.div>
            </motion.div>
            <div className={"top-1 left-1 absolute w-full h-full z-10  rounded-full bg-gradient-to-br light-gradient opacity-70 mix-blend-lighten blur-lg " + color}></div>
        </div>
    )
}