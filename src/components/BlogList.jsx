import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ posts }) {
  return (
    <div className="divide-y divide-[#E4E4E7]">
      {posts.map((post) => (
        <article key={post.slug} className="py-8 first:pt-0 last:pb-0">
          <div className="flex items-center gap-3 text-xs font-semibold text-[#EC4899] uppercase tracking-wider mb-2">
            <span>{post.category}</span>
          </div>

          <Link to={`/blog/${post.slug}`} className="block group">
            <h2 className="text-2xl font-semibold text-[#18181B] group-hover:text-[#EC4899] transition-colors mb-3">
              {post.title}
            </h2>
          </Link>

          <p className="text-[#71717A] text-base leading-relaxed mb-4 max-w-3xl">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#71717A]">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#18181B]">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 font-medium text-[#18181B] hover:text-[#EC4899] transition-colors group"
            >
              Read article
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
