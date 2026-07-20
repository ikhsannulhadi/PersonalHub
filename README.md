# Viewers Hub

Halaman link personal berbasis Vue 3 dan Vite. Halaman ini menampilkan profil, kartu Social Links, preview tautan website server Minecraft, serta footer dalam satu wallpaper penuh.

## Menjalankan proyek

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Untuk membuat build produksi dan memeriksa TypeScript:

```bash
npm run build
```

Hasil build berada di folder `dist/`.

## Mengubah konten

Seluruh konten utama berada di `src/config/site.ts`.

### Profil

Bagian `profile` mengatur:

- `name`: nama besar di bagian atas halaman.
- `bio` dan `description`: teks profil.
- `avatarImage`: URL foto profil. Hapus properti ini bila ingin memakai teks dari `avatar` sebagai pengganti foto.

Contoh:

```ts
avatarImage: 'https://contoh.com/foto-profil.jpg'
```

### Social Links

Bagian `socialLinks` mengatur setiap kartu link. Properti yang tersedia:

- `label`: nama layanan atau link.
- `href`: URL tujuan; dibuka pada tab baru.
- `icon`: teks cadangan saat tidak memakai gambar ikon.
- `iconImage` (opsional): URL gambar ikon.

Contoh menambah link:

```ts
{ label: 'Website', href: 'https://namadomain.com', icon: 'W' }
```

Untuk TikTok dan YouTube, ganti `@yourhandle` pada URL dengan handle akun yang benar.

### Preview server Minecraft

Preview di bawah Social Links berada di `src/views/HomeView.vue`. Ubah atribut `href` pada elemen `server-preview` bila URL website server berubah. Kartu ini membuka situs di tab baru.

### Footer dan SEO

Di `src/config/site.ts`:

- `footer.version` dan `footer.copyright` mengatur teks footer.
- `seo.title` dan `seo.description` mengatur judul tab browser serta deskripsi halaman.

## Struktur utama

- `src/views/HomeView.vue`: susunan halaman dan preview server.
- `src/components/SocialCard.vue`: kartu link yang dapat diklik.
- `src/components/SectionHeading.vue`: heading bagian Social Links.
- `src/components/FooterSection.vue`: footer.
- `src/assets/styles/`: desain global dan token warna/ukuran.

## Catatan jumlah followers/subscriber

Jumlah followers TikTok atau subscriber YouTube secara langsung tidak disertakan, karena memerlukan API resmi serta kredensial server. Link profil tetap bekerja melalui URL handle yang diatur di konfigurasi.
