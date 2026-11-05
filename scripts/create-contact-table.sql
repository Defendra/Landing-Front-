-- Tabla de mensajes del formulario de contacto de la landing.
-- Ejecutar una vez: psql "$DATABASE_URL" -f scripts/create-contact-table.sql
CREATE TABLE IF NOT EXISTS landing_contact_messages (
  id              SERIAL PRIMARY KEY,
  name            TEXT NOT NULL,
  company         TEXT,
  email           TEXT NOT NULL,
  phone           TEXT,
  message         TEXT,
  recaptcha_score REAL,
  user_agent      TEXT,
  email_sent      BOOLEAN NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS landing_contact_messages_created_at_idx
  ON landing_contact_messages (created_at DESC);
