import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-[#E4E4E7]">
      <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-semibold text-[#18181B] tracking-tight hover:opacity-80 transition-opacity"
        >
          <div className="w-7 h-7 rounded bg-[#FCE7F3] flex items-center justify-center text-[#EC4899]">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-lg">TraceGuard AI</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono bg-[#F4F4F5] text-[#71717A] px-1.5 py-0.5 rounded border border-[#E4E4E7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse"></span>
            SYS:ACTIVE
          </span>
        </Link>

        {/* Status / GitHub link */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Amar1912/TraceGuardAI"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#71717A] hover:text-[#18181B] bg-[#F4F4F5] px-3 py-1.5 rounded-md border border-[#E4E4E7] transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
