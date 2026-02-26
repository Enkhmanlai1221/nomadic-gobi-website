"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AuthProvider from "@/providers/auth";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Header />
      {children}
      <Footer />
    </AuthProvider>
  );
}
