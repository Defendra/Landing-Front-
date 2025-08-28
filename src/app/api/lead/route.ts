import { NextResponse } from 'next/server';
import { z } from 'zod';
// Firestore related imports will be added when Firebase is configured.

const LeadSchema = z.object({
  empresa: z.string().min(2),
  pais: z.string().min(2),
  colaboradores: z.number().int().nonnegative(),
  contacto: z.string().min(2),
  telefono: z.string().min(5),
  email: z.string().email(),
  mensaje: z.string().optional(),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional()
  }).optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
    }

    // Firestore logic will be added here.
    // For now, we just log the data to the console.
    console.log('Lead received:', parsed.data);
    
    // Example:
    // await addDoc(collection(db, 'leads'), {
    //   ...parsed.data,
    //   createdAt: serverTimestamp(),
    //   source: 'landing'
    // });

    return NextResponse.json({ ok: true, message: 'Lead received successfully' });
  } catch (error) {
    console.error('Error in /api/lead:', error);
    return NextResponse.json({ ok: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
