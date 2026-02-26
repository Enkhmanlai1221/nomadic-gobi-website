"use client";
import { Utensils, Tent, Camera, Flame } from "lucide-react";
import ActivityShowcase from "./show-case";

export default function ActivitiesPage() {
    return (
        <section className="bg-[#FAF9F6] overflow-hidden min-h-screen">
            {/* Page Header */}
            <div className="py-24 text-center max-w-4xl mx-auto px-6">
                <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                    Discover
                </span>
                <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mt-4 mb-6">
                    Life at the Camp
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                    From the comfort of traditional dwellings to the thrill of night-time festivities,
                    every moment is designed to be a memory.
                </p>
                <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mt-8" />
            </div>

            <div className="flex flex-col gap-24 pb-24">
                <ActivityShowcase
                    subtitle="Accommodation"
                    title="Traditional Ger Stay"
                    description="Experience the nomadic way of life in our premium Gers. We offer three distinct styles: the pointed-top Tsomtsog, the eco-friendly Clay Ger, and the Classic Felt Ger. Each is furnished with handcrafted furniture and modern amenities to ensure a warm, safe stay."
                    features={["Daily Housekeeping", "Premium Felt Insulation", "Scenic Views"]}
                    icon={<Tent className="w-6 h-6" />}
                    images={[
                        "/tsomtsog-ger/img1.jpg",
                        "/tsomtsog-ger/img2.jpg",
                        "/tsomtsog-ger/img3.jpg",
                        "/tsomtsog-ger/img4.jpg",
                    ]}
                    isPosition="left"
                />

                <ActivityShowcase
                    subtitle="Dining"
                    title="Nomadic Cuisine"
                    description="Our two spacious restaurant Gers serve a fusion of hearty Mongolian staples and international comfort food. Don't miss the chance to taste our chef's signature Khorkhog (stone-roasted meat), prepared right before your eyes."
                    features={["Organic Local Ingredients", "Vegetarian Options", "Capacity: 60 Guests"]}
                    icon={<Utensils className="w-6 h-6" />}
                    images={[
                        "/restaurant/img1.jpg",
                        "/restaurant/img2.jpg",
                        "/restaurant/img3.jpg",
                    ]}
                    isPosition="right"
                />

                <ActivityShowcase
                    subtitle="Experiences"
                    title="Evening Festivities"
                    description="As the sun sets over the steppe, the camp comes alive. Gather around the bonfire for traditional music, enjoy a dazzling firework display, or join our guided night-photography sessions to capture the Milky Way."
                    features={["Bonfire & Music", "Stargazing", "Cultural Performances"]}
                    icon={<Flame className="w-6 h-6" />}
                    images={[
                        "/home/service/img3.png", // Firework
                        "/home/ger/ger1.png",     // Photo trip
                        "/camp/img6.jpg",         // Extra filler
                    ]}
                    isPosition="left"
                />
            </div>
        </section>
    );
}