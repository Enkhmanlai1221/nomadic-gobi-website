"use client";
import React, { useState } from "react";
import {
    Image,
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure
} from "@heroui/react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface DetailProps {
    isPosition?: "left" | "right";
    title: string;
    description: string;
    images: string[];
    subtitle?: string;
}

export default function GridImages({ isPosition = "left", title, description, images, subtitle }: DetailProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedImg, setSelectedImg] = useState<string>("");

    const handleImageClick = (img: string) => {
        setSelectedImg(img);
        onOpen();
    };

    // Зургуудын хуваарилалт
    const mainGridImages = images.slice(0, 3); // 1 том, 2 жижиг байх хэсэг
    const textGridImages = images.slice(3, 5); // Текстийн доорх 2 жижиг зураг

    const imageStyle = "object-cover w-full h-full transition-transform duration-700 group-hover:scale-110";
    const containerStyle = "relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300";

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* 1-р БЛОК: Текст болон түүний доорх 2 зураг */}
                <motion.div
                    initial={{ opacity: 0, x: isPosition === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col gap-8 ${isPosition === "right" ? "lg:order-2" : "lg:order-1"}`}
                >
                    <div className="space-y-5">
                        {subtitle && (
                            <span className="inline-block text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                            {title}
                        </h2>
                        <div className="w-14 h-1.5 bg-emerald-500 rounded-full" />
                        <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                            {description}
                        </p>
                    </div>

                    {/* Текстийн доорх 2 ижил жижиг зураг */}
                    <div className="grid grid-cols-2 gap-4">
                        {textGridImages.map((img, idx) => (
                            <div key={idx} className={`${containerStyle} aspect-[4/3]`} onClick={() => handleImageClick(img)}>
                                <Image removeWrapper src={img} alt="detail" className={imageStyle} />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Maximize2 className="text-white opacity-80" size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2-р БЛОК: Үндсэн галерей (1 том, 2 жижиг) */}
                <motion.div
                    initial={{ opacity: 0, x: isPosition === "left" ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`grid grid-cols-2 gap-4 ${isPosition === "right" ? "lg:order-1" : "lg:order-2"}`}
                >
                    {/* ТОМ ЗУРАГ */}
                    {mainGridImages[0] && (
                        <div
                            className={`${containerStyle} col-span-2 aspect-[16/10]`}
                            onClick={() => handleImageClick(mainGridImages[0])}
                        >
                            <Image removeWrapper src={mainGridImages[0]} alt="main" className={imageStyle} />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Maximize2 className="text-white shadow-2xl" size={32} />
                            </div>
                        </div>
                    )}

                    {/* 2 ЖИЖИГ ЗУРАГ (Текстийн доорхтой яг ижил хэмжээтэй) */}
                    {mainGridImages.slice(1).map((img, idx) => (
                        <div key={idx} className={`${containerStyle} aspect-[4/3]`} onClick={() => handleImageClick(img)}>
                            <Image removeWrapper src={img} alt="sub" className={imageStyle} />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Maximize2 className="text-white opacity-80" size={20} />
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Зураг томруулж харах Modal */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                backdrop="blur"
                classNames={{
                    base: "bg-transparent shadow-none border-none",
                    closeButton: "bg-white/10 hover:bg-white/20 text-white p-2 text-xl z-50",
                }}
            >
                <ModalContent>
                    <ModalBody className="p-0 flex items-center justify-center">
                        <Image
                            src={selectedImg}
                            alt="Preview"
                            className="max-h-[90vh] w-auto object-contain rounded-2xl shadow-2xl shadow-black/50"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </section>
    );
}