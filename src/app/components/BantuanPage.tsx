import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { AppHeader, AppFooter, Page } from './AppShell';

type Props = { onNavigate: (page: Page) => void };

const categories = ['Semua', 'Keanggotaan', 'Pencarian', 'Peminjaman', 'Akun & Login', 'Teknis'];

const faqs = [
  {
    category: 'Keanggotaan',
    q: 'Siapa saja yang bisa menjadi anggota Perpustakaan Digital UB?',
    a: 'Seluruh civitas akademika Universitas Brawijaya—mahasiswa, dosen, dan tenaga kependidikan—secara otomatis terdaftar sebagai anggota. Alumni dan masyarakat umum juga dapat mendaftar dengan mengisi formulir registrasi dan melengkapi persyaratan yang berlaku.',
  },
  {
    category: 'Keanggotaan',
    q: 'Bagaimana cara mendaftar sebagai anggota?',
    a: 'Klik tombol "Register" di bagian atas halaman, isi formulir pendaftaran dengan data diri yang valid, lalu verifikasi email Anda. Untuk mahasiswa dan dosen UB, gunakan email institusi (@ub.ac.id) agar akses koleksi full-text dapat diaktifkan secara otomatis.',
  },
  {
    category: 'Akun & Login',
    q: 'Saya lupa kata sandi, bagaimana cara meresetnya?',
    a: 'Di halaman Login, klik tautan "Lupa kata sandi?" di bawah kolom kata sandi. Masukkan email terdaftar Anda, dan kami akan mengirimkan tautan reset kata sandi. Tautan tersebut berlaku selama 30 menit.',
  },
  {
    category: 'Akun & Login',
    q: 'Apakah bisa login dengan akun Google UB (SSO)?',
    a: 'Ya. Civitas akademika UB dapat masuk menggunakan akun Single Sign-On (SSO) UB melalui tombol "Masuk dengan Google (SSO UB)" di halaman Login. Pastikan Anda menggunakan akun Google yang terhubung ke email @ub.ac.id.',
  },
  {
    category: 'Pencarian',
    q: 'Apa perbedaan pencarian biasa dan Pencarian Lanjutan?',
    a: 'Pencarian biasa mencari di seluruh koleksi berdasarkan kata kunci umum. Pencarian Lanjutan memungkinkan Anda memfilter hasil berdasarkan kriteria spesifik—seperti judul, penulis, subjek, tahun terbit, atau genre—serta menggabungkan beberapa kondisi menggunakan operator logika AND, OR, dan NOT.',
  },
  {
    category: 'Pencarian',
    q: 'Bagaimana cara menggunakan operator AND, OR, NOT?',
    a: 'Di Pencarian Lanjutan, tambahkan kondisi baru dan pilih operator:\n• AND: hasil harus memenuhi semua kondisi yang ditentukan.\n• OR: hasil memenuhi setidaknya salah satu kondisi.\n• NOT: hasil tidak mengandung kondisi yang ditentukan.\nContoh: cari buku dengan Genre = "Fiksi" AND Penulis = "Tere Liye" akan menampilkan novel Tere Liye saja.',
  },
  {
    category: 'Peminjaman',
    q: 'Berapa lama masa peminjaman buku fisik?',
    a: 'Masa peminjaman buku fisik adalah 15 hari. Perpanjangan dapat dilakukan satu kali selama buku tidak dipesan oleh pengguna lain.',
  },
  {
    category: 'Peminjaman',
    q: 'Apakah ada denda keterlambatan pengembalian?',
    a: 'Ya. Denda keterlambatan sebesar Rp 500 per buku per hari kerja. Denda dapat dibayarkan langsung di meja layanan perpustakaan atau melalui sistem pembayaran digital yang tersedia.',
  },
  {
    category: 'Teknis',
    q: 'Saya tidak bisa mengakses koleksi full-text, apa yang harus dilakukan?',
    a: 'Pastikan Anda sudah login dengan akun aktif. Koleksi full-text hanya tersedia bagi civitas akademika UB yang menggunakan email @ub.ac.id atau mengakses dari jaringan kampus. Jika masalah berlanjut, hubungi helpdesk kami di helpdesk.lib@ub.ac.id.',
  },
  {
    category: 'Teknis',
    q: 'Format file apa yang didukung untuk koleksi digital?',
    a: 'Koleksi digital tersedia dalam format PDF (paling umum), ePub, dan beberapa dalam format DJVU. Pastikan perangkat Anda memiliki aplikasi pembaca yang sesuai. Kami merekomendasikan Adobe Acrobat Reader untuk file PDF.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-[10px] overflow-hidden"
      style={{ boxShadow: '0px 2px 4px rgba(0,0,0,0.06)' }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-[#092c4c] leading-snug">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#f2994a]" />
          : <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#bdbdbd]" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-[#f5f5f5]">
          <p className="text-sm text-[#4f4f4f] leading-7 whitespace-pre-line pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export function BantuanPage({ onNavigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === 'Semua' || f.category === activeCategory;
    const matchSearch = !search.trim() ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader activePage="bantuan" onNavigate={onNavigate} />

      {/* Hero */}
      <div style={{ backgroundColor: '#092c4c' }} className="py-12 md:py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Beranda</button>
            <span>›</span>
            <span className="text-white">Bantuan</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight">Pusat Bantuan</h1>
          <p className="text-base sm:text-[18px] text-white/70 leading-7 mt-2 mb-6">
            Temukan jawaban atas pertanyaan yang sering diajukan.
          </p>

          <div
            className="bg-white flex items-center rounded-[10px] p-2 max-w-[560px]"
            style={{ boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
          >
            <div className="pl-3 pr-2 flex-shrink-0 text-[#bdbdbd]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari pertanyaan atau topik bantuan..."
              className="flex-1 px-3 py-2.5 text-sm text-[#333] outline-none bg-transparent min-w-0"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:py-14">

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm font-medium px-4 py-2 rounded-full transition-colors border"
              style={
                activeCategory === cat
                  ? { backgroundColor: '#092c4c', color: '#fff', borderColor: '#092c4c' }
                  : { backgroundColor: '#fff', color: '#4f4f4f', borderColor: '#e0e0e0' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        ) : (
          <div
            className="bg-white rounded-[10px] text-center py-16 px-4"
            style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
          >
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-semibold text-[#092c4c]">Pertanyaan tidak ditemukan</p>
            <p className="text-sm text-[#4f4f4f] mt-2">Coba kata kunci lain atau pilih kategori yang berbeda.</p>
          </div>
        )}

        {/* Masih butuh bantuan */}
        <div
          className="mt-12 rounded-[10px] p-6 sm:p-10 text-center"
          style={{ backgroundColor: '#092c4c' }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Masih Butuh Bantuan?</h2>
          <p className="text-sm sm:text-base text-white/70 leading-7 mb-6 max-w-md mx-auto">
            Jika pertanyaan Anda belum terjawab, tim kami siap membantu melalui email atau kunjungan langsung ke perpustakaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('kontak')}
              className="text-sm sm:text-base font-semibold text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#f2994a' }}
            >
              Hubungi Kami
            </button>
            <a
              href="mailto:helpdesk.lib@ub.ac.id"
              className="text-sm sm:text-base font-medium text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
            >
              helpdesk.lib@ub.ac.id
            </a>
          </div>
        </div>

      </div>

      <AppFooter onNavigate={onNavigate} />
    </div>
  );
}
