"use client";
import {
    Button,
    Card,
    CardBody,
    DateRangePicker,
    Divider,
    Input,
    Select,
    SelectItem,
    Textarea
} from "@heroui/react";
import { motion } from "framer-motion";
import {
    Facebook,
    Home,
    Instagram,
    Mail,
    MessageCircle,
    Phone,
    Send,
    SendHorizontal,
    User,
    Users
} from "lucide-react";
import React, { useState } from "react";

const gerTypes = [
    { label: "Pointed-top Ger", value: "pointed" },
    { label: "Earthen (Mud) Ger", value: "mud" },
    { label: "Classic Mongolian Ger", value: "classic" },
];

export default function BookingForm() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <section className="py-10 px-6 bg-slate-50/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Book your trip</h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}>
                    <Card className="border-none shadow-2xl rounded-[2.5rem] p-2 md:p-6">
                        <CardBody>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input isRequired label="Name" placeholder="Enter your name" labelPlacement="outside"
                                        startContent={<User className="text-slate-400" size={18} />}
                                        variant="bordered" classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                    <Input isRequired type="tel" label="Phone" placeholder="Enter your phone" labelPlacement="outside"
                                        startContent={<Phone className="text-slate-400" size={18} />}
                                        variant="bordered" classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                    <Input isRequired label="Email" placeholder="Enter your email" labelPlacement="outside"
                                        startContent={<Mail className="text-slate-400" size={18} />}
                                        variant="bordered" classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                    <DateRangePicker isRequired label="Arrival Date" labelPlacement="outside" variant="bordered"
                                        classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                    <div className="md:col-span-2">
                                        <Select isRequired label="Ger type" placeholder="Select" labelPlacement="outside"
                                            startContent={<Home className="text-slate-400" size={18} />}
                                            variant="bordered" classNames={{ trigger: "rounded-2xl h-12" }}
                                        >
                                            {gerTypes.map((ger) => <SelectItem key={ger.value}>{ger.label}</SelectItem>)}
                                        </Select>
                                    </div>
                                    <Input type="number" label="How Many Adults Traveling?" placeholder="1" min={1} labelPlacement="outside"
                                        startContent={<Users className="text-slate-400" size={18} />}
                                        variant="bordered" classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                    <Input type="number" label="How Many Children Traveling?" placeholder="1" min={1} labelPlacement="outside"
                                        startContent={<Users className="text-slate-400" size={18} />}
                                        variant="bordered" classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Divider className="flex-1" />
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest px-2">Social media (Optional)</span>
                                        <Divider className="flex-1" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            label="Facebook" placeholder="Profile link or name" labelPlacement="outside"
                                            startContent={<Facebook className="text-blue-600" size={18} />}
                                            variant="flat" classNames={{ inputWrapper: "rounded-xl bg-slate-100/50" }}
                                        />
                                        <Input
                                            label="Instagram" placeholder="@username" labelPlacement="outside"
                                            startContent={<Instagram className="text-pink-600" size={18} />}
                                            variant="flat" classNames={{ inputWrapper: "rounded-xl bg-slate-100/50" }}
                                        />
                                        <Input
                                            label="WhatsApp" placeholder="Number" labelPlacement="outside"
                                            startContent={<MessageCircle className="text-green-500" size={18} />}
                                            variant="flat" classNames={{ inputWrapper: "rounded-xl bg-slate-100/50" }}
                                        />
                                        <Input
                                            label="Telegram" placeholder="@username" labelPlacement="outside"
                                            startContent={<Send className="text-sky-500" size={18} />}
                                            variant="flat" classNames={{ inputWrapper: "rounded-xl bg-slate-100/50" }}
                                        />
                                    </div>
                                </div>

                                <Textarea label="Additional request" placeholder="Leave a message here..." labelPlacement="outside"
                                    variant="bordered" classNames={{ inputWrapper: "rounded-2xl" }}
                                />

                                <Button
                                    size="lg"
                                    type="submit"
                                    color="primary"
                                    isLoading={isLoading}
                                    className="w-full bg-black text-white font-bold rounded-2xl h-14 shadow-xl"
                                    endContent={!isLoading && <SendHorizontal size={20} />}
                                >
                                    Book now
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}