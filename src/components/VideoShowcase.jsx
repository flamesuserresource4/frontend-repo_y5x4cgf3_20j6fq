import { Maximize2, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function VideoShowcase() {
  const containerRef = useRef(null);

  const requestFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    // @ts-ignore vendor prefixes
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    // @ts-ignore vendor prefixes
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  return (
    <section id="video" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pemutar Video Responsif
            </h2>
            <p className="text-slate-600">
              Akses animasi kisah sahabat Nabi dalam hitungan detik. Pemutar mendukung
              mode layar penuh dan kontrol lengkap.
            </p>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Video loading ≤ 3 detik</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Tampilan responsif</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Kontrol fullscreen</li>
            </ul>
          </div>

          <div ref={containerRef} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow">
            <video
              className="aspect-video w-full bg-black"
              controls
              preload="metadata"
              poster="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              Browser Anda tidak mendukung pemutar video.
            </video>
            <button
              onClick={requestFullscreen}
              className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-sm text-slate-800 shadow hover:bg-white"
              aria-label="Fullscreen"
            >
              <Maximize2 size={16} />
              Layar Penuh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
