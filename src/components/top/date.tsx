
import Date2 from "./top_parts/9798"
import {Rounded_withShadow} from "../global/parts/rounded_button"
import {Rounded_base} from "../global/parts/rounded_button"
import { KaiseiDecol } from "@/app/fonts"
import { FaHourglassStart } from "react-icons/fa";
import Link from "next/link"


const kaiseiDecol = KaiseiDecol

export default function Date() {
    return(
        <div className="w-full md:mb-24 md:mt-24 mb-20 mt-16 lg:my-20">
            <h2 className={`${kaiseiDecol.className} text-center text-[8vw]  2xl:text-5xl lg:text-4xl lg:my-4 my-0`}>開催日決定！</h2>
            {/* <p className={`${kaiseiDecol.className} text-center  text-2xl`}>2024年度 第71回南高祭</p> */}
            <div className="lg:mt-8 lg:mb-12">
                <Date2></Date2>
            </div>
            <p className={`${kaiseiDecol.className} hidden lg:flex text-center text-5xl justify-center text-color-base`}>
                <span className="mx-12">開始 9:30</span>
                <span>終了 15:30</span>
            </p>
            <div className="lg:hidden">
                <div className="my-[7vw] flex justify-center ">
                    <Link href={"/info"}>
                        <div className="-translate-x-1 w-[40vw] aspect-[3/1]">
                            <Rounded_base text={"参加申し込み"} size={40} color="light-gradient"></Rounded_base>
                        </div>
                    </Link>

                </div>
                <div className="flex justify-around mt-[10vw] mb-[20vw]">
                    <Link href={"/info#access"}>
                        <div className="w-[40vw] aspect-[3/1] ">
                            <Rounded_base text={"アクセス"} size={50} color="base-gradient"></Rounded_base>
                        </div>
                    </Link> 
                    <Link href={"/info#attention"}>
                        <div className="w-[40vw] aspect-[3/1]">
                            <Rounded_base text={"南高祭とは？"} size={50} color="red-gradient"></Rounded_base>
                        </div>
                    </Link>
                </div>
            </div>   
        </div>
    )
}