import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Brand } from "@/design/brand";
import { WhatsAppFloatingButton } from "@/components/landing/WhatsAppFloatingButton";
import { BackgroundBlobs } from "@/components/landing/BackgroundBlobs";

export const metadata: Metadata = {
  title: "Defendra — Plataforma de Gestión de Turnos y Personal",
  description: "Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento. Ideal para la gestión de turnos y administración de personal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`min-h-dvh bg-bg-DEFAULT font-sans antialiased overflow-x-hidden`}>
        <BackgroundBlobs />
        {children}
        <Toaster />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
