import { useState } from 'react';
import { Eye, EyeOff, BookOpen } from 'lucide-react';
import { AppHeader, AppFooter, Page } from './AppShell';

type Props = { onNavigate: (page: Page) => void };

export function LoginPage({ onNavigate }: Props) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email dan kata sandi wajib diisi.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError('Email atau kata sandi tidak valid. Silakan coba lagi.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader activePage="login" onNavigate={onNavigate} />

      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:py-16 flex justify-center">
        <div className="w-full max-w-[480px]">

          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: '#092c4c' }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#092c4c]">Masuk ke Akun Anda</h1>
            <p className="text-sm text-[#4f4f4f] mt-2">Akses ribuan koleksi digital Perpustakaan UB</p>
          </div>

          <div
            className="bg-white rounded-[10px] p-6 sm:p-8"
            style={{ boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-[#092c4c] mb-1.5">
                  Email / NIM
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh@ub.ac.id atau 12345678"
                  className="w-full bg-white text-sm text-[#333] border border-[#e0e0e0] rounded-lg px-4 py-3 outline-none focus:border-[#092c4c] hover:border-[#092c4c] transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold text-[#092c4c]">
                    Kata Sandi
                  </label>
                  <button
                    type="button"
                    className="text-xs text-[#f2994a] hover:underline font-medium"
                  >
                    Lupa kata sandi?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    className="w-full bg-white text-sm text-[#333] border border-[#e0e0e0] rounded-lg px-4 py-3 pr-11 outline-none focus:border-[#092c4c] hover:border-[#092c4c] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#bdbdbd] hover:text-[#4f4f4f] transition-colors"
                  >
                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white text-base font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
                style={{ backgroundColor: '#092c4c' }}
              >
                {loading ? 'Memproses...' : 'Masuk'}
              </button>

              <div className="relative flex items-center gap-3">
                <div className="flex-1 border-t border-[#e0e0e0]" />
                <span className="text-xs text-[#bdbdbd] flex-shrink-0">atau</span>
                <div className="flex-1 border-t border-[#e0e0e0]" />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-[#e0e0e0] bg-white text-sm text-[#333] font-medium py-3 rounded-lg hover:bg-[#f5f5f5] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17.64 9.2045c0-.638-.0573-1.252-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9086C16.6582 14.0127 17.64 11.8055 17.64 9.2045z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9086-2.2581c-.8059.54-1.8368.8582-3.0477.8582-2.3441 0-4.3295-1.5832-5.0386-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z" fill="#34A853"/>
                  <path d="M3.9614 10.71c-.18-.54-.2823-1.1168-.2823-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.9614 10.71z" fill="#FBBC05"/>
                  <path d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5814-2.5814C13.4632.8918 11.4259 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.9614 7.29C4.6705 5.1627 6.6559 3.5795 9 3.5795z" fill="#EA4335"/>
                </svg>
                Masuk dengan Google (SSO UB)
              </button>
            </form>

            <p className="text-center text-sm text-[#4f4f4f] mt-6">
              Belum punya akun?{' '}
              <button
                onClick={() => onNavigate('register')}
                className="text-[#f2994a] font-semibold hover:underline"
              >
                Daftar sekarang
              </button>
            </p>
          </div>

          <p className="text-center text-xs text-[#bdbdbd] mt-6 leading-relaxed">
            Dengan masuk, Anda menyetujui{' '}
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
