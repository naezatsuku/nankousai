

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function NotReady() {
    return(
        <div>
            <p className={`text-[5vw] lg:text-4xl ${kaiseiDecol.className} text-center bg-gradient-to-br  light-gradient bg-clip-text text-transparent`}>準備中です...</p>
        </div>
    )
}