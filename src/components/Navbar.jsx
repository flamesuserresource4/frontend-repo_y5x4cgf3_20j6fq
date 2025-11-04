import { BookOpen, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 text-white">
            <BookOpen size={20} />
          </span>
          <span className="text-slate-900">Sahabat Nabi • Interaktif</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#fitur" className="hover:text-slate-900">Fitur</a>
          <a href="#video" className="hover:text-slate-900">Video</a>
          <a href="#konten" className="hover:text-slate-900">Kuis</a>
          <a href="#laporan" className="hover:text-slate-900">Laporan</a>
        </div>
        <a
          href="#login"
          className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 active:bg-sky-800"
        >
          <User size={18} />
          <span>Login</span>
        </a>
      </nav>
    </header>
  );
}
