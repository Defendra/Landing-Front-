"use client";

import { useState } from 'react';
import Link from "next/link";
import { Menu, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <Shield className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold text-primary">Defendra</span>
    </Link>
  );
}

function NavMenu({ isMobile = false }) {
  const NavElement = isMobile ? 'div' : 'nav';
  const containerClasses = isMobile ? "flex flex-col items-start gap-4 p-4" : "hidden items-center gap-6 text-sm font-medium md:flex";

  return (
    <NavElement className={containerClasses}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-primary"
          prefetch={false}
        >
          {link.label}
        </Link>
      ))}
    </NavElement>
  );
}

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <NavMenu />
          <Button asChild className="hidden md:flex">
            <Link href="#contacto">Contacto</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                 <Logo />
                 <NavMenu isMobile={true} />
                 <Button asChild>
                    <Link href="#contacto">Contacto</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
