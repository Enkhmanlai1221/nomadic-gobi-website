"use client";
import {
    Button,
    Card,
    CardBody,
    Input
} from "@heroui/react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    SendHorizontal,
    User
} from "lucide-react";
import React, { useState } from "react";

export default function BookingForm() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <section className="pb-44">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}>
                    <Card className="border-none rounded-[2.5rem] p-2 md:p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Send Inquiry</h2>
                        </motion.div>
                        <CardBody>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input isRequired label="Firstname" placeholder="Firstname" labelPlacement="outside"
                                        startContent={<User className="text-slate-400" size={18} />}
                                        variant="bordered" classNames={{ inputWrapper: "rounded-2xl h-12" }}
                                    />
                                    <Input isRequired label="Lastname" placeholder="Lastname" labelPlacement="outside"
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
                                </div>
                                <Button
                                    size="lg"
                                    type="submit"
                                    color="primary"
                                    isLoading={isLoading}
                                    className="rounded-full font-bold px-6 transition-all duration-300 bg-amber-700 text-white hover:bg-amber-800 shadow-lg"
                                    endContent={!isLoading && <SendHorizontal size={20} />}
                                >
                                    Send
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}