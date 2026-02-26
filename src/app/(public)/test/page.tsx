import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Chip, Divider,
    Image
} from "@heroui/react";
import { ArrowRight, Calendar, Coffee, Mountain, Star, Users, Wifi } from "lucide-react";

export default function TestPage() {
    return (
        <div>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Coffee />, title: "Өглөөний цай", desc: "Үндэсний болон Европ" },
                            { icon: <Wifi />, title: "Free Wi-Fi", desc: "Старлинк интернэт" },
                            { icon: <Mountain />, title: "Морин аялал", desc: "Мэргэжлийн хөтөч" },
                            { icon: <Star />, title: "5 Одтой орчин", desc: "Тав тух, цэвэр агаар" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="p-4 bg-emerald-50 rounded-full text-emerald-600 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Манай тусгай аяллууд</h2>
                        <p className="text-gray-500">Зөвхөн манай баазын амрагчдад зориулсан хөтөлбөрүүд</p>
                    </div>
                    <Button variant="light" color="primary" endContent={<ArrowRight size={16} />}>
                        Бүгдийг үзэх
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-none" shadow="sm">
                        <CardHeader className="p-0">
                            <Image
                                alt="Horse Trekking"
                                className="object-cover w-full h-[250px]"
                                src="https://images.unsplash.com/photo-1598977123418-45205553f46e?q=80&w=2070&auto=format&fit=crop"
                            />
                        </CardHeader>
                        <CardBody className="px-5 py-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-xl">Тэрэлж Хээр талын морин аялал</h4>
                                <Chip size="sm" color="success" variant="flat">Шинэ</Chip>
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                                <span className="flex items-center gap-1"><Calendar size={14} /> 2 өдөр</span>
                                <span className="flex items-center gap-1"><Users size={14} /> 2-10 хүн</span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                Мэргэжлийн хөтөчтэй морин аялал. Тэрэлжийн байгалийн хамгийн үзэсгэлэнт газруудаар аялах боломж.
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="justify-between px-5">
                            <p className="font-bold text-lg text-emerald-700">250,000₮</p>
                            <Button size="sm" color="primary" variant="flat">Захиалах</Button>
                        </CardFooter>
                    </Card>
                    <Card className="border-none" shadow="sm">
                        <CardHeader className="p-0">
                            <Image
                                alt="Nomad Life"
                                className="object-cover w-full h-[250px]"
                                src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop"
                            />
                        </CardHeader>
                        <CardBody className="px-5 py-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-xl">Нүүдэлчин айл зочлох аялал</h4>
                                <Chip size="sm" color="warning" variant="flat">Эрэлттэй</Chip>
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                                <span className="flex items-center gap-1"><Calendar size={14} /> 1 өдөр</span>
                                <span className="flex items-center gap-1"><Users size={14} /> Гэр бүл</span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                Монгол ахуй соёлтой танилцах, цагаан идээ боловсруулах болон үндэсний хоол хийх сургалт.
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="justify-between px-5">
                            <p className="font-bold text-lg text-emerald-700">180,000₮</p>
                            <Button size="sm" color="primary" variant="flat">Захиалах</Button>
                        </CardFooter>
                    </Card>
                    <Card className="border-none" shadow="sm">
                        <CardHeader className="p-0">
                            <Image
                                alt="Stargazing"
                                className="object-cover w-full h-[250px]"
                                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2113&auto=format&fit=crop"
                            />
                        </CardHeader>
                        <CardBody className="px-5 py-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-xl">Од харах шөнийн аялал</h4>
                                <Chip size="sm" color="secondary" variant="flat">Romantic</Chip>
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                                <span className="flex items-center gap-1"><Calendar size={14} /> Шөнө</span>
                                <span className="flex items-center gap-1"><Users size={14} /> 2 хүн</span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                Одон орны дурангаар оддыг ажиглах, мэргэжлийн зурагчинтай хамт дурсгалын зураг татуулах.
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="justify-between px-5">
                            <p className="font-bold text-lg text-emerald-700">120,000₮</p>
                            <Button size="sm" color="primary" variant="flat">Захиалах</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto bg-emerald-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6">Аялалдаа бэлэн үү?</h2>
                        <p className="text-emerald-100 mb-8 text-lg max-w-xl mx-auto">
                            Та яг одоо захиалгаа өгөөд 10%-ийн хөнгөлөлт эдлэх боломжтой. Бид танд хамгийн мартагдашгүй дурсамжийг бэлэглэх болно.
                        </p>
                        <Button size="lg" className="bg-white text-emerald-900 font-bold px-10">
                            Яг одоо захиалах
                        </Button>
                    </div>
                    <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
                </div>
            </section>
        </div>
    );
}