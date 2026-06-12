import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Search,
  Tag,
  UserRound,
} from "lucide-react";
import { BookCollectionPage, Book } from "./components/BookCollectionPage";
import { AdvancedSearchPage } from "./components/AdvancedSearchPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { TentangPage } from "./components/TentangPage";
import { KontakPage } from "./components/KontakPage";
import { BantuanPage } from "./components/BantuanPage";
import { AppHeader, AppFooter, Page } from "./components/AppShell";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import imgApp from "../imports/Rektorat-UB-Doc.-Humas-UB.jpg";
import imgBook0 from "../imports/HighFidelityPrototypeCreation/ee19ae52921f656297a9cfa9abb0f32bebe6b426.png";
import imgBook1 from "../imports/HighFidelityPrototypeCreation/137ca34175f4cdc9b50bda19774356bfc96660b1.png";
import imgBook2 from "../imports/HighFidelityPrototypeCreation/cebe2cef357d304068b9b08cedc9f575d765ead7.png";
import imgBook3 from "../imports/HighFidelityPrototypeCreation/e18fd9d7d5fe4e2ac4a41cb4e45ffe2af29f891e.png";
import imgBook4 from "../imports/HighFidelityPrototypeCreation/f6d3d3f29afca69ace2309a09bd45017c72e6df1.png";
import imgBook5 from "../imports/HighFidelityPrototypeCreation/8f2fd68dd76542639900661f12b93d8799fbeea1.png";
import imgBook6 from "../imports/HighFidelityPrototypeCreation/9d35ca7066113d7461a263b5fb93290568c4e0df.png";
import imgBook7 from "../imports/HighFidelityPrototypeCreation/c86c92f5a290a5e8453c8368d8193cdf3d6b7230.png";
import imgNews0 from "../imports/HighFidelityPrototypeCreation/ed294a08c68e4a7d20aa2473bce5e04e83f5d677.png";
import imgNews1 from "../imports/HighFidelityPrototypeCreation/cfa84f86d51b81af854ccc19b9192825deea251f.png";

const books: Book[] = [
  {
    id: 1,
    cover: imgBook0,
    type: "Buku",
    genre: "Fiksi",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    year: 2017,
  },
  {
    id: 2,
    cover: imgBook1,
    type: "Buku",
    genre: "Sains",
    title: "What Is Science?",
    author: "Elof Axel Carlson",
    year: 2019,
  },
  {
    id: 3,
    cover: imgBook2,
    type: "Buku",
    genre: "Sejarah",
    title: "Gajah Mada: Sistem Politik",
    author: "Enung Nurhayati",
    year: 2020,
  },
  {
    id: 4,
    cover: imgBook3,
    type: "Buku",
    genre: "Teknologi",
    title: "Basis Data Relasional",
    author: "Ridho Rahman Hariadi",
    year: 2022,
  },
  {
    id: 5,
    cover: imgBook4,
    type: "Buku",
    genre: "Bisnis & Ekonomi",
    title: "Akuntansi Manajemen",
    author: "Rita Puspaningsih",
    year: 2021,
  },
  {
    id: 6,
    cover: imgBook5,
    type: "Buku",
    genre: "Administrasi",
    title: "Manajemen Sekolah Inklusif",
    author: "Sowiyah",
    year: 2018,
  },
  {
    id: 7,
    cover: imgBook6,
    type: "Buku",
    genre: "Agama",
    title: "The Visual Fiqh",
    author: "Syekh Salim Al-Hadhrami",
    year: 2023,
  },
  {
    id: 8,
    cover: imgBook7,
    type: "Buku",
    genre: "Fiksi",
    title: "Not Quite Dead Yet",
    author: "Holly Jackson",
    year: 2024,
  },
];

const news = [
  {
    id: 1,
    img: imgNews0,
    title: "Brawijaya Bookfair Resmi Dibuka di Perpustakaan UB",
    date: "21/05/2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ligula non nisl commodo porttitor. Sed at massa sit amet urna gravida tincidunt.",
  },
  {
    id: 2,
    img: imgNews1,
    title: "Mengenal Layanan Repository UB",
    date: "03/06/2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sem sit amet velit interdum cursus. Donec facilisis justo id nibh lacinia.",
  },
];

type NewsItem = (typeof news)[number];

