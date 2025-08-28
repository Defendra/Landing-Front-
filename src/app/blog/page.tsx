import { BlogPanel } from '@/components/landing/blog';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { mockPosts } from './blog-data';

export const metadata = {
  title: 'Blog | Defendra',
  description:
    'Tendencias, regulación e innovación en seguridad privada. Supervigilancia, Decreto 356, operaciones y IA.',
};

export default async function BlogIndex() {
  const posts = mockPosts;
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
