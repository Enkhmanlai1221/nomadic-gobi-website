"use client";

import FifthSection from "@/components/page/home/fifth-section";
import FirstSection from "@/components/page/home/first-section";
import MainTourSection from "@/components/page/home/maintour-section";
import SecondSection from "@/components/page/home/second-section";
import ToursSection from "@/components/page/home/short-tour";
import EventsSection from "@/components/page/home/third-section";
import BookingForm from "./booking/form";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pt-12 space-y-36">
      <FirstSection />
      <SecondSection />
      <MainTourSection />
      <ToursSection />
      <FifthSection />
      <EventsSection />
      <div id="booking-form">
        <BookingForm />
      </div>
    </div>
  );
}