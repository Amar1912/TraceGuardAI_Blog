import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="border border-[#E4E4E7] rounded-lg p-6 bg-white hover:border-[#EC4899]/50 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[#EC4899] mb-3">
          {post.category}
        </div>

        <Link to={`/blog/${post.slug}`} className="block group">
          <h2 className="text-xl font-semibold text-[#18181B] group-hover:text-[#EC4899] transition-colors mb-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-[#71717A] leading-relaxed mb-6 line-clamp-3">
          {post.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E4E4E7]/60 flex items-center justify-between text-xs text-[#71717A]">
        <span>{post.date} · {post.readingTime}</span>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-medium text-[#18181B] hover:text-[#EC4899] transition-colors group"
        >
          Read article
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>
    </article>
  );
}
