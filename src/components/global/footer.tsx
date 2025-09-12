import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

export default function Footer() {
  const internalLinks = [
    { label: 'トップページ', href: '/' },
    { label: 'イベント一覧', href: '/event' },
    { label: 'ギャラリー', href: '/gallery' },
    
    { label: 'マップ', href: '/map' },
    { label: 'インフォーメーション', href: '/info' },
  ]

  const externalLinks = [
    { label: '南高校公式サイト', href: 'https://www.edu.city.yokohama.lg.jp/school/hs/minami/' },
    { label: '附属中公式サイト', href: 'https://www.edu.city.yokohama.lg.jp/school/jhs/hs-minami/' },
  ]

  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-12 text-sm font-light">
      <div className="max-w-screen-xl lg:max-w-3xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex items-center justify-end w-full lg:w-1/2 gap-6">
          <div className="relative w-40 h-40 shrink-0">
            <Image
              src="/70周年ロゴB.png"
              alt="ロゴ"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 underline underline-offset-4">
            {externalLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg lg:text-xl font-medium hover:underline text-white/90"
              >
                {item.label} <FiExternalLink className="inline-block text-lg" />
              </Link>
            ))}
          </div>
        </div>

        {/* 右側：内部リンク（横並び） */}
        <div className="basis-1/3 flex flex-wrap justify-start gap-x-6 gap-y-3 w-full lg:w-1/2 ">
          {internalLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="hover:underline text-white/80 text-base lg:text-lg "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 著作権表記 */}
      <div className="mt-10 text-center text-xs text-white/50">
        © 2025 南高祭公式サイト
      </div>
    </footer>
  )
}