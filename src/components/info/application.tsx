import Image from "next/image";
import AboutTeket from "./info_parts/about_teket"
import HowToApply from "./info_parts/howtoapply"
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import { TeketType } from "./info_parts/about_teket";
import Link from "next/link";
import { KaiseiDecol } from "@/app/fonts";
import BaseContent from "../global/content_base";

const kaiseiDecol = KaiseiDecol

export default function Application() {
    return(
        <div className="pt-[30vw] 2xl:pt-40 lg:pt-32 ">
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
            {/* <div className="flex justify-center my-[10vw] items-center">
                <Image src={"/20240821-094518.png"} alt="teketリンク" width={1000} height={1000} className="aspect-square w-[15vw] opacity-80"></Image>
                <p className="mx-3 text-[3vw]">（申し込みページのQRコード）</p>
            </div> */}
            {/* <BaseContent content="山路（やまみち）を登りながら、かうえへた。
智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。兎角に人の世は住みにくい。　
住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟つた時、詩が生れて、畫が出來る。" title="STEP1" sub_title="申し込みページを開く"  image="/stepPC1.png" image_description="説明１"></BaseContent> */}
            <div >
                <div className="w-[90vw] lg:max-w-[700px] mx-auto mt-[12vw] lg:mt-14 opacity-95">
                    <AboutTeket></AboutTeket>
                </div>
                <div className="w-[90vw] lg:max-w-[700px] mx-auto mt-[10vw]  lg:my-14 opacity-95">
                    <TeketType></TeketType>
                </div>
            </div>

            <div className="pb-[5vw] lg:pb-12">
                <HowToApply></HowToApply>
            </div>
        </div>
        
    )
}