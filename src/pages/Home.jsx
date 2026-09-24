import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import { Terminal } from 'lucide-react';

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="max-w-3xl mb-24">
        {/* Robotic Telemetry Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#71717A] bg-[#F4F4F5] border border-[#E4E4E7] px-3 py-1.5 rounded-md mb-6 shadow-2xs">
          <Terminal className="w-3.5 h-3.5 text-[#EC4899]" />
          <span>AGENTS: 4 ACTIVE // GRAPH_NODES: 50M+ // LATENCY: 2.4ms</span>
        </div>

        <div className="inline-block text-xs font-semibold tracking-widest text-[#EC4899] bg-[#FCE7F3] px-3 py-1 rounded-full mb-4 uppercase">
          TRACEGUARD AI
        </div>

        <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#18181B] leading-[1.15] mb-6">
          Engineering Trust with Graph Intelligence
        </h1>

        <p className="text-lg md:text-xl text-[#71717A] leading-relaxed mb-8">
          Technical insights, architecture decisions, experiments, and engineering stories from the TraceGuard AI autonomous investigation team.
        </p>

        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-medium text-white bg-[#18181B] px-6 py-3 rounded-lg hover:bg-[#EC4899] transition-colors duration-200 text-base"
          >
            Read the Blog <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="border-t border-[#E4E4E7] pt-16">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-ping"></span>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#71717A]">
              Latest Articles
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-medium text-[#18181B] hover:text-[#EC4899] transition-colors"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
