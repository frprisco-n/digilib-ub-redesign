import { useState } from 'react';
import { Eye, EyeOff, BookOpen, CheckCircle } from 'lucide-react';
import { AppHeader, AppFooter, Page } from './AppShell';

type Props = { onNavigate: (page: Page) => void };

const roles = ['Mahasiswa', 'Dosen', 'Tenaga Kependidikan', 'Alumni', 'Umum'];
const faculties = [
  'Fakultas Hukum',
  'Fakultas Ekonomi dan Bisnis',
  'Fakultas Ilmu Administrasi',
  'Fakultas Pertanian',
  'Fakultas Peternakan',
  'Fakultas Teknik',
  'Fakultas Kedokteran',
  'Fakultas Perikanan dan Ilmu Kelautan',
  'Fakultas Matematika dan Ilmu Pengetahuan Alam',
  'Fakultas Teknologi Pertanian',
  'Fakultas Ilmu Sosial dan Ilmu Politik',
  'Fakultas Ilmu Budaya',
  'Fakultas Ilmu Komputer',
  'Fakultas Kedokteran Hewan',
  'Fakultas Farmasi',
  'Fakultas Vokasi',
];

export function RegisterPage({ onNavigate }: Props) {
  const [form, setForm] = useState({
    name: '', nim: '', email: '', role: '', faculty: '', password: '', confirm: '',
  });
  const [showPass, setShowPass]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors]           = useState<Record<string, string>>({});
  const [submitted, setSubmitted]     = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())     e.name     = 'Nama lengkap wajib diisi.';
    if (!form.email.trim())    e.email    = 'Email wajib diisi.';
    if (!form.role)            e.role     = 'Pilih peran Anda.';
    if (!form.password)        e.password = 'Kata sandi wajib diisi.';
    else if (form.password.length < 8) e.password = 'Kata sandi minimal 8 karakter.';
    if (form.password !== form.confirm) e.confirm = 'Konfirmasi kata sandi tidak cocok.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
        <AppHeader activePage="register" onNavigate={onNavigate} />
        <div className="mx-auto max-w-[1320px] px-4 py-16 flex justify-center">
          <div className="w-full max-w-[480px] text-center">
            <div
              className="bg-white rounded-[10px] p-8 sm:p-12"
              style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#27ae60' }} />
              <h2 className="text-2xl font-bold text-[#092c4c] mb-2">Pendaftaran Berhasil!</h2>
              <p className="text-sm text-[#4f4f4f] leading-relaxed mb-6">
                Akun Anda telah berhasil dibuat. Silakan cek email <strong>{form.email}</strong> untuk verifikasi, lalu masuk ke sistem perpustakaan.
              </p>
              <button
                onClick={() => onNavigate('login')}
                className="w-full text-white text-base font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#092c4c' }}
              >
                Masuk Sekarang
              </button>
            </div>
          </div>
        </div>
        <AppFooter onNavigate={onNavigate} />
      </div>
    );
  }

  const field = (
    id: string, label: string, type: string, value: string,
    placeholder: string, error?: string, extra?: React.ReactNode
  ) => (
    <div>
      <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={set(id)}
          placeholder={placeholder}
          className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 outline-none transition-colors ${
            error ? 'border-red-400 focus:border-red-500' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'
          } ${extra ? 'pr-11' : ''}`}
        />
        {extra}
      </div>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );

  const eyeBtn = (show: boolean, toggle: () => void) => (
    <button
      type="button"
      onClick={toggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#bdbdbd] hover:text-[#4f4f4f] transition-colors"
    >
      {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader activePage="register" onNavigate={onNavigate} />

      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:py-16 flex justify-center">
        <div className="w-full max-w-[520px]">

          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: '#f2994a' }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#092c4c]">Buat Akun Baru</h1>
            <p className="text-sm text-[#4f4f4f] mt-2">Daftar untuk mengakses Perpustakaan Digital UB</p>
          </div>

          <div
            className="bg-white rounded-[10px] p-6 sm:p-8"
            style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              {field('name', 'Nama Lengkap', 'text', form.name, 'Nama sesuai identitas resmi', errors.name)}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Peran</label>
                  <select
                    value={form.role}
                    onChange={set('role')}
                    className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 outline-none appearance-auto transition-colors cursor-pointer ${
                      errors.role ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'
                    }`}
                  >
                    <option value="">Pilih peran...</option>
                    {roles.map((r) => <option key={r}>{r}</option>)}
                  </select>
                  {errors.role && <p className="text-xs text-red-600 mt-1">{errors.role}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">NIM / NIP <span className="text-[#bdbdbd] font-normal">(opsional)</span></label>
                  <input
                    type="text"
                    value={form.nim}
                    onChange={set('nim')}
                    placeholder="Nomor identitas"
                    className="w-full bg-white text-sm text-[#333] border border-[#e0e0e0] rounded-lg px-4 py-3 outline-none focus:border-[#092c4c] hover:border-[#092c4c] transition-colors"
                  />
                </div>
              </div>

              {form.role === 'Mahasiswa' || form.role === 'Dosen' || form.role === 'Tenaga Kependidikan' ? (
                <div>
                  <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Fakultas</label>
                  <select
                    value={form.faculty}
                    onChange={set('faculty')}
                    className="w-full bg-white text-sm text-[#333] border border-[#e0e0e0] rounded-lg px-4 py-3 outline-none appearance-auto focus:border-[#092c4c] hover:border-[#092c4c] transition-colors cursor-pointer"
                  >
                    <option value="">Pilih fakultas...</option>
                    {faculties.map((f) => <option key={f}>{f}</option>)}
                  </select>
                </div>
              ) : null}

              {field('email', 'Email', 'email', form.email, 'contoh@ub.ac.id', errors.email)}

              <div>
                <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Kata Sandi</label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.password}
                    onChange={set('password')}
                    placeholder="Minimal 8 karakter"
                    className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 pr-11 outline-none transition-colors ${
                      errors.password ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'
                    }`}
                  />
                  {eyeBtn(showPass, () => setShowPass((s) => !s))}
                </div>
                {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">Konfirmasi Kata Sandi</label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={form.confirm}
                    onChange={set('confirm')}
                    placeholder="Ulangi kata sandi"
                    className={`w-full bg-white text-sm text-[#333] border rounded-lg px-4 py-3 pr-11 outline-none transition-colors ${
                      errors.confirm ? 'border-red-400' : 'border-[#e0e0e0] focus:border-[#092c4c] hover:border-[#092c4c]'
                    }`}
                  />
                  {eyeBtn(showConfirm, () => setShowConfirm((s) => !s))}
                </div>
                {errors.confirm && <p className="text-xs text-red-600 mt-1">{errors.confirm}</p>}
              </div>

              <button
                type="submit"
                className="w-full text-white text-base font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#f2994a' }}
              >
                Daftar
              </button>
            </form>

            <p className="text-center text-sm text-[#4f4f4f] mt-6">
              Sudah punya akun?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="text-[#092c4c] font-semibold hover:underline"
              >
                Masuk di sini
              </button>
            </p>
          </div>

          <p className="text-center text-xs text-[#bdbdbd] mt-6 leading-relaxed">
            Dengan mendaftar, Anda menyetujui{' '}
            <button className="underline hover:text-[#4f4f4f]">Syarat & Ketentuan</button>
            {' '}dan{' '}
            <button className="underline hover:text-[#4f4f4f]">Kebijakan Privasi</button>
            {' '}Perpustakaan UB.
          </p>
        </div>
      </div>

      <AppFooter onNavigate={onNavigate} />
    </div>
  );
}
