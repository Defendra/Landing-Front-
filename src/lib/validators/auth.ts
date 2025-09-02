import { z } from "zod";

export const AdminLoginSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

export const guardLoginSchema = z.object({
  email: z.string().email({ message: "Ingresa un correo válido." }),
  password: z.string().min(8, { message: "Mínimo 8 caracteres." }),
  remember: z.boolean().optional().default(false),
});
export type GuardLoginInput = z.infer<typeof guardLoginSchema>;
