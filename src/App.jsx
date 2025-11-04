import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import VideoShowcase from "./components/VideoShowcase";

function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <VideoShowcase />

        <section id="konten" className="py-16 sm:py-20 bg-gradient-to-b from-white to-sky-50/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kuis Sederhana dengan Feedback</h2>
                <p className="mt-3 text-slate-600">Contoh kuis pilihan ganda untuk evaluasi cepat pemahaman siswa. Setelah memilih jawaban, siswa mendapat feedback otomatis.</p>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-medium">Siapa khalifah pertama setelah wafatnya Nabi Muhammad SAW?</p>
                  <div className="mt-4 grid gap-3">
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-left hover:bg-slate-50">Umar bin Khattab</button>
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-left hover:bg-slate-50">Ali bin Abi Thalib</button>
                    <button className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-left">Abu Bakar Ash-Shiddiq (Benar)</button>
                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-left hover:bg-slate-50">Utsman bin Affan</button>
                  </div>
                  <p className="mt-3 text-sm text-emerald-700">Feedback: Jawaban benar! Abu Bakar adalah khalifah pertama.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Kategori & Topik</h3>
                <p className="mt-2 text-slate-600">Materi dikelompokkan berdasarkan tema seperti Kejujuran, Amanah, dan Tanggung Jawab agar mudah dicari.</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <span className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800 ring-1 ring-emerald-200">Kejujuran</span>
                  <span className="rounded-lg bg-sky-50 px-3 py-2 text-sky-800 ring-1 ring-sky-200">Amanah</span>
                  <span className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800 ring-1 ring-emerald-200">Berani</span>
                  <span className="rounded-lg bg-sky-50 px-3 py-2 text-sky-800 ring-1 ring-sky-200">Tanggung Jawab</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="laporan" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Laporan Hasil Belajar</h2>
              <p className="mt-3 text-slate-600">Pantau perkembangan siswa: nama, skor, dan waktu pengerjaan. Laporan dapat difilter berdasarkan tanggal atau nama guru.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800 ring-1 ring-emerald-200">
                  <p className="text-sm">Rata-rata Skor</p>
                  <p className="mt-1 text-2xl font-semibold">88</p>
                </div>
                <div className="rounded-xl bg-sky-50 p-4 text-sky-800 ring-1 ring-sky-200">
                  <p className="text-sm">Jumlah Kuis Selesai</p>
                  <p className="mt-1 text-2xl font-semibold">145</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800 ring-1 ring-emerald-200">
                  <p className="text-sm">Respon Tepat Waktu</p>
                  <p className="mt-1 text-2xl font-semibold">97%</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} SD Mekar Jaya 3 • Media Pembelajaran Interaktif</p>
          <div className="text-sm text-slate-500">Warna cerah • Navigasi sederhana • Ramah anak</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
