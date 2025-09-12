import { Kaisei_Decol } from "next/font/google"
import { Roboto } from 'next/font/google';
import { Noto_Sans_JP } from 'next/font/google';

export const KaiseiDecol = Kaisei_Decol({
    subsets:["latin"],
    weight:["400", "500", "700"]
})


export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // 太字を使いたいなら '700' を指定
});
export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'], // 必要なウェイトを指定
});
