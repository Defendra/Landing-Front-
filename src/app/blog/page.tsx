
import { BlogPanel, BlogPost } from '@/components/landing/blog';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';

export const metadata = {
  title: 'Blog | Defendra',
  description:
    'Tendencias, regulación e innovación en seguridad privada. Supervigilancia, Decreto 356, operaciones y IA.',
};

// En un caso real, esto haría un fetch a un CMS o a Firestore.
// Por ahora, usamos los mismos datos mock de la landing.
const mockPosts: BlogPost[] = [
    {
    id: '1',
    slug: 'que-es-la-supervigilancia',
    title: '¿Qué es la Supervigilancia y por qué es vital para tu empresa?',
    excerpt: 'Rol, funciones y alcance de la Superintendencia de Vigilancia y Seguridad Privada en Colombia, y cómo Defendra te ayuda a navegar sus requerimientos.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'Regulación & Cumplimiento',
    tags: ['Supervigilancia', 'Regulación'],
    publishedAt: '2025-02-15T12:00:00.000Z',
    readMins: 6,
    featured: true,
  },
  {
    id: '2',
    slug: 'decreto-356-modalidades',
    title: 'Decreto 356 de 1994: modalidades y obligaciones clave',
    excerpt: 'Resumen de las 10 licencias del Estatuto de Vigilancia y Seguridad Privada y lo que implica su cumplimiento operativo en el día a día.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'Regulación & Cumplimiento',
    tags: ['Decreto 356', 'Cumplimiento'],
    publishedAt: '2025-02-10T12:00:00.000Z',
    readMins: 7,
  },
  {
    id: '3',
    slug: 'programacion-con-ia',
    title: 'Cómo automatizar la programación de turnos con IA',
    excerpt: 'Parrillas por puesto o persona, detección de vacíos y sugerencias de relevo inteligentes para optimizar tu cobertura y reducir costos.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'Operaciones & Eficiencia',
    tags: ['IA', 'Operación'],
    publishedAt: '2025-02-06T12:00:00.000Z',
    readMins: 5,
  },
  {
    id: '4',
    slug: 'minuta-digital-vs-papel',
    title: 'Minuta digital vs. minuta en papel: guía de adopción',
    excerpt: 'Ventajas de la trazabilidad digital, evidencia multimedia y reportes en tiempo real frente a los libros de control tradicionales.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'Operaciones & Eficiencia',
    tags: ['Digitalización', 'Trazabilidad'],
    publishedAt: '2025-01-28T12:00:00.000Z',
    readMins: 4,
  },
  {
    id: '5',
    slug: '5-kpis-operativos',
    title: '5 KPIs que toda operación de vigilancia debe medir',
    excerpt: 'Más allá de la cobertura: mide el tiempo de respuesta a incidentes, la rotación por puesto, el cumplimiento de rondas y más.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'Operaciones & Eficiencia',
    tags: ['KPIs', 'Gestión'],
    publishedAt: '2025-01-22T12:00:00.000Z',
    readMins: 6,
  },
  {
    id: '6',
    slug: 'ocr-en-ficha-tecnica',
    title: 'OCR en Ficha Técnica: del PDF al plan operativo en segundos',
    excerpt: 'Cómo la IA de Defendra lee un contrato o ficha técnica y extrae automáticamente los puestos, rondas y condiciones del servicio.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'IA & Tecnología',
    tags: ['IA', 'OCR', 'Automatización'],
    publishedAt: '2025-01-15T12:00:00.000Z',
    readMins: 5,
  },
   {
    id: '7',
    slug: 'checklist-cumplimiento-licencias',
    title: 'Checklist de cumplimiento para las 10 licencias de seguridad',
    excerpt: 'Una guía práctica para auditar el cumplimiento normativo en vigilancia fija, móvil, escoltas, transporte de valores y más, según el Decreto 356.',
    coverUrl: 'https://placehold.co/1200x675.png',
    category: 'Regulación & Cumplimiento',
    tags: ['Checklist', 'Auditoría'],
    publishedAt: '2025-03-01T12:00:00.000Z',
    readMins: 8,
  },
];


async function getPosts(): Promise<BlogPost[]> {
  // Simula un fetch a una API o base de datos.
  return new Promise(resolve => setTimeout(() => resolve(mockPosts), 200));
}

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
     <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main>
        <BlogPanel posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
