# Mbull-Dede

Website rumah cinta Mbull & Dedek (statis, siap untuk GitHub Pages).

## Struktur

- `index.html` — halaman utama
- `styles.css` — CSS Tailwind hasil build (di-commit, jadi GitHub Pages tidak perlu build)
- `src/input.css` — sumber CSS (gaya kustom + direktif Tailwind)
- `tailwind.config.js` — warna & font kustom
- `img/` — foto profil yang sudah dikecilkan (320×320) untuk ditampilkan di web

## Mengubah tampilan

Jika menambah/mengubah class Tailwind di `index.html` atau mengedit `src/input.css`,
build ulang CSS-nya:

```bash
npm install
npm run build:css     # sekali build
npm run watch:css     # build otomatis saat file berubah
```

## Mengganti foto profil

Kecilkan foto ke sekitar 320×320 px (JPEG) lalu simpan sebagai `img/mbull.jpg` / `img/dedek.jpg`.
Jangan pakai foto asli dari kamera langsung — ukurannya bisa >1 MB per foto.
