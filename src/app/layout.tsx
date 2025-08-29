import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Brand } from "@/design/brand";

export const metadata: Metadata = {
  title: "Defendra — Seguridad privada con IA",
  description: "Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`min-h-dvh bg-bg-DEFAULT font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
