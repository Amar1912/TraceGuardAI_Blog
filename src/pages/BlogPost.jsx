import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts';
import TableOfContents from '../components/TableOfContents';
import { ArrowLeft, Clock, Calendar, User, Shield, Terminal } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — TraceGuard AI`;
    } else {
      document.title = `Article Not Found — TraceGuard AI`;
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        'introduction',
        'problem',
        'architecture',
        'implementation',
        'tigergraph',
        'agentic',
        'learnings',
        'future',
        'benchmarks',
        'conclusion',
      ];

      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-[760px] mx-auto px-6 py-28 text-center">
        <div className="w-12 h-12 bg-[#FCE7F3] rounded-full flex items-center justify-center mx-auto mb-6 text-[#EC4899]">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-[#18181B] mb-3">Article not found</h1>
        <p className="text-[#71717A] mb-8">
          The article you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-medium text-white bg-[#18181B] px-6 py-3 rounded-lg hover:bg-[#EC4899] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const { content } = post;

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#71717A] hover:text-[#18181B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-16 items-start">
        {/* Main Article Content */}
        <article className="max-w-[760px]">
          {/* Article Header */}
          <header className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EC4899] mb-3">
              {post.category}
            </div>

            <h1 className="text-[34px] md:text-[48px] font-bold tracking-tight text-[#18181B] leading-[1.15] mb-4">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-[#71717A] leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#71717A] pt-4 border-t border-[#E4E4E7]">
              <span className="flex items-center gap-1.5 font-medium text-[#18181B]">
                <User className="w-4 h-4 text-[#71717A]" />
                {post.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </header>

          <hr className="border-[#E4E4E7] mb-12" />

          {/* Article Body Sections */}
          <div className="space-y-12 text-[#18181B] text-[17px] md:text-[18px] leading-[1.75]">

            {/* What is TraceGuard AI */}
            <section id="introduction">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">What Is TraceGuard AI</h2>
              <p className="text-[#18181B]/90 mb-6">{content.introduction}</p>

              {/* ASCII Flow Diagram */}
              <div className="bg-[#18181B] text-[#E4E4E7] rounded-lg p-4 md:p-6 font-mono text-xs overflow-x-auto shadow-sm my-6 border border-[#27272A]">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#27272A] text-[#71717A]">
                  <Terminal className="w-4 h-4 text-[#EC4899]" />
                  <span>TraceGuard AI Autonomous Pipeline Topology</span>
                </div>
                <pre className="text-[#F472B6] leading-relaxed">
                  {content.asciiFlow}
                </pre>
              </div>
            </section>

            {/* Purpose & Problem */}
            <section id="problem">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Purpose of TraceGuard AI & The Problem</h2>
              <p className="text-[#18181B]/90 mb-4">{content.problemText}</p>
              <div className="whitespace-pre-line text-[#18181B]/90 bg-[#F4F4F5]/60 p-6 rounded-lg border border-[#E4E4E7]">
                {content.purposeText}
              </div>
            </section>

            {/* System Architecture */}
            <section id="architecture">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">System Architecture</h2>
              <div className="bg-[#18181B] text-[#E4E4E7] rounded-lg p-4 md:p-6 font-mono text-xs overflow-x-auto shadow-sm my-6 border border-[#27272A]">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#27272A] text-[#71717A]">
                  <Terminal className="w-4 h-4 text-[#EC4899]" />
                  <span>Microservice Architecture Schematic</span>
                </div>
                <pre className="text-[#38BDF8] leading-relaxed">
                  {content.architectureText}
                </pre>
              </div>
              <div className="whitespace-pre-line text-[#18181B]/90 mt-6">
                {content.architectureBullets}
              </div>
            </section>

            {/* What We Built */}
            <section id="implementation">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">What We Built</h2>
              <div className="whitespace-pre-line text-[#18181B]/90">
                {content.whatWeBuilt}
              </div>
            </section>

            {/* How TigerGraph Is Used */}
            <section id="tigergraph">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">How TigerGraph Is Used</h2>
              <p className="text-[#18181B]/90 mb-6">{content.tigergraphUsage}</p>

              {/* GSQL Code 1 */}
              <div className="bg-[#18181B] text-[#E4E4E7] rounded-lg p-5 font-mono text-xs md:text-sm overflow-x-auto shadow-sm my-6">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#27272A] text-[#71717A]">
                  <span>gsql/findSharedDevices.gsql</span>
                  <span>TigerGraph Cloud</span>
                </div>
                <pre className="text-[#F472B6]">
                  {content.gsqlCode1}
                </pre>
              </div>

              <p className="text-[#18181B]/90 my-4">{content.gsqlCode2Desc}</p>

              {/* GSQL Code 2 */}
              <div className="bg-[#18181B] text-[#E4E4E7] rounded-lg p-5 font-mono text-xs md:text-sm overflow-x-auto shadow-sm my-6">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#27272A] text-[#71717A]">
                  <span>gsql/getCaseNetwork.gsql</span>
                  <span>TigerGraph Cloud</span>
                </div>
                <pre className="text-[#F472B6]">
                  {content.gsqlCode2}
                </pre>
              </div>
            </section>

            {/* Agentic Capabilities */}
            <section id="agentic">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">The Agentic Capabilities Implemented</h2>
              <div className="whitespace-pre-line text-[#18181B]/90">
                {content.agenticCapabilities}
              </div>
            </section>

            {/* What We Learned */}
            <section id="learnings">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">What We Learned</h2>
              <div className="whitespace-pre-line text-[#18181B]/90">
                {content.whatWeLearned}
              </div>
            </section>

            {/* Future Improvements */}
            <section id="future">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">What Will Be Improved Over Time</h2>
              <div className="whitespace-pre-line text-[#18181B]/90">
                {content.futureImprovements}
              </div>
            </section>

            {/* Benchmarks & Demonstration */}
            <section id="benchmarks">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Benchmarks & Demonstration</h2>
              <div className="bg-[#18181B] text-[#38BDF8] rounded-lg p-5 font-mono text-xs md:text-sm overflow-x-auto shadow-sm my-6 border border-[#27272A] whitespace-pre-line leading-relaxed">
                {content.benchmarksText}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Conclusion</h2>
              <p className="text-[#18181B]/90">{content.conclusion}</p>
            </section>

          </div>
        </article>

        {/* Desktop Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block sticky top-24 pt-2">
          <TableOfContents activeSection={activeSection} />
        </aside>
      </div>
    </div>
  );
}
