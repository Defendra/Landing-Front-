"use client";
import { useCallback } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export const track = (event: string, payload?: Record<string, any>) => {
  // Conecta con GA4/Amplitude cuando esté listo
  if (typeof window !== "undefined") {
    console.log(`Analytics Event: ${event}`, payload);
    // window.dispatchEvent(new CustomEvent("analytics", { detail: { event, payload } }));
  }
};


export const useWhatsapp = () => {
  return useCallback((source: string) => {
    track("click_whatsapp", { source });
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }, []);
};
