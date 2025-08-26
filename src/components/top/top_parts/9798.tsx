import { KaiseiDecol } from "@/app/fonts"

const kaiseiDecol = KaiseiDecol

export default function Date2 () {
    return(
        <div className="">
            <p className={`${kaiseiDecol.className} text-[16vw] lg:text-9xl  font-bold flex justify-center `}>
                <span className="relative">
                    9/13
                    <span className="text-5xl mx-4 absolute top-0 -left-28 text-[#38cbf8] hidden lg:block">
                        Sat.
                    </span>
                </span>
                
                <span className="-mx-[2vw] lg:hidden">
                    ・
                </span>
                <span className="hidden mx- lg:block ">
                    ・
                </span>
                <span className="relative">
                    9/14
                    <span className="text-5xl mx-4 absolute bottom-0 -right-36 text-[orange] hidden lg:block">
                        Sun.
                    </span>
                </span>
            </p>
        </div>
    )
}