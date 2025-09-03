import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full border-t border-border-subtle bg-bg-soft text-text-high">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-10 md:px-6">
                <div className="flex flex-col items-start gap-2 col-span-2 md:col-span-1">
                    <div className="flex items-center">
                        <Image
                            src="/logos/defendra-logo-header.svg"
                            alt="Defendra"
                            width={100}
                            height={26}
                            className="h-6 w-auto"
                        />
                    </div>
                    <p className="text-sm text-text-low">
                        © {new Date().getFullYear()} Defendra. Todos los derechos reservados.
                    </p>
                    <div className="flex flex-col gap-1 text-sm text-text-low mt-4">
                        <a href="mailto:defendraco@gmail.com" className="hover:text-primary">defendraco@gmail.com</a>
                        <a href="tel:+573107996793" className="hover:text-primary">+57 310 799 6793</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold">Producto</h4>
                    <ul className="space-y-1">
                        <li><Link href="/#solucion" className="text-sm text-text-mid hover:text-primary">Solución</Link></li>
                        <li><Link href="/roles" className="text-sm text-text-mid hover:text-primary">Roles</Link></li>
                        <li><Link href="/audiencias" className="text-sm text-text-mid hover:text-primary">Audiencias</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold">Legal</h4>
                    <ul className="space-y-1">
                        <li><Link href="/terminos" className="text-sm text-text-mid hover:text-primary">Términos de Servicio</Link></li>
                        <li><Link href="/privacidad" className="text-sm text-text-mid hover:text-primary">Política de Privacidad</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold">Contacto</h4>
                    <ul className="space-y-1">
                        <li><Link href="/#contacto" className="text-sm text-text-mid hover:text-primary">Contactar a Ventas</Link></li>
                        <li><Link href="/#contacto" className="text-sm text-text-mid hover:text-primary">Soporte</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
