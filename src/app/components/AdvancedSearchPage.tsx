import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../../imports/HighFidelityPrototypeCreation/svg-k618aisq46";
import { AppHeader, AppFooter, Page } from "./AppShell";
import { allBooks, type Book } from "./BookCollectionPage";

type Operator = "AND" | "OR" | "NOT";
type Field =
  | "Judul"
  | "Penulis"
  | "Subjek"
  | "Jenis Koleksi"
  | "Genre"
  | "Tahun Terbit";
type Condition = {
  id: number;
  operator: Operator;
  field: Field;
  value: string;
};

const fields: Field[] = [
  "Judul",
  "Penulis",
  "Subjek",
  "Jenis Koleksi",
  "Genre",
  "Tahun Terbit",
];
const operators: Operator[] = ["AND", "OR", "NOT"];
const sortOptions = ["Relevansi", "Terbaru", "Terlama", "A–Z", "Z–A"];
const operatorColor: Record<Operator, string> = {
  AND: "#092c4c",
  OR: "#f2994a",
  NOT: "#e74c3c",
};

function matchBook(book: Book, field: Field, value: string): boolean {
  if (!value.trim()) return true;
  const v = value.toLowerCase();
  switch (field) {
    case "Judul":
      return book.title.toLowerCase().includes(v);
    case "Penulis":
      return book.author.toLowerCase().includes(v);
    case "Subjek":
      return book.subject?.toLowerCase().includes(v) ?? false;
    case "Jenis Koleksi":
      return book.type.toLowerCase().includes(v);
    case "Genre":
      return book.genre.toLowerCase().includes(v);
    case "Tahun Terbit":
      return String(book.year).includes(v);
    default:
      return true;
  }
}

function applyConditions(books: Book[], conditions: Condition[]): Book[] {
  const filled = conditions.filter((c) => c.value.trim() !== "");
  if (filled.length === 0) return [];
  return books.filter((book) => {
    let result = matchBook(book, filled[0].field, filled[0].value);
    for (let i = 1; i < filled.length; i++) {
      const cond = filled[i];
      const matches = matchBook(book, cond.field, cond.value);
      if (cond.operator === "AND") result = result && matches;
      else if (cond.operator === "OR") result = result || matches;
      else if (cond.operator === "NOT") result = result && !matches;
    }
    return result;
  });
}

function sortBooks(books: Book[], sort: string): Book[] {
  return [...books].sort((a, b) => {
    if (sort === "Terbaru") return b.year - a.year;
    if (sort === "Terlama") return a.year - b.year;
    if (sort === "A–Z") return a.title.localeCompare(b.title);
    if (sort === "Z–A") return b.title.localeCompare(a.title);
    return 0;
  });
}

function SearchIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 23.9951 23.9951" fill="none">
      <path
        d={svgPaths.p258e16b0}
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99959"
      />
      <path
        d={svgPaths.p20c80400}
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99959"
      />
    </svg>
  );
}

