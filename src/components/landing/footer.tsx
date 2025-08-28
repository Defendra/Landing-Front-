import Link from "next/link";
import { Shield } from "lucide-react";
import brand from "@/design/brand";

export function Footer() {
  return (
    <footer className="bg-brand-indigo/60 border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-4 py-10 text-brand-gray500 text-sm">
          © {new Date().getFullYear()} Defendra. Todos los derechos reservados.
        </div>
      </footer>
  );
}
