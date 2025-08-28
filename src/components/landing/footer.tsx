import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-brand-light text-foreground">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-10 md:px-6">
        <div className="flex flex-col items-start gap-2 col-span-2 md:col-span-1">
           <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-brand-accent" />
            <span className="font-headline text-lg font-bold">Defendra</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Defendra. Todos los derechos reservados.
          </p>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold">Producto</h4>
            <ul className="space-y-1">
                <li><Link href="/roles" className="text-sm text-muted-foreground hover:text-brand-accent">Roles</Link></li>
                <li><Link href="#soluciones" className="text-sm text-muted-foreground hover:text-brand-accent">Soluciones</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-brand-accent">Recursos</Link></li>
            </ul>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-brand-accent">Términos de Servicio</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-brand-accent">Política de Privacidad</Link></li>
            </ul>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-1">
                <li><Link href="/contacto" className="text-sm text-muted-foreground hover:text-brand-accent">Contactar a Ventas</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-brand-accent">Soporte</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
