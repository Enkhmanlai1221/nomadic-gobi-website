"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Leaf, Users, Heart, CheckCircle2, MapPin, Calendar, ArrowRight } from "lucide-react";

export default function AboutUsPage() {

    const values = [
        {
            title: "Cultural Pride",
            desc: "Offering an authentic experience of traditional dwellings and cuisine.",
            icon: <Globe className="w-8 h-8 text-orange-600" />,
        },
        {
            title: "Eco-Conscious",
            desc: "Responsible tourism with minimal waste and respect for the land.",
            icon: <Leaf className="w-8 h-8 text-green-600" />,
        },
        {
            title: "Warm Hospitality",
            desc: "Welcoming every guest like a long-lost member of the family.",
            icon: <Heart className="w-8 h-8 text-red-500" />,
        },
        {
            title: "Community First",
            desc: "We work closely with local herders to support the regional economy.",
            icon: <Users className="w-8 h-8 text-blue-600" />,
        },
    ];

    return (
        <div className="bg-[#FAF9F6] overflow-hidden">
            <section className="relative py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                            Who We Are
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-[1.1]">
                            Welcome to <br />
                            <span className="text-stone-500 italic">Dungenee Camp</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            Located in the Kharkhorin soum of Övörkhangai Province, we bridge the gap between
                            ancient Mongolian traditions and modern comfort. Whether you seek the silence of the
                            steppes or the thrill of discovery, we offer a sanctuary for every season.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="h-[1px] w-24 bg-stone-300 self-center" />
                            <p className="text-stone-400 text-sm italic">Est. 2022</p>
                        </div>
                    </motion.div>

                    <div className="relative h-[500px] w-full hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-3/4 h-3/4 rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <Image src="/camp/img4.jpg" alt="Camp Main" fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-xl border-8 border-[#FAF9F6]"
                        >
                            <Image src="/camp/img5.jpg" alt="Camp Detail" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-700">
                            <Image src="/about/img1.jpg" alt="History" width={800} height={600} className="w-full object-cover" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="text-orange-500 w-6 h-6" />
                                <span className="text-sm uppercase tracking-wider text-stone-400">Founded</span>
                            </div>
                            <p className="text-3xl font-serif">2022</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
                                Our Mission & <span className="italic text-orange-600">Journey</span>
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed">
                                From the very beginning, our goal was simple: to introduce the raw beauty of
                                Mongolian nomadic life to the world without compromising on comfort.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Providing tourists with a premium, safe stay.",
                                "Promoting authentic nomadic traditions.",
                                "Supporting sustainable, eco-friendly tourism.",
                            ].map((point, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <p className="font-medium text-stone-800">{point}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl font-serif text-stone-900 mt-3">Core Values</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 bg-stone-50 rounded-2xl w-fit group-hover:bg-orange-50 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-xl text-stone-900 mb-3">{item.title}</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 bg-stone-900 text-stone-100 rounded-t-[3rem] mt-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 text-orange-500 mb-4">
                                <MapPin className="w-5 h-5" />
                                <span className="uppercase tracking-widest text-xs font-bold">The Region</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                                Steps away from <br />
                                <span className="italic text-stone-400">History</span>
                            </h2>
                        </div>

                        <p className="text-stone-300 text-lg leading-relaxed border-l-2 border-stone-700 pl-6">
                            Our location lies in one of Mongolia’s most historically significant regions.
                            Far from the noise of the city, we offer a gateway to the ancient world.
                        </p>

                        <div className="grid gap-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                <span className="font-serif text-2xl text-orange-500">01</span>
                                <p>Erdene Zuu Monastery (UNESCO Site)</p>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                <span className="font-serif text-2xl text-orange-500">02</span>
                                <p>Orkhon Valley Cultural Landscape</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden">
                        <Image src="/camp/img2.jpg" alt="Location Scenery" fill className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <Image src="/about/img13.jpg" alt="Team 1" width={300} height={400} className="rounded-2xl object-cover w-full h-[250px]" />
                            <Image src="/about/img7.jpg" alt="Team 2" width={300} height={400} className="rounded-2xl object-cover w-full h-[250px]" />
                        </div>
                        <div className="space-y-4">
                            <Image src="/about/img5.jpg" alt="Team 3" width={300} height={400} className="rounded-2xl object-cover w-full h-[250px]" />
                            <div className="bg-orange-100 rounded-2xl h-[250px] flex items-center justify-center p-6 text-center">
                                <p className="font-serif text-orange-800 text-xl">"Guest satisfaction is our greatest joy."</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                            Our People
                        </span>
                        <h2 className="text-4xl font-serif text-stone-900">
                            Ready to Welcome You
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Our team is made up of experienced and dedicated professionals in the tourism industry.
                            We value warm hospitality, always greeting our guests with a smile and a readiness to help.
                        </p>
                        <button className="flex items-center gap-2 text-stone-900 font-bold group">
                            Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}