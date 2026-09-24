import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Cpu, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E4E4E7] bg-white py-12 mt-20">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 font-semibold text-[#18181B] mb-1">
            <Cpu className="w-4 h-4 text-[#EC4899]" />
            <span>TraceGuard AI</span>
          </div>
          <p className="text-sm text-[#71717A]">
            Autonomous Graph-Powered Fraud Investigation
          </p>
          <div className="flex items-center gap-2 mt-3 font-mono text-[11px] text-[#71717A] bg-[#F4F4F5] px-2.5 py-1 rounded w-fit border border-[#E4E4E7]">
            <Activity className="w-3 h-3 text-[#EC4899]" />
            <span>SYS_STATUS: ALL GRAPH WORKERS ONLINE</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/blog" className="text-[#71717A] hover:text-[#18181B] transition-colors">
            Blog
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#18181B] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pt-8 mt-8 border-t border-[#E4E4E7]/60 text-xs text-[#71717A] flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} TraceGuard AI. All rights reserved.</span>
        <span className="font-mono text-[11px] text-[#71717A]">ENGINE: TigerGraph + GraphRAG + Agent Runtime v2.4</span>
      </div>
    </footer>
  );
}
