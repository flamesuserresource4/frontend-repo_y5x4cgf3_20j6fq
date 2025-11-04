import { Rocket, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-emerald-50 via-sky-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
              <Rocket size={16} />
              <span>Belajar Akhlak Jadi Seru!</span>
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Media Interaktif Kisah Sahabat Nabi
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Dibuat khusus untuk SD Mekar Jaya 3: video animasi, kuis siap pakai, dan
              laporan belajar yang memudahkan guru.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#video"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
              >
                <Play size={18} />
                Lihat Video
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Jelajahi Fitur
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
                alt="Ilustrasi belajar menyenangkan"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl" />
            <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sky-300/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
