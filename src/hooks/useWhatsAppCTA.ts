
"use client";

const WHATSAPP_PHONE = "573107996793";

export function useWhatsAppCTA(message: string) {
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    return { whatsappUrl };
}
