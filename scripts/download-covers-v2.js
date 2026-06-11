/**
 * Script untuk mengunduh cover buku dari berbagai sumber
 * Mencoba Goodreads, Google Books, dan Open Library
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BOOK_COVERS = {
  17: "https://m.media-amazon.com/images/P/B0B5KSZVDR.jpg", // Hujan - Tere Liye
  18: "https://m.media-amazon.com/images/P/B07CVBQ5XV.jpg", // Tentang Kamu - Tere Liye
  19: "https://m.media-amazon.com/images/P/B0B5KSZVQ7.jpg", // Rindu - Tere Liye  
  20: "https://m.media-amazon.com/images/P/B0B5KSZ54T.jpg", // Pergi - Tere Liye
  21: "https://m.media-amazon.com/images/P/B00LPP6B1E.jpg", // Bumi - Tere Liye
  22: "https://m.media-amazon.com/images/P/B00LPP6B1O.jpg", // Bulan - Tere Liye
  23: "https://m.media-amazon.com/images/P/B00LPP6B1Y.jpg", // Bintang - Tere Liye
  24: "https://m.media-amazon.com/images/P/B07NPX5VBP.jpg", // Selamat Tinggal - Tere Liye
  25: "https://m.media-amazon.com/images/P/B008DJ7A8Q.jpg", // Pulang - Leila S. Chudori
  26: "https://m.media-amazon.com/images/P/B007WFMHZA.jpg", // 9 Dari Nadira - Leila S. Chudori
  27: "https://m.media-amazon.com/images/P/B0089QHQHE.jpg", // Malam Terakhir - Leila S. Chudori
  28: "https://m.media-amazon.com/images/P/B0756PMRB4.jpg", // Bumi Manusia - Pramoedya
  29: "https://m.media-amazon.com/images/P/B0756PPMWP.jpg", // Anak Semua Bangsa - Pramoedya
  30: "https://m.media-amazon.com/images/P/B0756PPQRT.jpg", // Jejak Langkah - Pramoedya
  31: "https://m.media-amazon.com/images/P/B00EKR94AS.jpg", // Rumah Kaca - Pramoedya
  32: "https://m.media-amazon.com/images/P/B0756PP6M2.jpg", // Gadis Pantai - Pramoedya
  33: "https://m.media-amazon.com/images/P/B0756PPT9B.jpg", // Perburuan - Pramoedya
  34: "https://m.media-amazon.com/images/P/B0756PPTXK.jpg", // Bukan Pasar Malam - Pramoedya
  35: "https://m.media-amazon.com/images/P/B01ANBMJ8A.jpg", // Laskar Pelangi - Andrea Hirata
  36: "https://m.media-amazon.com/images/P/B008GMFG0I.jpg", // Sang Pemimpi - Andrea Hirata
  37: "https://m.media-amazon.com/images/P/B008GMFG0S.jpg", // Edensor - Andrea Hirata
  38: "https://m.media-amazon.com/images/P/B008GMFGOY.jpg", // Maryamah Karpov - Andrea Hirata
  39: "https://m.media-amazon.com/images/P/B01NAUHKAU.jpg", // Ayah - Andrea Hirata
  40: "https://m.media-amazon.com/images/P/B082P35C6C.jpg", // Orang-Orang Biasa - Andrea Hirata
  41: "https://m.media-amazon.com/images/P/B087PGCYWZ.jpg", // Guru Aini - Andrea Hirata
  42: "https://m.media-amazon.com/images/P/B00A9YKRL8.jpg", // Cantik Itu Luka - Eka Kurniawan
  43: "https://m.media-amazon.com/images/P/B00A9YKSHY.jpg", // Lelaki Harimau - Eka Kurniawan
  44: "https://m.media-amazon.com/images/P/B01I2I7KGG.jpg", // Seperti Dendam - Eka Kurniawan
  45: "https://m.media-amazon.com/images/P/B017JQCVQ4.jpg", // O - Eka Kurniawan
  46: "https://m.media-amazon.com/images/P/B00GQ4GJ0W.jpg", // Perahu Kertas - Dee Lestari
  47: "https://m.media-amazon.com/images/P/B0087OWW2O.jpg", // Supernova - Dee Lestari
  48: "https://m.media-amazon.com/images/P/B07HQPBPZS.jpg", // Aroma Karsa - Dee Lestari
  49: "https://m.media-amazon.com/images/P/B00GDKZ6XM.jpg", // Rectoverso - Dee Lestari
  50: "https://m.media-amazon.com/images/P/B00JGL8V4C.jpg", // Sapiens - Yuval Noah Harari
  51: "https://m.media-amazon.com/images/P/B0779KPNQY.jpg", // Homo Deus - Yuval Noah Harari
};

const COVERS_DIR = path.join(__dirname, '../src/imports/covers');

// Buat folder jika belum ada
if (!fs.existsSync(COVERS_DIR)) {
  fs.mkdirSync(COVERS_DIR, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
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

async function downloadAllCovers() {
  console.log('='.repeat(60));
  console.log('Book Cover Downloader (Amazon/Goodreads)');
  console.log('='.repeat(60) + '\n');
  
  let successful = 0;
  let failed = 0;
  
  for (const [bookId, url] of Object.entries(BOOK_COVERS)) {
    console.log(`[${bookId}] Mengunduh dari: ${url.substring(0, 50)}...`);
    
    try {
      const filename = `book_${bookId}.jpg`;
      const filepath = path.join(COVERS_DIR, filename);
      
      await downloadFile(url, filepath);
      
      const stats = fs.statSync(filepath);
      console.log(`  ✅ Tersimpan: ${filename} (${stats.size} bytes)\n`);
      successful++;
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}\n`);
      failed++;
    }
    
    // Delay antara request
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  console.log('='.repeat(60));
  console.log(`Hasil: ${successful} berhasil, ${failed} gagal`);
  console.log('='.repeat(60) + '\n');
  
  // Generate import statements
  let imports = '';
  for (const bookId of Object.keys(BOOK_COVERS).sort((a, b) => parseInt(a) - parseInt(b))) {
    imports += `import imgBook${bookId} from "../../imports/covers/book_${bookId}.jpg";\n`;
  }
  
  const importsFile = path.join(__dirname, '../book_imports.txt');
  fs.writeFileSync(importsFile, imports);
  console.log(`📝 Copy-paste import statements dari: book_imports.txt`);
}

downloadAllCovers().catch(console.error);
