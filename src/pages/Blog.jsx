import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogList from '../components/BlogList';

export default function Blog() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
      <header className="max-w-2xl mb-16">
        <h1 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#18181B] mb-4">
          Blog
        </h1>
        <p className="text-lg text-[#71717A] leading-relaxed">
          Engineering, graph intelligence, fraud detection, and the technology behind TraceGuard AI.
        </p>
      </header>

      <main>
        <BlogList posts={blogPosts} />
      </main>
    </div>
  );
}
