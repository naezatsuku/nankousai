import Image from "next/image"
import { KaiseiDecol } from "@/app/fonts";
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";

const kaiseiDecol = KaiseiDecol

type Props = {
    title:string,
    sub_title:string,
    image:string,
    image_description:string,
    content:string
}

export default function BaseContent(
    {title, sub_title, image, content, image_description}:Props
) {
    return (
        <div className={`${image == "" ? "items-center ": "items-start"} w-[90vw] lg:max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between`}>
            <div className={`px-1 w-full flex flex-row justify-between md:flex-col md:justify-normal items-center md:items-start ${image != "" && "md:mt-12"} `}>
                {title != "" &&
                    <h3 className={`${kaiseiDecol.className} text-4xl md:text-4xl lg:text-5xl font-semibold`}>{title}</h3>
                }
                {sub_title != "" &&
                    <p className="md:mt-4 text-base md:text-xl lg:text-2xl">{sub_title}</p>
                }
            </div>
            <div className="text-sm md:text-base lg:text-lg md:w-[160vw] w-full md:mt-0 md:max-w-[750px] ">
                {image != "" &&
                    <Image src={image} alt={image_description} width={1200} height={1000} className="rounded-md drop-shadow-lg w-full aspect-auto mt-5" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 240))}`}></Image>
                } 
                <p className="px-1 leading-relaxed text-[#70564d] mt-6 xl:mt-8">{content}</p>
            </div>
        </div>

        //xl:min-w-[700px] lg:min-w-[600px] md:min-w-[450px]
    )
}