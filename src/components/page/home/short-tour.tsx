"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader,
    useDisclosure,
    Button,
} from "@heroui/react";
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    MapPin,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import shortTours from "../../../../short-tours.json";
const tourData = shortTours;

type TourDay = {
    day?: number;
    title: string;
    description: string;
    image: string;
    overnight?: string;
    optional?: string;
};

type Tour = {
    id: number;
    name: string;
    highlight?: string;
    days: TourDay[];
};

export default function ToursSection() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const isDown = useRef(false);
    const startX = useRef(0);
    const startScroll = useRef(0);

    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const updateScrollState = useCallback(() => {
        const el = carouselRef.current;
        if (!el) return;

        const left = el.scrollLeft;
        const max = el.scrollWidth - el.clientWidth;

        setCanLeft(left > 4);
        setCanRight(left < max - 4);
    }, []);

    useEffect(() => {
        updateScrollState();

        const el = carouselRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);

        return () => {
            el.removeEventListener("scroll", updateScrollState as any);
            window.removeEventListener("resize", updateScrollState);
        };
    }, [updateScrollState]);

    const scrollCarousel = useCallback((direction: "left" | "right") => {
        const el = carouselRef.current;
        if (!el) return;

        const amount = Math.round(el.clientWidth * 0.92);
        el.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    }, []);

    const handleOpenDetail = (tour: Tour) => {
        setSelectedTour(tour);
        onOpen();
    };

    const onMouseDown = (e: React.MouseEvent) => {
        const el = carouselRef.current;
        if (!el) return;
        isDown.current = true;
        startX.current = e.pageX;
        startScroll.current = el.scrollLeft;
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current) return;
        const el = carouselRef.current;
        if (!el) return;
        const dx = e.pageX - startX.current;
        el.scrollLeft = startScroll.current - dx;
    };

    const onMouseUp = () => {
        isDown.current = false;
    };


    return (
        <section className="px-6">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* --- 1. OVERVIEW SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase border border-amber-200">
                            {tourData.category}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                            Explore the Best of <br />
                            <span className="italic text-amber-700">Central Mongolia</span>
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            {tourData.overview.description}
                        </p>

                        {/* Quick Info Icons */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-2 text-stone-800 font-medium">
                                <Clock className="text-amber-600" size={20} />
                                {tourData.overview.duration}
                            </div>
                            <div className="flex items-center gap-2 text-stone-800 font-medium">
                                <Calendar className="text-amber-600" size={20} />
                                {tourData.overview.availability}
                            </div>
                            <div className="flex items-center gap-2 text-stone-800 font-medium">
                                <MapPin className="text-amber-600" size={20} />
                                {tourData.overview.departure_return}
                            </div>
                        </div>
                    </div>

                    {/* Inclusions Card */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100">
                        <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">What's Included</h3>
                        <div className="space-y-3">
                            {tourData.includes.slice(0, 6).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                            {/* Excludes (Small) */}
                            <div className="pt-4 mt-4 border-t border-stone-100">
                                <p className="text-stone-400 text-xs font-bold uppercase mb-2">Not Included</p>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {tourData.excludes.slice(0, 3).map((ex, i) => (
                                        <div key={i} className="flex items-center gap-1 text-stone-400 text-xs">
                                            <XCircle size={14} /> {ex}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 2. TOUR CARDS GRID --- */}
                <div>
                    <div className="flex justify-between">
                        <h3 className="text-3xl font-serif text-stone-900 mb-10 border-l-4 border-amber-600 pl-4">
                            Choose Your Journey
                        </h3>
                        <div className="flex items-center gap-2">
                            <Button
                                aria-label="Scroll tours left"
                                isDisabled={!canLeft}
                                onPress={() => scrollCarousel("left")}
                                variant="light"
                                className="rounded-full bg-amber-700 text-white hover:bg-amber-800 shadow-lg"

                            >
                                <ChevronLeft size={22} className="text-white" />
                            </Button>
                            <Button
                                aria-label="Scroll tours right"
                                isDisabled={!canRight}
                                onPress={() => scrollCarousel("right")}
                                variant="light"
                                className="rounded-full bg-amber-700 text-white hover:bg-amber-800 shadow-lg"
                            >
                                <ChevronRight size={22} className="text-white" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            layout
                            ref={carouselRef}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseLeave={onMouseUp}
                            onMouseUp={onMouseUp}
                            className="grid grid-flow-col auto-cols-[85%] md:auto-cols-[calc((100%-2rem)/2)] lg:auto-cols-[calc((100%-4rem)/3)] gap-8 overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory scroll-smooth touch-pan-x pr-2 pb-2 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
                        >
                            {tourData.tours.map((tour) => (
                                <motion.div
                                    key={tour.id}
                                    whileHover={{ y: -8 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 cursor-pointer flex flex-col h-full"
                                    onClick={() => handleOpenDetail(tour)}
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={tour.days[0].image}
                                            alt={tour.name}
                                            width={600}
                                            height={400}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            {tour.days.length} Days
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="text-xl font-serif font-bold text-stone-900 mb-3 line-clamp-2">
                                            {tour.name}
                                        </h4>
                                        <div className="flex items-start gap-2 mb-6">
                                            <p className="text-stone-500 text-sm line-clamp-3">
                                                {tour.highlight}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between text-amber-700 font-bold text-sm">
                                            View Itinerary
                                            <div className="bg-amber-50 p-2 rounded-full group-hover:bg-amber-100 transition-colors">
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                scrollBehavior="inside"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-2 pb-4 border-b border-stone-100">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <span className="block text-xs font-bold uppercase tracking-widest text-amber-700">
                                            Itinerary
                                        </span>
                                        <span className="block text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
                                            {selectedTour?.name}
                                        </span>
                                    </div>

                                    <div className="shrink-0 flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
                                            {selectedTour?.days?.length ?? 0} Days
                                        </span>
                                        <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600">
                                            Depart/Return: {tourData.overview.departure_return}
                                        </span>
                                    </div>
                                </div>


                            </ModalHeader>

                            <ModalBody className="px-6 py-6">
                                <div className="relative space-y-6 before:content-[''] before:absolute before:left-[14px] before:top-2 before:bottom-2 before:w-px before:bg-stone-200">
                                    {selectedTour?.days?.map((day, index) => {
                                        const dayNumber = day.day ?? index + 1;
                                        return (
                                            <div key={day.day ?? index} className="relative flex gap-4">
                                                <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[11px] font-extrabold text-amber-800">
                                                    {dayNumber}
                                                </div>

                                                <div className="flex-1 rounded-2xl border border-stone-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="p-4 sm:p-5">
                                                        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-5">
                                                            <div className="relative overflow-hidden rounded-xl">
                                                                <Image
                                                                    src={day.image}
                                                                    alt={day.title}
                                                                    width={900}
                                                                    height={650}
                                                                    sizes="(max-width: 640px) 100vw, 220px"
                                                                    className="h-48 w-full sm:h-40 sm:w-[220px] object-cover"
                                                                />
                                                            </div>

                                                            <div className="min-w-0">
                                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                                                    <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-700">
                                                                        Day {dayNumber}
                                                                    </span>
                                                                    <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                                                                        {day.title}
                                                                    </h4>
                                                                </div>

                                                                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                                                                    {day.description}
                                                                </p>

                                                                {(day.overnight || day.optional) ? (
                                                                    <div className="mt-4 flex flex-col gap-2">
                                                                        {day.overnight ? (
                                                                            <div className="flex flex-wrap items-start gap-x-2 gap-y-1 text-sm">
                                                                                <span className="font-semibold text-stone-500">Overnight:</span>
                                                                                <span className="text-stone-700">{day.overnight}</span>
                                                                            </div>
                                                                        ) : null}
                                                                        {day.optional ? (
                                                                            <div className="flex flex-wrap items-start gap-x-2 gap-y-1 text-sm">
                                                                                <span className="font-semibold text-amber-700">Optional:</span>
                                                                                <span className="text-stone-700">{day.optional}</span>
                                                                            </div>
                                                                        ) : null}
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </ModalBody>

                            <div className="px-6 py-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white/80 backdrop-blur">
                                {selectedTour?.highlight ? (
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        {selectedTour.highlight}
                                    </p>
                                ) : null}
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}