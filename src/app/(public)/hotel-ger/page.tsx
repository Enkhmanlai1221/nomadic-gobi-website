"use client";

import {
    Button,
    Card,
    Chip,
    Image,
    Tab,
    Tabs
} from "@heroui/react";
import { Bath, Coffee, Maximize, ShieldCheck, Users, Wind } from "lucide-react";

export default function HotelGerPage() {
    // Өгөгдлийн бүтэц - Гэр болон Буудлын мэдээлэл
    const accommodations = {
        gers: [
            {
                id: 1,
                title: "Тансаг зэрэглэлийн Гэр (Deluxe Ger)",
                description: "Уламжлалт хэв маягийг орчин үеийн тав тухтай хослуулсан, дотроо ариун цэврийн өрөөтэй гэр.",
                price: "350,000₮",
                capacity: "2-4 хүн",
                size: "35м²",
                features: ["Хувийн ариун цэврийн өрөө", "Шалны халаалт", "Мини бар", "King size ор"],
                image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
                isPopular: true
            },
            {
                id: 2,
                title: "Уламжлалт Гэр (Standard Ger)",
                description: "Монгол ахуйг жинхэнэ утгаар нь мэдрэх боломжтой, тохилог дулаан уламжлалт гэр.",
                price: "180,000₮",
                capacity: "4-5 хүн",
                size: "28м²",
                features: ["Зуухтай", "Цэвэр даавуун хэрэглэл", "Нийтийн халуун усны газар", "Өглөөний цай"],
                image: "https://images.unsplash.com/photo-1620332372374-f118c830c904?q=80&w=1974&auto=format&fit=crop",
                isPopular: false
            }
        ],
        hotel: [
            {
                id: 3,
                title: "Sky View Suite",
                description: "Тэрэлжийн уулс болон оддыг цонхоороо тольдох боломжтой хамгийн дээд зэрэглэлийн өрөө.",
                price: "450,000₮",
                capacity: "2 хүн",
                size: "45м²",
                features: ["Панорам цонх", "Ухаалаг TV", "Жаккузи", "Room Service"],
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
                isPopular: true
            },
            {
                id: 4,
                title: "Standard Double Room",
                description: "Орчин үеийн интерьер шийдэл бүхий гэр бүл болон хосуудад зориулсан тухлаг өрөө.",
                price: "280,000₮",
                capacity: "2 хүн",
                size: "30м²",
                features: ["Free Wi-Fi", "Душ", "Ажлын ширээ", "Сэйф"],
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
                isPopular: false
            }
        ]
    };

    const AccommodationCard = ({ item }: { item: any }) => (
        <Card className="w-full border-none bg-white/60 backdrop-blur-md" shadow="sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4">
                <div className="md:col-span-5 relative">
                    <Image
                        alt={item.title}
                        className="object-cover w-full h-full min-h-[300px] rounded-none md:rounded-l-xl"
                        src={item.image}
                    />
                    {item.isPopular && (
                        <Chip color="warning" className="absolute top-4 left-4 z-10 text-white font-bold" variant="shadow">
                            Эрэлттэй
                        </Chip>
                    )}
                </div>
                <div className="md:col-span-7 p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                            <p className="text-2xl font-black text-emerald-600">{item.price}<span className="text-sm text-gray-400 font-normal">/хоног</span></p>
                        </div>
                        <p className="text-gray-500 mb-6">{item.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Users size={18} className="text-emerald-500" />
                                <span className="text-sm">{item.capacity}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Maximize size={18} className="text-emerald-500" />
                                <span className="text-sm">{item.size}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {item.features.map((feature: string, idx: number) => (
                                <Chip key={idx} size="sm" variant="flat" className="bg-emerald-50 text-emerald-700">
                                    {feature}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button color="primary" className="flex-1 bg-emerald-600 font-bold">
                            Захиалга өгөх
                        </Button>
                        <Button variant="bordered" className="flex-1 border-emerald-600 text-emerald-600 font-bold">
                            Дэлгэрэнгүй
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            {/* HEADER */}
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Байрлах сууц сонгох</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Та манай уламжлалт монгол гэр эсвэл орчин үеийн тав тухыг хангасан зочид буудлын өрөөнөөс сонголтоо хийнэ үү.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <Tabs
                    aria-label="Accommodation Options"
                    color="primary"
                    variant="underlined"
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-emerald-600",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-emerald-600 font-bold text-lg"
                    }}
                >
                    <Tab
                        key="gers"
                        title={
                            <div className="flex items-center space-x-2">
                                <span>Монгол Гэр</span>
                            </div>
                        }
                    >
                        <div className="mt-8 flex flex-col gap-8">
                            {accommodations.gers.map((ger) => (
                                <AccommodationCard key={ger.id} item={ger} />
                            ))}
                        </div>
                    </Tab>

                    <Tab
                        key="hotel"
                        title={
                            <div className="flex items-center space-x-2">
                                <span>Зочид буудал</span>
                            </div>
                        }
                    >
                        <div className="mt-8 flex flex-col gap-8">
                            {accommodations.hotel.map((room) => (
                                <AccommodationCard key={room.id} item={room} />
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>

            {/* ADDITIONAL INFO */}
            <div className="max-w-6xl mx-auto px-6 mt-20">
                <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-8 text-center">Бүх сууцанд багтсан үйлчилгээ</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Wind size={24} /></div>
                            <p className="font-medium">Халаалт</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl"><Bath size={24} /></div>
                            <p className="font-medium">Халуун ус</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 bg-green-50 text-green-600 rounded-2xl"><Coffee size={24} /></div>
                            <p className="font-medium">Өглөөний цай</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><ShieldCheck size={24} /></div>
                            <p className="font-medium">24/7 Харуул</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}