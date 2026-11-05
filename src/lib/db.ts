import { Pool } from "pg";

// Reutiliza el pool entre invocaciones (Fluid Compute / hot reload en dev)
const globalForDb = globalThis as unknown as { pgPool?: Pool };

export function getDb(): Pool {
  if (!globalForDb.pgPool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("Falta la variable de entorno DATABASE_URL");
    }
    globalForDb.pgPool = new Pool({ connectionString, max: 3 });
  }
  return globalForDb.pgPool;
}

export type ContactMessageInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  recaptchaScore: number | null;
  userAgent: string | null;
};

export async function saveContactMessage(input: ContactMessageInput): Promise<number> {
  const { rows } = await getDb().query<{ id: number }>(
    `INSERT INTO landing_contact_messages
       (name, company, email, phone, message, recaptcha_score, user_agent)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id`,
    [
      input.name,
      input.company,
      input.email,
      input.phone,
      input.message,
      input.recaptchaScore,
      input.userAgent,
    ]
  );
  return rows[0].id;
}

export async function markContactEmailSent(id: number, emailSent: boolean): Promise<void> {
  await getDb().query(
    `UPDATE landing_contact_messages SET email_sent = $2 WHERE id = $1`,
    [id, emailSent]
  );
}
