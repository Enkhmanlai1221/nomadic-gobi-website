"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Snowflake, Sun, ArrowRight, Flame } from "lucide-react";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/react";

const festivals = [
    {
        id: "lunar-new-year",
        title: "Lunar New Year (Tsagaan Sar)",
        date: "February 18-20, 2026",
        location: "Nationwide",
        season: "Winter",
        description: "The Mongolian Lunar New Year welcomes spring and honors tradition. It is a three-day celebration filled with family gatherings, traditional Deel clothing, thousands of Buuz (dumplings), and 'zolgokh' greeting rituals.",
        highlights: ["Zolgokh (Greeting elders)", "Feasting on sheep & dairy", "Traditional games & attire"],
        image: "/event/lunarnewyear.jpg",
        icon: <Snowflake className="w-5 h-5 text-blue-400" />,
        detailDescription: "Danshig Naadam is one of Mongolia's grandest religious and cultural festivals, symbolizing the profound influence of Buddhism on the nation's people and heritage. Originally, Danshig (Tibetan- Tenshuk) is related to the enthronement ceremony of His Holiness Zanabazar (1635-1722), the spiritual head of Mongolian Buddhism and a direct descendant of Great Chinggis Khan. The word Danshig can be translated into ‘Firm existence’. The festival combines religious ceremonies with traditional Naadam sporting events, including wrestling, horse racing, and archery. A highlight of the festival is the mesmerizing Tsam dance performed by monks, featuring elaborate masks and costumes that depict various deities and animals. The festival also includes spiritual debates among monks, chanting, and other Buddhist rituals. Held annually in early August near Ulaanbaatar at Khui Doloon Khudag, the festival attracts both locals and tourists seeking an immersive cultural and spiritual experience.",
        images: [
            "/danshig/img1.jpg",
            "/danshig/img2.jpg",
            "/danshig/img3.jpg",
            "/danshig/img4.jpg",
            "/danshig/img5.jpg",
            "/danshig/img6.jpg",
            "/danshig/img7.jpg",
            "/danshig/img8.jpg",
            "/danshig/img9.jpg",
            "/danshig/img10.jpg",
        ]
    },
    {
        id: "ice-festival",
        title: "Khuvsgul Ice Festival",
        date: "March 2-3, 2026",
        location: "Lake Khuvsgul, Khatgal",
        season: "Winter",
        description: "Held on the frozen surface of the 'Blue Pearl' Lake Khuvsgul. It celebrates winter, local culture, and the traditional way of life for northern herders.",
        highlights: ["Horse Sledding & Ice Sumo", "Ice Sculptures & Ice Ger", "Shamanic Rituals"],
        image: "/event/icefestival.jpg",
        icon: <Snowflake className="w-5 h-5 text-blue-400" />,
        detailDescription: "Danshig Naadam is one of Mongolia's grandest religious and cultural festivals, symbolizing the profound influence of Buddhism on the nation's people and heritage. Originally, Danshig (Tibetan- Tenshuk) is related to the enthronement ceremony of His Holiness Zanabazar (1635-1722), the spiritual head of Mongolian Buddhism and a direct descendant of Great Chinggis Khan. The word Danshig can be translated into ‘Firm existence’. The festival combines religious ceremonies with traditional Naadam sporting events, including wrestling, horse racing, and archery. A highlight of the festival is the mesmerizing Tsam dance performed by monks, featuring elaborate masks and costumes that depict various deities and animals. The festival also includes spiritual debates among monks, chanting, and other Buddhist rituals. Held annually in early August near Ulaanbaatar at Khui Doloon Khudag, the festival attracts both locals and tourists seeking an immersive cultural and spiritual experience.",
        images: [
            "/danshig/img1.jpg",
            "/danshig/img2.jpg",
            "/danshig/img3.jpg",
            "/danshig/img4.jpg",
            "/danshig/img5.jpg",
            "/danshig/img6.jpg",
            "/danshig/img7.jpg",
            "/danshig/img8.jpg",
            "/danshig/img9.jpg",
            "/danshig/img10.jpg",
        ]
    },
    {
        id: "camel-festival",
        title: "Camel Festival",
        date: "February 6-8, 2026",
        location: "Dalanzadgad, Ömnögovi",
        season: "Winter",
        description: "A premier event in the Gobi Desert to protect the endangered Bactrian camel. Features rare camel polo matches and beauty contests.",
        highlights: ["Camel Racing & Polo", "Traditional Music & Dance", "1,000+ Camels Parade"],
        image: "/event/thousandcamel.jpg",
        icon: <Sun className="w-5 h-5 text-amber-500" />,
        detailDescription: "Danshig Naadam is one of Mongolia's grandest religious and cultural festivals, symbolizing the profound influence of Buddhism on the nation's people and heritage. Originally, Danshig (Tibetan- Tenshuk) is related to the enthronement ceremony of His Holiness Zanabazar (1635-1722), the spiritual head of Mongolian Buddhism and a direct descendant of Great Chinggis Khan. The word Danshig can be translated into ‘Firm existence’. The festival combines religious ceremonies with traditional Naadam sporting events, including wrestling, horse racing, and archery. A highlight of the festival is the mesmerizing Tsam dance performed by monks, featuring elaborate masks and costumes that depict various deities and animals. The festival also includes spiritual debates among monks, chanting, and other Buddhist rituals. Held annually in early August near Ulaanbaatar at Khui Doloon Khudag, the festival attracts both locals and tourists seeking an immersive cultural and spiritual experience.",
        images: [
            "/danshig/img1.jpg",
            "/danshig/img2.jpg",
            "/danshig/img3.jpg",
            "/danshig/img4.jpg",
            "/danshig/img5.jpg",
            "/danshig/img6.jpg",
            "/danshig/img7.jpg",
            "/danshig/img8.jpg",
            "/danshig/img9.jpg",
            "/danshig/img10.jpg",
        ]
    },
    {
        id: "golden-eagle",
        title: "Golden Eagle Festival",
        date: "October 4-5, 2026",
        location: "Bayan-Ölgii Province",
        season: "Autumn",
        description: "Celebrates the ancient Kazakh tradition of hunting with golden eagles. Over 100 eagle hunters compete in events testing speed and agility.",
        highlights: ["Eagle Hunting Competitions", "Kukbar (Tug of war on horseback)", "Traditional Kazakh Costumes"],
        image: "/event/golden.jpg",
        icon: <MapPin className="w-5 h-5 text-amber-700" />,
        detailDescription: "Danshig Naadam is one of Mongolia's grandest religious and cultural festivals, symbolizing the profound influence of Buddhism on the nation's people and heritage. Originally, Danshig (Tibetan- Tenshuk) is related to the enthronement ceremony of His Holiness Zanabazar (1635-1722), the spiritual head of Mongolian Buddhism and a direct descendant of Great Chinggis Khan. The word Danshig can be translated into ‘Firm existence’. The festival combines religious ceremonies with traditional Naadam sporting events, including wrestling, horse racing, and archery. A highlight of the festival is the mesmerizing Tsam dance performed by monks, featuring elaborate masks and costumes that depict various deities and animals. The festival also includes spiritual debates among monks, chanting, and other Buddhist rituals. Held annually in early August near Ulaanbaatar at Khui Doloon Khudag, the festival attracts both locals and tourists seeking an immersive cultural and spiritual experience.",
        images: [
            "/danshig/img1.jpg",
            "/danshig/img2.jpg",
            "/danshig/img3.jpg",
            "/danshig/img4.jpg",
            "/danshig/img5.jpg",
            "/danshig/img6.jpg",
            "/danshig/img7.jpg",
            "/danshig/img8.jpg",
            "/danshig/img9.jpg",
            "/danshig/img10.jpg",
        ]
    },
    {
        id: "danshig",
        title: "Danshig Naadam & Khuree Tsam",
        date: "August 2-3, 2026",
        location: "Khui Doloon Khudag",
        season: "Summer",
        description: "A major Buddhist cultural celebration featuring the sacred Tsam mask dance alongside traditional wrestling, celebrating the legacy of Zanabazar.",
        highlights: ["Tsam Mask Dance", "Buddhist Rituals", "Three Games of Men"],
        image: "/event/danshig.jpg",
        icon: <Flame className="w-5 h-5 text-orange-500" />,
        detailDescription: "Danshig Naadam is one of Mongolia's grandest religious and cultural festivals, symbolizing the profound influence of Buddhism on the nation's people and heritage. Originally, Danshig (Tibetan- Tenshuk) is related to the enthronement ceremony of His Holiness Zanabazar (1635-1722), the spiritual head of Mongolian Buddhism and a direct descendant of Great Chinggis Khan. The word Danshig can be translated into ‘Firm existence’. The festival combines religious ceremonies with traditional Naadam sporting events, including wrestling, horse racing, and archery. A highlight of the festival is the mesmerizing Tsam dance performed by monks, featuring elaborate masks and costumes that depict various deities and animals. The festival also includes spiritual debates among monks, chanting, and other Buddhist rituals. Held annually in early August near Ulaanbaatar at Khui Doloon Khudag, the festival attracts both locals and tourists seeking an immersive cultural and spiritual experience.",
        images: [
            "/danshig/img1.jpg",
            "/danshig/img2.jpg",
            "/danshig/img3.jpg",
            "/danshig/img4.jpg",
            "/danshig/img5.jpg",
            "/danshig/img6.jpg",
            "/danshig/img7.jpg",
            "/danshig/img8.jpg",
            "/danshig/img9.jpg",
            "/danshig/img10.jpg",
        ]
    }
];

