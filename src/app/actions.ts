'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
});

export async function submitContactForm(data: unknown) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    console.error('Validation Error:', validatedFields.error.flatten().fieldErrors);
    throw new Error('Datos de formulario inválidos.');
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data to the console.
  console.log('Contact form submitted successfully:');
  console.log(validatedFields.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    success: true,
  };
}
