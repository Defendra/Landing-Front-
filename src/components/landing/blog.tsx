'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverUrl: string;
  category: string;
  tags: string[];
  publishedAt: string; // ISO
  readMins: number;
  featured?: boolean;
};

export function BlogPanel({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>('Todos');

  const categories = useMemo(() => {
    const allCategories = posts.map(p => p.category);
    return ['Todos', ...Array.from(new Set(allCategories))];
  }, [posts]);

  const featured = useMemo(
    () => posts.find(p => p.featured) ?? posts[0],
    [posts]
  );

  const filtered = useMemo(() => {
    const base = posts.filter(p => p.id !== featured?.id);
    if (active === 'Todos') return base.slice(0, 6);
    return base.filter(p => p.category === active).slice(0, 6);
  }, [posts, featured, active]);

  if (!posts || posts.length === 0) {
    return (
        <section id="blog" className="py-16 sm:py-24" aria-labelledby="blog-heading">
            <div className="mx-auto max-w-7xl px-4 text-center">
                 <h2 id="blog-heading" className="text-3xl sm:text-4xl font-light text-foreground">
                    Próximamente: Recursos y Blog de Defendra
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Estamos preparando artículos sobre tendencias, regulación e innovación en seguridad privada.
                </p>
            </div>
        </section>
    )
  }

  return (
    <section
      id="blog"
      className="py-16 sm:py-24 border-t border-border"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className='md:max-w-xl'>
            <h2 id="blog-heading" className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Recursos: tendencias, regulación e innovación
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Artículos para entender la Supervigilancia, el Decreto 356, la digitalización de
              operaciones y el uso de IA en seguridad privada.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-brand-accent hover:bg-brand-accent/90">
            <Link
                href="/blog"
                className="shrink-0"
            >
                Ver todos los recursos
            </Link>
          </Button>
        </div>

        {/* Chips de categoría */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm border transition-colors',
                active === cat ? "bg-brand-accent text-white border-transparent" : "bg-muted text-muted-foreground border-border hover:bg-muted/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destacado */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className={cn(
              'group relative mb-10 grid overflow-hidden rounded-2xl border',
              'border-border',
              'grid-cols-1 lg:grid-cols-2 min-h-[280px] bg-card hover:border-brand-accent/50 transition-all duration-300'
            )}
          >
            <div className="relative aspect-[16/9] lg:aspect-auto">
              <Image
                fill
                src={featured.coverUrl}
                alt={featured.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
                data-ai-hint="tech abstract"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-end lg:justify-center z-10">
              <span className="inline-flex w-fit rounded-full bg-brand-accent/20 px-2 py-1 text-xs text-brand-accent font-medium">
                Destacado • {new Date(featured.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-headline font-bold leading-tight group-hover:text-brand-accent transition-colors text-foreground">
                {featured.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm font-semibold text-brand-accent">{featured.category}</span>
                <span className="text-sm text-muted-foreground">{featured.readMins} min de lectura</span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid de recientes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <PostCard key={p.id} post={p} />
          ))}
           {filtered.length === 0 && (
             <div className="sm:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-foreground">No hay más artículos en esta categoría.</p>
             </div>
           )}
        </div>
      </div>
    </section>
  );
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
        <article className="overflow-hidden rounded-2xl border h-full flex flex-col border-border bg-card hover:border-brand-accent/50 transition-all duration-300">
            <div className="relative aspect-[16/9] overflow-hidden">
            <Image
                fill
                src={post.coverUrl}
                alt={post.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint="security technology"
            />
            </div>
            <div className="p-5 flex flex-col flex-grow">
            <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-medium text-brand-accent">
                {post.category}
                </span>
            </div>
            <h3 className="text-lg font-headline font-bold flex-grow text-foreground">{post.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
             <div className="text-xs mt-4 text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readMins} min de lectura
            </div>
            </div>
        </article>
    </Link>
  );
}