function ResultCard({
  book,
  onSelect,
}: {
  book: Book;
  onSelect?: (book: Book) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(book)}
      className="bg-white rounded-[10px] overflow-hidden flex cursor-pointer hover:shadow-lg transition-shadow text-left"
      style={{
        border: "1.601px solid #e0e0e0",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="flex-shrink-0 w-24 sm:w-[140px] relative"
        style={{ minHeight: 150 }}
      >
        <ImageWithFallback
          src={book.cover}
          alt={book.title}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className="text-[11px] font-medium text-[#4f4f4f] px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: "#e0e0e0" }}
          >
            {book.genre}
          </span>
          <span
            className="text-[11px] font-medium text-white px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: "#092c4c" }}
          >
            {book.type}
          </span>
        </div>
        <h3 className="text-base sm:text-[18px] font-bold text-[#092c4c] leading-snug mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-[#4f4f4f] leading-5 mb-1">{book.author}</p>
        <p className="text-xs text-[#bdbdbd]">
          {book.subject} · {book.year}
        </p>
      </div>
    </button>
  );
}

// ── Search form extracted as top-level component to avoid remount issues ──────

type SearchFormProps = {
  conditions: Condition[];
  sort: string;
  onUpdateCondition: (id: number, patch: Partial<Condition>) => void;
  onAddCondition: () => void;
  onRemoveCondition: () => void;
  onSortChange: (sort: string) => void;
  onSearch: () => void;
  onClear: () => void;
};

function SearchForm({
  conditions,
  sort,
  onUpdateCondition,
  onAddCondition,
  onRemoveCondition,
  onSortChange,
  onSearch,
  onClear,
}: SearchFormProps) {
  return (
    <div
      className="bg-white rounded-[10px] p-5 sm:p-6"
      style={{
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="text-[18px] font-bold text-[#092c4c] leading-6 mb-5">
        Filter Pencarian
      </h2>

      <div className="space-y-4">
        {conditions.map((cond, index) => (
          <div key={cond.id}>
            {index > 0 && (
              <div className="flex gap-1 mb-2">
                {operators.map((op) => (
                  <button
                    key={op}
                    onClick={() => onUpdateCondition(cond.id, { operator: op })}
                    className="flex-1 text-xs font-bold py-1.5 rounded-lg transition-colors border"
                    style={
                      cond.operator === op
                        ? {
                            backgroundColor: operatorColor[op],
                            color: "#fff",
                            borderColor: operatorColor[op],
                          }
                        : {
                            backgroundColor: "#f5f5f5",
                            color: "#4f4f4f",
                            borderColor: "#e0e0e0",
                          }
                    }
                  >
                    {op}
                  </button>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <select
                value={cond.field}
                onChange={(e) =>
                  onUpdateCondition(cond.id, { field: e.target.value as Field })
                }
                className="w-full text-sm text-[#092c4c] font-medium border border-[#e0e0e0] rounded-lg px-3 py-2.5 outline-none bg-white cursor-pointer hover:border-[#092c4c] transition-colors appearance-auto"
              >
                {fields.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
              <input
                type="text"
                value={cond.value}
                onChange={(e) =>
                  onUpdateCondition(cond.id, { value: e.target.value })
                }
                placeholder={`Masukkan ${cond.field.toLowerCase()}...`}
                className="w-full text-sm text-[#333] bg-white border border-[#e0e0e0] rounded-lg px-3 py-2.5 outline-none hover:border-[#092c4c] focus:border-[#092c4c] transition-colors"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onAddCondition}
          className="flex items-center gap-1.5 text-sm font-medium text-white px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#092c4c" }}
        >
          <span className="text-base leading-none">+</span> Tambah Kondisi
        </button>
        {conditions.length > 1 && (
          <button
            onClick={onRemoveCondition}
            className="flex items-center gap-1.5 text-sm font-medium text-[#e74c3c] px-3 py-2 rounded-lg border border-[#e74c3c] hover:bg-red-50 transition-colors"
          >
            <span className="text-base leading-none">−</span> Hapus
          </button>
        )}
      </div>

      {conditions.length > 1 && (
        <div className="mt-3 p-3 rounded-lg bg-[#f5f5f5] text-xs text-[#4f4f4f] leading-relaxed">
          <span className="font-semibold text-[#092c4c]">Query:</span>{" "}
          {conditions.map((c, i) => (
            <span key={c.id}>
              {i > 0 && (
                <span
                  className="font-bold mx-1"
                  style={{ color: operatorColor[c.operator] }}
                >
                  {c.operator}
                </span>
              )}
              <span>
                {c.field}
                {c.value ? ` = "${c.value}"` : " = …"}
              </span>
            </span>
          ))}
        </div>
      )}

      <div className="border-t border-[#e0e0e0] my-5" />

      <div className="mb-5">
        <label className="text-sm font-semibold text-[#092c4c] uppercase tracking-wide block mb-2">
          Urutkan Hasil
        </label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full text-sm text-[#092c4c] font-medium border border-[#e0e0e0] rounded-lg px-3 py-2.5 outline-none bg-white cursor-pointer hover:border-[#092c4c] transition-colors appearance-auto"
        >
          {sortOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <button
        onClick={onSearch}
        className="w-full text-base font-semibold text-white py-3 rounded-lg hover:opacity-90 transition-opacity mb-2"
        style={{ backgroundColor: "#092c4c" }}
      >
        Cari
      </button>
      <button
        onClick={onClear}
        className="w-full text-base font-medium text-[#4f4f4f] py-3 rounded-lg border border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors"
      >
        Bersihkan
      </button>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

type Props = {
  onNavigate: (page: Page) => void;
  onBookSelect?: (book: Book) => void;
};

export function AdvancedSearchPage({ onNavigate, onBookSelect }: Props) {
  const [quickSearch, setQuickSearch] = useState("");
  const [conditions, setConditions] = useState<Condition[]>([
    { id: 1, operator: "AND", field: "Judul", value: "" },
  ]);
  const [sort, setSort] = useState("Relevansi");
  const [results, setResults] = useState<Book[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const nextId = () => Math.max(...conditions.map((c) => c.id)) + 1;

  const addCondition = () =>
    setConditions((prev) => [
      ...prev,
      { id: nextId(), operator: "AND", field: "Judul", value: "" },
    ]);
  const removeCondition = () => {
    if (conditions.length > 1) setConditions((prev) => prev.slice(0, -1));
  };
  const updateCondition = (id: number, patch: Partial<Condition>) =>
    setConditions((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    );

  const handleSearch = () => {
    setResults(sortBooks(applyConditions(allBooks, conditions), sort));
    setHasSearched(true);
    setFormOpen(false);
  };

  const handleClear = () => {
    setConditions([{ id: 1, operator: "AND", field: "Judul", value: "" }]);
    setSort("Relevansi");
    setResults(null);
    setHasSearched(false);
    setQuickSearch("");
  };

  const formProps: SearchFormProps = {
    conditions,
    sort,
    onUpdateCondition: updateCondition,
    onAddCondition: addCondition,
    onRemoveCondition: removeCondition,
    onSortChange: setSort,
    onSearch: handleSearch,
    onClear: handleClear,
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Inter',sans-serif]">
      <AppHeader
        activePage="advanced"
        onNavigate={(p) => onNavigate(p as "home" | "collection")}
      />

      {/* Hero bar */}
      <div style={{ backgroundColor: "#092c4c" }} className="py-8 md:py-10">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-white transition-colors"
            >
              Beranda
            </button>
            <span>›</span>
            <span className="text-white">Pencarian Lanjutan</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight">
            Pencarian Lanjutan
          </h1>
          <p className="text-base sm:text-[18px] text-white/70 leading-7 mt-1">
            Temukan koleksi dengan kombinasi kriteria pencarian yang lebih
            spesifik
          </p>

          <div
            className="mt-5 bg-white flex items-center rounded-[10px] p-2 max-w-[768px]"
            style={{ boxShadow: "0px 25px 25px rgba(0,0,0,0.15)" }}
          >
            <div className="pl-3 pr-2 flex-shrink-0">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              placeholder="Cari cepat semua koleksi..."
              className="flex-1 px-3 py-3 text-sm sm:text-base text-[rgba(51,51,51,0.7)] outline-none bg-transparent min-w-0"
            />
            <button
              className="text-white text-sm sm:text-base font-semibold leading-6 rounded-lg px-4 sm:px-6 py-3 hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
              style={{ backgroundColor: "#092c4c" }}
            >
              Cari
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-4 py-6 sm:py-8">
        {/* Mobile: collapsible filter */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setFormOpen((o) => !o)}
            className="w-full flex items-center justify-between bg-white rounded-[10px] p-4 text-[#092c4c] font-semibold text-base"
            style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.08)" }}
          >
            <span>Filter Pencarian</span>
            {formOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {formOpen && (
            <div className="mt-3">
              <SearchForm {...formProps} />
            </div>
          )}
        </div>

        <div className="flex gap-6 items-start">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-[340px] flex-shrink-0">
            <div className="sticky top-24">
              <SearchForm {...formProps} />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {!hasSearched ? (
              <div
                className="bg-white rounded-[10px] flex flex-col items-center justify-center py-16 sm:py-24 text-center px-4"
                style={{ boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)" }}
              >
                <div className="text-[56px] sm:text-[64px] mb-4">🔍</div>
                <p className="text-lg font-semibold text-[#092c4c]">
                  Mulai Pencarian Lanjutan
                </p>
                <p className="text-sm text-[#4f4f4f] mt-2 max-w-xs leading-relaxed">
                  Isi kondisi pencarian{" "}
                  <span className="lg:hidden">di atas</span>
                  <span className="hidden lg:inline">di sebelah kiri</span>,
                  lalu tekan <strong>Cari</strong>.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-sm w-full">
                  {[
                    { op: "AND", desc: "Hasil harus memenuhi semua kondisi" },
                    { op: "OR", desc: "Hasil memenuhi salah satu kondisi" },
                    { op: "NOT", desc: "Hasil tidak mengandung kondisi ini" },
                  ].map(({ op, desc }) => (
                    <div
                      key={op}
                      className="p-3 rounded-lg border border-[#e0e0e0] bg-[#f5f5f5]"
                    >
                      <span
                        className="text-xs font-bold text-white px-2 py-0.5 rounded block mb-1 text-center"
                        style={{
                          backgroundColor: operatorColor[op as Operator],
                        }}
                      >
                        {op}
                      </span>
                      <p className="text-[10px] text-[#4f4f4f] leading-snug text-center">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : results && results.length > 0 ? (
              <>
                <div className="mb-4">
                  <p className="text-sm text-[#4f4f4f]">
                    Ditemukan{" "}
                    <span className="font-semibold text-[#092c4c]">
                      {results.length} koleksi
                    </span>{" "}
                    yang sesuai
                  </p>
                </div>
                <div className="space-y-4">
                  {results.map((book) => (
                    <ResultCard key={book.id} book={book} onSelect={onBookSelect} />
                  ))}
                </div>
              </>
            ) : (
              <div
                className="bg-white rounded-[10px] flex flex-col items-center justify-center py-16 sm:py-24 text-center px-4"
                style={{ boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)" }}
              >
                <div className="text-[56px] sm:text-[64px] mb-4">📭</div>
                <p className="text-lg font-semibold text-[#092c4c]">
                  Koleksi tidak ditemukan
                </p>
                <p className="text-sm text-[#4f4f4f] mt-2 max-w-xs leading-relaxed">
                  Coba ubah kondisi pencarian atau gunakan operator{" "}
                  <strong>OR</strong> untuk hasil yang lebih luas.
                </p>
                <button
                  onClick={handleClear}
                  className="mt-4 text-sm font-medium text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#092c4c" }}
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <AppFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}
