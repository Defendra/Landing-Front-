"use client";
import Link from "next/link";
import { WHATSAPP } from "@/lib/constants";
import { Button } from "./Button";
import { useWhatsapp } from "@/hooks/useWhatsapp";

export default function Navbar() {
  const openWA = useWhatsapp();
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto">
        <nav className="mt-5 flex items-center justify-between rounded-2xl bg-brand-midnight/60 px-4 py-3 backdrop-blur-lg border border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-electric" />
            <span className="font-display text-lg tracking-wide font-bold">Defendra</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            <li><a className="text-ink-600 hover:text-white transition" href="#solucion">Solución</a></li>
            <li><a className="text-ink-600 hover:text-white transition" href="#roles">Roles</a></li>
            <li><a className="text-ink-600 hover:text-white transition" href="#clientes">Clientes</a></li>
            <li><a className="text-ink-600 hover:text-white transition" href="/blog">Recursos</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <Button onClick={() => openWA("navbar")} size="md">
              Habla con nosotros
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
