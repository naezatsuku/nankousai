import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import Image from "next/image"
import BaseContent from "@/components/global/content_base";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function HowToApply() {
    const steps = [
        {step:"STEP1",text:"上の「申し込みページへ」ボタンからteketのページを開きます。", img:"", sub_title:"teketのページを開く"},
        {step:"STEP2", text:"「チケット情報を表示」を押します。", img:"/step2.webp", sub_title:"チケットを表示"},
        {step:"STEP3", text:"日付と時間帯を選択します。", img:"/step3.webp", sub_title:"日時を選択"},
        {step:"STEP4", text:"日程選択後に、該当するチケットの「選択」を押します。", img:"/step4.webp", sub_title:"チケットの種類を選択"},
        {step:"STEP5", text:"チケット選択後、今一度正しいチケットが選択されているかを確認し、下のボタンを押します。(「購入」とありますが、料金は発生しません。必要に応じて、お使いのメールアドレスでログイン・会員登録をしてください。)", img:"/step5.webp", sub_title:"チケットを獲得"},
        {step:"STEP6", text:"南高祭展示の部へご来校する日までに、入手した「入場用QRコード」を「スマートフォンへダウンロード」または「QRコード画像を印刷」してください。", img:"/step7.webp", sub_title:"入場用QRコードを取得"},
        {step:"STEP7", text:"南高祭展示の部へご来校する日に、受付にて「ダウンロードまたは印刷した入場用QRコード」をご提示いただき、ご入場いただきます。（ ご入場時には、パンフレット「rondo」をお渡しするとともに、入場確認のためのリストバンドをつけさせていただきますのでご承知おきください。）", img:"", sub_title:"入場時にQRコードを提示"},
    ]

    const stepForPC = [
        {step:"STEP1", text:"上の「申し込みページへ」ボタンからteketのページを開き、「チケット情報を表示」を押します。", img:"/stepPC1.webp", sub_title:"teketのページを開く"},
        {step:"STEP2", text:"日付と時間帯を選択します。", img:"/stepPC2.webp", sub_title:"日時を選択"},
        {step:"STEP3", text:"日程選択後に、該当するチケットの「選択」を押し、チケット選択後、今一度正しいチケットが選択されているかを確認し、下のボタンを押します。(「購入」とありますが、料金は発生しません。必要に応じて、お使いのメールアドレスでログイン・会員登録をしてください。)", img:"/stepPC3.webp", sub_title:"チケットの種類を選択"},
        {step:"STEP4", text:"南高祭展示の部へご来校する日までに、入手した「入場用QRコード」を「スマートフォンへダウンロード」または「QRコード画像を印刷」してください。南高祭展示の部へご来校する日に、受付にて「ダウンロードまたは印刷した入場用QRコード」をご提示いただき、ご入場いただきます。（ ご入場時には、パンフレット「rondo」をお渡しするとともに、入場確認のためのリストバンドをつけさせていただきますのでご承知おきください。）", img:"/stepPC5.webp", sub_title:"入場用QRを獲得"},
    ]
    
    return(
        <div className="w-full"> 
            {steps.map((value, index) => (
                <div className="w-full my-14 md:hidden" key={index}>
                    <BaseContent key={index} content={value.text} image={value.img} sub_title={value.sub_title} title={value.step} image_description={""}></BaseContent>
                </div>
            ))

            }
            {stepForPC.map((value, index) => (
                <div className="w-full my-20 hidden md:block" key={index}>
                    <BaseContent key={index} content={value.text} image={value.img} sub_title={value.sub_title} title={value.step} image_description={""}></BaseContent>
                </div>
            ))

            }

        </div>
    )
}