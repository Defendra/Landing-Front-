import Link from "next/link";
import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary/80 text-secondary-foreground">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-10 md:px-6">
        <div className="flex flex-col items-start gap-2 col-span-2 md:col-span-1">
           <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">Defendra</span>
          </div>
          <p className="text-sm text-secondary-foreground/80">
            © {new Date().getFullYear()} Defendra. Todos los derechos reservados.
          </p>
           <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="text-secondary-foreground/80 hover:text-primary" prefetch={false}>
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-secondary-foreground/80 hover:text-primary" prefetch={false}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-secondary-foreground/80 hover:text-primary" prefetch={false}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
            </div>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold">Producto</h4>
            <ul className="space-y-1">
                <li><Link href="/perfiles" className="text-sm text-secondary-foreground/80 hover:text-primary">Perfiles</Link></li>
                <li><Link href="#solucion" className="text-sm text-secondary-foreground/80 hover:text-primary">Solución</Link></li>
                <li><Link href="#" className="text-sm text-secondary-foreground/80 hover:text-primary">Blog</Link></li>
            </ul>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1">
                <li><Link href="#" className="text-sm text-secondary-foreground/80 hover:text-primary">Términos de Servicio</Link></li>
                <li><Link href="#" className="text-sm text-secondary-foreground/80 hover:text-primary">Política de Privacidad</Link></li>
            </ul>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-1">
                <li><Link href="#contacto" className="text-sm text-secondary-foreground/80 hover:text-primary">Contactar a Ventas</Link></li>
                <li><Link href="#" className="text-sm text-secondary-foreground/80 hover:text-primary">Soporte</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
