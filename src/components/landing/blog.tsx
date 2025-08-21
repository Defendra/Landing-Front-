
'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type Category = 'Regulación & Cumplimiento' | 'Operaciones & Eficiencia' | 'IA & Tecnología';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverUrl: string;
  category: Category;
  tags: string[];
  publishedAt: string; // ISO
  readMins: number;
  featured?: boolean;
};

const brand = {
  bg: 'bg-[#0D0C2F]',
  card: 'bg-card',
  text: 'text-foreground',
  subtext: 'text-muted-foreground',
  accent: 'text-primary',
  chip: 'bg-muted text-muted-foreground',
  chipActive: 'bg-primary text-primary-foreground',
  border: 'border-border',
};

export function BlogPanel({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<Category | 'Todos'>('Todos');

  const categories: (Category | 'Todos')[] = [
    'Todos',
    'Regulación & Cumplimiento',
    'Operaciones & Eficiencia',
    'IA & Tecnología',
  ];

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
        <section id="blog" className={cn(brand.bg, 'py-16 sm:py-24')} aria-labelledby="blog-heading">
            <div className="mx-auto max-w-7xl px-4 text-center">
                 <h2 id="blog-heading" className={cn('text-3xl sm:text-4xl font-light', brand.text)}>
                    Próximamente: Blog de Defendra
                </h2>
                <p className={cn('mt-4 max-w-2xl mx-auto', brand.subtext)}>
                    Estamos preparando artículos sobre tendencias, regulación e innovación en seguridad privada.
                </p>
            </div>
        </section>
    )
  }

  return (
    <section
      id="blog"
      className={cn(brand.bg, 'py-16 sm:py-24 border-t')}
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className='md:max-w-xl'>
            <h2 id="blog-heading" className={cn('font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl', brand.text)}>
              Blog: tendencias, regulación e innovación
            </h2>
            <p className={cn('mt-4 text-lg', brand.subtext)}>
              Artículos para entender la Supervigilancia, el Decreto 356, la digitalización de
              operaciones y el uso de IA en seguridad privada.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link
                href="/blog"
                className="shrink-0"
            >
                Ver todo el blog
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
                active === cat ? brand.chipActive : `${brand.chip} ${brand.border} hover:bg-muted/80`
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
              brand.border,
              'grid-cols-1 lg:grid-cols-2 min-h-[280px] bg-card hover:border-primary/50 transition-all duration-300'
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className={cn('p-6 sm:p-8 flex flex-col justify-end lg:justify-center z-10')}>
              <span className="inline-flex w-fit rounded-full bg-primary/20 px-2 py-1 text-xs text-primary-foreground">
                Destacado • {new Date(featured.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h3 className={cn('mt-3 text-2xl sm:text-3xl font-headline font-bold leading-tight group-hover:text-primary transition-colors', brand.text)}>
                {featured.title}
              </h3>
              <p className={cn('mt-2 line-clamp-3', brand.subtext)}>{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-4">
                <span className={cn('text-sm font-semibold', brand.accent)}>{featured.category}</span>
                <span className={cn('text-sm', brand.subtext)}>{featured.readMins} min de lectura</span>
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
                <p className={brand.text}>No hay más artículos en esta categoría.</p>
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
        <article className={cn('overflow-hidden rounded-2xl border h-full flex flex-col', brand.border, brand.card, 'hover:border-primary/50 transition-all duration-300')}>
            <div className="relative aspect-[16/9] overflow-hidden">
            <Image
                fill
                src={post.coverUrl}
                alt={post.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            </div>
            <div className="p-5 flex flex-col flex-grow">
            <div className="mb-2 flex items-center gap-3">
                <span className={cn("text-xs font-medium", brand.accent)}>
                {post.category}
                </span>
            </div>
            <h3 className={cn('text-lg font-headline font-bold flex-grow', brand.text)}>{post.title}</h3>
            <p className={cn('mt-2 line-clamp-2 text-sm', brand.subtext)}>{post.excerpt}</p>
             <div className={cn('text-xs mt-4', brand.subtext)}>
                {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readMins} min de lectura
            </div>
            </div>
        </article>
    </Link>
  );
}
