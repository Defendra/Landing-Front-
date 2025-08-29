"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AccessMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click afuera o con Esc
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!popRef.current || !btnRef.current) return;
      if (!popRef.current.contains(e.target as Node) && !btnRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className="relative">
      <Button
        ref={btnRef}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        variant="outline"
        size="sm"
      >
        Acceso ▾
      </Button>

      {open && (
        <div
          ref={popRef}
          role="menu"
          aria-label="Menú de acceso"
          className="absolute right-0 mt-2 w-48 rounded-xl bg-card/80 backdrop-blur-lg border border-border/50 shadow-xl overflow-hidden animate-in fade-in-0 zoom-in-95"
        >
          <Link
            href="/login"
            role="menuitem"
            className="block px-4 py-3 text-sm text-text-mid hover:bg-white/5 hover:text-text-high transition-colors"
            onClick={() => setOpen(false)}
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            role="menuitem"
            className="block px-4 py-3 text-sm text-text-mid hover:bg-white/5 hover:text-text-high transition-colors"
            onClick={() => setOpen(false)}
          >
            Registrarse
          </Link>
        </div>
      )}
    </div>
  );
}
