"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import { motion } from "framer-motion";
import { Maximize2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface DetailProps {
    isPosition?: "left" | "right";
    title: string;
    description: string;
    images: string[];
    subtitle?: string;
    features?: string[];
    icon?: React.ReactNode;
}

export default function ActivityShowcase({
    isPosition = "left",
    title,
    description,
    images,
    subtitle,
    features = [],
    icon
}: DetailProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setSelectedIndex(index);
        onOpen();
    };

    const displayImages = images.slice(0, 3);
    const selectedImg = images[selectedIndex] ?? images[0];

    const canNavigate = images.length > 1;
    const goPrev = () => {
        if (!canNavigate) return;
        setSelectedIndex((i) => (i - 1 + images.length) % images.length);
    };
    const goNext = () => {
        if (!canNavigate) return;
        setSelectedIndex((i) => (i + 1) % images.length);
    };

    useEffect(() => {
        if (images.length === 0) return;
        if (selectedIndex > images.length - 1) setSelectedIndex(0);
    }, [images.length, selectedIndex]);

    useEffect(() => {
        if (!isOpen || !canNavigate) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, canNavigate, images.length]);

    return (
        <section className="px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, x: isPosition === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col gap-8 ${isPosition === "right" ? "lg:order-2" : "lg:order-1"}`}
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            {icon && (
                                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                    {icon}
                                </div>
                            )}
                            {subtitle && (
                                <span className="text-stone-500 font-bold uppercase tracking-widest text-xs">
                                    {subtitle}
                                </span>
                            )}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-[1.15]">
                            {title}
                        </h2>

                        <p className="text-stone-600 text-lg leading-relaxed border-l-2 border-orange-200 pl-6">
                            {description}
                        </p>

                        {features.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-stone-700 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`relative ${isPosition === "right" ? "lg:order-1" : "lg:order-2"}`}
                >
                    {displayImages.length >= 3 ? (
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
                            <div
                                className="row-span-2 relative rounded-[2rem] overflow-hidden cursor-pointer group shadow-lg"
                                onClick={() => handleImageClick(0)}
                            >
                                <Image
                                    src={displayImages[0]}
                                    alt="Main"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Maximize2 className="text-white drop-shadow-lg" />
                                </div>
                            </div>

                            <div
                                className="relative rounded-[2rem] overflow-hidden cursor-pointer group shadow-lg"
                                onClick={() => handleImageClick(1)}
                            >
                                <Image
                                    src={displayImages[1]}
                                    alt="Sub 1"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div
                                className="relative rounded-[2rem] overflow-hidden cursor-pointer group shadow-lg"
                                onClick={() => handleImageClick(2)}
                            >
                                <Image
                                    src={displayImages[2]}
                                    alt="Sub 2"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {images.length > 3 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">+{images.length - 3}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div
                            className="relative h-[400px] w-full rounded-[2rem] overflow-hidden cursor-pointer group shadow-xl"
                            onClick={() => handleImageClick(0)}
                        >
                            <Image
                                src={displayImages[0]}
                                alt="Main"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    )}
                    <div className="absolute -inset-10 bg-orange-100/30 rounded-full blur-3xl -z-10" />
                </motion.div>

            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                backdrop="blur"
                classNames={{
                    base: "bg-transparent shadow-none border-none",
                    closeButton: "bg-white/10 hover:bg-white/20 text-white p-2 z-50 rounded-full top-4 right-4",
                }}
            >
                <ModalContent>
                    <ModalBody className="p-0 relative">
                        <div className="relative w-full flex items-center justify-center">
                            {!!selectedImg && (
                                <Image
                                    src={selectedImg}
                                    alt={`Full View ${selectedIndex + 1}`}
                                    width={1600}
                                    height={1000}
                                    className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
                                />
                            )}

                            {canNavigate && (
                                <>
                                    <button
                                        type="button"
                                        aria-label="Previous image"
                                        onClick={goPrev}
                                        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/40 hover:bg-black/55 text-white p-3 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/60"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Next image"
                                        onClick={goNext}
                                        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/40 hover:bg-black/55 text-white p-3 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/60"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}

                            {images.length > 0 && (
                                <div className="absolute top-4 left-4 z-50 rounded-full bg-black/40 text-white text-xs font-semibold px-3 py-1.5 backdrop-blur">
                                    {selectedIndex + 1} / {images.length}
                                </div>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="absolute inset-x-0 bottom-0 z-50 px-4 pb-4 pt-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
                                <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    {images.map((img, idx) => (
                                        <button
                                            key={`${img}-${idx}`}
                                            type="button"
                                            aria-label={`View image ${idx + 1}`}
                                            onClick={() => setSelectedIndex(idx)}
                                            className={[
                                                "shrink-0 rounded-lg overflow-hidden border transition",
                                                idx === selectedIndex
                                                    ? "border-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"
                                                    : "border-white/20 hover:border-white/50 opacity-80 hover:opacity-100",
                                            ].join(" ")}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                width={96}
                                                height={64}
                                                className="h-14 w-20 object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </section>
    );
}