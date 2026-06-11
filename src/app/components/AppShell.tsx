import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgUbLogo from '../../imports/ub-logo-small.png';

export type Page = 'home' | 'collection' | 'advanced' | 'login' | 'register' | 'tentang' | 'kontak' | 'bantuan';

export function AppHeader({
  activePage,
  onNavigate,
}: {
  activePage: Page;
  onNavigate: (page: Page) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { key: Page; label: string }[] = [
    { key: 'home', label: 'Beranda' },
    { key: 'collection', label: 'Daftar Koleksi' },
    { key: 'advanced', label: 'Pencarian Lanjutan' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#092c4c', boxShadow: '0px 10px 7.5px rgba(0,0,0,0.1), 0px 4px 3px rgba(0,0,0,0.1)' }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => { onNavigate('home'); setMenuOpen(false); }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <ImageWithFallback
              src={imgUbLogo}
              alt="Logo Universitas Brawijaya"
              className="h-10 w-10 md:h-[52px] md:w-[52px] object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-sm md:text-base text-white leading-tight">Universitas Brawijaya</p>
              <p className="text-xs md:text-sm text-white/80 leading-tight">Perpustakaan Digital</p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`text-sm xl:text-base leading-6 transition-colors px-3 py-2 rounded-lg ${
                  activePage === key
                    ? 'text-[#f2994a] font-semibold bg-white/10'
                    : 'text-white hover:text-[#f2994a] hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('login')}
              className={`text-sm xl:text-base font-medium px-5 py-2 rounded-lg transition-colors ${
                activePage === 'login' ? 'bg-white/25 text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="text-white text-sm xl:text-base font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#f2994a' }}
            >
              Register
            </button>
          </nav>

          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: '#092c4c' }}>
          <div className="mx-auto max-w-[1320px] px-4 py-4 flex flex-col gap-1">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { onNavigate(key); setMenuOpen(false); }}
                className={`text-left text-base px-4 py-3 rounded-lg transition-colors ${
                  activePage === key
                    ? 'text-[#f2994a] font-semibold bg-white/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="flex gap-3 mt-2 pt-3 border-t border-white/10">
              <button
                onClick={() => { onNavigate('login'); setMenuOpen(false); }}
                className="flex-1 text-center bg-white/10 text-white text-base font-medium py-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => { onNavigate('register'); setMenuOpen(false); }}
                className="flex-1 text-center text-white text-base font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#f2994a' }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function AppFooter({ onNavigate }: { onNavigate?: (page: Page) => void }) {
  return (
    <footer style={{ backgroundColor: '#092c4c' }}>
      <div className="mx-auto max-w-[1320px] px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-base font-medium text-white leading-6">Universitas Brawijaya - Perpustakaan Digital</p>
            <p className="text-sm text-white/70 leading-5 mt-1">(c) 2026 All rights reserved</p>
          </div>
          <nav className="flex items-center gap-6">
            {([['tentang', 'Tentang'], ['kontak', 'Kontak'], ['bantuan', 'Bantuan']] as [Page, string][]).map(([page, label]) => (
              <button
                key={page}
                onClick={() => onNavigate?.(page)}
                className="text-base text-white/80 hover:text-white transition-colors leading-6"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
