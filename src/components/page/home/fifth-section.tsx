"use client";
import { motion } from "framer-motion";
import { a } from "framer-motion/dist/types.d-BJcRxCew";
import { ArrowRight, Mountain, TreePine, Waves, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const regions = [
    {
        id: "SOUTHERN_MONGOLIA",
        region: "South",
        title: "Southern Mongolia",
        subtitle: "Gobi Desert",
        description: "The 'Singing Dunes' stretch 180km and rise up to 300 meters. The wind creates a melodic humming sound, offering a surreal desert experience contrasting with the lush Khongoryn Gol oasis.",
        image: "/destinations/khongorsanddunes.jpg",
        icon: <Wind />,
    },
    {
        id: "CENTRAL_MONGOLIA",
        region: "Central",
        title: "Central Mongolia",
        subtitle: "The Mini Gobi",
        description: "A unique park where sand dunes, rocky mountains, and lush green valleys meet. Located just 280km from Ulaanbaatar, it’s a perfect spot to hike, ride camels, and visit ancient monasteries.",
        image: "/destinations/khognotarna.jpg",
        icon: <Mountain />,
    },
    {
        id: "WESTERN_MONGOLIA",
        region: "West",
        title: "Northern Mongolia",
        subtitle: "Remote Wilderness",
        description: "A remote, crystal-clear freshwater lake where deep blue waters meet golden sand dunes. Located in Zavkhan Province, this surreal landscape offers untouched wilderness.",
        image: "/destinations/ulaagch.jpg",
        icon: <Waves />,
    },
    {
        id: "NORTHERN_MONGOLIA",
        region: "North",
        title: "Northern Mongolia",
        subtitle: "Reindeer Herders",
        description: "One of the world's last untouched wildernesses. The Taiga features dense coniferous forests and is home to the Tsaatan reindeer herders and the mystical Darkhad Valley.",
        image: "/destinations/taiga.jpg",
        icon: <TreePine />,
    },
];

export default function RegionsOverview() {
    const [activeId, setActiveId] = useState<string | null>("SOUTHERN_MONGOLIA");

    return (
        <section className="px-6">
            <div className="max-w-7xl mx-auto h-[600px] md:h-[700px] flex flex-col md:flex-row gap-4">
                {regions.map((region) => {
                    const isActive = activeId === region.id;

                    return (

                        <motion.div
                            layout
                            onClick={() => setActiveId(region.id)}
                            onHoverStart={() => setActiveId(region.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out shadow-xl
                            ${isActive ? "flex-[3] md:flex-[3]" : "flex-[1] md:flex-[1]"}
                            h-full group
                        `}
                        >
                            <a href={`/directions/${region.id}`}
                                key={region.id}
                            >
                                <Image
                                    src={region.image}
                                    alt={region.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-500`} />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                    <div className={`absolute top-8 left-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
                                        <div className="flex items-center gap-2 text-white/80 border border-white/20 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm w-fit">
                                            {region.icon}
                                            <span className="text-xs font-bold uppercase tracking-widest">{region.region}</span>
                                        </div>
                                    </div>

                                    <motion.div
                                        layout
                                        className="relative z-10"
                                    >
                                        <h3 className={`font-serif font-bold text-white mb-2 leading-none whitespace-nowrap
                                    ${isActive ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8"}
                                `}>
                                            {region.title}
                                        </h3>

                                        <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                                            <p className="text-white/90 text-lg font-medium mb-4">
                                                {region.subtitle}
                                            </p>
                                            <p className="text-white/80 text-sm leading-relaxed max-w-lg">
                                                {region.description}
                                            </p>

                                            <div className="mt-6 flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group/btn">
                                                Explore Details
                                                <div className="bg-white/20 p-1 rounded-full group-hover/btn:bg-white group-hover/btn:text-amber-800 transition-colors">
                                                    <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}