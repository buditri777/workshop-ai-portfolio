# 🎁 Template Portfolio (Backup / Quick-Win)

> Template ini adalah "safety net" — kalau peserta stuck dengan AI, kasih ini. Mereka tinggal isi placeholder, deploy 5 menit, kelar.

---

## 📦 Isi

```
template-portfolio/
├── index.html      # 18 placeholder ({{NAMA}}, {{ROLE}}, dst.)
├── style.css       # Dark theme modern, mobile responsive
└── script.js       # Animation, counter, smooth scroll
```

---

## 📝 Placeholder yang Harus Diisi

### Identitas
- `{{NAMA}}` — Nama lengkap
- `{{NAMA_PENDEK}}` — Nama panggilan / first name
- `{{INITIAL}}` — Inisial 2 huruf (contoh: "BS" untuk Budi Santoso)
- `{{ROLE}}` — Role / spesialisasi
- `{{TAGLINE}}` — Pitch 1 kalimat

### Stats
- `{{JUMLAH_PROJECT}}` — Angka, contoh `12`
- `{{JUMLAH_SKILL}}` — Angka, contoh `8`
- `{{TAHUN_AKTIF}}` — Angka, contoh `2`

### Bio (3 paragraf)
- `{{BIO_PARAGRAF_1}}` — Latar belakang singkat
- `{{BIO_PARAGRAF_2}}` — Apa yang dikerjakan / fokus saat ini
- `{{BIO_PARAGRAF_3}}` — Tujuan / vibe

### Quick Facts
- `{{LOKASI}}` — Kota tinggal
- `{{PENDIDIKAN}}` — S1 jurusan apa, di mana
- `{{STATUS}}` — Mahasiswa / Open to work / Freelance
- `{{FOKUS}}` — Web dev / mobile / data / dll

### Skills (8 slot)
- `{{SKILL_1}}` sampai `{{SKILL_8}}`

### Projects (3 slot, masing-masing 4 field)
- `{{PROJECT_X_NAMA}}`
- `{{PROJECT_X_DESKRIPSI}}`
- `{{PROJECT_X_TAG_1}}` — Tech stack / kategori
- `{{PROJECT_X_TAG_2}}`
- `{{PROJECT_X_LINK}}` — URL demo / repo

### Kontak
- `{{EMAIL}}`
- `{{LINKEDIN}}` — Username only (tanpa `linkedin.com/in/`)
- `{{GITHUB}}` — Username only

---

## 🚀 Cara Pakai (untuk Peserta yang Stuck)

### Step 1: Copy folder
```bash
cp -r template-portfolio my-portfolio
cd my-portfolio
```

### Step 2: Edit `index.html`
Buka di VS Code / Notepad, **Find & Replace** semua placeholder.

**Tips cepat di VS Code:**
- `Ctrl+H` (atau `Cmd+H` Mac) → Find: `{{NAMA}}` → Replace: nama kamu → klik "Replace All"
- Ulangi untuk semua placeholder

### Step 3: Test lokal
Double-click `index.html` → buka di browser. Cek semua section terisi.

### Step 4: Deploy
```bash
git init -b main
git add .
git commit -m "init my portfolio"
vercel --prod --yes
```

**5 menit kelar.**

---

## 💡 Pakai AI untuk Isi Template

Kalau peserta mau pakai AI tapi outputnya berantakan, kasih prompt ini:

```
Saya punya template portfolio dengan placeholder seperti {{NAMA}}, {{TAGLINE}}, {{SKILL_1}}, dst.

Berikut info saya:
[paste data dari worksheet brainstorm]

Tolong gantikan SEMUA placeholder dengan data saya, lalu kirim balik file index.html-nya.
Pastikan tidak ada placeholder tersisa.
```

AI akan kasih balik HTML yang udah lengkap diisi — tinggal save & deploy.

---

## 🎨 Customization Cepat

Setelah portfolio jadi, peserta bisa request ke AI:

**Ganti warna:**
> Edit `style.css`, ubah `--primary` jadi merah marun, `--accent` jadi pink.

**Ganti font:**
> Ganti font dari Space Grotesk ke Playfair Display untuk heading.

**Tambah section:**
> Tambahin section "Testimoni" setelah Projects, isi 3 quote dummy.

**Light mode:**
> Tambahin toggle dark/light mode di pojok kanan atas navbar.

---

## ✅ Checklist Sebelum Deploy

- [ ] Tidak ada `{{...}}` tersisa di file
- [ ] Email valid
- [ ] LinkedIn URL benar
- [ ] GitHub URL benar
- [ ] Project links bisa diklik
- [ ] Test di mobile (DevTools → toggle device)
- [ ] Foto/emoji muncul

---

## 🆘 Untuk Asisten Workshop

Kalau peserta stuck > 15 menit:
1. **Tunjukkan template ini** sebagai opsi backup
2. **Pair dengan peserta hijau** (yang udah selesai) untuk bantu fill-in
3. **Jangan biarkan kosongan** — semua peserta harus pulang dengan URL live

**Prinsip Workshop:** Yang penting peserta merasakan **flow CLI deploy → live URL**. AI atau template, sama-sama valid jalur belajar.

---

**Save the day. Ship the URL.** 🚀
