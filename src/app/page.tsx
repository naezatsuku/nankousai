import MainTitle from "@/components/top/main_title"
import { MainTitlePC } from "@/components/top/main_title"
import Date from "@/components/top/date"
import Header from "@/components/global/header"
import Events from "@/components/top/event"
import Guide from "@/components/top/guide"
import Map from "@/components/top/map"
import Image from "next/image"
import Head from "next/head"

export const metadata = {
  title: "南高祭公式サイト",
  description: "南高・南高附属中最大の行事へようこそ。フード販売やバンドの生演奏など魅力的な展示を公開しています。どなたも入場無料。ぜひ気軽にお越しください！",
  keywords: "南高祭, 文化祭, 学園祭, イベント, 展示, フード, 学校",
  openGraph: {
    title: "南高祭公式サイト",
    description: "南高・南高附属中最大の行事へようこそ。フード販売やバンドの生演奏など魅力的な展示を公開しています。",
    url: "https://nankousai.vercel.app/",
    images: [
      {
        url: "https://nankousai.vercel.app/2025南高祭ポスター拡張.jpg",
        width: 1200,
        height: 630,
        alt: "南高祭公式サイト",
      },
    ],
    type: "website",
  },
  metadataBase: new URL('https://nankousai.vercel.app/'),
  alternates: {
    canonical: '/',
  },
};
export default function page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "南高祭",
    "startDate": "2025-09-13T09:30",
    "endDate": "2025-09-13T09:30",
    "location": {
      "@type": "Place",
      "name": "横浜市立南高等学校・附属中学校",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "神奈川県",
        "addressLocality": "横浜市",
        "streetAddress": "港南区東永谷2丁目1-1"
		  }
    },
    "description": "南高・南高附属中最大の行事へようこそ。フード販売やバンドの生演奏を含む、たくさんの魅力的な展示を公開しています。どなたも入場無料。ぜひ気軽にお越しください！",
    "image": [
      "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "南高祭実行委員会",
      "url": "https://nankousai.jp"
    },

    "offers": {
      "@type": "Offer",
      "price": "0",
      "url":"https://teket.jp/6636/53992",
      "priceCurrency": "JPY",
    }
  };
  const canonicalUrl = 'https://nankousai.vercel.app/';

  return(

    <>
    <main className="w-full" > 
      <div className="h-[100svh]  bg-[#F02004]">
        <MainTitle></MainTitle>
      </div>
      {/* <div className="hidden lg:block" >
        <MainTitlePC></MainTitlePC>
      </div> */}
      <div className="w-full sticky top-0 z-50" >
        <Header></Header>
      </div>
      <div className="z-0 w-full" id="date">
        <Date></Date>
        <Events></Events>
        <Map></Map>
        <Guide></Guide>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
    </>
    
  )
}