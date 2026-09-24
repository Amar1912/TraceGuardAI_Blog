import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts';
import TableOfContents from '../components/TableOfContents';
import { ArrowLeft, Clock, Calendar, User, Shield } from 'lucide-react';

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
        'technology-choices',
        'challenges',
        'results-observations',
        'future-improvements',
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
          <div className="space-y-10 text-[#18181B] text-[17px] md:text-[18px] leading-[1.75]">
            <section id="introduction">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Introduction</h2>
              <p className="text-[#18181B]/90">{content.introduction}</p>
            </section>

            <section id="problem">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Problem</h2>
              <p className="text-[#18181B]/90">{content.problem}</p>
            </section>

            <section id="architecture">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Architecture</h2>
              <p className="text-[#18181B]/90 mb-6">{content.architecture}</p>

              {/* Technical Code Block Example */}
              <div className="bg-[#18181B] text-[#E4E4E7] rounded-lg p-5 font-mono text-xs md:text-sm overflow-x-auto shadow-sm my-6">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#27272A] text-[#71717A]">
                  <span>gsql/fraud_traversal.gsql</span>
                  <span>TigerGraph</span>
                </div>
                <pre className="text-[#F472B6]">
                  {`CREATE QUERY DetectFraudRing(VERTEX<Account> seed, INT maxHops) SYNTAX V1 {
  /* Autonomous multi-hop traversal query */
  Start = {seed};
  ResultSet = SELECT tgt FROM Start:s -(TRANSACTION:e)- Account:tgt
                WHERE e.amount > 5000
                ACCUM @@visitedEdges += e;
  PRINT ResultSet;
}`}
                </pre>
              </div>
            </section>

            <section id="implementation">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Implementation</h2>
              <p className="text-[#18181B]/90">{content.implementation}</p>
            </section>

            <section id="technology-choices">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Technology choices</h2>
              <p className="text-[#18181B]/90">{content.technologyChoices}</p>
            </section>

            <section id="challenges">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Challenges</h2>
              <p className="text-[#18181B]/90">{content.challenges}</p>
            </section>

            <section id="results-observations">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Results / Observations</h2>
              <p className="text-[#18181B]/90">{content.resultsObservations}</p>
            </section>

            <section id="future-improvements">
              <h2 className="text-2xl font-bold text-[#18181B] mb-4 tracking-tight">Future Improvements</h2>
              <p className="text-[#18181B]/90">{content.futureImprovements}</p>
            </section>

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
