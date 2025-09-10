
import Image from "next/image"
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import Link from "next/link"
import styles from "./top.module.css"
import { KaiseiDecol } from "@/app/fonts";
import { Rounded_base } from "../global/parts/rounded_button";

const kaiseiDecol = KaiseiDecol

export default function Guide() {
    const description = ["南高祭は毎年進化を続けています","より多くの方に楽しんでいただくため","今年度より正式にホームページを作成しました","今後とも進化を続けていくため", "以下のフォームより","皆様のご感想を募りたいと考えています","多少お時間頂戴しますが","ご協力お願いします"];

    return(
        <div className={styles.gradation_event + "  base-bg pt-[23vw] pb-[10vw] 2xl:pt-32 lg:py-20  text-white relative"}>
            <div className={styles.custom_shape_divider_guide}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shape_fill}></path>
                </svg>
            </div>
            <h2 className={`${kaiseiDecol.className} text-[8vw] text-center 2xl:text-7xl lg:text-5xl` }>パンフレット配布中！</h2>
            <div className="lg:flex justify-center lg:my-14">
                <div className="w-[60vw] mx-auto h-auto relative my-[7vw] lg:my-0 xl:max-w-[500px] lg:max-w-[400px] lg:mx-12">
                    <Link href={"/gallery"}>
                        <Image src={"/24年度rondo 暫定版-1.png"} alt="パンフレット" width={2000} height={1200} className="rounded-md w-full aspect-auto drop-shadow-lg "></Image>
                    </Link>     
                </div>
                <div className="lg:flex flex-col justify-center">
                    <p className={`${kaiseiDecol.className} text-[5vw] text-center xl:text-4xl lg:text-2xl` }>1階のエントランスにて受領可能<br/>おひとり様1部まで</p>
                    <Link href={"/gallery"}>
                        <div className="w-[40vw] md:w-[280px] mx-auto my-[7vw] lg:max-w-[230px] lg:my-10">
                            <SquareButtonPinkShadow text="電子版はこちら"></SquareButtonPinkShadow>
                        </div>
                    </Link>   
                </div>  
            </div>      
            <div className={`flex justify-center flex-col w-full ${kaiseiDecol.className} py-24`}>
                <div className={`${kaiseiDecol.className} text-[9vw] md:text-5xl text-center 2xl:text-7xl lg:text-6xl  pb-4  md:pb-8`}>当サイトについて</div>
                {description.map((value,index) => 
                    <p key={index} className={` text-sm md:text-xl text-center xl:text-2xl lg:text-2xl py-4` }>{value}</p>
                )}
                <Link href={""} className="w-full flex justify-center pt-4 md:pt-8">
                    <div className="w-[180px] md:w-[280px] lg:w-[30vw] aspect-[3.5/1] 2xl:max-w-[300px] xl:w-[300px]  opacity-90">
                        <SquareButtonPinkShadow text={"アンケートはこちら"}></SquareButtonPinkShadow>
                    </div>
                </Link>
            </div>
            <p className="hidden 2xl:block text-base absolute bottom-0 right-0">所在地： 〒233-0011 神奈川県横浜市港南区東永谷２丁目１−１</p>
        </div>
    )
}