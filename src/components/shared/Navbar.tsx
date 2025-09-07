"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Left - Logo */}
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        {/* Center Nav Items */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-black transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <Button>Donate</Button>
        </div>

        {/* === Mobile menu === */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-gray-700 hover:text-black transition"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-6">Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
