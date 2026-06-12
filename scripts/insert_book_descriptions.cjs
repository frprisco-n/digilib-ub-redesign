const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'app', 'components', 'BookCollectionPage.tsx');
let text = fs.readFileSync(filePath, 'utf8');
const header = 'export const allBooks: Book[] = [';
const startIndex = text.indexOf(header);
if (startIndex === -1) throw new Error('Could not find allBooks header');
const arrayStart = text.indexOf('[', startIndex);
const arrayEnd = text.lastIndexOf('];');
if (arrayStart === -1 || arrayEnd === -1) throw new Error('Could not find allBooks array bounds');
const arrayText = text.slice(arrayStart + 1, arrayEnd);

const objects = [];
let depth = 0;
let start = -1;
for (let i = 0; i < arrayText.length; i++) {
  const ch = arrayText[i];
  if (ch === '{') {
    if (depth === 0) start = i;
    depth += 1;
  } else if (ch === '}') {
    depth -= 1;
    if (depth === 0 && start !== -1) {
      objects.push({ start, end: i, text: arrayText.slice(start, i + 1) });
      start = -1;
    }
  }
}

function parseField(block, field) {
  const regex = new RegExp(field + '\\s*:\\s*"([^"]*)"', 'm');
  const match = block.match(regex);
  return match ? match[1] : '';
}

