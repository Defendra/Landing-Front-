"use client";
import Link from "next/link";
import brand from "@/design/brand";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-5 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 backdrop-blur-md border border-white/10">
          <Link href="/" className="flex items-center gap-3">
            {/* Si tienes SVG del escudo, úsalo aquí; placeholder círculo: */}
            <div className="h-8 w-8 rounded-full bg-brand-blue600" />
            <span className="font-display text-lg tracking-wide">Defendra</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            <li><a className="nav-link" href="#solucion">Solución</a></li>
            <li><a className="nav-link" href="#roles">Roles</a></li>
            <li><a className="nav-link" href="#audiences">Audiencias</a></li>
            <li><a className="nav-link" href="#testimonios">Clientes</a></li>
            <li><a className="nav-link" href="/blog">Recursos</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              aria-label="Habla con nosotros por WhatsApp"
            >
              Habla con nosotros
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
