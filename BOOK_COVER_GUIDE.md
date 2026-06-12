# Panduan Menambahkan Cover Buku

## Ringkasan Masalah
Proyek ini memiliki 35+ buku yang belum memiliki cover image (menggunakan placeholder `imgNoCover`). Kami perlu menambahkan cover untuk setiap buku agar tampilan lebih menarik.

## Buku yang Perlu Cover (ID 17-51)

| ID | Judul | Penulis |
|----|-------|---------|
| 17 | Hujan | Tere Liye |
| 18 | Tentang Kamu | Tere Liye |
| 19 | Rindu | Tere Liye |
| 20 | Pergi | Tere Liye |
| 21 | Bumi | Tere Liye |
| 22 | Bulan | Tere Liye |
| 23 | Bintang | Tere Liye |
| 24 | Selamat Tinggal | Tere Liye |
| 25 | Pulang | Leila S. Chudori |
| 26 | 9 Dari Nadira | Leila S. Chudori |
| 27 | Malam Terakhir | Leila S. Chudori |
| 28 | Bumi Manusia | Pramoedya Ananta Toer |
| 29 | Anak Semua Bangsa | Pramoedya Ananta Toer |
| 30 | Jejak Langkah | Pramoedya Ananta Toer |
| 31 | Rumah Kaca | Pramoedya Ananta Toer |
| 32 | Gadis Pantai | Pramoedya Ananta Toer |
| 33 | Perburuan | Pramoedya Ananta Toer |
| 34 | Bukan Pasar Malam | Pramoedya Ananta Toer |
| 35 | Laskar Pelangi | Andrea Hirata |
| 36 | Sang Pemimpi | Andrea Hirata |
| 37 | Edensor | Andrea Hirata |
| 38 | Maryamah Karpov | Andrea Hirata |
| 39 | Ayah | Andrea Hirata |
| 40 | Orang-Orang Biasa | Andrea Hirata |
| 41 | Guru Aini | Andrea Hirata |
| 42 | Cantik Itu Luka | Eka Kurniawan |
| 43 | Lelaki Harimau | Eka Kurniawan |
| 44 | Seperti Dendam, Rindu Harus Dibayar Tuntas | Eka Kurniawan |
| 45 | O | Eka Kurniawan |
| 46 | Perahu Kertas | Dee Lestari |
| 47 | Supernova: Ksatria, Puteri, dan Bintang Jatuh | Dee Lestari |
| 48 | Aroma Karsa | Dee Lestari |
| 49 | Rectoverso | Dee Lestari |
| 50 | Sapiens: A Brief History of Humankind | Yuval Noah Harari |
| 51 | Homo Deus: A Brief History of Tomorrow | Yuval Noah Harari |

## Langkah-Langkah Menambahkan Cover

### 1. Buka Browser Tool
Buka file `book-cover-downloader.html` di browser (double-click atau drag ke browser)

### 2. Cari Cover Buku
Untuk setiap buku, klik tombol:
- **Goodreads** - Database buku terlengkap dengan cover berkualitas
- **Google Images** - Alternatif jika Goodreads tidak punya
- **Amazon** - Alternatif lain

### 3. Download Cover
1. Di halaman yang terbuka, cari gambar cover buku
2. Klik kanan pada gambar → **"Save image as..."** (atau "Simpan gambar sebagai...")
3. Navigasi ke: `src/imports/covers/`
4. Simpan dengan nama: **`book_[ID].jpg`** (contoh: `book_17.jpg`)

### 4. Update Code

Setelah semua cover tersimpan, ikuti langkah berikut:

#### Step 4a: Tambah Import Statements

Buka file `src/app/components/BookCollectionPage.tsx` dan tambahkan import untuk cover baru di bagian atas (setelah import yang sudah ada):

```typescript
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
```

#### Step 4b: Update Data Buku

Di dalam `const allBooks: Book[] = [...]`, cari buku dengan `cover: imgNoCover` dan ganti dengan cover baru:

Contoh:
```typescript
// SEBELUM
{
  id: 17,
  cover: imgNoCover,
  type: "Buku",
  genre: "Fiksi",
  title: "Hujan",
  author: "Tere Liye",
  year: 2016,
}

// SESUDAH
{
  id: 17,
  cover: imgBook17,
  type: "Buku",
  genre: "Fiksi",
  title: "Hujan",
  author: "Tere Liye",
  year: 2016,
}
```

Lakukan untuk semua ID dari 17 hingga 51.

## Tip & Trik

### Format File
- **Format**: JPG atau PNG
- **Ukuran**: ~50KB - 200KB (tidak terlalu besar)
- **Resolusi**: Minimal 300px tinggi

### Jika Cover Tidak Tersedia
Jika sulit menemukan cover di Goodreads/Google, coba:
1. Cari di **Tokopedia** atau **Bukalapak** (toko buku online Indonesia)
2. Cari di **Gramedia** atau **Kinokuniya** (website toko buku)
3. Gunakan cover generik atau placeholder dengan warna yang sesuai genre

### Validasi
Setelah menambahkan cover, buka aplikasi dan lihat di halaman "Daftar Koleksi" - cover harus muncul dengan benar.

## Tools yang Sudah Disiapkan
- ✅ **book-cover-downloader.html** - Interface untuk mencari cover
- ✅ **src/imports/covers/** - Folder untuk menyimpan cover

## Catatan Teknis
- Cover disimpan di: `src/imports/covers/`
- Nama file harus: `book_[ID].jpg`
- Gunakan import path relative: `../../imports/covers/book_X.jpg`
- Folder ini **belum ada di git** - tambahkan `.gitkeep` jika ingin track folder kosong

---

Jika ada pertanyaan atau kesulitan, tanyakan!
