import { Search, ChevronRight } from 'lucide-react';

type AnnotationProps = {
  label: string;
  color?: string;
  children: React.ReactNode;
  side?: 'left' | 'right';
};

function Annotation({ label, color = '#F2994A', children, side = 'right' }: AnnotationProps) {
  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${side === 'right' ? 'left-full ml-2' : 'right-full mr-2'} flex items-center gap-1 z-50 pointer-events-none`}
      >
        {side === 'left' && (
          <span
            className="text-white text-[10px] font-semibold px-2 py-1 rounded whitespace-nowrap shadow"
            style={{ backgroundColor: color }}
          >
            {label}
          </span>
        )}
        <div className="w-3 h-px" style={{ backgroundColor: color }} />
        {side === 'right' && (
          <span
            className="text-white text-[10px] font-semibold px-2 py-1 rounded whitespace-nowrap shadow"
            style={{ backgroundColor: color }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

function Badge({ children, color = '#092C4C' }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

// ─── Shared mini UI blocks ────────────────────────────────────────────────────

function MiniHeader({ floating = false }: { floating?: boolean }) {
  return (
    <div
      className={`${floating ? 'sticky top-0 z-30' : ''} flex items-center justify-between px-4 py-2 text-white`}
      style={{ backgroundColor: '#092C4C', minHeight: 36 }}
    >
      <div className="flex items-center gap-2">
        <div className="bg-white/20 px-2 py-0.5 rounded text-[8px] font-semibold">LOGO</div>
        <div>
          <p className="text-[8px] font-semibold leading-none">Nama Institusi</p>
          <p className="text-[7px] text-white/70 leading-none">Digital Library</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {['Nav1', 'Nav2', 'Nav3'].map((n) => (
          <span key={n} className="text-[7px] text-white/80 px-1">
            {n}
          </span>
        ))}
        <span className="bg-white/10 text-[7px] text-white px-2 py-0.5 rounded ml-1">Login</span>
        <span className="text-[7px] text-white px-2 py-0.5 rounded ml-0.5" style={{ backgroundColor: '#F2994A' }}>
          Register
        </span>
      </div>
    </div>
  );
}

function MiniHero({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-4 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #092C4C 0%, #0d3d5c 50%, #092C4C 100%)',
        opacity: dimmed ? 0.35 : 1,
        minHeight: 120,
      }}
    >
      <div className="bg-white/10 px-3 py-0.5 rounded-full border border-white/20 mb-2">
        <p className="text-[7px] text-white/90">📚 Over 150,000 Collections Available</p>
      </div>
      <p className="text-[11px] font-bold mb-1 text-center leading-tight">Discover Knowledge</p>
      <p className="text-[7px] text-white/70 mb-2 text-center">Access thousands of books, journals, and research materials</p>
      <div className="bg-white rounded px-2 py-1 flex items-center gap-1 w-full max-w-[160px]">
        <Search className="w-2 h-2 text-gray-400" />
        <span className="text-[7px] text-gray-400 flex-1">Search books, journals…</span>
        <span className="text-[6px] text-white px-1 py-0.5 rounded" style={{ backgroundColor: '#092C4C' }}>
          Search
        </span>
      </div>
      <div className="flex gap-1 mt-2">
        {['All', 'Books', 'Journals', 'Theses'].map((t, i) => (
          <span
            key={t}
            className="text-[6px] px-2 py-0.5 rounded-full border border-white/20 text-white"
            style={{ backgroundColor: i === 0 ? '#F2994A' : 'rgba(255,255,255,0.1)' }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-3 w-full max-w-[200px]">
        {[
          { n: '150K+', l: 'Collections' },
          { n: '45K+', l: 'Members' },
          { n: '1.2K+', l: 'New/month' },
        ].map((s) => (
          <div key={s.l} className="flex-1 bg-white/5 border border-white/10 rounded text-center py-1">
            <p className="text-[8px] font-bold">{s.n}</p>
            <p className="text-[6px] text-white/60">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniQuickSearch() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm px-4 py-1.5">
      <div className="flex items-center gap-1 border border-gray-200 rounded px-2 py-1 max-w-[200px] mx-auto">
        <Search className="w-2 h-2 text-gray-400" />
        <span className="text-[7px] text-gray-400 flex-1">Quick search…</span>
        <span className="text-[6px] text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: '#092C4C' }}>
          Search
        </span>
      </div>
    </div>
  );
}

function MiniBookRow({ partial = false }: { partial?: boolean }) {
  const titles = ['The Great Adventure', 'Quantum Physics', 'Ancient Civilizations', 'AI Revolution'];
  const cols = partial ? titles.slice(0, 3) : titles;
  return (
    <div
      className="px-4 py-3"
      style={{ backgroundColor: '#F5F5F5', opacity: partial ? 0.5 : 1 }}
    >
      <p className="text-[8px] font-bold text-[#092C4C] mb-2">Recommended Books</p>
      <div className={`grid gap-1.5`} style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)` }}>
        {cols.map((title) => (
          <div key={title} className="bg-white rounded shadow-sm overflow-hidden">
            <div
              className="aspect-[3/4] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #092C4C, #0d3d5c)' }}
            >
              <span className="text-[14px]">📖</span>
            </div>
            <div className="p-1">
              <span className="block text-[5px] text-gray-500 bg-gray-100 rounded-full px-1 mb-0.5">Fiction</span>
              <p className="text-[5.5px] font-semibold text-[#092C4C] leading-tight line-clamp-2">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniFooter() {
  return (
    <div
      className="px-4 py-2 flex items-center justify-between"
      style={{ backgroundColor: '#092C4C' }}
    >
      <div>
        <p className="text-[7px] text-white font-medium">Nama Institusi – Digital Library</p>
        <p className="text-[6px] text-white/50">© 2026 All rights reserved</p>
      </div>
      <div className="flex gap-2">
        {['About', 'Contact', 'Help'].map((l) => (
          <span key={l} className="text-[6px] text-white/60">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Frame annotations sidebar ────────────────────────────────────────────────

type Note = { color: string; label: string; detail: string };

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {notes.map((note) => (
        <li key={note.label} className="flex items-start gap-2">
          <span
            className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: note.color }}
          />
          <div>
            <p className="text-[11px] font-semibold text-gray-800 leading-none">{note.label}</p>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{note.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// ─── The three scroll-state frames ───────────────────────────────────────────

function State1() {
  const notes: Note[] = [
    { color: '#092C4C', label: 'Sticky Header (z-index: 50)', detail: 'Always on top. Height 80px. Primary brand color #092C4C.' },
    { color: '#F2994A', label: 'Hero Search Bar', detail: 'In-hero search with trending keyword chips. Visible only at scroll-top.' },
    { color: '#27AE60', label: 'Fixed Hero Section (z-index: 0)', detail: 'position: fixed; top: 80px. Stays put — content scrolls over it.' },
    { color: '#9B51E0', label: 'Stats Strip', detail: '3-col grid inside the hero. Disappears behind content as user scrolls.' },
  ];
  return (
    <div className="flex gap-6 items-start">
      {/* Frame */}
      <div className="relative flex-shrink-0" style={{ width: 260 }}>
        <div className="absolute -top-5 left-0 right-0 flex items-center gap-2">
          <Badge color="#092C4C">State 1</Badge>
          <span className="text-[10px] text-gray-500">scroll-y = 0px (initial load)</span>
        </div>
        <div
          className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg"
          style={{ borderColor: '#092C4C' }}
        >
          {/* Annotated regions */}
          <div className="relative">
            <div
              className="absolute right-0 top-0 bottom-0 w-0.5 pointer-events-none"
              style={{ background: 'rgba(9,44,76,0.2)' }}
            />
            <Annotation label="① Sticky Header z:50" color="#092C4C">
              <MiniHeader />
            </Annotation>
          </div>
          <Annotation label="② Hero (fixed, z:0)" color="#27AE60">
            <div>
              <Annotation label="③ Hero Search" color="#F2994A" side="left">
                <div>
                  <Annotation label="④ Stats Strip" color="#9B51E0">
                    <MiniHero />
                  </Annotation>
                </div>
              </Annotation>
            </div>
          </Annotation>
        </div>
        {/* Scroll arrow */}
        <div className="flex flex-col items-center mt-2 text-gray-400">
          <div className="w-px h-4 bg-gray-300" />
          <ChevronRight className="w-3 h-3 rotate-90" />
          <span className="text-[9px] text-gray-400">no scroll yet</span>
        </div>
      </div>

      {/* Notes */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Annotations</p>
        <NoteList notes={notes} />
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-2">
          <p className="text-[10px] font-semibold text-blue-800 mb-0.5">CSS Mechanics</p>
          <pre className="text-[9px] text-blue-700 leading-relaxed whitespace-pre-wrap">{`header  { position: sticky; top: 0; z-index: 50; }
.hero   { position: fixed;  top: 80px; z-index: 0; }
.layer  { position: relative; z-index: 10;
          padding-top: calc(100vh - 80px); }`}</pre>
        </div>
      </div>
    </div>
  );
}

function State2() {
  const notes: Note[] = [
    { color: '#092C4C', label: 'Sticky Header (unchanged)', detail: 'Remains fixed at top. z-index: 50 keeps it above all content.' },
    { color: '#E74C3C', label: 'Sticky Quick Search (z-index: 40)', detail: 'position: sticky; top: 80px. Slides in as scrollable content reaches the header edge.' },
    { color: '#27AE60', label: 'Hero — partially occluded', detail: 'Still fixed behind. Top portion hidden by the content layer scrolling over it.' },
    { color: '#F2994A', label: 'Content layer leading edge', detail: 'White bg card enters frame, covering the hero below it.' },
  ];
  return (
    <div className="flex gap-6 items-start">
      <div className="relative flex-shrink-0" style={{ width: 260 }}>
        <div className="absolute -top-5 left-0 right-0 flex items-center gap-2">
          <Badge color="#E74C3C">State 2</Badge>
          <span className="text-[10px] text-gray-500">scroll-y ≈ 120px (mid-scroll)</span>
        </div>
        <div
          className="border-2 rounded-lg overflow-hidden shadow-lg"
          style={{ borderColor: '#E74C3C' }}
        >
          <Annotation label="① Sticky Header z:50" color="#092C4C">
            <MiniHeader />
          </Annotation>
          <Annotation label="② Quick Search (sticky, z:40)" color="#E74C3C">
            <MiniQuickSearch />
          </Annotation>
          {/* Hero peeking behind */}
          <div className="relative overflow-hidden" style={{ height: 60 }}>
            <div className="absolute inset-0">
              <MiniHero dimmed />
            </div>
            {/* Content starting to cover */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: 30, background: '#F5F5F5', opacity: 0.85 }}
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center" style={{ height: 30 }}>
              <span className="text-[8px] text-gray-500">↑ content layer scrolling over hero</span>
            </div>
          </div>
          <div className="relative">
            <Annotation label="③ Hero behind (dimmed)" color="#27AE60" side="left">
              <MiniBookRow partial />
            </Annotation>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 text-gray-400">
          <div className="w-px h-4 bg-gray-300" />
          <ChevronRight className="w-3 h-3 rotate-90" />
          <span className="text-[9px] text-gray-400">scrolling down…</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Annotations</p>
        <NoteList notes={notes} />
        <div className="mt-4 bg-red-50 border border-red-200 rounded p-2">
          <p className="text-[10px] font-semibold text-red-800 mb-0.5">Key Transition</p>
          <p className="text-[10px] text-red-700 leading-snug">
            The quick-search bar appears only when the content layer's sticky top edge reaches the header. The hero search bar simultaneously disappears behind the content. Users always have search access.
          </p>
        </div>
      </div>
    </div>
  );
}

function State3() {
  const notes: Note[] = [
    { color: '#092C4C', label: 'Sticky Header (z-index: 50)', detail: 'Still at top. Same position as State 1 — never moves.' },
    { color: '#E74C3C', label: 'Sticky Quick Search (z-index: 40)', detail: 'Locked just below header. Persists for the entire content scroll.' },
    { color: '#4F4F4F', label: 'Content — full coverage', detail: 'Hero is 100% occluded. User is now reading book cards and news sections.' },
    { color: '#27AE60', label: 'Hero (still fixed, invisible)', detail: 'Hero is still fixed behind the page — just fully covered. No layout shift.' },
  ];
  return (
    <div className="flex gap-6 items-start">
      <div className="relative flex-shrink-0" style={{ width: 260 }}>
        <div className="absolute -top-5 left-0 right-0 flex items-center gap-2">
          <Badge color="#4F4F4F">State 3</Badge>
          <span className="text-[10px] text-gray-500">scroll-y ≈ 100vh (deep scroll)</span>
        </div>
        <div
          className="border-2 rounded-lg overflow-hidden shadow-lg"
          style={{ borderColor: '#4F4F4F' }}
        >
          <Annotation label="① Sticky Header z:50" color="#092C4C">
            <MiniHeader />
          </Annotation>
          <Annotation label="② Quick Search z:40" color="#E74C3C">
            <MiniQuickSearch />
          </Annotation>
          <Annotation label="③ Full content coverage" color="#4F4F4F">
            <MiniBookRow />
          </Annotation>
          <MiniFooter />
        </div>
        <div className="flex flex-col items-center mt-2 text-gray-400">
          <div className="w-px h-4 bg-gray-300" />
          <span className="text-[9px] text-gray-400">end of scroll</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Annotations</p>
        <NoteList notes={notes} />
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded p-2">
          <p className="text-[10px] font-semibold text-gray-700 mb-0.5">Scroll Reversal</p>
          <p className="text-[10px] text-gray-600 leading-snug">
            Scrolling back up reverses all states. Content layer lifts away, hero re-emerges, quick-search bar un-sticks, and the hero search bar becomes visible again. No JS needed — pure CSS stacking.
          </p>
        </div>
        <div className="mt-2 bg-green-50 border border-green-200 rounded p-2">
          <p className="text-[10px] font-semibold text-green-800 mb-0.5">Accessibility Note</p>
          <p className="text-[10px] text-green-700 leading-snug">
            Search is always reachable: either the hero search (State 1) or the sticky quick-search (States 2–3). Focus order and skip-links are unaffected by the parallax layer.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Z-index legend ───────────────────────────────────────────────────────────

function ZIndexDiagram() {
  const layers = [
    { z: 50, label: 'Sticky Header', color: '#092C4C', w: '100%' },
    { z: 40, label: 'Sticky Quick Search', color: '#E74C3C', w: '90%' },
    { z: 10, label: 'Scrollable Content Layer', color: '#4F4F4F', w: '80%' },
    { z: 0, label: 'Fixed Hero (background)', color: '#27AE60', w: '70%' },
  ];
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Z-Index Stack</p>
      <div className="flex flex-col gap-1">
        {layers.map((l) => (
          <div key={l.z} className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-gray-500 w-6 text-right">{l.z}</span>
            <div
              className="h-6 rounded flex items-center px-2"
              style={{ width: l.w, backgroundColor: l.color }}
            >
              <span className="text-[9px] text-white font-medium">{l.label}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-gray-500 mt-2">Higher z-index = closer to viewer. Hero sits below all content but is always rendered (no display:none).</p>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function ParallaxDocs() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Doc header */}
      <div className="border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Parallax Scroll Documentation</span>
            <span className="text-[9px] bg-[#F2994A] text-white px-2 py-0.5 rounded-full font-semibold">v1.0</span>
          </div>
          <h1 className="text-xl font-bold text-[#092C4C]">Digital Library — Scroll State Frames</h1>
          <p className="text-xs text-gray-500 mt-0.5">3 annotated states documenting the fixed-hero parallax effect • Desktop 1440px viewport</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400">Design tokens</p>
          <div className="flex items-center gap-1 mt-1 justify-end">
            {[{ c: '#092C4C', l: 'Primary' }, { c: '#F2994A', l: 'Accent' }, { c: '#F5F5F5', l: 'Surface' }].map((t) => (
              <div key={t.l} className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-sm inline-block border border-gray-200" style={{ backgroundColor: t.c }} />
                <span className="text-[8px] text-gray-500">{t.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-10 space-y-14">
        {/* Intro */}
        <div className="bg-[#092C4C] rounded-xl p-5 text-white">
          <p className="text-sm font-semibold mb-1">How the parallax effect works</p>
          <p className="text-xs text-white/80 leading-relaxed max-w-2xl">
            The hero section uses <code className="bg-white/10 px-1 rounded">position: fixed</code> and sits at z-index 0 — always rendered but below all page content. A scrollable div with <code className="bg-white/10 px-1 rounded">position: relative; z-index: 10</code> and top padding equal to <code className="bg-white/10 px-1 rounded">calc(100vh − header height)</code> slides over the hero as the user scrolls. No JavaScript. No scroll event listeners.
          </p>
        </div>

        {/* State 1 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#092C4C' }}>1</div>
            <div>
              <h2 className="text-sm font-bold text-gray-900">Initial State — Full Hero Visible</h2>
              <p className="text-[11px] text-gray-500">User lands on page. Scroll position = 0. Hero fills viewport below sticky header.</p>
            </div>
          </div>
          <State1 />
        </section>

        <div className="border-t border-dashed border-gray-200" />

        {/* State 2 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#E74C3C' }}>2</div>
            <div>
              <h2 className="text-sm font-bold text-gray-900">Mid-Scroll — Content Overlapping Hero</h2>
              <p className="text-[11px] text-gray-500">User scrolls. Content layer rises. Sticky quick-search bar locks below header.</p>
            </div>
          </div>
          <State2 />
        </section>

        <div className="border-t border-dashed border-gray-200" />

        {/* State 3 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#4F4F4F' }}>3</div>
            <div>
              <h2 className="text-sm font-bold text-gray-900">Deep Scroll — Hero Fully Occluded</h2>
              <p className="text-[11px] text-gray-500">Hero is 100% behind content. User reads book cards and news. Header + quick-search persist.</p>
            </div>
          </div>
          <State3 />
        </section>

        <ZIndexDiagram />

        {/* Implementation checklist */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Implementation Checklist</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
            {[
              'Header: sticky, top-0, z-50',
              'Hero: fixed, top-80px (5rem), z-0',
              'Content layer: relative, z-10',
              'Content padding-top: calc(100vh − 5rem)',
              'Quick search: sticky, top-20, z-40',
              'Hero min-height fills remaining viewport',
              'No JavaScript scroll listeners',
              'WCAG AA contrast on all text',
              'Search always accessible (State 1 or 2–3)',
              'Responsive: hero height collapses on mobile',
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded border border-gray-300 bg-white flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: '#27AE60' }} />
                </div>
                <span className="text-[10px] text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
