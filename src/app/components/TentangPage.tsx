import { BookOpen, Users, Clock, Award } from 'lucide-react';
import { AppHeader, AppFooter, Page } from './AppShell';

type Props = { onNavigate: (page: Page) => void };

const stats = [
  { icon: BookOpen, number: '150.000+', label: 'Koleksi Digital' },
  { icon: Users,    number: '45.000+',  label: 'Anggota Aktif' },
  { icon: Clock,    number: '24/7',     label: 'Akses Layanan' },
  { icon: Award,    number: '1963',     label: 'Tahun Berdiri' },
];

const team = [
  { name: 'Prof. Dr. Iwan Permadi, SH., MHum.', role: 'Kepala Perpustakaan' },
  { name: 'Pitoyo Widhi Atmoko, S Si, M Si',    role: 'Sekretaris UPT Perpustakaan' },
  { name: 'Suprihatin, S IP, MA',               role: 'Koordinator Bidang Layanan Pengguna' },
  { name: 'Emy Sukartini, SH',                  role: 'Koordinator Bidang Layanan Teknis' },
];

const values = [
  {
    title: 'Aksesibilitas',
    desc: 'Kami berkomitmen menyediakan akses mudah ke seluruh koleksi bagi seluruh civitas akademika UB tanpa terkecuali.',
  },
  {
    title: 'Inovasi',
    desc: 'Terus berinovasi dalam layanan digital untuk memenuhi kebutuhan riset dan pendidikan yang terus berkembang.',
  },
  {
    title: 'Integritas',
    desc: 'Menjaga standar tinggi dalam pengelolaan koleksi, hak cipta, dan privasi pengguna.',
  },
];

export function TentangPage({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader activePage="tentang" onNavigate={onNavigate} />

      {/* Hero */}
      <div style={{ backgroundColor: '#092c4c' }} className="py-12 md:py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Beranda</button>
            <span>›</span>
            <span className="text-white">Tentang</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight">
            Tentang Perpustakaan Digital UB
          </h1>
          <p className="text-base sm:text-[18px] text-white/70 leading-7 mt-2 max-w-2xl">
            Pusat sumber belajar dan penelitian Universitas Brawijaya yang terus berkembang sejak 1963.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:py-14 space-y-12">

        {/* Profil */}
        <section
          className="bg-white rounded-[10px] p-6 sm:p-10"
          style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#092c4c] mb-4">Profil Kami</h2>
          <div className="space-y-4 text-sm sm:text-base text-[#4f4f4f] leading-7">
            <p>
              Perpustakaan Universitas Brawijaya (UB) merupakan Unit Pelaksana Teknis (UPT) yang bertugas
              mengelola dan menyediakan sumber informasi ilmiah bagi seluruh civitas akademika Universitas
              Brawijaya. Berdiri sejak tahun 1963, perpustakaan UB terus bertransformasi mengikuti
              perkembangan teknologi informasi dan kebutuhan akademik yang dinamis.
            </p>
            <p>
              Melalui platform Perpustakaan Digital ini, kami menghadirkan akses 24 jam terhadap lebih dari
              150.000 koleksi yang mencakup buku teks, jurnal ilmiah, skripsi, tesis, disertasi, laporan
              penelitian, serta sumber daya elektronik lainnya. Seluruh koleksi dapat diakses oleh mahasiswa,
              dosen, tenaga kependidikan, alumni, dan masyarakat umum sesuai dengan hak akses yang dimiliki.
            </p>
            <p>
              Kami berkomitmen untuk mendukung kegiatan tridarma perguruan tinggi—pendidikan, penelitian, dan
              pengabdian kepada masyarakat—melalui layanan yang inklusif, inovatif, dan bermutu tinggi.
            </p>
          </div>
        </section>

        {/* Statistik */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#092c4c] mb-6">Perpustakaan dalam Angka</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, number, label }) => (
              <div
                key={label}
                className="bg-white rounded-[10px] p-6 text-center"
                style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.08)' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{ backgroundColor: 'rgba(9,44,76,0.08)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#092c4c' }} />
                </div>
                <p className="text-2xl font-bold text-[#092c4c]">{number}</p>
                <p className="text-sm text-[#4f4f4f] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visi & Misi */}
        <section
          className="bg-white rounded-[10px] p-6 sm:p-10"
          style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#092c4c] mb-4">Visi</h2>
              <p className="text-sm sm:text-base text-[#4f4f4f] leading-7">
                Sebagai pusat desiminasi sumber ilmu pengetahuan untuk mendukung tercapainya UB Sebagai World Class Entrepreneurial University.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#092c4c] mb-4">Misi</h2>
              <ul className="space-y-3 text-sm sm:text-base text-[#4f4f4f] leading-7">
                {[
                  'Mengembangkan dan mengimplementasikan sistem perpustakaan berdasar manajemen mutu (quality management).',
                  'Meningkatkan kemampuan penyediaan berbagai sumber informasi bermutu dalam media cetak dan elektronik, bersifat lokal, nasional, maupun internasional.',
                  'Meningkatkan dan memaksimalkan pemanfaatan Information and Communications Technology (ICT) sebagai penunjang penyelenggaraan sistem perpustakaan.',
                  'Menjadikan perpustakaan yang mampu memberi layanan excellence dan memuaskan stakeholders.',
                ].map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#f2994a' }}
                    >
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Nilai */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#092c4c] mb-6">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-[10px] p-6"
                style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.08)', borderTop: '4px solid #092c4c' }}
              >
                <h3 className="text-base font-bold text-[#092c4c] mb-2">{title}</h3>
                <p className="text-sm text-[#4f4f4f] leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tim */}
        <section
          className="bg-white rounded-[10px] p-6 sm:p-10"
          style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#092c4c] mb-6">Tim Kepemimpinan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map(({ name, role }) => (
              <div
                key={name}
                className="flex items-center gap-4 p-4 rounded-lg"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 flex items-center justify-center"
                  style={{ borderColor: '#092c4c', backgroundColor: '#dbe4ee' }}
                >
                  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
                    <circle cx="28" cy="28" r="28" fill="#dbe4ee" />
                    <ellipse cx="28" cy="22" rx="10" ry="10" fill="#92a8c0" />
                    <ellipse cx="28" cy="48" rx="18" ry="14" fill="#92a8c0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#092c4c] leading-snug">{name}</p>
                  <p className="text-xs text-[#4f4f4f] mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <AppFooter onNavigate={onNavigate} />
    </div>
  );
}
