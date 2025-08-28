import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defendra — Seguridad privada con IA",
  description: "Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-brand-midnight bg-radial-hero">
        <div className="relative isolate">{children}</div>
      </body>
    </html>
  );
}
