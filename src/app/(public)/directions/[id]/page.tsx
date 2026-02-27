"use client";

import directionsData from "../../../../../directions.json";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Calendar,
    ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useMemo, useRef, useState } from "react";

function DayImageCarousel({ images, title }: { images: string[]; title: string }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const touchStartX = useRef(0);

    const go = useCallback(
        (dir: 1 | -1) => {
            setDirection(dir);
            setCurrent((prev) => (prev + dir + images.length) % images.length);
        },
        [images.length]
    );

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group bg-stone-200">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0"
                    onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                    onTouchEnd={(e) => {
                        const dx = e.changedTouches[0].clientX - touchStartX.current;
                        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
                    }}
                >
                    <Image
                        src={images[current]}
                        alt={`${title} - ${current + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button
                        onClick={() => go(-1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => go(1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                    >
                        <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > current ? 1 : -1);
                                    setCurrent(i);
                                }}
                                className={`rounded-full transition-all duration-300 ${i === current
                                    ? "w-5 h-2 bg-white"
                                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-medium px-2.5 py-1 rounded-full">
                        <ImageIcon size={12} />
                        {current + 1}/{images.length}
                    </div>
                </>
            )}
        </div>
    );
}

const regionMeta: Record<string, { label: string; gradient: string }> = {
    SOUTHERN_MONGOLIA: {
        label: "Southern Mongolia",
        gradient: "from-amber-900 via-orange-800 to-amber-700",
    },
    CENTRAL_MONGOLIA: {
        label: "Central Mongolia",
        gradient: "from-emerald-900 via-green-800 to-emerald-700",
    },
    NORTHERN_MONGOLIA: {
        label: "Northern Mongolia",
        gradient: "from-sky-900 via-blue-800 to-sky-700",
    },
    WESTERN_MONGOLIA: {
        label: "Western Mongolia",
        gradient: "from-violet-900 via-purple-800 to-violet-700",
    },
};

export default function DirectionPage() {
    const params = useParams();
    const id = params.id as string;

    const tour = useMemo(
        () => directionsData.tours.find((t) => t.type === id),
        [id]
    );

    const meta = regionMeta[id] ?? {
        label: id.replace(/_/g, " "),
        gradient: "from-stone-900 via-stone-800 to-stone-700",
    };

    if (!tour) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] gap-6">
                <h1 className="text-3xl font-serif text-stone-800">
                    Direction not found
                </h1>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
        );
    }

    const heroImage = tour.days[0]?.images?.[0] ?? "/main-tour/placeholder.jpg";

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            {/* Hero */}
            <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
                <Image
                    src={heroImage}
                    alt={tour.name}
                    fill
                    priority
                    className="object-cover"
                />
                <div
                    className={`absolute inset-0`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-4"
                    >
                        <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-sm font-medium border border-white/20">
                            <MapPin size={14} />
                            {meta.label}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                            {tour.name}
                        </h1>
                        <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {tour.highlight}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium pt-2">
                            <Calendar size={16} />
                            {tour.days.length} Destinations
                        </div>
                    </motion.div>
                </div>

                <Link
                    href="/"
                    className="absolute top-6 left-6 flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/25 transition border border-white/20"
                >
                    <ArrowLeft size={16} />
                    Back
                </Link>
            </div>

            {/* Destinations */}
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
                {tour.days.map((day, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <motion.div
                            key={day.day}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div
                                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } gap-10 items-start`}
                            >
                                {/* Image Carousel */}
                                <div className="w-full lg:w-1/2 shrink-0">
                                    <DayImageCarousel
                                        images={day.images}
                                        title={day.title}
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-600/30">
                                            {String(day.day).padStart(2, "0")}
                                        </span>
                                        <div className="h-px flex-1 bg-stone-200" />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4 leading-tight">
                                        {day.title}
                                    </h2>

                                    <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                                        {day.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-stone-400 text-sm">
                                        <ImageIcon size={14} />
                                        {day.images.length} photos
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="bg-stone-900 py-16 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                        Ready to explore{" "}
                        <span className="text-amber-500">{tour.name}</span>?
                    </h3>
                    <p className="text-stone-400 text-lg">
                        Contact us to plan your unforgettable journey through Mongolia.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition shadow-lg shadow-amber-600/30"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/"
                            className="px-8 py-3 border border-stone-600 text-stone-300 hover:text-white hover:border-stone-400 font-medium rounded-full transition"
                        >
                            View All Tours
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
