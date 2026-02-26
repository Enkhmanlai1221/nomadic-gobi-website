"use client";

import { Button, Divider, Image } from "@heroui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Image src="/logo-white.svg" alt="logo" width={85} height={85} />
          <h3 className="text-white text-xl font-bold mb-4">Dungenee Tourist camp</h3>
          <p className="text-sm">A comfortable retreat set in the beautiful landscapes of the Mongolian Gobi, offering accommodation in traditional Mongolian gers.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-gray-400">Home</Link></li>
            <li><Link href="/about-us" className="text-gray-400">About Us</Link></li>
            <li><Link href="/accommodation" className="text-gray-400">Accommodation</Link></li>
            <li><Link href="/activities" className="text-gray-400">Facilities & Activities</Link></li>
            <li><Link href="/service" className="text-gray-400">Services</Link></li>
            <li><Link href="/gallery" className="text-gray-400">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">Phone: +976 12345678</li>
            <li className="flex items-center gap-2">Email:  info@Dungenee.mn</li>
          </ul>
          <div className="mt-4">
            <h4 className="text-white font-semibold mb-4">Subscribe to our newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-gray-800 border-none rounded-lg px-3 py-2 text-sm w-full" />
              <Button size="md" color="primary">Subscribe</Button>
            </div>
          </div>
        </div>

      </div>
      <Divider className="my-8 bg-gray-800" />
      <p className="text-center text-xs">© 2025 Dungenee Tourist camp | All Rights Reserved.</p>
    </footer>
  );
};

export { Footer };
