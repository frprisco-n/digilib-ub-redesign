#!/usr/bin/env python3
"""
Script untuk mengunduh cover buku dari OpenLibrary API dan Google Books
Menyimpan cover ke folder src/imports/covers/
"""

import os
import requests
from pathlib import Path
import json

# Daftar buku yang perlu cover (id, title, author)
BOOKS_TO_DOWNLOAD = [
    (17, "Hujan", "Tere Liye"),
    (18, "Tentang Kamu", "Tere Liye"),
    (19, "Rindu", "Tere Liye"),
    (20, "Pergi", "Tere Liye"),
    (21, "Bumi", "Tere Liye"),
    (22, "Bulan", "Tere Liye"),
    (23, "Bintang", "Tere Liye"),
    (24, "Selamat Tinggal", "Tere Liye"),
    (25, "Pulang", "Leila S. Chudori"),
    (26, "9 Dari Nadira", "Leila S. Chudori"),
    (27, "Malam Terakhir", "Leila S. Chudori"),
    (28, "Bumi Manusia", "Pramoedya Ananta Toer"),
    (29, "Anak Semua Bangsa", "Pramoedya Ananta Toer"),
    (30, "Jejak Langkah", "Pramoedya Ananta Toer"),
    (31, "Rumah Kaca", "Pramoedya Ananta Toer"),
    (32, "Gadis Pantai", "Pramoedya Ananta Toer"),
    (33, "Perburuan", "Pramoedya Ananta Toer"),
    (34, "Bukan Pasar Malam", "Pramoedya Ananta Toer"),
    (35, "Laskar Pelangi", "Andrea Hirata"),
    (36, "Sang Pemimpi", "Andrea Hirata"),
    (37, "Edensor", "Andrea Hirata"),
    (38, "Maryamah Karpov", "Andrea Hirata"),
    (39, "Ayah", "Andrea Hirata"),
    (40, "Orang-Orang Biasa", "Andrea Hirata"),
    (41, "Guru Aini", "Andrea Hirata"),
    (42, "Cantik Itu Luka", "Eka Kurniawan"),
    (43, "Lelaki Harimau", "Eka Kurniawan"),
    (44, "Seperti Dendam, Rindu Harus Dibayar Tuntas", "Eka Kurniawan"),
    (45, "O", "Eka Kurniawan"),
    (46, "Perahu Kertas", "Dee Lestari"),
    (47, "Supernova: Ksatria, Puteri, dan Bintang Jatuh", "Dee Lestari"),
    (48, "Aroma Karsa", "Dee Lestari"),
    (49, "Rectoverso", "Dee Lestari"),
    (50, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari"),
    (51, "Homo Deus: A Brief History of Tomorrow", "Yuval Noah Harari"),
]

# Folder untuk menyimpan cover
COVERS_DIR = Path("src/imports/covers")
COVERS_DIR.mkdir(parents=True, exist_ok=True)

def search_openlibrary(title, author):
    """Cari cover dari OpenLibrary API"""
    try:
        query = f"{title} {author}"
        url = "https://openlibrary.org/search.json"
        params = {"title": title, "author": author, "limit": 1}
        
        response = requests.get(url, params=params, timeout=5)
        response.raise_for_status()
        
        data = response.json()
        if data.get("docs") and len(data["docs"]) > 0:
            doc = data["docs"][0]
            if "cover_i" in doc:
                cover_id = doc["cover_i"]
                cover_url = f"https://covers.openlibrary.org/b/id/{cover_id}-M.jpg"
                return cover_url
        return None
    except Exception as e:
        print(f"Error searching OpenLibrary for {title}: {e}")
        return None

def download_cover(book_id, title, author):
    """Download cover buku"""
    print(f"[{book_id}] Mencari cover untuk: {title} by {author}")
    
    # Coba OpenLibrary dulu
    cover_url = search_openlibrary(title, author)
    
    if not cover_url:
        print(f"  ❌ Tidak menemukan cover di OpenLibrary")
        return False
    
    try:
        print(f"  📥 Mengunduh dari: {cover_url}")
        response = requests.get(cover_url, timeout=10)
        response.raise_for_status()
        
        filename = f"book_{book_id}.jpg"
        filepath = COVERS_DIR / filename
        
        with open(filepath, "wb") as f:
            f.write(response.content)
        
        print(f"  ✅ Tersimpan: {filename} ({len(response.content)} bytes)")
        return True
    except Exception as e:
        print(f"  ❌ Error mengunduh: {e}")
        return False

def generate_import_statements():
    """Generate import statements untuk BookCollectionPage.tsx"""
    imports = []
    for book_id, title, author in BOOKS_TO_DOWNLOAD:
        imports.append(f'import imgBook{book_id} from "../../imports/covers/book_{book_id}.jpg";')
    
    return "\n".join(imports)

def main():
    print("=" * 60)
    print("Book Cover Downloader")
    print("=" * 60)
    
    successful = 0
    failed = 0
    
    for book_id, title, author in BOOKS_TO_DOWNLOAD:
        if download_cover(book_id, title, author):
            successful += 1
        else:
            failed += 1
    
    print("\n" + "=" * 60)
    print(f"Hasil: {successful} berhasil, {failed} gagal")
    print("=" * 60)
    
    # Simpan import statements
    imports_file = Path("book_imports.txt")
    with open(imports_file, "w", encoding="utf-8") as f:
        f.write(generate_import_statements())
    
    print(f"\n📝 Import statements tersimpan di: {imports_file}")
    print("\nGunakan import statements di atas di BookCollectionPage.tsx")

if __name__ == "__main__":
    main()
