import Image from "next/image";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Loading() {
    return(
        <div className="w-full h-[50vw] lg:h-40 flex">
            <p className={`${kaiseiDecol.className} m-auto text-[6vw] lg:text-5xl bg-gradient-to-br  light-gradient bg-clip-text text-transparent `}>・・・読み込み中・・・</p>
        </div>
    )
}

export function LoadingPage() {
    return(
        <div className="w-[100vw] h-[100vh] bg-gradient-to-br base-gradient ">
            {/* <Image src={"/ロード背景.jpg"} alt="ロード画面背景" fill className="brightness-95  object-left-top object-cover top-0 left-0"></Image> */}
            <p className={`${kaiseiDecol.className} text-white text-center text-[6vw] absolute left-[50vw] -translate-x-1/2 top-[50vh] -translate-y-1/2 text-nowrap`}>ロード中...</p>
        </div>
    )
}

export function UndisclosedPage() {
    return(
        <div className="w-[100svw] h-[100svh] bg-gradient-to-br base-gradient ">
            <p className={`${kaiseiDecol.className} text-white text-center text-[6vw] absolute left-[50vw] -translate-x-1/2 top-[50vh] -translate-y-1/2 text-nowrap`}>
            現在非公開中です... <br />
            南高祭当日までお待ちください...
            </p>
        </div>
    )
}