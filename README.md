# Viewers Hub

Project ini adalah landing page personal berbasis Vue 3 dan Vite dengan tema Tokyo Dreamin yang menampilkan profil, social links, dan halaman Sanfiles.

## Menjalankan proyek

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Untuk build produksi dan verifikasi TypeScript:

```bash
npm run build
```

Hasil build akan keluar di folder `dist/`.

## Struktur utama

- `src/views/HomeView.vue`: halaman utama, termasuk tombol hero untuk Sanfiles dan Join Server Minecraft.
- `src/views/ModpackView.vue`: halaman `/sanfiles` yang menampilkan daftar berkas dan link sharing.
- `src/components/ModpackCard.vue`: kartu tiap berkas yang tampil di halaman Sanfiles.
- `src/components/SocialCard.vue`: kartu social link.
- `src/config/site.ts`: konten profil, social links, footer, dan SEO.
- `public/mods.json`: sumber data berkas yang dipakai oleh halaman Sanfiles.

## Mengubah konten

### Profil dan social links

Semua konten utama dapat diatur dari `src/config/site.ts`.

### Tombol hero di halaman home

Tombol yang tampil di bagian atas halaman home bisa diatur di `src/views/HomeView.vue` lewat array `heroLinks`.

- `enabled: true` → tombol tampil
- `enabled: false` → tombol disembunyikan
- `external: false` → memakai router internal (`/sanfiles`)
- `external: true` → membuka tautan eksternal

### Sanfiles

Halaman `/sanfiles` mengambil data dari `public/mods.json`.

Fitur yang tersedia saat ini:

- Daftar berkas dan link sharing
- Kartu berkas dengan tombol buka tautan eksternal
- Struktur data sederhana yang mudah dikembangkan untuk menambah file baru ke depan
