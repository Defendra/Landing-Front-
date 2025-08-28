import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-brand-midnight">
        <div className="container mx-auto flex items-center justify-between py-6 text-sm text-ink-600">
            <p>© {new Date().getFullYear()} Defendra. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
                <Link href="/privacidad" className="hover:text-white">Política de Privacidad</Link>
                <Link href="/terminos" className="hover:text-white">Términos de Servicio</Link>
            </div>
        </div>
    </footer>
  );
}
