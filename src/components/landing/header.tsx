"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import React from "react";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";
import AccessMenu from "./AccessMenu";
import Image from "next/image";


const navLinks = [
  { href: "/#solucion", label: "Solución" },
  { href: "/#roles", label: "Roles" },
  { href: "/#audiencias", label: "Audiencias" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" prefetch={false}>
      <Image 
        src="/logos/defendra-logo-header.svg" 
        alt="Defendra" 
        width={120} 
        height={32}
        className="h-8 w-auto"
      />
    </Link>
  );
}

function NavMenu({ isMobile = false, onLinkClick }: { isMobile?: boolean, onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  const NavElement = isMobile ? 'div' : 'nav';
  const containerClasses = isMobile 
    ? "grid gap-6 text-lg font-medium" 
    : "hidden items-center gap-6 text-sm font-medium md:flex";

  return (
    <NavElement className={containerClasses}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => onLinkClick(e, link.href)}
          className="relative text-slate-300 transition-colors hover:text-white group cursor-pointer"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
        </a>
      ))}
    </NavElement>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const isHomePage = pathname === '/';
      
      if (href.startsWith('/#')) {
        const targetId = href.substring(2);
        if (isHomePage) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const yOffset = -80; 
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        } else {
             window.location.href = `/#${targetId}`;
        }
      } else {
        window.location.href = href;
      }
      
      if (isSheetOpen) setIsSheetOpen(false);
  };
  
  const { whatsappUrl } = useWhatsAppCTA('Hola, quiero hablar con un asesor de Defendra.');

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="flex h-16 w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#0F172A]/70 px-6 backdrop-blur-xl shadow-lg transition-all hover:bg-[#0F172A]/90">
        <Logo />
        <div className="flex items-center gap-4">
          <NavMenu onLinkClick={handleLinkClick} />
          <div className="hidden md:flex items-center gap-3">
            <AccessMenu />
             <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-white font-medium shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] transition-all">
                <a href="/#contacto" onClick={(e) => handleLinkClick(e, '/#contacto')}>Habla con nosotros</a>
             </Button>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden shrink-0 text-white hover:bg-white/10 rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0F172A] border-l-white/10">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <div className="mb-4">
                  <Logo />
                </div>
                 <NavMenu isMobile={true} onLinkClick={handleLinkClick} />
                 <div className="flex flex-col gap-4 mt-8">
                    <AccessMenu />
                    <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-white">
                        <a href="/#contacto" onClick={(e) => handleLinkClick(e, '/#contacto')}>Habla con nosotros</a>
                    </Button>
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