type Festival = (typeof festivals)[0];

export default function EventsSection() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

    const handleOpenModal = (festival: Festival) => {
        setSelectedFestival(festival);
        onOpen();
    };

    return (
        <section className="bg-[#FAF9F6] px-6 overflow-hidden py-24">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* --- 1. HEADER & INTRO --- */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">
                        2026 Calendar
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                        Festivals & <span className="italic text-amber-700">Events</span>
                    </h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Tour events in 2026 feature immersive cultural, seasonal, and adventure experiences.
                        From the thundering hooves of Naadam to the silent focus of Eagle Hunters,
                        witness the living heritage of Mongolia.
                    </p>
                </div>

                <div className="relative rounded-[2.5rem] overflow-hidden bg-stone-900 text-white shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 md:p-16 space-y-8 flex flex-col justify-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-600/30">
                                    <Flame size={14} /> The Main Event
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif leading-none mb-4">
                                    Naadam Festival
                                </h2>
                                <div className="flex flex-wrap gap-4 text-stone-300 text-sm font-medium">
                                    <span className="flex items-center gap-2"><Calendar size={16} /> July 11-13, 2026</span>
                                    <span className="flex items-center gap-2"><MapPin size={16} /> Ulaanbaatar & Nationwide</span>
                                </div>
                            </div>

                            <p className="text-stone-300 leading-relaxed">
                                Known as the "Three Games of Men," Naadam is the most widely watched festival among Mongols.
                                Originating from military parades and hunting exercises, it features the three standard sports:
                                <span className="text-white font-bold"> Wrestling, Horse Racing, and Archery.</span>
                            </p>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h4 className="font-serif text-xl mb-2 text-amber-500">Did you know?</h4>
                                <p className="text-sm text-stone-400">
                                    During the Qing dynasty, Naadam became an official festival held by sums.
                                    It includes unique rituals like the "Long Song" opening and the serving of Khuushuur (fried dumplings) and Airag (fermented mare's milk).
                                </p>
                            </div>

                            <Button className="w-fit bg-amber-600 text-white font-bold" endContent={<ArrowRight size={16} />}>
                                View Naadam Tours
                            </Button>
                        </div>

                        <div className="relative h-[400px] lg:h-auto">
                            <Image
                                src="/event/naadam.jpg"
                                alt="Naadam Festival Wrestling"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/50 to-transparent lg:bg-gradient-to-t lg:from-stone-900 lg:via-transparent" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-serif text-stone-900 mb-10 pl-4 border-l-4 border-amber-600">
                        Seasonal Celebrations
                    </h3>

                    <div className="space-y-6">
                        {festivals.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleOpenModal(event)}
                                className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 cursor-pointer"
                            >
                                <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center text-center border-r border-stone-100 pr-4 h-full">
                                    <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">{event.date.split(" ")[0]}</span>
                                    <span className="text-4xl font-serif text-stone-900 my-1">{event.date.match(/\d+/)?.[0]}</span>
                                    <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full mt-2">2026</span>
                                </div>
                                <div className="md:col-span-4 relative h-64 md:h-56 rounded-2xl overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm">
                                        {event.icon}
                                    </div>
                                </div>
                                <div className="md:col-span-6 p-2 md:p-4 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                                                {event.title}
                                            </h4>
                                            <p className="text-sm text-stone-500 flex items-center gap-1 mt-1">
                                                <MapPin size={14} className="text-amber-600" /> {event.location}
                                            </p>
                                        </div>
                                        <div className="md:hidden bg-stone-100 px-3 py-1 rounded-lg text-xs font-bold text-stone-600">
                                            {event.date}
                                        </div>
                                    </div>
                                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                                        {event.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {event.highlights.map((tag, i) => (
                                            <span key={i} className="text-xs font-medium bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="4xl"
                scrollBehavior="inside"
                backdrop="blur"
                classNames={{
                    base: "bg-white",
                    header: "border-b border-stone-100",
                }}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-stone-100 flex flex-col gap-1 py-6 px-8">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase">
                                    {selectedFestival?.season}
                                </span>
                                <span className="flex items-center gap-1 text-stone-500 text-xs font-bold">
                                    <Calendar size={14} /> {selectedFestival?.date}
                                </span>
                            </div>
                            <h2 className="text-3xl font-serif text-stone-900">
                                {selectedFestival?.title}
                            </h2>
                            <p className="text-stone-500 font-normal flex items-center gap-1">
                                <MapPin size={14} /> {selectedFestival?.location}
                            </p>
                        </ModalHeader>

                        <ModalBody className="px-8 py-8">
                            <div className="mb-10">
                                <h4 className="text-lg font-bold text-stone-900 mb-3 border-l-4 border-amber-600 pl-3">
                                    About the Festival
                                </h4>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    {selectedFestival?.detailDescription}
                                </p>
                            </div>
                            {selectedFestival?.images && selectedFestival.images.length > 0 && (
                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
                                        Gallery
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {selectedFestival.images.map((img, idx) => (
                                            <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                                                <Image
                                                    src={img}
                                                    alt={`${selectedFestival?.title} - ${idx + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 25vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </section>
    );
}