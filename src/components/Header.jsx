import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Cpu } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors ${
              isActive('/') ? 'text-[#EC4899] font-semibold' : 'text-[#71717A] hover:text-[#18181B]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`transition-colors ${
              isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-[#EC4899] font-semibold' : 'text-[#71717A] hover:text-[#18181B]'
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#71717A] hover:text-[#18181B] transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-[#E4E4E7] shadow-lg py-4 px-6 flex flex-col gap-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] pb-2 border-b border-[#E4E4E7]">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"></span>
            AUTONOMOUS AGENT RUNTIME: ONLINE
          </div>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-base font-medium py-2 transition-colors ${
              isActive('/') ? 'text-[#EC4899]' : 'text-[#71717A]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-base font-medium py-2 transition-colors ${
              isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-[#EC4899]' : 'text-[#71717A]'
            }`}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
