"use client";

import Link from "next/link";
import { Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#solucion", label: "Solución", id: "solucion" },
  { href: "/perfiles", label: "Perfiles", id: "perfiles" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
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
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => onLinkClick(e, link.href)}
          className={cn(
            "transition-colors hover:text-foreground cursor-pointer",
            activeSection === link.id ? "text-foreground font-semibold" : "text-foreground/80"
          )}
        >
          {link.label}
        </a>
      ))}
    </NavElement>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = React.useState('inicio');
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('/')) {
        router.push(href);
        if (isSheetOpen) setIsSheetOpen(false);
        return;
    }

    const targetId = href.substring(1);
    
    if (pathname !== '/') {
        router.push('/#' + targetId);
    } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -80; 
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
            setActiveSection(targetId);
        }
    }
    if (isSheetOpen) setIsSheetOpen(false);
  };

  React.useEffect(() => {
    const handleScrollAndLoad = () => {
        if (pathname !== '/') {
          const pathId = pathname.replace('/', '');
          setActiveSection(pathId);
          return;
        };

        const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
        let currentSection = '';
        
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            if (section) {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = section.id;
                }
            }
        }
        
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            const lastSection = navLinks.find(l => l.id === 'contacto' && document.getElementById(l.id));
            if(lastSection) currentSection = lastSection.id;
        }

        if (scrollPosition < 100) {
            currentSection = 'inicio';
        }

        setActiveSection(currentSection);
    }
    
    handleScrollAndLoad(); 
    window.addEventListener("scroll", handleScrollAndLoad);
    return () => window.removeEventListener("scroll", handleScrollAndLoad);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <NavMenu activeSection={activeSection} onLinkClick={handleLinkClick} />
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
                 <NavMenu isMobile={true} activeSection={activeSection} onLinkClick={handleLinkClick} />
              </nav>
            </SheetContent>
          </Sheet>
          <Button asChild>
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
