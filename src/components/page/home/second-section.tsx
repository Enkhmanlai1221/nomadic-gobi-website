"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";

const galleryImages = [
    "/camp/img11.jpg",
    "/camp/img3.jpg",
    "/camp/img4.jpg",
    "/camp/img6.jpg",
    "/camp/img9.jpg",
    "/camp/img10.jpg",
];

export default function SecondSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* --- Left Text Content --- */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-6 border border-amber-200">
                            <Sparkles className="w-3 h-3 text-amber-700" />
                            Discover The Gobi
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 leading-[1.15]">
                            Enjoy every moment at <br />
                            <span className="italic text-amber-700">Bosgiin Tugul Camp</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                        <p>
                            We are a family-run travel company based in Mongolia, with over a decade of experience creating meaningful journeys.
                            For us, travel is not just about destinations—it is about stories, connections, and respect.
                        </p>

                        <p>
                            We do not believe in rushed itineraries or mass tourism. Instead, we value meaningful experiences, quiet moments, and real encounters.
                        </p>

                        {/* Feature List - Styled cleanly */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {[
                                "Authentic, well-paced journeys",
                                "Working closely with local families",
                                "Responsible & Eco-friendly travel",
                                "Honest service & Safety focus"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-1" />
                                    <span className="text-stone-800 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Partnership Trust Box */}
                        <div className="bg-white p-6 rounded-2xl border-l-4 border-amber-700 shadow-sm mt-2">
                            <p className="text-stone-700 text-sm italic">
                                "Since 2015, we have proudly collaborated with our esteemed Australian partners, <span className="font-bold text-stone-900">Allen and Rensina</span>, organizing numerous long-distance tours together."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Right Image Content --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="columns-1 sm:columns-2 md:columns-2 gap-4 space-y-4">
                        {galleryImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-300">
                            <Image
                                src="/home/sand.jpg"
                                alt="Bosgiin Tugul Camp Sunset"
                                width={800}
                                height={1000}
                                className="object-cover w-full h-[550px] hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-300">
                            <Image
                                src="/home/sand1.jpg"
                                alt="Bosgiin Tugul Camp Sunset"
                                width={800}
                                height={1000}
                                className="object-cover w-full h-[550px] hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div> */}
                </motion.div>

            </div>

        </section>
    );
}