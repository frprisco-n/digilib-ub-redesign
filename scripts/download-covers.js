/**
 * Script untuk mengunduh cover buku dari OpenLibrary API
 * Run dengan: npm run download-covers atau node scripts/download-covers.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BOOKS_TO_DOWNLOAD = [
  { id: 17, title: "Hujan", author: "Tere Liye" },
  { id: 18, title: "Tentang Kamu", author: "Tere Liye" },
  { id: 19, title: "Rindu", author: "Tere Liye" },
  { id: 20, title: "Pergi", author: "Tere Liye" },
  { id: 21, title: "Bumi", author: "Tere Liye" },
  { id: 22, title: "Bulan", author: "Tere Liye" },
  { id: 23, title: "Bintang", author: "Tere Liye" },
  { id: 24, title: "Selamat Tinggal", author: "Tere Liye" },
  { id: 25, title: "Pulang", author: "Leila S. Chudori" },
  { id: 26, title: "9 Dari Nadira", author: "Leila S. Chudori" },
  { id: 27, title: "Malam Terakhir", author: "Leila S. Chudori" },
  { id: 28, title: "Bumi Manusia", author: "Pramoedya Ananta Toer" },
  { id: 29, title: "Anak Semua Bangsa", author: "Pramoedya Ananta Toer" },
  { id: 30, title: "Jejak Langkah", author: "Pramoedya Ananta Toer" },
  { id: 31, title: "Rumah Kaca", author: "Pramoedya Ananta Toer" },
  { id: 32, title: "Gadis Pantai", author: "Pramoedya Ananta Toer" },
  { id: 33, title: "Perburuan", author: "Pramoedya Ananta Toer" },
  { id: 34, title: "Bukan Pasar Malam", author: "Pramoedya Ananta Toer" },
  { id: 35, title: "Laskar Pelangi", author: "Andrea Hirata" },
  { id: 36, title: "Sang Pemimpi", author: "Andrea Hirata" },
  { id: 37, title: "Edensor", author: "Andrea Hirata" },
  { id: 38, title: "Maryamah Karpov", author: "Andrea Hirata" },
  { id: 39, title: "Ayah", author: "Andrea Hirata" },
  { id: 40, title: "Orang-Orang Biasa", author: "Andrea Hirata" },
  { id: 41, title: "Guru Aini", author: "Andrea Hirata" },
  { id: 42, title: "Cantik Itu Luka", author: "Eka Kurniawan" },
  { id: 43, title: "Lelaki Harimau", author: "Eka Kurniawan" },
  { id: 44, title: "Seperti Dendam, Rindu Harus Dibayar Tuntas", author: "Eka Kurniawan" },
  { id: 45, title: "O", author: "Eka Kurniawan" },
  { id: 46, title: "Perahu Kertas", author: "Dee Lestari" },
  { id: 47, title: "Supernova: Ksatria, Puteri, dan Bintang Jatuh", author: "Dee Lestari" },
  { id: 48, title: "Aroma Karsa", author: "Dee Lestari" },
  { id: 49, title: "Rectoverso", author: "Dee Lestari" },
  { id: 50, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari" },
  { id: 51, title: "Homo Deus: A Brief History of Tomorrow", author: "Yuval Noah Harari" },
];

const COVERS_DIR = path.join(__dirname, '../src/imports/covers');

// Buat folder jika belum ada
if (!fs.existsSync(COVERS_DIR)) {
  fs.mkdirSync(COVERS_DIR, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Status code: ${response.statusCode}`));
        return;
      }
      
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function searchOpenLibrary(title, author) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(`title="${title}" author="${author}"`);
    const url = `https://openlibrary.org/search.json?q=${query}&limit=1`;
    
    https.get(url, (response) => {
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.docs && json.docs[0] && json.docs[0].cover_i) {
            const coverId = json.docs[0].cover_i;
            const coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
            resolve(coverUrl);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function downloadCover(book) {
  console.log(`[${book.id}] Mencari cover: "${book.title}" by ${book.author}`);
  
  try {
    const coverUrl = await searchOpenLibrary(book.title, book.author);
    
    if (!coverUrl) {
      console.log(`  ❌ Tidak menemukan cover`);
      return false;
    }
    
    const filename = `book_${book.id}.jpg`;
    const filepath = path.join(COVERS_DIR, filename);
    
    console.log(`  📥 Mengunduh...`);
    await downloadFile(coverUrl, filepath);
    
    const stats = fs.statSync(filepath);
    console.log(`  ✅ Tersimpan: ${filename} (${stats.size} bytes)\n`);
    return true;
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}\n`);
    return false;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Book Cover Downloader');
  console.log('='.repeat(60) + '\n');
  
  let successful = 0;
  let failed = 0;
  
  for (const book of BOOKS_TO_DOWNLOAD) {
    if (await downloadCover(book)) {
      successful++;
    } else {
      failed++;
    }
    // Delay antara request untuk menghindari rate limit
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('='.repeat(60));
  console.log(`Hasil: ${successful} berhasil, ${failed} gagal`);
  console.log('='.repeat(60));
  
  // Generate import statements
  let imports = '';
  for (const book of BOOKS_TO_DOWNLOAD) {
    imports += `import imgBook${book.id} from "../../imports/covers/book_${book.id}.jpg";\n`;
  }
  
  const importsFile = path.join(__dirname, '../book_imports.txt');
  fs.writeFileSync(importsFile, imports);
  console.log(`\n📝 Import statements tersimpan di: book_imports.txt`);
}

main().catch(console.error);
