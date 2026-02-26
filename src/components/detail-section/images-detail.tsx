"use client";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { useRef } from "react";

interface DetailProps {
    isPosition?: "left" | "right";
    title: string;
    description: string;
    images: string[];
    subtitle?: string;
}

export default function DetailSection({ isPosition = "left", title, description, images, subtitle }: DetailProps) {
    const containerRef = useRef(null);

    // Зургуудын хазайлтын чиглэлийг тодорхойлох
    const multiplier = isPosition === "left" ? 1 : -1;

    return (
        <section ref={containerRef} className="relative overflow-hidden py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Текст хэсэг */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col gap-6 ${isPosition === "right" ? "lg:order-2" : "lg:order-1"}`}
                >
                    <div className="space-y-4">
                        {subtitle && (
                            <span className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            {title}
                        </h2>
                        <div className="w-20 h-1.5 bg-emerald-500 rounded-full" />
                    </div>

                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-90 max-w-xl">
                        {description}
                    </p>
                </motion.div>

                {/* Зургийн давхарласан хэсэг */}
                <div className={`relative h-[450px] md:h-[600px] flex items-center justify-center ${isPosition === "right" ? "lg:order-1" : "lg:order-2"}`}>

                    {/* Арын бүрхэг эффект (Glow) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-100/30 blur-[120px] rounded-full -z-10" />

                    <div className="relative w-full max-w-[500px] h-full group">

                        {/* 1. Арын зураг (Image 3) */}
                        {images[2] && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 * multiplier, y: -100 }}
                                whileInView={{ opacity: 1, x: 120 * multiplier, y: -110, rotate: 5 * multiplier }}
                                whileHover={{ scale: 1.05, x: 140 * multiplier }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="absolute top-1/4 w-[70%] aspect-[4/3] z-0"
                            >
                                <Image
                                    src={images[2]}
                                    alt="bg-stack-1"
                                    className="rounded-[2.5rem] shadow-xl border-4 border-white/50 backdrop-blur-sm object-cover"
                                />
                            </motion.div>
                        )}

                        {/* 2. Дунд талын зураг (Image 2) */}
                        {images[1] && (
                            <motion.div
                                initial={{ opacity: 0, x: -100 * multiplier, y: -20 }}
                                whileInView={{ opacity: 1, x: -110 * multiplier, y: -40, rotate: -8 * multiplier }}
                                whileHover={{ scale: 1.05, x: -130 * multiplier }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                                className="absolute top-1/3 w-[75%] aspect-[4/3] z-10"
                            >
                                <Image
                                    src={images[1]}
                                    alt="bg-stack-2"
                                    className="rounded-[2.5rem] shadow-2xl object-cover"
                                />
                            </motion.div>
                        )}

                        {/* 3. Үндсэн зураг (Image 1) - Хамгийн дээр нь */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 80 }}
                            className="absolute bottom-0 left-0 right-0 mx-auto w-full aspect-[4/3] z-20"
                        >
                            <Image
                                src={images[0]}
                                alt={title}
                                className="rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] object-cover w-full h-full"
                            />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}