"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";
import TextType from "@/components/ui/TextType";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { whatsappUrl } = useWhatsAppCTA("Hola Defendra, me gustaría conocer la solución.");

  return (
    <section id="inicio" className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              La nueva era de la seguridad privada
            </div>

            <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none text-white">
              <span className="block mb-2">Digitaliza toda tu</span>
              <span className="">
                operación de vigilancia
              </span>
            </h1>

            <p className="max-w-[600px] text-slate-300 text-lg md:text-xl leading-relaxed">
              Elimina fugas por relevos y horas extra con una plataforma impulsada por IA.
              Trazabilidad total en tiempo real y una pre-nómina 100% validada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-medium rounded-full shadow-[0_0_40px_rgba(0,112,243,0.4)] transition-all hover:scale-105">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agenda una Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/20 hover:bg-white/10 text-white font-medium backdrop-blur-md transition-all hover:scale-105">
                <Link href="/#solucion">Explorar Solución</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-[100px] -z-10" />

            {/* Imagen principal estilo dashboard / operación */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <div
                  className="absolute -left-8 top-10 z-20 rounded-2xl border border-slate-700 p-4 shadow-xl animate-bounce"
                  style={{
                    backgroundColor: '#0F172A',
                    animationDuration: '4s',
                  }}
                >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Relevo Confirmado</p>
                    <p className="text-xs text-slate-400">Hace 2 min</p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                {/* Imagen de Pexels (Seguridad / Tech / Dashboard) */}
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Centro de control Defendra"
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="absolute -right-8 bottom-10 rounded-2xl bg-[#0F172A] p-4 shadow-xl border border-white/20 animate-bounce" style={{ animationDuration: '5s' }}>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-slate-400">Horas Extra Ahorradas</p>
                  <p className="text-2xl font-bold text-accent">32%</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
