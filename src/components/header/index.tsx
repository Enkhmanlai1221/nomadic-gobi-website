"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Navbar,
  Button,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@heroui/react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Main Tours", href: "/main-tour" },
    { label: "Short Tours", href: "/short-tour" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <Navbar
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out "bg-white/80 backdrop-blur-md shadow-sm py-2"`}
      classNames={{
        wrapper: "px-6 md:px-12",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-orange-500",
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" aria-label="Home" className="relative transition-all duration-300">
            <div className={`relative transition-all duration-500 ${isScrolled ? "scale-90" : "scale-100"}`}>
              <Image
                src="/logo.png"
                alt="Dungenee Logo"
                width={isScrolled ? 160 : 160}
                height={isScrolled ? 160 : 160}
                priority
              />
            </div>
            {/* <span className={`ml-3 font-serif font-bold text-xl tracking-tighter transition-colors text-black`}>
              Nomadic Gobi
            </span> */}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8" justify="center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavbarItem key={item.href} isActive={isActive}>
              <Link
                href={item.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-amber-700" : "text-stone-600 hover:text-amber-800"}`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="/booking"
            className="rounded-full font-bold px-6 transition-all duration-300 bg-amber-700 text-white hover:bg-amber-800 shadow-lg"
          >
            Book Now
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`lg:hidden ${!isScrolled && !isMenuOpen ? "text-white" : "text-stone-900"}`}
        />
      </NavbarContent>

      <NavbarMenu className="pt-10 bg-[#FAF9F6]/95 backdrop-blur-xl gap-6">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full text-3xl font-serif ${isActive ? "text-orange-600 font-bold italic" : "text-stone-800"
                  }`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}

        <NavbarMenuItem className="pt-8">
          <Button
            as={Link}
            href="/booking"
            className="w-full h-14 text-lg font-bold bg-stone-900 text-white rounded-2xl"
            onPress={() => setIsMenuOpen(false)}
          >
            Book Your Stay
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}