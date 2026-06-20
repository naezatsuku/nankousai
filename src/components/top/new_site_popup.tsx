"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function NewSiteBanner() {
    const [open, setOpen] = useState(true)

    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-[6vw]"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-w-[420px] rounded-xl overflow-hidden drop-shadow-lg bg-gradient-to-br from-[#FFE8CC] to-[#FFD4A0] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-2 z-10 text-white bg-black/30 rounded-full p-1 text-xl"
                            aria-label="閉じる"
                        >
                            <IoMdClose></IoMdClose>
                        </button>
                        <div className="w-full aspect-square relative flex items-center justify-center">
                            <div className="relative w-[55%] aspect-square">
                                <Image
                                    src="https://nankousai-3d-map.vercel.app/nanpen.png"
                                    alt="南高祭2026公式サイト"
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                        </div>
                        <Link
                            href="https://nankousai-3d-map.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#F02004] py-[4vw] flex justify-center"
                        >
                            <p className={`${kaiseiDecol.className} text-white text-[4.5vw] text-center`}>
                                2026年度最新版はこちらです
                            </p>
                        </Link>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
