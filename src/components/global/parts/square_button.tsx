
import Image from "next/image"


import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol


type Props = {
    text:string,
}

export default function SquareButton(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3/1] relative rounded-xl border-2 border-white">
            {/* <div className="w-full h-full absolute bg-white opacity-20 rounded-lg"></div> */}
            <Image src={"/レイヤー 2.png"} alt="ドット背景" fill className="opacity-80 rounded-xl lg:opacity-60"></Image>
            <div className="w-full h-full flex">
                <p className="text-[4.5vw] font-normal inline-block m-auto lg:text-2xl lg:font-medium">{text}</p>
            </div>
            
        </div>
    )
}

export function SquareButtonPinkShadow(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3.2/1] rounded-lg relative drop-shadow-lg">
            <div className="w-full h-full rounded-lg bg-white">
                <div className="w-full h-full bg-gradient-to-br  light-gradient absolute opacity-70 rounded-md lg:rounded-lg"></div>
                <div className="h-full w-full absolute z-10 flex">
                    <p className={`text-white m-auto text-[4.5vw] lg:text-2xl`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export function SquareButtonPinkShadow2(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3/1] rounded-lg relative drop-shadow-lg">
            <div className="w-full h-full rounded-md bg-white">
                <div className="w-full h-full bg-gradient-to-br  light-gradient absolute opacity-70 rounded-md"></div>
                <div className="h-full w-full absolute z-10 flex">
                    <p className={`text-white m-auto text-[3.5vw] lg:text-lg xl:text-xl ${kaiseiDecol.className}`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export function SquareButtonWhite(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3/1] rounded-lg relative drop-shadow-lg">
            <div className="w-full h-full rounded-md">
                {/* <div className="w-full h-full bg-gradient-to-br  light-gradient absolute opacity-70 rounded-md"></div> */}
                <div className="h-full w-full absolute z-10 flex">
                    <p className={`text-white m-auto text-[3.5vw] ${kaiseiDecol.className}`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export function SquareButtonPinkWhite(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3.2/1] relative ">
            <div className="w-full h-full bg-gradient-to-br  light-gradient absolute p-[2%] z-0 rounded-md lg:rounded-lg">
                <div className="w-full h-full bg-white rounded-md"></div>
            </div>
            <div className="h-full w-full absolute z-10 flex">
                <p className="bg-gradient-to-br  light-gradient bg-clip-text text-transparent m-auto text-[3.5vw] lg:text-xl font-medium">{text}</p>
            </div>
        </div>
    )
}

export function SquareButtonWhiteBase (
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3.2/1] bg-white relative rounded-full overflow-hidden opacity-90">
            <div className="h-full w-full absolute z-10 flex">
                <p className="bg-gradient-to-br base-gradient  bg-clip-text text-transparent m-auto text-[3.5vw] lg:text-xl font-medium">{text}</p>
            </div>
        </div>
    )
}

export function SquareButtonTransparentBase (
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3.2/1] bg-none border-2 border-white relative rounded-full overflow-hidden opacity-90">
            <div className="h-full w-full absolute z-10 flex">
                <p className="text-white m-auto text-[3.5vw] lg:text-xl font-medium">{text}</p>
            </div>
        </div>
    )
}