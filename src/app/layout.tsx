import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Defendra — Seguridad privada con IA",
  description: "Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-background font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
