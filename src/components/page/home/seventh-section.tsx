"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function SeventhSection() {
    const data = [
        { title: "Muhar Shiveertin Am", image: "/home/accommodation/img1.png" },
        { title: "Khongor Sand Dunes", image: "/home/accommodation/img2.png" },
        { title: "Hermen Tsav", image: "/home/accommodation/img3.png" },
        { title: "Flaming Cliffs (Bayanzag)", image: "/home/accommodation/img4.png" },
        { title: "Khanan Tse", image: "/home/accommodation/img5.png" },
        { title: "Moltsog Sand", image: "/home/accommodation/img6.png" },
        { title: "Horse Bone Hill", image: "/home/accommodation/img7.png" },
        { title: "Baga Gazriin Chuluu", image: "/home/accommodation/img8.png" },
        { title: "Havtsgait Petroglyphs", image: "/home/accommodation/img9.png" },
        { title: "Ongi Monastery", image: "/home/accommodation/img10.png" },
        { title: "Torgoyiin Shiree", image: "/home/accommodation/img11.png" },
        { title: "Tsagaan Suvarga", image: "/home/accommodation/img12.png" },
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                        Sightseeing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                        Nearby <span className="italic text-stone-500">Destinations</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-stone-600 text-lg">
                        Our camp serves as the perfect central hub to explore the Gobi's most legendary landmarks.
                    </p>
                    <div className="w-20 h-1 bg-orange-300 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered animation
                            className="group relative overflow-hidden rounded-[1.5rem] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/4]"
                        >
                            {/* Image */}
                            <Image
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Hover Icon (Top Right) */}
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <ArrowUpRight className="text-white w-5 h-5" />
                            </div>

                            {/* Content (Bottom) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-start gap-2">
                                    <div>
                                        <h3 className="text-white text-lg font-bold leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}