function SearchBox({
  value,
  placeholder,
  buttonLabel,
  onChange,
  onSubmit,
}: {
  value: string;
  placeholder: string;
  buttonLabel: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div
      className="bg-white flex items-center rounded-[10px] p-2"
      style={{ boxShadow: "0px 16px 24px rgba(0,0,0,0.18)" }}
    >
      <div className="pl-3 pr-2 flex-shrink-0 text-[#bdbdbd]">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        placeholder={placeholder}
        className="flex-1 px-3 py-3 text-sm sm:text-base text-[rgba(51,51,51,0.7)] outline-none bg-transparent min-w-0"
      />
      <button
        onClick={onSubmit}
        className="text-white text-sm sm:text-base font-semibold leading-6 rounded-lg px-4 sm:px-6 py-3 whitespace-nowrap flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{ backgroundColor: "#092c4c" }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

function BookCard({
  book,
  onSelect,
}: {
  book: Book;
  onSelect: (book: Book) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(book)}
      className="bg-white rounded-[10px] overflow-hidden cursor-pointer group text-left w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      }}
    >
      <div className="relative overflow-hidden h-44 sm:h-56">
        <ImageWithFallback
          src={book.cover}
          alt={book.title}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
      </div>
      <div className="p-3 sm:p-4">
        <span
          className="inline-block text-[11px] font-medium text-[#4f4f4f] leading-4 px-2.5 py-1 rounded-full mb-2"
          style={{ backgroundColor: "#e0e0e0" }}
        >
          {book.genre}
        </span>
        <h3 className="text-sm sm:text-[16px] font-bold text-[#092c4c] leading-snug mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-[#4f4f4f] leading-5">
          {book.author}
        </p>
      </div>
    </button>
  );
}

function DetailShell({
  activePage,
  onNavigate,
  onBack,
  children,
}: {
  activePage: Page;
  onNavigate: (page: Page) => void;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader activePage={activePage} onNavigate={onNavigate} />
      <main className="mx-auto max-w-[1320px] px-4 py-8 md:py-12">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#092c4c] hover:text-[#f2994a] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </button>
        {children}
      </main>
      <AppFooter onNavigate={onNavigate} />
    </div>
  );
}

function BookDetailPage({
  book,
  onNavigate,
  onBack,
}: {
  book: Book;
  onNavigate: (page: Page) => void;
  onBack: () => void;
}) {
  return (
    <DetailShell
      activePage="collection"
      onNavigate={onNavigate}
      onBack={onBack}
    >
      <section
        className="bg-white rounded-[10px] overflow-hidden"
        style={{
          boxShadow:
            "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          <div className="bg-[#092c4c] p-8 flex items-center justify-center">
            <div className="w-full max-w-[260px] aspect-[3/4] bg-white rounded-[10px] overflow-hidden shadow-xl">
              <ImageWithFallback
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#092c4c] bg-[#f5f5f5] px-3 py-1.5 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              {book.type}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#092c4c] leading-tight">
              {book.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              <div className="border border-[#e0e0e0] rounded-[10px] p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-[#bdbdbd] uppercase tracking-wide">
                  <UserRound className="w-4 h-4" /> Penulis
                </p>
                <p className="text-sm font-semibold text-[#092c4c] mt-2">
                  {book.author}
                </p>
              </div>
              <div className="border border-[#e0e0e0] rounded-[10px] p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-[#bdbdbd] uppercase tracking-wide">
                  <Tag className="w-4 h-4" /> Genre
                </p>
                <p className="text-sm font-semibold text-[#092c4c] mt-2">
                  {book.genre}
                </p>
              </div>
              <div className="border border-[#e0e0e0] rounded-[10px] p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-[#bdbdbd] uppercase tracking-wide">
                  <Calendar className="w-4 h-4" /> Tahun
                </p>
                <p className="text-sm font-semibold text-[#092c4c] mt-2">
                  {book.year}
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#e0e0e0]">
              <h2 className="text-xl font-bold text-[#092c4c]">Deskripsi</h2>
              <p className="text-base text-[#4f4f4f] leading-8 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vitae posuere lectus. Aliquam erat volutpat. Donec facilisis,
                lacus at bibendum dignissim, sem urna porttitor purus, vitae
                luctus massa risus vitae augue. Curabitur vitae justo non tortor
                interdum pretium.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DetailShell>
  );
}

function NewsDetailPage({
  item,
  onNavigate,
  onBack,
}: {
  item: NewsItem;
  onNavigate: (page: Page) => void;
  onBack: () => void;
}) {
  return (
    <DetailShell activePage="home" onNavigate={onNavigate} onBack={onBack}>
      <article
        className="bg-white rounded-[10px] overflow-hidden"
        style={{
          boxShadow:
            "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
        }}
      >
        <div className="relative h-64 sm:h-80 lg:h-[420px]">
          <ImageWithFallback
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#f2994a] mb-3">
            <Calendar className="w-4 h-4" />
            {item.date}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#092c4c] leading-tight">
            {item.title}
          </h1>
          <p className="text-base text-[#4f4f4f] leading-8 mt-6">
            {item.description}
          </p>
        </div>
      </article>
    </DetailShell>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [activeKeyword, setActiveKeyword] = useState("Semua");
  const [heroSearch, setHeroSearch] = useState("");
  const [quickSearch, setQuickSearch] = useState("");
  const [collectionSearch, setCollectionSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page, selectedBook, selectedNews]);

  const goToCollection = (query = "") => {
    setSelectedBook(null);
    setSelectedNews(null);
    setCollectionSearch(query);
    setPage("collection");
  };

  const navigate = (targetPage: Page) => {
    setSelectedBook(null);
    setSelectedNews(null);
    setPage(targetPage);
  };

  if (selectedBook)
    return (
      <BookDetailPage
        book={selectedBook}
        onNavigate={navigate}
        onBack={() => setSelectedBook(null)}
      />
    );
  if (selectedNews)
    return (
      <NewsDetailPage
        item={selectedNews}
        onNavigate={navigate}
        onBack={() => setSelectedNews(null)}
      />
    );
  if (page === "collection")
    return (
      <BookCollectionPage
        initialSearch={collectionSearch}
        onNavigate={navigate}
        onBookSelect={setSelectedBook}
      />
    );
  if (page === "advanced") return <AdvancedSearchPage onNavigate={navigate} />;
  if (page === "login") return <LoginPage onNavigate={navigate} />;
  if (page === "register") return <RegisterPage onNavigate={navigate} />;
  if (page === "tentang") return <TentangPage onNavigate={navigate} />;
  if (page === "kontak") return <KontakPage onNavigate={navigate} />;
  if (page === "bantuan") return <BantuanPage onNavigate={navigate} />;

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <AppHeader activePage="home" onNavigate={navigate} />
      <div className="fixed inset-0 z-0">
        <section className="relative h-screen overflow-hidden">
          <img
            src={imgApp}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: "51% center" }}
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative mx-auto max-w-[1320px] px-4 h-full flex flex-col items-center justify-center text-center translate-y-10">
            <div className="bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-5">
              <p className="text-xs sm:text-sm text-white/90">
                Lebih dari 150.000 Koleksi Tersedia
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight">
              Online Public Access Catalog
            </h1>
            <p className="text-base sm:text-lg lg:text-[20px] text-white/80 leading-7 mt-3 px-4">
              Akses ribuan buku, jurnal, dan materi penelitian
            </p>

            <div className="mt-8 mb-4 w-full max-w-[768px]">
              <SearchBox
                value={heroSearch}
                onChange={setHeroSearch}
                onSubmit={() => goToCollection(heroSearch)}
                placeholder="Cari buku, jurnal, artikel, atau penulis..."
                buttonLabel="Cari"
              />
            </div>

            <button
              onClick={() => setPage("advanced")}
              className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-2"
            >
              Gunakan Pencarian Lanjutan -&gt;
            </button>

            <div className="flex flex-col items-center gap-3 mt-8 mb-8">
              <p className="text-sm text-white/70">Kata Kunci Populer</p>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {["Semua", "Buku", "Jurnal", "Skripsi"].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => {
                      setActiveKeyword(kw);
                      goToCollection(kw === "Semua" ? "" : kw);
                    }}
                    className="h-10 px-5 rounded-full text-sm font-medium text-white border border-white/20 transition-all duration-300  hover:scale-105 hover:border-white/40"
                    style={{
                      backgroundColor:
                        activeKeyword === kw
                          ? "#f2994a"
                          : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-4 w-full max-w-[896px]">
              {[
                { number: "150,000+", label: "KOLEKSI DIGITAL" },
                { number: "45,000+", label: "ANGGOTA AKTIF" },
                { number: "1,200+", label: "KOLEKSI BARU" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[10px] p-5 text-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1.601px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <p className="text-2xl sm:text-[30px] font-bold text-white leading-tight">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-white/70 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="h-screen" />

      <div
        className="
    relative
    z-10
    bg-white
    rounded-t-[48px]
    -mt-16
    shadow-[0_-20px_60px_rgba(0,0,0,0.12)]
  "
      >
        <div className="sticky top-16 md:top-20 z-40 w-full bg-white border-b border-[#e0e0e0] shadow-sm">
          <div className="mx-auto max-w-[1320px] px-4 py-3 flex justify-center">
            <div className="w-full max-w-[768px]">
              <SearchBox
                value={quickSearch}
                onChange={setQuickSearch}
                onSubmit={() => goToCollection(quickSearch)}
                placeholder="Quick search..."
                buttonLabel="Search"
              />
            </div>
          </div>
        </div>

        <section
          className="py-12 md:py-16"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="mx-auto max-w-[1320px] px-4">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight text-[#092c4c]">
                  Rekomendasi Buku
                </h2>
                <p className="text-base sm:text-[18px] text-[#4f4f4f] leading-7 mt-2">
                  Pilihan yang dikurasi khusus untuk anda
                </p>
              </div>
              <button
                onClick={() => setPage("collection")}
                className="flex-shrink-0 text-sm sm:text-base font-semibold text-white px-4 sm:px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity mt-1"
                style={{ backgroundColor: "#092c4c" }}
              >
                Cek Daftar Koleksi
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onSelect={setSelectedBook}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1320px] px-4">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight text-[#092c4c]">
                Berita Terbaru
              </h2>
              <p className="text-base sm:text-[18px] text-[#4f4f4f] leading-7 mt-2">
                Tetap terinformasi mengenai kegiatan dan acara perpustakaan
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {news.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedNews(item)}
                  className="bg-white rounded-[10px] overflow-hidden cursor-pointer group text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    border: "1.601px solid #e0e0e0",
                    boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <ImageWithFallback
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg sm:text-[22px] font-bold text-[#092c4c] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#4f4f4f] leading-7 mt-2">
                      {item.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <AppFooter onNavigate={navigate} />
      </div>
    </div>
  );
}
