"use client";

import {
    Card,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    useDisclosure
} from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

export default function GalleryPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState("");

    const data = [
        { url: "/gallery/img1.jpg" },
        { url: "/gallery/img2.jpg" },
        { url: "/gallery/img3.jpg" },
        { url: "/gallery/img4.jpg" },
        { url: "/gallery/img5.jpg" },
        { url: "/gallery/img6.jpg" },
        { url: "/gallery/img7.jpg" },
        { url: "/gallery/img8.jpg" },
        { url: "/gallery/img9.jpg" },
        { url: "/gallery/img10.jpg" },
        { url: "/gallery/img11.jpg" },
        { url: "/gallery/img12.jpg" },
        { url: "/gallery/img13.jpg" },
        { url: "/gallery/img14.jpg" },
        { url: "/gallery/img15.jpg" },
        { url: "/gallery/img16.jpg" },
        { url: "/gallery/img17.jpg" },
        { url: "/gallery/img18.jpg" },
        { url: "/gallery/img19.jpg" },
        { url: "/gallery/img20.jpg" },
        { url: "/gallery/img21.jpg" },
        { url: "/gallery/img22.jpg" },
        { url: "/gallery/img23.jpg" },
        { url: "/gallery/img24.jpg" },
        { url: "/gallery/img25.jpg" },
        { url: "/gallery/img26.jpg" },
        { url: "/gallery/img27.jpg" },
        { url: "/gallery/img28.jpg" },
        { url: "/gallery/img29.jpg" },
        { url: "/gallery/img30.jpg" },
        { url: "/gallery/img31.jpg" },
        { url: "/gallery/img32.jpg" },
        { url: "/gallery/img33.jpg" },
        { url: "/gallery/img34.jpg" },
        { url: "/gallery/img35.jpg" },
        { url: "/gallery/img36.jpg" },
        { url: "/gallery/img37.jpg" },
        { url: "/gallery/img38.jpg" },
        { url: "/gallery/img39.jpg" },
        { url: "/gallery/img40.jpg" },
        { url: "/gallery/img41.jpg" },
        { url: "/gallery/img42.jpg" },
        { url: "/gallery/img43.jpg" },
        { url: "/gallery/img44.jpg" },
        { url: "/gallery/img45.jpg" },
        { url: "/gallery/img46.jpg" },
        { url: "/gallery/img47.jpg" },
        { url: "/gallery/img48.jpg" },
        { url: "/gallery/img49.jpg" },
        { url: "/gallery/img50.jpg" },
        { url: "/gallery/img51.jpg" },
        { url: "/gallery/img52.jpg" },
        { url: "/gallery/img53.jpg" },
        { url: "/gallery/img54.jpg" },
        { url: "/gallery/img55.jpg" },
        { url: "/gallery/img56.jpg" },
        { url: "/gallery/img57.jpg" },
        { url: "/gallery/img58.jpg" },
        { url: "/gallery/img59.jpg" },
        { url: "/gallery/img60.jpg" },
        { url: "/gallery/imge1.jpg" },
        { url: "/gallery/imge2.jpg" },
        { url: "/gallery/imge3.jpg" },
        { url: "/gallery/imge4.jpg" },
        { url: "/gallery/imge5.jpg" },
        { url: "/gallery/imge6.jpg" },
        { url: "/gallery/imge7.jpg" },
        { url: "/gallery/imge8.jpg" },
        { url: "/gallery/imge9.jpg" },
        { url: "/gallery/imge10.jpg" },
        { url: "/gallery/imge11.jpg" },
        { url: "/gallery/imge12.jpg" },
        { url: "/gallery/imge13.jpg" },
        { url: "/gallery/imge14.jpg" },
        { url: "/gallery/imge15.jpg" },
        { url: "/gallery/imge16.jpg" },
        { url: "/gallery/imge17.jpg" },
        { url: "/gallery/imge18.jpg" },
        { url: "/gallery/imge19.jpg" },
        { url: "/gallery/imge20.jpg" },
        { url: "/gallery/imge21.jpg" },
        { url: "/gallery/imge22.jpg" },
        { url: "/gallery/imge23.jpg" },
        { url: "/gallery/imge24.jpg" },
        { url: "/gallery/imge25.jpg" },
        { url: "/gallery/imge26.jpg" },
        { url: "/gallery/imge27.jpg" },
        { url: "/gallery/imge28.jpg" },
        { url: "/gallery/imge29.jpg" },
        { url: "/gallery/imge30.jpg" },
        { url: "/gallery/imge31.jpg" },
        { url: "/gallery/imge32.jpg" },
        { url: "/gallery/imge33.jpg" },
        { url: "/gallery/imge34.jpg" },
        { url: "/gallery/imge35.jpg" },
        { url: "/gallery/imge36.jpg" },
        { url: "/gallery/imge37.jpg" },
        { url: "/gallery/imge38.jpg" },
        { url: "/gallery/imge39.jpg" },
        { url: "/gallery/imge40.jpg" },
        { url: "/gallery/imge41.jpg" },
        { url: "/gallery/imge42.jpg" },
        { url: "/gallery/imge43.jpg" },
        { url: "/gallery/imge44.jpg" },
        { url: "/gallery/imge45.jpg" },
        { url: "/gallery/imge46.jpg" },
        { url: "/gallery/imge47.jpg" },
        { url: "/gallery/imge48.jpg" },
        { url: "/gallery/imge49.jpg" },
        { url: "/gallery/imge50.jpg" },
        { url: "/gallery/imge51.jpg" },
        { url: "/gallery/imge52.jpg" },
        { url: "/gallery/imge53.jpg" },
        { url: "/gallery/imge54.jpg" },
        { url: "/gallery/imge55.jpg" },
        { url: "/gallery/imge56.jpg" },
        { url: "/gallery/imge57.jpg" },
        { url: "/gallery/imge58.jpg" },
        { url: "/gallery/imge59.jpg" },
        { url: "/gallery/imge60.jpg" },
        { url: "/gallery/imge61.jpg" },
        { url: "/gallery/imge62.jpg" },
        { url: "/gallery/imge63.jpg" },
        { url: "/gallery/imge64.jpg" },
        { url: "/gallery/imge65.jpg" },
        { url: "/gallery/imge66.jpg" },
        { url: "/gallery/imge67.jpg" },
        { url: "/gallery/imge68.jpg" },
        { url: "/gallery/imge69.jpg" },
        { url: "/gallery/imge70.jpg" },
        { url: "/gallery/imge71.jpg" },
        { url: "/gallery/imge72.jpg" },
        { url: "/gallery/imge73.jpg" },
        { url: "/gallery/imge74.jpg" },
        { url: "/gallery/imge75.jpg" },
        { url: "/gallery/imge76.jpg" },
        { url: "/gallery/imge77.jpg" },
        { url: "/gallery/imge78.jpg" },
        { url: "/gallery/imge79.jpg" },
        { url: "/gallery/imge80.jpg" },
        { url: "/gallery/imge81.jpg" },
        { url: "/gallery/imge82.jpg" },
        { url: "/gallery/imge83.jpg" },
        { url: "/gallery/imge84.jpg" },
        { url: "/gallery/imge85.jpg" },
        { url: "/gallery/imge86.jpg" },
        { url: "/gallery/imge87.jpg" },
        { url: "/gallery/imge88.jpg" },
        { url: "/gallery/imge89.jpg" },
        { url: "/gallery/imge90.jpg" },
        { url: "/gallery/imge91.jpg" },
        { url: "/gallery/imge92.jpg" },
        { url: "/gallery/imge93.jpg" },
        { url: "/gallery/imge94.jpg" },
        { url: "/gallery/imge95.jpg" },
        { url: "/gallery/imge96.jpg" },
        { url: "/gallery/imge97.jpg" },
        { url: "/gallery/imge98.jpg" },
        { url: "/gallery/imge99.jpg" },
        { url: "/gallery/imge100.jpg" },
        { url: "/gallery/imge101.jpg" },
        { url: "/gallery/imge102.jpg" },
        { url: "/gallery/imge103.jpg" },
        { url: "/gallery/imge104.jpg" },
        { url: "/gallery/imge105.jpg" },
        { url: "/gallery/imge106.jpg" },
        { url: "/gallery/imge107.jpg" },
        { url: "/gallery/imge108.jpg" },
        { url: "/gallery/imge109.jpg" },
        { url: "/gallery/imge110.jpg" },
        { url: "/gallery/imge111.jpg" },
        { url: "/gallery/imge112.jpg" },
        { url: "/gallery/imge113.jpg" },
        { url: "/gallery/imge114.jpg" },
    ];

    const handleImageClick = (url: string) => {
        setSelectedImage(url);
        onOpen();
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <section className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-20 relative z-20 py-32 pt-48">
                <Card className="p-6 md:p-10 border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-2xl rounded-[2.5rem]">

                    <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Gallery</h2>
                            <div className="w-12 h-1 bg-amber-600 mt-2 rounded-full" />
                        </div>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        <AnimatePresence mode="popLayout">
                            {data.map((item, index) => (
                                <motion.div
                                    key={item.url}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
                                    onClick={() => handleImageClick(item.url)}
                                >
                                    <Image
                                        removeWrapper
                                        src={item.url}
                                        alt="Gallery Image"
                                        className="w-full h-auto object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10 backdrop-blur-[2px] group-hover:backdrop-blur-none">
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="bg-white/90 p-4 rounded-full shadow-2xl text-slate-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                        >
                                            <Maximize2 size={24} strokeWidth={2.5} />
                                        </motion.div>
                                    </div>

                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </Card>
            </section>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                backdrop="blur"
                motionProps={{
                    variants: {
                        enter: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                        exit: { y: 20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
                    }
                }}
                classNames={{
                    base: "bg-transparent shadow-none border-none",
                    closeButton: "bg-white/10 hover:bg-white/30 text-white p-2 text-2xl z-50 transition-colors backdrop-blur-md rounded-full mt-4 mr-4",
                }}
            >
                <ModalContent>
                    <ModalBody className="p-0 overflow-hidden flex items-center justify-center">
                        <Image
                            removeWrapper
                            src={selectedImage}
                            alt="Full Screen Preview"
                            className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border-4 border-white/10"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}