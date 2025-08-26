import Image from "next/image";
import AboutTeket from "./info_parts/about_teket"
import HowToApply from "./info_parts/howtoapply"
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import { TeketType } from "./info_parts/about_teket";
import Link from "next/link";
import { KaiseiDecol } from "@/app/fonts";
import BaseContent from "../global/content_base";
import styles from "@/components/global/global.module.css"


const kaiseiDecol = KaiseiDecol

export default function Application() {
    return(
        <div className="pt-[30vw] 2xl:pt-40 lg:pt-32 bg-transparent relative">
            <div className={` w-full h-full gradient-transparent  absolute top-0 left-0 -z-10 opacity-[0.08] `}></div>
            <div className="w-full ">
                <h2 className={`${kaiseiDecol.className} text-center text-[12vw]  2xl:text-8xl lg:text-6xl`}>申し込み方法</h2>
                <div className="w-[45vw] lg:w-64 mx-auto my-[4vw] lg:my-14 opacity-95">
                    <Link href={"https://teket.jp/6636/53992"} target={"_blank"}>
                        <SquareButtonPinkShadow text="申し込みページへ"></SquareButtonPinkShadow>
                    </Link>
                    {/* <RoundButtonTarqu text="申し込みページへ" size={50}></RoundButtonTarqu> */}
                    {/* <SquareButtonPinkWhite text="申し込みページへ"></SquareButtonPinkWhite> */}
                    
                </div>
            </div>
            <div >
                <div className="w-[90vw] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] mx-auto mt-[12vw] md:mt-14 lg:mt-14 opacity-95">
                    <AboutTeket></AboutTeket>
                </div>
                <div className="w-[90vw]  md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]  mx-auto mt-[10vw] md:mt-14 lg:my-14 opacity-95">
                    <TeketType></TeketType>
                </div>
            </div>
            <div className="pb-[5vw] lg:pb-12 xl:pt-4">
                <HowToApply></HowToApply>
            </div>
        </div>
        
    )
}