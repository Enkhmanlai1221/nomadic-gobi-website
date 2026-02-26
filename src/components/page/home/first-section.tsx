"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FirstSection() {
    const router = useRouter();

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Image with slow zoom effect */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full"
                >
                    <Image
                        alt="Gobi Desert Landscape"
                        className="object-cover w-full h-full"
                        src="/home/main-image.jpg"
                        fill
                        priority // Loads this image first for speed
                    />
                </motion.div>

                {/* Gradient Overlay: Darkens bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-stone-900/90" />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Eyebrow Text */}
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-amber-400" />
                        <span className="text-amber-300 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                            Welcome to Mongolia
                        </span>
                        <div className="h-[1px] w-8 bg-amber-400" />
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-medium leading-[1.1] tracking-tight drop-shadow-lg">
                        Find Peace in the <br />
                        <span className="italic text-amber-100">Eternal Blue Sky</span>
                    </h1>

                    {/* Subtext */}
                    <p className="max-w-2xl text-stone-200 text-lg md:text-xl font-light leading-relaxed opacity-90">
                        Escape the ordinary and discover the silence of the Gobi.
                        Dungenee Camp offers a sanctuary where nomadic tradition meets modern comfort.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all flex items-center justify-center gap-2 group" onClick={() => router.push('/booking')}>
                            Book Your Stay
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all" onClick={() => router.push('/gallery')}>
                            View Gallery
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}