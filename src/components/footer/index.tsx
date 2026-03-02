"use client";

import { Button, Divider, Image, Input } from "@heroui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex justify-between gap-12">
        <div className="col-span-1 md:col-span-1 w-1/3">
          <Image src="/logo.png" alt="logo" width={200} height={80} />
          <p className="text-sm w-68">A comfortable retreat set in the beautiful landscapes of the Mongolian Gobi, offering accommodation in traditional Mongolian gers.</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">Phone: +976 88029830</li>
            <li className="flex items-center gap-2">Email: nomadicgobitours@gmail.com</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col">
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-gray-400">About us</Link></li>
            <li><Link href="/about-us" className="text-gray-400">Main tours</Link></li>
            <li><Link href="/accommodation" className="text-gray-400">Short tours</Link></li>
            <li><Link href="/activities" className="text-gray-400">Gallert</Link></li>
          </ul>
        </div>
      </div>
      <Divider className="my-8 bg-gray-800" />
      <p className="text-center text-xs">© 2025 Nomadic Gobi Tourist camp | All Rights Reserved.</p>
    </footer>
  );
};

export { Footer };
