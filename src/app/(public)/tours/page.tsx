"use client";

import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Chip,
    Divider,
    Image,
    Input
} from "@heroui/react";
import {
    Camera,
    Clock,
    Heart,
    MapPin,
    Mountain,
    Search,
    TrendingUp,
    Users
} from "lucide-react";

export default function ToursPage() {
    // Аяллын төрлүүд
    const categories = ["Бүгд", "Морин аялал", "Явган аялал", "Соёлын аялал", "Гэр бүлийн"];

    const tours = [
        {
            id: 1,
            title: "Хустайн нурууны тахь харах аялал",
            category: "Соёлын аялал",
            duration: "1 өдөр",
            groupSize: "2-8 хүн",
            difficulty: "Амархан",
            price: "150,000₮",
            image: "https://images.unsplash.com/photo-1589412227329-5803b08b7903?q=80&w=2070&auto=format&fit=crop",
            rating: 4.8,
            tags: ["Байгаль", "Зураг авалт"]
        },
        {
            id: 2,
            title: "Тэрэлж - Гүнжийн сүм морин аялал",
            category: "Морин аялал",
            duration: "2 өдөр 1 шөнө",
            groupSize: "4-10 хүн",
            difficulty: "Дунд зэрэг",
            price: "320,000₮",
            image: "https://images.unsplash.com/photo-1598977123418-45205553f46e?q=80&w=2070&auto=format&fit=crop",
            rating: 4.9,
            tags: ["Морин аялал", "Түүхэн"]
        },
        {
            id: 3,
            title: "Алтай таван богд руу чиглэсэн аялал",
            category: "Явган аялал",
            duration: "7 өдөр",
            groupSize: "2-6 хүн",
            difficulty: "Хүнд",
            price: "1,200,000₮",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
            rating: 5.0,
            tags: ["Adventure", "Extreme"]
        },
        {
            id: 4,
            title: "Нүүдэлчин ахуйтай танилцах өдөрлөг",
            category: "Гэр бүлийн",
            duration: "6 цаг",
            groupSize: "Гэр бүл",
            difficulty: "Маш амархан",
            price: "85,000₮",
            image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
            rating: 4.7,
            tags: ["Хүүхдэд ээлтэй", "Хоол"]
        },
        {
            id: 5,
            title: "Шөнийн тэнгэр, Од харах аялал",
            category: "Соёлын аялал",
            duration: "4 цаг",
            groupSize: "2-15 хүн",
            difficulty: "Амархан",
            price: "60,000₮",
            image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2113&auto=format&fit=crop",
            rating: 4.6,
            tags: ["Зураг авалт", "Шөнийн"]
        },
        {
            id: 6,
            title: "Тэрэлж голын каяк завьт аялал",
            category: "Явган аялал",
            duration: "1 өдөр",
            groupSize: "2-4 хүн",
            difficulty: "Дунд зэрэг",
            price: "180,000₮",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
            rating: 4.9,
            tags: ["Усан аялал", "Спорт"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            {/* HEADER & SEARCH */}
            <section className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Аяллын хөтөлбөрүүд</h1>
                        <p className="text-gray-500 text-lg">
                            Монгол орны үзэсгэлэнт байгаль, нүүдэлчин соёлыг мэргэжлийн хөтөч нартай хамт хамгийн сонирхолтой байдлаар мэдрээрэй.
                        </p>
                    </div>
                    <div className="flex w-full md:w-72 flex-col gap-2">
                        <Input
                            startContent={<Search size={18} className="text-gray-400" />}
                            placeholder="Аялал хайх..."
                            variant="bordered"
                            className="bg-white"
                        />
                    </div>
                </div>
            </section>

            {/* FILTERS */}
            <section className="max-w-7xl mx-auto px-6 mb-10">
                <div className="flex flex-wrap gap-3 p-2 bg-white rounded-2xl shadow-sm border border-gray-100">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={cat === "Бүгд" ? "solid" : "light"}
                            color={cat === "Бүгд" ? "primary" : "default"}
                            className={`font-medium ${cat === "Бүгд" ? "bg-emerald-600 shadow-md" : ""}`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </section>

            {/* TOURS GRID */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour) => (
                        <Card key={tour.id} className="border-none group overflow-hidden" shadow="sm">
                            <CardHeader className="p-0 relative overflow-hidden">
                                <div className="absolute top-3 right-3 z-10">
                                    <Button isIconOnly radius="full" variant="flat" className="bg-white/20 backdrop-blur-md text-white border-none">
                                        <Heart size={20} />
                                    </Button>
                                </div>
                                <Image
                                    alt={tour.title}
                                    className="object-cover w-full h-[280px] transition-transform duration-500 group-hover:scale-110"
                                    src={tour.image}
                                />
                                <div className="absolute bottom-3 left-3 z-10 flex gap-2">
                                    <Chip size="sm" className="bg-black/50 text-white backdrop-blur-md border-none">
                                        {tour.category}
                                    </Chip>
                                </div>
                            </CardHeader>
                            <CardBody className="px-5 py-5">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <TrendingUp size={16} />
                                        <span className="text-xs font-bold">{tour.rating} (Шилдэг)</span>
                                    </div>
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        color={tour.difficulty === "Хүнд" ? "danger" : tour.difficulty === "Дунд зэрэг" ? "warning" : "success"}
                                    >
                                        {tour.difficulty}
                                    </Chip>
                                </div>
                                <h3 className="text-xl font-bold mb-4 line-clamp-1 group-hover:text-emerald-600 transition-colors cursor-pointer">
                                    {tour.title}
                                </h3>

                                <div className="grid grid-cols-2 gap-y-3">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Clock size={16} className="text-emerald-500" />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Users size={16} className="text-emerald-500" />
                                        <span>{tour.groupSize}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <MapPin size={16} className="text-emerald-500" />
                                        <span>Тэрэлж, UB</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Camera size={16} className="text-emerald-500" />
                                        <span>Зураг авалт</span>
                                    </div>
                                </div>
                            </CardBody>
                            <Divider className="opacity-50" />
                            <CardFooter className="px-5 py-4 justify-between bg-gray-50/50">
                                <div>
                                    <p className="text-xs text-gray-400">Нэг хүний</p>
                                    <p className="text-xl font-bold text-emerald-700">{tour.price}</p>
                                </div>
                                <Button className="bg-emerald-600 text-white font-bold px-6">
                                    Үзэх
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CUSTOM TOUR CTA */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <div className="relative rounded-[40px] bg-gray-900 p-8 md:p-16 overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Өөрийн хүссэн аяллыг төлөвлөх үү?</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Хэрэв та манай бэлэн аяллуудаас өөр, зөвхөн өөрийн гэр бүл, хамт олонд зориулсан тусгай аялал хийхийг хүсвэл бид танд төлөвлөгөө гаргаж өгөхөд бэлэн байна.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <Button size="lg" color="primary" className="bg-emerald-600 font-bold">
                                    Төлөвлөгөө гаргах
                                </Button>
                                <Button size="lg" variant="bordered" className="text-white border-white font-bold">
                                    Холбоо барих
                                </Button>
                            </div>
                        </div>
                        <div className="hidden lg:block w-72 h-72 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-3xl relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Mountain size={120} className="text-emerald-500 opacity-40" />
                            </div>
                        </div>
                    </div>
                    {/* Background circles decor */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
                </div>
            </section>
        </div>
    );
}