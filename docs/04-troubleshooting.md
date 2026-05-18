# 🆘 Troubleshooting Guide

> Common errors saat workshop dan cara fixnya. Asisten/pemateri pakai ini sebagai handbook.

---

## 🔧 Tools Installation Issues

### `command not found: codex`

**Mac/Linux:**
```bash
sudo npm install -g @openai/codex
# Tutup terminal, buka lagi
codex --version
```

**Windows (PowerShell as Admin):**
```bash
npm install -g @openai/codex
# Restart terminal
codex --version
```

---

### `command not found: vercel`

```bash
npm install -g vercel
# Tunggu sampai selesai
vercel --version
```

Kalau Mac/Linux error `EACCES`:
```bash
sudo npm install -g vercel
```

---

### `command not found: git` di Windows

1. Download installer: https://git-scm.com/download/win
2. Run installer (default settings).
3. **Restart laptop** (bukan cuma terminal).
4. Buka PowerShell baru → `git --version`.

---

### `command not found: node` setelah install

- **Restart laptop** (Windows wajib).
- Cek PATH (Windows): Setting → Environment Variables → cek ada `C:\Program Files\nodejs\`.
- Reinstall dengan opsi "Add to PATH" tercentang.

---

### `npm install` lambat banget / hang

```bash
# Pakai registry alternative (lebih cepat di Indonesia)
npm config set registry https://registry.npmmirror.com
npm install -g vercel

# Kembalikan setelah selesai (opsional)
npm config set registry https://registry.npmjs.org
```

---

## 🔐 Login Issues

### Codex login `device auth timed out`

```bash
codex login --device-auth
# Kode device hanya valid 15 menit
# Generate ulang kalau expired
```

Kalau masih gagal:
```bash
# Coba ulang
codex logout
codex login --device-auth
```

---

### Vercel login gagal

```bash
vercel logout
vercel login
# Pilih "Continue with GitHub"
# Authorize di browser yang otomatis kebuka
```

Kalau browser tidak otomatis buka, copy URL yang muncul di terminal, paste manual.

---

### GitHub push minta password

GitHub udah nggak terima password sejak 2021. Pakai salah satu:

**Cara 1: gh CLI (recommended)**
```bash
# Install gh: https://cli.github.com
gh auth login
# Pilih: GitHub.com → HTTPS → Authenticate via browser
```

**Cara 2: Personal Access Token**
1. Buka https://github.com/settings/tokens/new
2. Note: "workshop"
3. Expiration: 30 days
4. Scope: centang `repo`
5. Generate → copy token (HANYA muncul sekali!)
6. Saat git push minta password → paste token-nya

---

## 🚀 Deployment Issues

### Vercel deploy stuck di "Uploading"

- Cek koneksi internet (ping google.com).
- Tutup terminal, buka lagi, retry.
- Pakai hotspot HP kalau wifi kampus lambat.

---

### Vercel URL muncul HTTP 401 (Unauthorized)

**Penyebab:** SSO Protection aktif (default di team account).

**Fix:**
1. Buka https://vercel.com/dashboard
2. Pilih project → Settings
3. Cari "Deployment Protection"
4. Set ke **"Disabled"**
5. Save → buka URL lagi → harusnya HTTP 200

---

### "404 Not Found" di Vercel URL

**Penyebab:** `index.html` tidak ada di root folder atau salah ekstensi.

**Cek:**
```bash
ls
# Output harus include: index.html

# Kalau nggak ada, cek apakah Save As-nya jadi index.html.txt
# Rename:
mv index.html.txt index.html
```

---

### Foto/gambar tidak muncul

**Cek path di HTML:**
```html
<!-- ❌ SALAH (path absolut lokal) -->
<img src="C:/Users/Budi/Desktop/foto.jpg">