function makeDescription(title, author, genre) {
  const lower = title.toLowerCase();
  if (lower.includes('laut bercerita')) return 'Novel yang mengisahkan perjalanan seorang jurnalis dan misteri kapal yang tenggelam, berpadu antara sejarah Indonesia dan drama keluarga.';
  if (lower.includes('what is science')) return 'Pengantar sains yang membahas metode ilmiah, sejarah penemuan, dan peran ilmu pengetahuan dalam memahami dunia.';
  if (lower.includes('gajah mada')) return 'Kajian sejarah tentang politik Gajah Mada dan strategi penyatuan Nusantara melalui pendekatan kepemimpinan.';
  if (lower.includes('basis data relasional')) return 'Buku teknologi yang menjelaskan konsep relasional, desain tabel, dan praktik manajemen basis data modern.';
  if (lower.includes('akuntansi manajemen')) return 'Buku bisnis yang membahas teknik akuntansi untuk perencanaan, kontrol biaya, dan pengambilan keputusan manajerial.';
  if (lower.includes('manajemen sekolah inklusif')) return 'Panduan administrasi untuk menciptakan lingkungan sekolah inklusif yang mendukung siswa beragam.';
  if (lower.includes('the visual fiqh')) return 'Buku agama yang menyajikan prinsip fikih secara visual dan praktis untuk kemudahan pemahaman sehari-hari.';
  if (lower.includes('not quite dead yet')) return 'Thriller remaja dengan misteri, ketegangan psikologis, dan konflik keluarga yang memikat.';
  if (lower.includes('the psychology of money')) return 'Buku ekonomi perilaku yang mengeksplorasi hubungan emosional kita dengan uang dan keputusan finansial.';
  if (lower.includes('the alpha girl')) return 'Buku self improvement yang menginspirasi perempuan untuk percaya diri, mandiri, dan berani mengambil peran.';
  if (lower.includes('pulang')) return 'Novel emosional tentang perjalanan kembali ke rumah, hubungan keluarga, dan makna pulang dalam hidup.';
  if (lower.includes('sejarah indonesia modern')) return 'Buku sejarah yang menelusuri perkembangan Indonesia modern lewat peristiwa politik dan sosial penting.';
  if (lower.includes('manajemen strategi')) return 'Buku bisnis yang mengulas formulasi strategi, analisis lingkungan, dan implementasi rencana organisasi.';
  if (lower.includes('kebijakan publik')) return 'Buku administrasi yang membahas perumusan dan evaluasi kebijakan publik serta dampaknya pada masyarakat.';
  if (lower.includes('tafsir al-misbah')) return 'Tafsir Al-Qur’an yang mendalam dengan konteks modern, ditulis oleh M. Quraish Shihab.';
  if (lower.includes('matahari')) return 'Novel Tere Liye tentang persahabatan, impian, dan dinamika remaja di lingkungan sekolah.';
  if (lower.includes('hujan')) return 'Cerita Tere Liye tentang cinta, kehilangan, dan harapan dalam kisah emosional para tokoh remaja.';
  if (lower.includes('tentang kamu')) return 'Novel roman remaja yang mengeksplorasi identitas, persahabatan, dan cinta pertama.';
  if (lower.includes('rindu')) return 'Cerita tentang kerinduan mendalam, perjalanan pribadi, dan hubungan antar karakter dalam suasana introspektif.';
  if (lower.includes('pergi')) return 'Novel tentang perpisahan, perubahan hidup, dan pencarian makna di babak baru kehidupan.';
  if (lower.includes('bumi')) return 'Novel fiksi yang menggabungkan persahabatan, konflik, dan pencarian arti hidup.';
  if (lower.includes('bulan')) return 'Kisah emosional tentang keindahan, rindu, dan perubahan dalam kehidupan sehari-hari.';
  if (lower.includes('bintang')) return 'Novel yang mengangkat harapan, petualangan, dan hubungan personal dalam latar cerita inspiratif.';
  if (lower.includes('selamat tinggal')) return 'Cerita tentang perpisahan, penerimaan, dan perjalanan emosi di tengah perubahan hidup.';
  if (lower.includes('9 dari nadira')) return 'Kumpulan cerpen yang menelusuri dinamika perempuan dan identitas dalam konteks masyarakat Indonesia.';
  if (lower.includes('malam terakhir')) return 'Karya sastra yang penuh refleksi tentang akhir, memori, dan konflik batin tokoh-tokohnya.';
  if (lower.includes('bumi manusia')) return 'Novel sejarah yang menggambarkan perlawanan kolonialisme dan perjuangan tokoh dalam masyarakat Jawa.';
  if (lower.includes('anak semua bangsa')) return 'Karya sejarah sastra yang melanjutkan kisah perjuangan, politik, dan perubahan sosial kolonialisme.';
  if (lower.includes('jejak langkah')) return 'Novel yang menelusuri perjalanan hidup tokoh wartawan di tengah pergolakan politik dan sejarah.';
  if (lower.includes('rumah kaca')) return 'Kritik sosial yang menggambarkan ketegangan antara kebebasan dan kekuasaan dalam masyarakat kolonial.';
  if (lower.includes('gadis pantai')) return 'Novel sastra tentang cinta, konflik keluarga, dan perjuangan perempuan di pesisir Indonesia.';
  if (lower.includes('perburuan')) return 'Karya sastra yang mengombinasikan ketegangan dan realitas sosial dalam cerita pascakolonial.';
  if (lower.includes('bukan pasar malam')) return 'Kisah urban yang memotret kehidupan dan konflik batin seorang lelaki dalam masyarakat modern.';
  if (lower.includes('laskar pelangi')) return 'Novel inspiratif tentang semangat belajar, persahabatan, dan impian anak-anak di Belitung.';
  if (lower.includes('sang pemimpi')) return 'Novel lanjutan yang menggambarkan perjuangan, harapan, dan mimpi besar sahabat-sahabat muda.';
  if (lower.includes('edensor')) return 'Kisah petualangan dan pencarian jati diri dalam latar budaya dan nostalgia perjalanan.';
  if (lower.includes('sebuah negeri')) return 'Novel sosial-politik yang mengeksplorasi perubahan masyarakat dan perjuangan kebebasan.';
  if (lower.includes('sebuah kota')) return 'Kisah urban yang mengangkat isu agama, kekuasaan, dan pencarian makna di kota besar.';
  if (lower.includes('sebuah seni')) return 'Cerita yang menelaah kreativitas, seni, dan konflik personal dalam komunitas modern.';
  if (lower.includes('negara kelahiran')) return 'Novel yang mengeksplorasi identitas nasional, budaya lokal, dan hubungan sosial masyarakat.';
  if (lower.includes('cinta dalam')) return 'Cerita cinta yang menyorot hubungan personal, pengorbanan, dan pertumbuhan emosi dalam kehidupan.';
  if (lower.includes('coba lihat')) return 'Kumpulan sajak atau cerita pendek yang mengajak pembaca melihat kehidupan dari sudut pandang baru.';
  if (lower.includes('berani tidak')) return 'Buku self improvement yang memotivasi pembaca menghadapi ketakutan dan mengambil tindakan berani.';
  if (lower.includes('menjadi apa')) return 'Panduan refleksi diri yang membantu pembaca mengejar tujuan hidup dan mengenali potensi diri.';
  if (lower.includes('sejuta langit')) return 'Novel sastra dengan nuansa magis dan emosi, menenun kisah hidup dan harapan.';
  if (lower.includes('guttenberg')) return 'Sejarah percetakan yang mengulas dampak revolusi tulisan dan penyebaran informasi di dunia Barat.';
  if (lower.includes('yanis varoufakis')) return 'Analisis ekonomi kontemporer yang membahas krisis, demokrasi, dan kekuatan politik global.';
  if (lower.includes('empat puluh')) return 'Kumpulan tulisan reflektif atau sejarah yang mengkaji identitas, politik, dan budaya di era modern.';
  if (lower.includes('bukit samudra')) return 'Cerita yang menggabungkan petualangan, cinta, dan pencarian makna di latar alam pesisir.';
  if (lower.includes('teologi harapan')) return 'Kajian agama yang mengeksplorasi nilai harapan dan spiritualitas dalam konteks teologi modern.';
  if (lower.includes('buku ajar')) return 'Buku ajar yang menyajikan konsep teori dan praktik di bidang akademik secara ringkas dan jelas.';
  if (lower.includes('u.d.')) return 'Referensi tentang penulisan ilmiah atau teknis, mendiskusikan struktur dan gaya penulisan akademik.';
  if (lower.includes('hukum pidana')) return 'Buku hukum yang menjelaskan prinsip, kasus, dan penerapan hukum pidana dalam sistem peradilan.';
  if (lower.includes('metode penelitian')) return 'Panduan metodologi penelitian yang menjelaskan desain, teknik pengumpulan data, dan analisis hasil.';
  if (lower.includes('bimbingan karier')) return 'Buku pengembangan karier yang menawarkan strategi perencanaan dan pengembangan profesional.';
  if (lower.includes('kesehatan masyarakat')) return 'Buku kesehatan yang membahas promosi kesehatan, epidemiologi, dan kebijakan publik.';
  if (genre === 'Fiksi') return `Karya fiksi oleh ${author} yang menyoroti karakter, emosi, dan konflik dalam latar cerita yang kuat.`;
  if (genre === 'Sastra') return `Karya sastra oleh ${author} yang mengeksplorasi konteks budaya dan nuansa bahasa.`;
  if (genre === 'Sejarah') return `Buku sejarah yang mengulas peristiwa dan tokoh penting dengan konteks naratif.`;
  if (genre === 'Sains') return `Buku sains yang membahas konsep ilmiah utama dan relevansinya dalam kehidupan sehari-hari.`;
  if (genre === 'Teknologi') return `Buku teknologi yang menjelaskan prinsip dan aplikasi modern.`;
  if (genre === 'Bisnis & Ekonomi') return `Buku bisnis dan ekonomi yang menggali strategi, keuangan, dan keputusan organisasi.`;
  if (genre === 'Administrasi') return `Buku administrasi yang membahas kebijakan dan tata kelola organisasi.`;
  if (genre === 'Agama') return `Buku agama yang mengulas ajaran spiritual dan praktik keagamaan dengan gaya ringkas.`;
  return `Deskripsi untuk buku ${title} oleh ${author}, menggambarkan topik utama dan fokus isi buku tersebut.`;
}

const insertions = [];
for (const block of objects) {
  if (/description\s*:/m.test(block.text)) continue;
  const yearMatch = block.text.match(/year:\s*\d+,/);
  if (!yearMatch) continue;
  const description = makeDescription(parseField(block.text, 'title'), parseField(block.text, 'author'), parseField(block.text, 'genre'));
  insertions.push({ position: block.start + yearMatch.index + yearMatch[0].length, text: '\n    description: ' + JSON.stringify(description) + ',' });
}
if (insertions.length === 0) {
  console.log('No missing descriptions found');
  process.exit(0);
}
let updated = text;
for (let i = insertions.length - 1; i >= 0; i--) {
  const ins = insertions[i];
  updated = updated.slice(0, arrayStart + 1 + ins.position) + ins.text + updated.slice(arrayStart + 1 + ins.position);
}
fs.writeFileSync(filePath, updated, 'utf8');
console.log('Added description for', insertions.length, 'book entries.');
