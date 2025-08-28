"use client";

import { useSearchParams } from 'next/navigation';
import { WHATSAPP_URL } from '@/lib/constants';

export function useWhatsAppCTA(message: string) {
    const searchParams = useSearchParams();

    // En un futuro, podríamos leer UTMs aquí.
    // const utmSource = searchParams.get('utm_source');

    const fullMessage = message;
    const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(fullMessage)}`;

    return { whatsappUrl };
}
