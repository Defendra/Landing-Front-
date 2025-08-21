import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Defendra | La Nueva Era de la Seguridad Privada en Colombia',
  description: 'Digitalizamos y automatizamos la operación de seguridad con IA, trazabilidad y cumplimiento. Gestión inteligente de guardias, turnos y operaciones en tiempo real.',
  openGraph: {
    title: 'Defendra | La Nueva Era de la Seguridad Privada en Colombia',
    description: 'Digitalizamos y automatizamos la operación de seguridad con IA, trazabilidad y cumplimiento.',
    url: 'https://defendra.co',
    siteName: 'Defendra',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', 
        width: 1200,
        height: 630,
        alt: 'Dashboard de Defendra mostrando KPIs de seguridad'
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defendra | La Nueva Era de la Seguridad Privada en Colombia',
    description: 'Digitalizamos y automatizamos la operación de seguridad con IA, trazabilidad y cumplimiento.',
    images: ['https://placehold.co/1200x630.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" style={{colorScheme: 'dark'}} suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
