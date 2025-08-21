"use client";

import Link from "next/link";
import { Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#solucion", label: "Solución" },
  { href: "#perfiles", label: "Perfiles" },
  { href: "#contacto", label: "Contacto" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Shield className="h-7 w-7 text-primary" />
      <span className="font-headline text-2xl font-bold text-gray-900 dark:text-gray-50">Defendra</span>
    </Link>
  );
}

function NavMenu({ isMobile = false, activeSection, onLinkClick }: { isMobile?: boolean, activeSection: string, onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  const NavElement = isMobile ? 'div' : 'nav';
  const containerClasses = isMobile 
    ? "grid gap-6 text-lg font-medium" 
    : "hidden items-center gap-6 text-sm font-medium md:flex";

  return (
    <NavElement className={containerClasses}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={(e) => onLinkClick(e, link.href)}
          className={cn(
            "transition-colors hover:text-foreground",
            activeSection === link.href.substring(1) ? "text-foreground font-semibold" : "text-foreground/80"
          )}
          prefetch={false}
        >
          {link.label}
        </Link>
      ))}
    </NavElement>
  );
}

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState('inicio');
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);


  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -80; 
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
            setActiveSection(targetId);
            if (isSheetOpen) setIsSheetOpen(false);
        }
    }
  };

  React.useEffect(() => {
    if (pathname !== '/') return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { rootMargin: "-50% 0px -50% 0px" } 
    );

    const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
    sections.forEach((section) => {
        if (section) observer.observe(section);
    });

    return () => {
        sections.forEach((section) => {
            if (section) observer.unobserve(section);
        });
    };
  }, [pathname]);

  const isLanding = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <div className="flex items-center gap-4">
          {isLanding && <NavMenu activeSection={activeSection} onLinkClick={handleLinkClick} />}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Logo />
                {isLanding ? (
                    <NavMenu isMobile={true} activeSection={activeSection} onLinkClick={handleLinkClick} />
                ) : (
                   <div className="grid gap-6 text-lg font-medium">
                     <Link href="/" className="text-foreground/80 transition-colors hover:text-foreground">Inicio</Link>
                   </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden md:flex">
            <Link href="#">Iniciar Sesión</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
