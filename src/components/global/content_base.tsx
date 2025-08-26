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
        <div className="w-[88vw] lg:max-w-[1000px] mx-auto flex flex-col lg:flex-row lg:justify-between">
            <div className={`${kaiseiDecol.className} px-1 w-full flex flex-row justify-between lg:flex-col lg:justify-normal items-center lg:items-start`}>
                {title != "" &&
                    <h3 className="text-3xl lg:text-5xl">{title}</h3>
                }
                {sub_title != "" &&
                    <p className="lg:mt-3 text-sm lg:text-xl">{sub_title}</p>
                }
            </div>
            <div className="text-sm lg:text-lg w-full  lg:mt-0 lg:min-w-[600px] lg:w-[50svw]">
                {image != "" &&
                    <Image src={image} alt={image_description} width={1200} height={1000} className="rounded-md drop-shadow-lg w-full aspect-auto mt-3" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 240))}`}></Image>
                } 
                <p className="px-1 leading-relaxed text-[#70564d] mt-4 lg:mt-6">{content}</p>
            </div>
        </div>
    )
}