import { Shield, Library, ClipboardList, BarChart3, Users } from "lucide-react";

function FeatureCard({ icon: Icon, title, desc, badge }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white">
          <Icon size={20} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {badge && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-2 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section id="fitur" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Fitur Utama
          </h2>
          <p className="mt-3 text-slate-600">
            Dirancang untuk guru dan admin agar pembelajaran akhlak lebih bermakna,
            menyenangkan, dan terukur.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-b from-emerald-50 to-emerald-50/40 p-1">
            <div className="rounded-xl bg-white p-6">
              <div className="flex items-center gap-2">
                <Users className="text-emerald-600" size={18} />
                <h3 className="text-lg font-semibold text-emerald-700">Untuk Guru</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FeatureCard
                  icon={Shield}
                  title="Login aman & sesi persisten"
                  desc="Masuk sekali, tetap terhubung dengan aman selama mengajar."
                  badge="Auth"
                />
                <FeatureCard
                  icon={Library}
                  title="Library video/animasi"
                  desc="Kisah sahabat Nabi dalam format menarik, siap diputar di kelas."
                  badge="Video"
                />
                <FeatureCard
                  icon={ClipboardList}
                  title="Bank kuis siap pakai"
                  desc="Pertanyaan sederhana dengan feedback otomatis untuk mengecek pemahaman."
                  badge="Kuis"
                />
                <FeatureCard
                  icon={BarChart3}
                  title="Monitoring hasil kuis"
                  desc="Lihat nama, skor, dan waktu pengerjaan secara real-time."
                  badge="Nilai"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-sky-50 to-sky-50/40 p-1">
            <div className="rounded-xl bg-white p-6">
              <div className="flex items-center gap-2">
                <Shield className="text-sky-600" size={18} />
                <h3 className="text-lg font-semibold text-sky-700">Untuk Admin</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FeatureCard
                  icon={Library}
                  title="Kelola konten video & kuis"
                  desc="Tambah, edit, dan hapus materi sesuai tema/topik."
                  badge="CMS"
                />
                <FeatureCard
                  icon={Users}
                  title="Pantau aktivitas guru"
                  desc="Lihat login dan penggunaan fitur untuk evaluasi."
                  badge="Audit"
                />
                <FeatureCard
                  icon={BarChart3}
                  title="Filter laporan"
                  desc="Saring berdasarkan tanggal dan nama guru untuk laporan cepat."
                  badge="Laporan"
                />
                <FeatureCard
                  icon={Shield}
                  title="Performa terukur"
                  desc="Video loading ≤ 3 detik dan tampilan responsif."
                  badge="KPI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
