import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { AppHeader, AppFooter, Page } from './AppShell';

type Props = { onNavigate: (page: Page) => void };

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    lines: ['Jl. Veteran Malang 65145, Indonesia'],
  },
  {
    icon: Phone,
    title: 'Telepon & Fax',
    lines: [
      'Tel: +62341-551611, 5757777; Pes. 308',
      'Direct Call: +62341-571032',
      'Fax Rektorat: +62341-565420',
      'Fax Perpustakaan: +62341-583966',
    ],
  },
  {
    icon: Mail,
    title: 'Email & Website',
    lines: ['library@ub.ac.id', 'http://lib.ub.ac.id'],
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    lines: [
      'Senin – Kamis: 06.00 – 22.00 WIB',
      'Jumat: 06.00 – 11.00 & 13.00 – 22.00 WIB',
      'Sabtu: 08.00 – 20.00 WIB',
      'Minggu: 09.00 – 17.00 WIB',
    ],
  },
];

const topics = ['Pertanyaan Umum', 'Layanan Koleksi', 'Keanggotaan', 'Peminjaman Buku', 'Masalah Teknis', 'Lainnya'];

export function KontakPage({ onNavigate }: Props) {
  const [form, setForm]       = useState({ name: '', email: '', topic: '', message: '' });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim())    errs.name    = 'Nama wajib diisi.';
    if (!form.email.trim())   errs.email   = 'Email wajib diisi.';
    if (!form.topic)          errs.topic   = 'Pilih topik pesan.';
    if (!form.message.trim()) errs.message = 'Pesan wajib diisi.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader activePage="kontak" onNavigate={onNavigate} />

      {/* Hero */}
      <div style={{ backgroundColor: '#092c4c' }} className="py-12 md:py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Beranda</button>
            <span>›</span>
            <span className="text-white">Kontak</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight">Hubungi Kami</h1>
          <p className="text-base sm:text-[18px] text-white/70 leading-7 mt-2">
            Kami siap membantu Anda. Kirim pesan atau kunjungi perpustakaan kami.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Info kontak */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="bg-white rounded-[10px] p-5 flex gap-4"
                style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.08)' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(9,44,76,0.08)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#092c4c' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#092c4c] mb-1">{title}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-[#4f4f4f] leading-6">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            <div
              className="bg-white rounded-[10px] p-5"
              style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.08)' }}
            >
              <p className="text-sm font-semibold text-[#092c4c] mb-3">Media Sosial</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Instagram', color: '#e1306c' },
                  { label: 'Facebook',  color: '#1877f2' },
                  { label: 'YouTube',   color: '#ff0000' },
                  { label: 'Twitter/X', color: '#000000' },
                ].map(({ label, color }) => (
                  <span
                    key={label}
                    className="text-xs font-medium text-white px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-[10px] p-6 sm:p-8"
              style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
            >
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: '#27ae60' }} />
                  <h3 className="text-xl font-bold text-[#092c4c] mb-2">Pesan Terkirim!</h3>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed max-w-xs mx-auto">
                    Terima kasih telah menghubungi kami. Tim kami akan merespons ke <strong>{form.email}</strong> dalam 1–2 hari kerja.
                  </p>
                  <button
                    onClick={() => { setForm({ name: '', email: '', topic: '', message: '' }); setSubmitted(false); }}
                    className="mt-6 text-sm font-medium text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#092c4c' }}
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#092c4c] mb-6">Kirim Pesan</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Nama Lengkap</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Nama Anda"
                          className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'}`}
                        />
                        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={set('email')}
                          placeholder="email@anda.com"
                          className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'}`}
                        />
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Topik</label>
                      <select
                        value={form.topic}
                        onChange={set('topic')}
                        className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 outline-none appearance-auto transition-colors cursor-pointer ${errors.topic ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'}`}
                      >
                        <option value="">Pilih topik...</option>
                        {topics.map((t) => <option key={t}>{t}</option>)}
                      </select>
                      {errors.topic && <p className="text-xs text-red-600 mt-1">{errors.topic}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Pesan</label>
                      <textarea
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                        rows={5}
                        className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 outline-none transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'}`}
                      />
                      {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white text-base font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#092c4c' }}
                    >
                      Kirim Pesan
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <AppFooter onNavigate={onNavigate} />
    </div>
  );
}
