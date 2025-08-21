import Link from "next/link";
import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
           <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold text-gray-900 dark:text-gray-50">Defendra</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Defendra. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}