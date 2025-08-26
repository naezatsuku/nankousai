import ClassEvent from "./top_parts/events_parts/event_links"
import { ClubEvent } from "./top_parts/events_parts/event_links"
import { FoodEvent } from "./top_parts/events_parts/event_links"
import {EventLinkMobile} from "./top_parts/events_parts/event_links"
import { EventLinkPC } from "./top_parts/events_parts/event_links"
import SquareButton from "../global/parts/square_button"
import {SquareButtonWhiteBase} from "../global/parts/square_button"
import {SquareButtonTransparentBase} from "../global/parts/square_button"
import Link from "next/link"
import styles from "./top.module.css"
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Events() {

    return(
        <div  className={"relative base-bg pt-[23vw] pb-[10vw] font-bold lg:pt-24 lg:pb-28 text-white text-center " + styles.gradation_event}  >
            <div className={styles.custom_shape_divider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
                </svg>
            </div>
            <div className={styles.custom_shape_divider_bottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shape_fill}></path>
                </svg>
            </div>
            <h2 className={`${kaiseiDecol.className} text-[10vw] 2xl:text-7xl lg:text-5xl`}>展示・イベント</h2>
            <Link href={"/event"}>
                <div className="w-[35vw] mx-auto mt-[5vw] lg:max-w-[200px] lg:mt-10">
                    <SquareButtonTransparentBase text="一覧で見る"></SquareButtonTransparentBase>
                </div>
            </Link> 
            <div className="my-[14vw] lg:hidden">
                <EventLinkMobile></EventLinkMobile>
            </div>
            <div className="w-full hidden lg:block">
                <EventLinkPC></EventLinkPC>
            </div>
        </div>
    )
}