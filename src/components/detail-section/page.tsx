"use client";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

interface DetailProps {
    isPosition?: "left" | "right";
    title: string;
    description: string;
    image: string;
    subtitle?: string;
}

export default function DetailSection({ isPosition = "left", title, description, image, subtitle }: DetailProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
            {/* Текст хэсэг */}
            <motion.div
                initial={{ opacity: 0, x: isPosition === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-6 ${isPosition === "right" ? "lg:order-2" : "lg:order-1"}`}
            >
                {subtitle && <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">{subtitle}</span>}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                    {title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                    {description}
                </p>
            </motion.div>

            {/* Зургийн хэсэг */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={`relative ${isPosition === "right" ? "lg:order-1" : "lg:order-2"}`}
            >
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-full blur-3xl z-0" />
                <Image
                    src={image}
                    alt={title}
                    className="rounded-3xl shadow-2xl z-10 object-cover w-full aspect-[4/3]"
                />
            </motion.div>
        </div>
    );
}