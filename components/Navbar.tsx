"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="container-main h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-white text-lg">
          Ashutosh
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#work" className="link-hover transition">
            Work
          </a>
          <a href="#about" className="link-hover transition">
            About
          </a>
          <a href="#film" className="link-hover transition">
            Film
          </a>
          <a href="#contact" className="link-hover transition">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-sm border border-white/10 rounded-full px-4 py-2"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/95">
          <div className="container-main py-4 flex flex-col gap-4 text-sm text-white/80">
            <a href="#work" onClick={() => setOpen(false)}>
              Work
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#film" onClick={() => setOpen(false)}>
              Film
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}