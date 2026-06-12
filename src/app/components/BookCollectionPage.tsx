import { useEffect, useState } from "react";
import { Filter, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../../imports/HighFidelityPrototypeCreation/svg-k618aisq46";
import { AppHeader, AppFooter, Page } from "./AppShell";
import imgBook0 from "../../imports/HighFidelityPrototypeCreation/ee19ae52921f656297a9cfa9abb0f32bebe6b426.png";
import imgBook1 from "../../imports/HighFidelityPrototypeCreation/137ca34175f4cdc9b50bda19774356bfc96660b1.png";
import imgBook2 from "../../imports/HighFidelityPrototypeCreation/cebe2cef357d304068b9b08cedc9f575d765ead7.png";
import imgBook3 from "../../imports/HighFidelityPrototypeCreation/e18fd9d7d5fe4e2ac4a41cb4e45ffe2af29f891e.png";
import imgBook4 from "../../imports/HighFidelityPrototypeCreation/f6d3d3f29afca69ace2309a09bd45017c72e6df1.png";
import imgBook5 from "../../imports/HighFidelityPrototypeCreation/8f2fd68dd76542639900661f12b93d8799fbeea1.png";
import imgBook6 from "../../imports/HighFidelityPrototypeCreation/9d35ca7066113d7461a263b5fb93290568c4e0df.png";
import imgBook7 from "../../imports/HighFidelityPrototypeCreation/c86c92f5a290a5e8453c8368d8193cdf3d6b7230.png";
import imgMatahari from "../../imports/63284537.jpg";
import imgManajemenStrategi from "../../imports/6940d4eb-74b2-493e-80d5-3b226c4874d9.jpg";
import imgKebijakanPublik from "../../imports/BLK_KPPPDI202116386.png";
import imgPulang from "../../imports/pulang_tere_liye.jpg";
import imgTafsirAlMisbah from "../../imports/2869593.jpg";
import imgSejarahIndonesia from "../../imports/335-scaled.jpg";
import imgAlphaGirl from "../../imports/THE_ALPHA_GIRLS_GUIDE.png";
import imgPsychMoney from "../../imports/psychology_of_money.jfif.png";
import imgNoCover from "../../imports/no-cover.svg";
import imgBook17 from "../../imports/covers/book_17.jpg";
import imgBook18 from "../../imports/covers/book_18.jpg";
import imgBook19 from "../../imports/covers/book_19.jpg";
import imgBook20 from "../../imports/covers/book_20.jpg";
import imgBook21 from "../../imports/covers/book_21.jpg";
import imgBook22 from "../../imports/covers/book_22.jpg";
import imgBook23 from "../../imports/covers/book_23.jpg";
import imgBook24 from "../../imports/covers/book_24.jpg";
import imgBook25 from "../../imports/covers/book_25.jpg";
import imgBook26 from "../../imports/covers/book_26.jpg";
import imgBook27 from "../../imports/covers/book_27.jpg";
import imgBook28 from "../../imports/covers/book_28.jpg";
import imgBook29 from "../../imports/covers/book_29.jpg";
import imgBook30 from "../../imports/covers/book_30.jpg";
import imgBook31 from "../../imports/covers/book_31.jpg";
import imgBook32 from "../../imports/covers/book_32.jpg";
import imgBook33 from "../../imports/covers/book_33.jpg";
import imgBook34 from "../../imports/covers/book_34.jpg";
import imgBook35 from "../../imports/covers/book_35.jpg";
import imgBook36 from "../../imports/covers/book_36.jpg";
import imgBook37 from "../../imports/covers/book_37.jpg";
import imgBook38 from "../../imports/covers/book_38.jpg";
import imgBook39 from "../../imports/covers/book_39.jpg";
import imgBook40 from "../../imports/covers/book_40.jpg";
import imgBook41 from "../../imports/covers/book_41.jpg";
import imgBook42 from "../../imports/covers/book_42.jpg";
import imgBook43 from "../../imports/covers/book_43.jpg";
import imgBook44 from "../../imports/covers/book_44.jpg";
import imgBook45 from "../../imports/covers/book_45.jpg";
import imgBook46 from "../../imports/covers/book_46.jpg";
import imgBook47 from "../../imports/covers/book_47.jpg";
import imgBook48 from "../../imports/covers/book_48.jpg";
import imgBook49 from "../../imports/covers/book_49.jpg";
import imgBook50 from "../../imports/covers/book_50.jpg";
import imgBook51 from "../../imports/covers/book_51.jpg";

export type CollectionType =
  | "Buku"
  | "Jurnal"
  | "Skripsi"
  | "Tesis"
  | "Disertasi"
  | "Laporan"
  | "Prosiding";
export type Book = {
  id: number;
  cover: string;
  type: CollectionType;
  genre: string;
  title: string;
  author: string;
  year: number;
  subject?: string;
  description?: string;
};

export const allBooks: Book[] = [
  {
    id: 1,
    cover: imgBook0,
    type: "Buku",
    genre: "Fiksi",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    year: 2017,
    description: "Novel yang mengisahkan perjalanan seorang jurnalis dan misteri kapal yang tenggelam, berpadu antara sejarah Indonesia dan drama keluarga.",
  },
  {
    id: 2,
    cover: imgBook1,
    type: "Buku",
    genre: "Sains",
    title: "What Is Science?",
    author: "Elof Axel Carlson",
    year: 2019,
    description: "Pengantar sains yang membahas metode ilmiah, sejarah penemuan, dan peran ilmu pengetahuan dalam memahami dunia.",
  },
  {
    id: 3,
    cover: imgBook2,
    type: "Buku",
    genre: "Sejarah",
    title: "Gajah Mada: Sistem Politik",
    author: "Enung Nurhayati",
    year: 2020,
    description: "Kajian sejarah tentang politik Gajah Mada dan strategi penyatuan Nusantara melalui pendekatan kepemimpinan.",
  },
  {
    id: 4,
    cover: imgBook3,
    type: "Buku",
    genre: "Teknologi",
    title: "Basis Data Relasional",
    author: "Ridho Rahman Hariadi",
    year: 2022,
    description: "Buku teknologi yang menjelaskan konsep relasional, desain tabel, dan praktik manajemen basis data modern.",
  },
  {
    id: 5,
    cover: imgBook4,
    type: "Buku",
    genre: "Bisnis & Ekonomi",
    title: "Akuntansi Manajemen",
    author: "Rita Puspaningsih",
    year: 2021,
    description: "Buku bisnis yang membahas teknik akuntansi untuk perencanaan, kontrol biaya, dan pengambilan keputusan manajerial.",
  },
  {
    id: 6,
    cover: imgBook5,
    type: "Buku",
    genre: "Administrasi",
    title: "Manajemen Sekolah Inklusif",
    author: "Sowiyah",
    year: 2018,
    description: "Panduan administrasi untuk menciptakan lingkungan sekolah inklusif yang mendukung siswa beragam.",
  },
  {
    id: 7,
    cover: imgBook6,
    type: "Buku",
    genre: "Agama",
    title: "The Visual Fiqh",
    author: "Syekh Salim Al-Hadhrami",
    year: 2023,
    description: "Buku agama yang menyajikan prinsip fikih secara visual dan praktis untuk kemudahan pemahaman sehari-hari.",
  },
  {
    id: 8,
    cover: imgBook7,
    type: "Buku",
    genre: "Fiksi",
    title: "Not Quite Dead Yet",
    author: "Holly Jackson",
    year: 2024,
    description: "Thriller remaja dengan misteri, ketegangan psikologis, dan konflik keluarga yang memikat.",
  },
  {
    id: 9,
    cover: imgPsychMoney,
    type: "Buku",
    genre: "Bisnis & Ekonomi",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    description: "Buku ekonomi perilaku yang mengeksplorasi hubungan emosional kita dengan uang dan keputusan finansial.",
  },
  {
    id: 10,
    cover: imgAlphaGirl,
    type: "Buku",
    genre: "Self Improvement",
    title: "The Alpha Girl's Guide",
    author: "Henry Manampiring",
    year: 2020,
    description: "Buku self improvement yang menginspirasi perempuan untuk percaya diri, mandiri, dan berani mengambil peran.",
  },
  {
    id: 11,
    cover: imgPulang,
    type: "Buku",
    genre: "Fiksi",
    title: "Pulang",
    author: "Tere Liye",
    year: 2015,
    description: "Novel emosional tentang perjalanan kembali ke rumah, hubungan keluarga, dan makna pulang dalam hidup.",
  },
  {
    id: 12,
    cover: imgSejarahIndonesia,
    type: "Buku",
    genre: "Sejarah",
    title: "Sejarah Indonesia Modern",
    author: "M.C. Ricklefs",
    year: 2016,
    description: "Buku sejarah yang menelusuri perkembangan Indonesia modern lewat peristiwa politik dan sosial penting.",
  },
  {
    id: 13,
    cover: imgManajemenStrategi,
    type: "Buku",
    genre: "Bisnis & Ekonomi",
    title: "Manajemen Strategi",
    author: "Fred R. David",
    year: 2019,
    description: "Buku bisnis yang mengulas formulasi strategi, analisis lingkungan, dan implementasi rencana organisasi.",
  },
  {
    id: 14,
    cover: imgKebijakanPublik,
    type: "Buku",
    genre: "Administrasi",
    title: "Kebijakan Publik",
    author: "Riant Nugroho",
    year: 2017,
    description: "Buku administrasi yang membahas perumusan dan evaluasi kebijakan publik serta dampaknya pada masyarakat.",
  },
  {
    id: 15,
    cover: imgTafsirAlMisbah,
    type: "Buku",
    genre: "Agama",
    title: "Tafsir Al-Misbah",
    author: "M. Quraish Shihab",
    year: 2002,
    description: "Tafsir Al-Qur’an yang mendalam dengan konteks modern, ditulis oleh M. Quraish Shihab.",
  },
  {
    id: 16,
    cover: imgMatahari,
    type: "Buku",
    genre: "Fiksi",
    title: "Matahari",
    author: "Tere Liye",
    year: 2016,
    description: "Novel Tere Liye tentang persahabatan, impian, dan dinamika remaja di lingkungan sekolah.",
  },
  {
    id: 17,
    cover: imgBook17,
    type: "Buku",
    genre: "Fiksi",
    title: "Hujan",
    author: "Tere Liye",
    year: 2016,
    description: "Cerita Tere Liye tentang cinta, kehilangan, dan harapan dalam kisah emosional para tokoh remaja.",
  },
  {
    id: 18,
    cover: imgBook18,
    type: "Buku",
    genre: "Fiksi",
    title: "Tentang Kamu",
    author: "Tere Liye",
    year: 2016,
    description: "Novel roman remaja yang mengeksplorasi identitas, persahabatan, dan cinta pertama.",
  },
  {
    id: 19,
    cover: imgBook19,
    type: "Buku",
    genre: "Fiksi",
    title: "Rindu",
    author: "Tere Liye",
    year: 2014,
    description: "Cerita tentang kerinduan mendalam, perjalanan pribadi, dan hubungan antar karakter dalam suasana introspektif.",
  },
  {
    id: 20,
    cover: imgBook20,
    type: "Buku",
    genre: "Fiksi",
    title: "Pergi",
    author: "Tere Liye",
    year: 2018,
    description: "Novel tentang perpisahan, perubahan hidup, dan pencarian makna di babak baru kehidupan.",
  },
  {
    id: 21,
    cover: imgBook21,
    type: "Buku",
    genre: "Fiksi",
    title: "Bumi",
    author: "Tere Liye",
    year: 2014,
    description: "Novel fiksi yang menggabungkan persahabatan, konflik, dan pencarian arti hidup.",
  },
  {
    id: 22,
    cover: imgBook22,
    type: "Buku",
    genre: "Fiksi",
    title: "Bulan",
    author: "Tere Liye",
    year: 2015,
    description: "Kisah emosional tentang keindahan, rindu, dan perubahan dalam kehidupan sehari-hari.",
  },
  {
    id: 23,
    cover: imgBook23,
    type: "Buku",
    genre: "Fiksi",
    title: "Bintang",
    author: "Tere Liye",
    year: 2017,
    description: "Novel yang mengangkat harapan, petualangan, dan hubungan personal dalam latar cerita inspiratif.",
  },
  {
    id: 24,
    cover: imgBook24,
    type: "Buku",
    genre: "Fiksi",
    title: "Selamat Tinggal",
    author: "Tere Liye",
    year: 2020,
    description: "Cerita tentang perpisahan, penerimaan, dan perjalanan emosi di tengah perubahan hidup.",
  },
  {
    id: 25,
    cover: imgBook25,
    type: "Buku",
    genre: "Sastra",
    title: "Pulang",
    author: "Leila S. Chudori",
    year: 2012,
    description: "Novel emosional tentang perjalanan kembali ke rumah, hubungan keluarga, dan makna pulang dalam hidup.",
  },
  {
    id: 26,
    cover: imgBook26,
    type: "Buku",
    genre: "Sastra",
    title: "9 Dari Nadira",
    author: "Leila S. Chudori",
    year: 2009,
    description: "Kumpulan cerpen yang menelusuri dinamika perempuan dan identitas dalam konteks masyarakat Indonesia.",
  },
  {
    id: 27,
    cover: imgBook27,
    type: "Buku",
    genre: "Sastra",
    title: "Malam Terakhir",
    author: "Leila S. Chudori",
    year: 1989,
    description: "Karya sastra yang penuh refleksi tentang akhir, memori, dan konflik batin tokoh-tokohnya.",
  },
  {
    id: 28,
    cover: imgBook28,
    type: "Buku",
    genre: "Sejarah",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    year: 1980,
    description: "Novel fiksi yang menggabungkan persahabatan, konflik, dan pencarian arti hidup.",
  },
  {
    id: 29,
    cover: imgBook29,
    type: "Buku",
    genre: "Sejarah",
    title: "Anak Semua Bangsa",
    author: "Pramoedya Ananta Toer",
    year: 1980,
    description: "Karya sejarah sastra yang melanjutkan kisah perjuangan, politik, dan perubahan sosial kolonialisme.",
  },
  {
    id: 30,
    cover: imgBook30,
    type: "Buku",
    genre: "Sejarah",
    title: "Jejak Langkah",
    author: "Pramoedya Ananta Toer",
    year: 1985,
    description: "Novel yang menelusuri perjalanan hidup tokoh wartawan di tengah pergolakan politik dan sejarah.",
  },
  {
    id: 31,
    cover: imgBook31,
    type: "Buku",
    genre: "Sejarah",
    title: "Rumah Kaca",
    author: "Pramoedya Ananta Toer",
    year: 1988,
    description: "Kritik sosial yang menggambarkan ketegangan antara kebebasan dan kekuasaan dalam masyarakat kolonial.",
  },
  {
    id: 32,
    cover: imgBook32,
    type: "Buku",
    genre: "Sastra",
    title: "Gadis Pantai",
    author: "Pramoedya Ananta Toer",
    year: 1962,
    description: "Novel sastra tentang cinta, konflik keluarga, dan perjuangan perempuan di pesisir Indonesia.",
  },
  {
    id: 33,
    cover: imgBook33,
    type: "Buku",
    genre: "Sastra",
    title: "Perburuan",
    author: "Pramoedya Ananta Toer",
    year: 1950,
    description: "Karya sastra yang mengombinasikan ketegangan dan realitas sosial dalam cerita pascakolonial.",
  },
  {
    id: 34,
    cover: imgBook34,
    type: "Buku",
    genre: "Sastra",
    title: "Bukan Pasar Malam",
    author: "Pramoedya Ananta Toer",
    year: 1951,
    description: "Kisah urban yang memotret kehidupan dan konflik batin seorang lelaki dalam masyarakat modern.",
  },
  {
    id: 35,
    cover: imgBook35,
    type: "Buku",
    genre: "Fiksi",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    year: 2005,
    description: "Novel inspiratif tentang semangat belajar, persahabatan, dan impian anak-anak di Belitung.",
  },
  {
    id: 36,
    cover: imgBook36,
    type: "Buku",
    genre: "Fiksi",
    title: "Sang Pemimpi",
    author: "Andrea Hirata",
    year: 2006,
    description: "Novel lanjutan yang menggambarkan perjuangan, harapan, dan mimpi besar sahabat-sahabat muda.",
  },
  {
    id: 37,
    cover: imgBook37,
    type: "Buku",
    genre: "Fiksi",
    title: "Edensor",
    author: "Andrea Hirata",
    year: 2007,
    description: "Kisah petualangan dan pencarian jati diri dalam latar budaya dan nostalgia perjalanan.",
  },
  {
    id: 38,
    cover: imgBook38,
    type: "Buku",
    genre: "Fiksi",
    title: "Maryamah Karpov",
    author: "Andrea Hirata",
    year: 2008,
    description: "Karya fiksi oleh Andrea Hirata yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 39,
    cover: imgBook39,
    type: "Buku",
    genre: "Fiksi",
    title: "Ayah",
    author: "Andrea Hirata",
    year: 2015,
    description: "Karya fiksi oleh Andrea Hirata yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 40,
    cover: imgBook40,
    type: "Buku",
    genre: "Fiksi",
    title: "Orang-Orang Biasa",
    author: "Andrea Hirata",
    year: 2019,
    description: "Karya fiksi oleh Andrea Hirata yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 41,
    cover: imgBook41,
    type: "Buku",
    genre: "Fiksi",
    title: "Guru Aini",
    author: "Andrea Hirata",
    year: 2020,
    description: "Karya fiksi oleh Andrea Hirata yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 42,
    cover: imgBook42,
    type: "Buku",
    genre: "Sastra",
    title: "Cantik Itu Luka",
    author: "Eka Kurniawan",
    year: 2002,
    description: "Karya sastra oleh Eka Kurniawan yang mengeksplorasi konteks budaya dan nuansa bahasa.",
  },
  {
    id: 43,
    cover: imgBook43,
    type: "Buku",
    genre: "Sastra",
    title: "Lelaki Harimau",
    author: "Eka Kurniawan",
    year: 2004,
    description: "Karya sastra oleh Eka Kurniawan yang mengeksplorasi konteks budaya dan nuansa bahasa.",
  },
  {
    id: 44,
    cover: imgBook44,
    type: "Buku",
    genre: "Sastra",
    title: "Seperti Dendam, Rindu Harus Dibayar Tuntas",
    author: "Eka Kurniawan",
    year: 2014,
    description: "Cerita tentang kerinduan mendalam, perjalanan pribadi, dan hubungan antar karakter dalam suasana introspektif.",
  },
  {
    id: 45,
    cover: imgBook45,
    type: "Buku",
    genre: "Sastra",
    title: "O",
    author: "Eka Kurniawan",
    year: 2016,
    description: "Karya sastra oleh Eka Kurniawan yang mengeksplorasi konteks budaya dan nuansa bahasa.",
  },
  {
    id: 46,
    cover: imgBook46,
    type: "Buku",
    genre: "Fiksi",
    title: "Perahu Kertas",
    author: "Dee Lestari",
    year: 2009,
    description: "Karya fiksi oleh Dee Lestari yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 47,
    cover: imgBook47,
    type: "Buku",
    genre: "Fiksi",
    title: "Supernova: Ksatria, Puteri, dan Bintang Jatuh",
    author: "Dee Lestari",
    year: 2001,
    description: "Novel yang mengangkat harapan, petualangan, dan hubungan personal dalam latar cerita inspiratif.",
  },
  {
    id: 48,
    cover: imgBook48,
    type: "Buku",
    genre: "Fiksi",
    title: "Aroma Karsa",
    author: "Dee Lestari",
    year: 2018,
    description: "Karya fiksi oleh Dee Lestari yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 49,
    cover: imgBook49,
    type: "Buku",
    genre: "Fiksi",
    title: "Rectoverso",
    author: "Dee Lestari",
    year: 2008,
    description: "Karya fiksi oleh Dee Lestari yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.",
  },
  {
    id: 50,
    cover: imgBook50,
    type: "Buku",
    genre: "Nonfiksi",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: 2011,
    description:
      "Sebuah sejarah ringkas umat manusia yang menelusuri evolusi biologis, budaya, agama, dan ekonomi dari manusia purba sampai era modern.",
  },
  {
    id: 51,
    cover: imgBook51,
    type: "Buku",
    genre: "Nonfiksi",
    title: "Homo Deus: A Brief History of Tomorrow",
    author: "Yuval Noah Harari",
    year: 2015,
    description:
      "Eksplorasi kemungkinan masa depan manusia yang dipengaruhi kecerdasan buatan, bioteknologi, dan perubahan nilai-nilai sosial.",
  },
  {
    id: 52,
    cover: imgNoCover,
    type: "Buku",
    genre: "Nonfiksi",
    title: "21 Lessons for the 21st Century",
    author: "Yuval Noah Harari",
    year: 2018,
    description:
      "Kumpulan esai yang membahas tantangan global saat ini, mulai dari politik dan teknologi hingga identitas dan makna dalam abad ke-21.",
  },
  {
    id: 53,
    cover: imgNoCover,
    type: "Buku",
    genre: "Nonfiksi",
    title:
      "Nexus: A Brief History of Information Networks from the Stone Age to AI",
    author: "Yuval Noah Harari",
    year: 2024,
    description:
      "Sejarah jaringan informasi manusia, dari komunikasi awal hingga era internet dan kecerdasan buatan, dengan dampaknya pada masyarakat.",
  },
  {
    id: 54,
    cover: imgNoCover,
    type: "Buku",
    genre: "Self Improvement",
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    description:
      "Panduan praktis untuk membangun kebiasaan kecil yang konsisten dan menciptakan perubahan besar dalam produktivitas dan perilaku.",
  },
  {
    id: 55,
    cover: imgNoCover,
    type: "Buku",
    genre: "Bisnis & Ekonomi",
    title: "Same as Ever",
    author: "Morgan Housel",
    year: 2023,
    description:
      "Analisis tentang bagaimana kebiasaan lama dan pola konsumen tetap memengaruhi keputusan finansial dan perencanaan ekonomi modern.",
  },
  {
    id: 56,
    cover: imgNoCover,
    type: "Buku",
    genre: "Bisnis & Ekonomi",
    title: "The Art of Spending Money",
    author: "Morgan Housel",
    year: 2025,
    description:
      "Panduan tentang seni menggunakan uang secara bijak, termasuk strategi pengeluaran, perencanaan, dan nilai jangka panjang dalam kehidupan.",
  },
];

const jenisKoleksi = [
  "Semua",
  "Buku",
  "Jurnal",
  "Skripsi",
  "Tesis",
  "Disertasi",
  "Laporan",
  "Prosiding",
];
const genres = [
  "Semua",
  "Fiksi",
  "Sastra",
  "Sains",
  "Sejarah",
  "Teknologi",
  "Bisnis & Ekonomi",
  "Administrasi",
  "Agama",
  "Nonfiksi",
  "Self Improvement",
];
const sortOptions = ["Terbaru", "Terlama", "A-Z", "Z-A"];
const BOOKS_PER_PAGE = 8;

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

function ChevronLeftIcon({ color = "#092C4C" }: { color?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 23.9951 23.9951" fill="none">
      <path
        d={svgPaths.p214d54e0}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99959"
      />
    </svg>
  );
}

function ChevronRightIcon({ color = "#092C4C" }: { color?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 23.9951 23.9951" fill="none">
      <path
        d={svgPaths.paa7780}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99959"
      />
    </svg>
  );
}

function BookCard({
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
      className="bg-white rounded-[10px] overflow-hidden cursor-pointer group text-left w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      }}
    >
      <div className="relative overflow-hidden h-44 sm:h-56 md:h-64">
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
        <p className="text-[11px] text-[#bdbdbd] leading-4 mt-1">{book.year}</p>
      </div>
    </button>
  );
}

type Props = {
  onNavigate: (page: Page) => void;
  initialSearch?: string;
  onBookSelect?: (book: Book) => void;
};

export function BookCollectionPage({
  onNavigate,
  initialSearch = "",
  onBookSelect,
}: Props) {
  const [search, setSearch] = useState(initialSearch);
  const [activeJenis, setActiveJenis] = useState("Semua");
  const [activeGenre, setActiveGenre] = useState("Semua");
  const [sort, setSort] = useState("Terbaru");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentPage]);

  const filtered = allBooks
    .filter((b) => {
      const normalizedSearch = search.trim().toLowerCase();
      const matchJenis = activeJenis === "Semua" || b.type === activeJenis;
      const matchGenre = activeGenre === "Semua" || b.genre === activeGenre;
      const matchSearch =
        normalizedSearch === "" ||
        b.title.toLowerCase().includes(normalizedSearch) ||
        b.author.toLowerCase().includes(normalizedSearch);
      return matchJenis && matchGenre && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "Terbaru") return b.year - a.year;
      if (sort === "Terlama") return a.year - b.year;
      if (sort === "A-Z") return a.title.localeCompare(b.title);
      if (sort === "Z-A") return b.title.localeCompare(a.title);
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / BOOKS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * BOOKS_PER_PAGE,
    currentPage * BOOKS_PER_PAGE,
  );

  const handleJenis = (j: string) => {
    setActiveJenis(j);
    setCurrentPage(1);
  };
  const handleGenre = (g: string) => {
    setActiveGenre(g);
    setCurrentPage(1);
  };
  const handleSearch = (v: string) => {
    setSearch(v);
    setCurrentPage(1);
  };

  const pageNumbers: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    pageNumbers.push(1);
    if (currentPage > 3) pageNumbers.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    )
      pageNumbers.push(i);
    if (currentPage < totalPages - 2) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  const resetFilters = () => {
    handleSearch("");
    handleGenre("Semua");
    handleJenis("Semua");
  };

  const FilterPanel = () => (
    <div>
      <p className="text-sm font-semibold text-[#092c4c] uppercase tracking-wide mb-3">
        Jenis Koleksi
      </p>
      <ul className="space-y-1">
        {jenisKoleksi.map((j) => (
          <li key={j}>
            <button
              onClick={() => {
                handleJenis(j);
                setFilterOpen(false);
              }}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors font-medium ${
                activeJenis === j
                  ? "text-white"
                  : "text-[#4f4f4f] hover:bg-[#f5f5f5]"
              }`}
              style={activeJenis === j ? { backgroundColor: "#092c4c" } : {}}
            >
              {j}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-6 border-t border-[#e0e0e0]">
        <p className="text-sm font-semibold text-[#092c4c] uppercase tracking-wide mb-3">
          Kategori
        </p>
        <ul className="space-y-1">
          {genres.map((g) => (
            <li key={g}>
              <button
                onClick={() => {
                  handleGenre(g);
                  setFilterOpen(false);
                }}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors font-medium ${
                  activeGenre === g
                    ? "text-white"
                    : "text-[#4f4f4f] hover:bg-[#f5f5f5]"
                }`}
                style={activeGenre === g ? { backgroundColor: "#092c4c" } : {}}
              >
                {g}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <AppHeader activePage="collection" onNavigate={onNavigate} />

      <div style={{ backgroundColor: "#092c4c" }} className="py-8 md:py-10">
        <div className="mx-auto max-w-[1320px] px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight">
            Daftar Koleksi Buku
          </h1>
          <p className="text-base sm:text-[18px] text-white/70 leading-7 mt-1">
            {filtered.length} koleksi tersedia di Perpustakaan Digital
            Universitas Brawijaya
          </p>
        </div>
      </div>

      <div className="bg-white border-b border-[#e0e0e0] shadow-sm">
        <div className="mx-auto max-w-[1320px] px-4 py-3 flex flex-wrap items-center gap-3">
          <button
            className="lg:hidden flex items-center gap-2 text-sm font-medium text-[#092c4c] border border-[#e0e0e0] px-3 py-2.5 rounded-lg hover:border-[#092c4c] transition-colors flex-shrink-0"
            onClick={() => setFilterOpen(true)}
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <div
            className="flex items-center flex-1 min-w-0 bg-white rounded-[10px]"
            style={{ border: "1.601px solid #e0e0e0" }}
          >
            <div className="pl-3 pr-2 flex-shrink-0">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari judul, penulis, atau kata kunci..."
              className="flex-1 px-3 py-3 text-sm sm:text-base text-[#333] outline-none bg-transparent min-w-0"
            />
            {search && (
              <button
                onClick={() => handleSearch("")}
                className="pr-3 text-[#bdbdbd] hover:text-[#4f4f4f] flex-shrink-0"
                aria-label="Hapus pencarian"
              >
                x
              </button>
            )}
          </div>

          <button
            onClick={() => onNavigate("advanced")}
            className="hidden sm:block text-sm text-[#092c4c] hover:text-[#f2994a] transition-colors whitespace-nowrap underline underline-offset-2 flex-shrink-0"
          >
            Pencarian Lanjutan -&gt;
          </button>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="hidden sm:block text-sm text-[#4f4f4f] whitespace-nowrap">
              Urutkan:
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm text-[#092c4c] font-medium border border-[#e0e0e0] rounded-lg px-3 py-2.5 outline-none cursor-pointer hover:border-[#092c4c] transition-colors bg-white"
            >
              {sortOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#092c4c]">Filter</h2>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-[#4f4f4f] hover:text-[#092c4c]"
                aria-label="Tutup filter"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterPanel />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1320px] px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-20">
              <FilterPanel />
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {paginated.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-base font-medium text-[#4f4f4f] mb-4">
                  Tidak ada hasil
                </p>
                <p className="text-lg font-semibold text-[#092c4c]">
                  Koleksi tidak ditemukan
                </p>
                <p className="text-sm text-[#4f4f4f] mt-1">
                  Coba kata kunci atau filter yang berbeda
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-sm font-medium text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#092c4c" }}
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {paginated.map((book) => (
                  <BookCard key={book.id} book={book} onSelect={onBookSelect} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 mt-10 flex-wrap">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e0e0e0] hover:border-[#092c4c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Halaman sebelumnya"
                >
                  <ChevronLeftIcon />
                </button>

                {pageNumbers.map((p, i) =>
                  p === "..." ? (
                    <span
                      key={`ellipsis-${i}`}
                      className="w-9 h-9 flex items-center justify-center text-sm text-[#bdbdbd]"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors border ${
                        currentPage === p
                          ? "text-white border-transparent"
                          : "text-[#4f4f4f] border-[#e0e0e0] hover:border-[#092c4c]"
                      }`}
                      style={
                        currentPage === p ? { backgroundColor: "#092c4c" } : {}
                      }
                    >
                      {p}
                    </button>
                  ),
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e0e0e0] hover:border-[#092c4c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Halaman berikutnya"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            )}

            <p className="text-center text-xs text-[#bdbdbd] mt-3">
              Menampilkan{" "}
              {filtered.length === 0
                ? 0
                : Math.min(
                    (currentPage - 1) * BOOKS_PER_PAGE + 1,
                    filtered.length,
                  )}
              -{Math.min(currentPage * BOOKS_PER_PAGE, filtered.length)} dari{" "}
              {filtered.length} koleksi
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <AppFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}
