
"use client";

import Link from "next/link";
import { Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";


const navLinks = [
  { href: "/#solucion", label: "Solución" },
  { href: "/#roles", label: "Roles" },
  { href: "/#audiences", label: "Audiencias" },
  { href: "/#testimonios", label: "Clientes" },
  { href: "/blog", label: "Recursos" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Shield className="h-7 w-7 text-brand-accent" />
      <span className="font-headline text-2xl font-bold text-foreground">Defendra</span>
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
          className="transition-colors hover:text-brand-accent text-muted-foreground cursor-pointer"
        >
          {link.label}
        </a>
      ))}
    </NavElement>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { whatsappUrl } = useWhatsAppCTA('Hola, quiero hablar con un asesor de Defendra.');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(href.indexOf('#') + 1);
    const targetElement = document.getElementById(targetId);
    
    if (href.startsWith('/blog')) {
      window.location.href = href;
    } else if (pathname === '/') {
        if (targetElement) {
            const yOffset = -80; 
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
    else {
      window.location.href = `/${href}`;
    }
    
    if (isSheetOpen) setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <NavMenu onLinkClick={handleLinkClick} />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <div className="mb-4">
                  <Logo />
                </div>
                 <NavMenu isMobile={true} onLinkClick={handleLinkClick} />
              </nav>
            </SheetContent>
          </Sheet>
          <Button asChild className="bg-brand-accent hover:bg-brand-accent/90">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Habla con nosotros</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
