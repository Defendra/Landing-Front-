import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { mockPosts } from '../blog-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Post = (typeof mockPosts)[0];

async function getPost(slug: string): Promise<(Post & { html: string }) | null> {
  const post = mockPosts.find(p => p.slug === slug);
  if (!post) return null;

  // Simula contenido HTML
  const htmlContent = `
    <p>La Superintendencia de Vigilancia y Seguridad Privada (Supervigilancia) es la entidad gubernamental en Colombia encargada de ejercer el control, inspección y vigilancia sobre la industria y los servicios de seguridad privada. Su rol es fundamental para garantizar que las empresas del sector operen bajo los más altos estándares de legalidad, calidad y confianza.</p>
    <p>Entender su funcionamiento no es solo una obligación, sino una ventaja competitiva. Una gestión alineada con la Supervigilancia se traduce en operaciones más seguras, clientes más satisfechos y un negocio sostenible a largo plazo.</p>
    <h2 class="text-2xl font-headline font-bold mt-8 mb-4">¿Cuáles son sus funciones principales?</h2>
    <ul>
      <li><strong>Expedir y renovar licencias:</strong> Autoriza el funcionamiento de las empresas en sus 10 modalidades.</li>
      <li><strong>Inspección y auditoría:</strong> Realiza visitas y auditorías para verificar el cumplimiento del Decreto 356 de 1994 y otras normativas.</li>
      <li><strong>Control de personal y equipamiento:</strong> Supervisa la idoneidad del personal (cursos, exámenes) y el correcto manejo de armas y equipos.</li>
      <li><strong>Imponer sanciones:</strong> Puede imponer multas, suspensiones o incluso cancelar licencias por incumplimiento.</li>
    </ul>
    <blockquote class="border-l-4 border-primary pl-4 italic my-6">
      "La plataforma de Defendra está diseñada para alinear tus procesos con los requerimientos de la Supervigilancia, convirtiendo el cumplimiento en una tarea simple y automatizada."
    </blockquote>
    <h2 class="text-2xl font-headline font-bold mt-8 mb-4">¿Cómo te ayuda Defendra?</h2>
    <p>Defendra digitaliza y centraliza toda la documentación y procesos que la Supervigilancia audita:</p>
    <ul>
        <li><strong>Gestión documental:</strong> Vencimientos de cursos, licencias de armas y más, con alertas automáticas.</li>
        <li><strong>Trazabilidad operativa:</strong> Minutas digitales con evidencia (fotos, GPS) que sirven como prueba irrefutable ante cualquier investigación.</li>
        <li><strong>Reportes automáticos:</strong> Genera informes de cumplimiento listos para ser presentados a la entidad.</li>
    </ul>
    `;

  return { ...post, html: htmlContent };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${post.title} | Blog de Defendra`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-text-high">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="mx-auto max-w-3xl px-4">
          <header className="mb-8 text-center">
            <Link href="/blog" className='text-sm text-primary-500 hover:underline'>← Volver al blog</Link>
            <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight text-text-high sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-text-mid">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-text-mid">
                <span>{new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readMins} min de lectura</span>
                 <span>•</span>
                <span className='text-primary-500 font-medium'>{post.category}</span>
            </div>
          </header>
          <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden shadow-card">
            <Image src={post.coverUrl} alt={post.title} fill className="object-cover" priority data-ai-hint="security technology" />
          </div>
          <section
            className={cn(
                "prose prose-lg prose-invert max-w-none",
                "prose-headings:font-headline prose-headings:font-bold prose-headings:text-text-high",
                "prose-p:text-text-mid",
                "prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline",
                "prose-strong:text-text-high",
                "prose-ul:text-text-mid prose-li:marker:text-primary-500",
                "prose-blockquote:border-primary-500 prose-blockquote:text-text-mid prose-blockquote:font-normal"
                )}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
           <footer className='mt-12 pt-8 border-t border-border-subtle'>
                <h3 className='font-headline text-lg font-bold'>Etiquetas</h3>
                <div className='flex flex-wrap gap-2 mt-4'>
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}
