"use client";

import { useSearchParams } from 'next/navigation';

const WHATSAPP_PHONE = "573107996793"

export function useWhatsAppCTA(message: string) {
    const searchParams = useSearchParams();

    // En un futuro, podríamos leer UTMs aquí.
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    
    let fullMessage = message;
    
    // Idea: podríamos añadir los UTMs al mensaje si existen
    if(utmSource) {
      // fullMessage += `\n\nFuente: ${utmSource}`;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullMessage)}`;

    return { whatsappUrl };
}