<!-- ✅ BENAR (path relatif) -->
<img src="assets/foto.jpg">
<img src="./foto.jpg">
```

**Pastikan struktur folder:**
```
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    └── foto.jpg
```

---

### CSS tidak load

**Cek link di HTML:**
```html
<!-- Harus ada ini di <head> -->
<link rel="stylesheet" href="style.css">
```

**Cek nama file:**
- HTML pakai `style.css` → file harus `style.css` (case-sensitive di Vercel!)
- Bukan `Style.css` atau `styles.css`.

---

## 🤖 AI Output Issues

### Output AI terpotong

```
Lanjutkan style.css dari mana kamu berhenti.
```

Atau:
```
Tolong split outputmu jadi 3 message:
1. index.html dulu
2. lalu style.css
3. terakhir script.js
```

---

### AI bikin code yang nggak jalan / error

**Test dulu:**
```
Test code yang baru kamu kasih. Saya buka di browser, ada error:
[paste error message dari console / browser]
Tolong fix.
```

**Buka DevTools** untuk lihat error:
- Chrome/Edge: F12 → tab "Console"
- Cek warna merah → itu errornya

---

### AI pakai library yang gagal load

**Kasih constraint:**
```
Stack: HTML + CSS + Vanilla JavaScript ONLY.
- NO React, NO Vue, NO frameworks
- NO build step (no webpack, no vite)
- NO npm packages
- HANYA bisa pakai CDN: Google Fonts, Font Awesome (opsional)
- Output: 3 file (index.html, style.css, script.js) yang langsung jalan saat double-click index.html.
```

---

### AI bikin Lorem Ipsum di bio/about

```
Tolong gantikan SEMUA Lorem Ipsum, placeholder, dan dummy text dengan:
[konten asli kamu]
Tidak boleh ada teks placeholder di output final.
```

---

## 💻 Browser Issues

### "File not found" saat double-click index.html

- Jangan double-click dari ZIP file. Extract dulu.
- Pastikan file di folder yang benar.
- Coba drag-drop `index.html` ke browser yang sudah kebuka.

---

### Halaman blank / putih

**Cek Console (F12):**
- Kalau ada error JavaScript → screenshot, kasih ke AI: "Fix error ini"
- Kalau error CSS → cek apakah `<link rel="stylesheet">` URL-nya bener

---

### Mobile rendering jelek

**Pastikan ada viewport meta tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Test di DevTools:**
- F12 → toggle device toolbar (Ctrl+Shift+M)
- Pilih iPhone SE / Pixel 5
- Cek ada bagian yang kepotong atau kekecilan

**Minta AI fix:**
```
Mobile responsive bermasalah di [section X].
Issue:
- Padding terlalu sempit
- Font terlalu kecil
- Grid jadi 1 kolom (atau sebaliknya)
Tolong fix media query di style.css.
```

---

## 🌐 Network Issues

### Wifi kampus lambat banget

- Pakai hotspot HP sementara
- Atau download AI output dulu, paste di terminal saat offline (yang penting `vercel deploy` butuh internet)

---

### `fetch failed` saat install npm

```bash
# Coba registry mirror Indonesia
npm config set registry https://registry.npmmirror.com
npm install -g vercel
```

---

### `git push` timeout

```bash
# Naikkan timeout
git config --global http.postBuffer 524288000
git push
```

---

## 🆘 Last Resort

### Reset Total Project

```bash
# Backup file (kalau perlu)
cp -r portfolio portfolio-backup

# Hapus, mulai dari awal
rm -rf portfolio
mkdir portfolio
cd portfolio

# Generate ulang dengan AI...
```

---

### Pindah AI

Kalau Codex/ChatGPT down:
- **Claude** (claude.ai) — biasanya stabil, output rapi
- **Gemini** (gemini.google.com) — gratis, fast
- **Kiro.dev** — kalau AI utama overloaded

---

## 📞 Eskalasi

Kalau peserta stuck > 10 menit, panggil asisten. Kalau asisten stuck > 5 menit, panggil pemateri.

**Prinsip:**
- Jangan biarkan peserta stuck > 15 menit total
- Lebih baik skip ke step berikutnya dengan template, lalu balik fix lagi
- Yang penting: **end of workshop semua peserta punya URL live**

---

## 🎯 Quick Win Cheats

### Kalau peserta beneran stuck, kasih template ready

Pemateri / asisten siapkan **1 template portfolio yang udah jadi** di folder `templates/` (file: `index.html`, `style.css`, `script.js`).

Peserta tinggal:
1. Copy folder template
2. Edit text manual (nama, project, dll) di `index.html`
3. Deploy: `vercel --prod --yes`

**Done dalam 5 menit.**

Walaupun bukan AI-generated, peserta tetep dapet pengalaman:
- Pakai CLI (Vercel)
- Punya URL live
- Pengalaman push GitHub

Yang penting: **no one leaves empty-handed.**

---

**Stay calm, debug rationally, deliver value.** 💪
