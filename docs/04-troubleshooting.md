# 🆘 Troubleshooting Guide — Online Workshop via Zoom

> Common errors saat workshop online dan cara fixnya. Asisten/pemateri pakai ini sebagai handbook untuk respond di chat Zoom.

---

## 🎥 Zoom-Specific Issues (Khusus Online Format)

### Audio echo / suara muter

**Penyebab:** Pakai speaker laptop (bukan headset).

**Fix:**
- Pakai headset / earphone (wajib)
- Settings → Audio → "Suppress background noise" → High
- Mute mic kalau nggak ngomong

---

### Mic tidak detect / orang nggak denger

**Fix:**
1. Zoom → klik panah di samping tombol Mic → Test Mic
2. Pilih input device yang benar (kalau pakai headset, pilih headset, bukan laptop mic)
3. Cek volume system: Mac (System Settings → Sound → Input), Windows (Settings → System → Sound)
4. Restart Zoom kalau masih masalah

---

### Video lag / freeze

**Fix:**
- Tutup app berat (Spotify, browser tab banyak, Discord)
- Settings → Video → uncheck "Enable HD"
- Disable virtual background
- Pindah dekat router atau pakai kabel LAN
- Last resort: matikan kamera, audio aja

---

### Internet lambat / packet loss

**Fix:**
- Tethering dari HP (4G/5G) — biasanya lebih stabil
- Tutup app yang pakai bandwidth (download, streaming)
- Restart router (cabut listrik 30 detik)
- Reconnect Zoom — panitia akan admit lagi

---

### Tidak bisa join Zoom (passcode salah / link expired)

**Fix:**
- Cek ulang link & passcode di chat WA grup workshop
- Kalau passcode salah, panitia akan resend
- Pastikan Zoom App ter-update ke versi terbaru

---

### Zoom keluar tiba-tiba (drop)

**Fix:**
- Panitia akan re-admit dari waiting room
- Kalau kelewatan banyak, akses recording (link dikirim H+1)

---

### Screen share peserta tidak jalan

**Fix:**
- Host harus enable "Allow participants to share screen" terlebih dahulu
- Cek di Zoom Settings → Share Screen → Co-host/Participants

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
vercel --version
```

Kalau Mac/Linux error `EACCES`:
```bash
sudo npm install -g vercel
```

---

### `command not found: git` di Windows

1. Download installer: https://git-scm.com/download/win
2. Run installer (default settings)
3. **Restart laptop** (bukan cuma terminal)
4. Buka PowerShell baru → `git --version`

---

### `command not found: node` setelah install

- **Restart laptop** (Windows wajib)
- Cek PATH (Windows): Setting → Environment Variables → cek ada `C:\Program Files\nodejs\`
- Reinstall dengan opsi "Add to PATH" tercentang

---

### `npm install` lambat / hang

```bash
# Pakai registry mirror (lebih cepat di Indonesia)
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

---

### Vercel login gagal

```bash
vercel logout
vercel login
# Pilih "Continue with GitHub"
# Authorize di browser yang otomatis kebuka
```

---

### GitHub push minta password

GitHub udah nggak terima password sejak 2021. Pakai salah satu:

**Cara 1: gh CLI (recommended)**
```bash
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

- Cek koneksi internet
- Tutup terminal, buka lagi, retry
- Pakai hotspot HP kalau wifi lambat

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
mv index.html.txt index.html
```

---

### Foto/gambar tidak muncul

```html
<!-- ❌ SALAH (path absolut lokal) -->
<img src="C:/Users/Budi/Desktop/foto.jpg">

<!-- ✅ BENAR (path relatif) -->
<img src="assets/foto.jpg">
```

---

### CSS tidak load

Cek link di HTML:
```html
<link rel="stylesheet" href="style.css">
```

**Case-sensitive di Vercel!** `style.css` ≠ `Style.css`.

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
[paste error message dari console]
Tolong fix.
```

**Buka DevTools** untuk lihat error:
- Chrome/Edge: F12 → tab "Console"
- Cek warna merah → itu errornya

---

### AI pakai library yang gagal load

```
Stack: HTML + CSS + Vanilla JavaScript ONLY.
- NO React, NO Vue, NO frameworks
- NO build step (no webpack, no vite)
- NO npm packages
- HANYA bisa pakai CDN: Google Fonts
- Output: 3 file (index.html, style.css, script.js) yang langsung jalan saat double-click index.html
```

---

### AI bikin Lorem Ipsum di bio/about

```
Tolong gantikan SEMUA Lorem Ipsum, placeholder, dan dummy text dengan data saya:
[paste data kamu]
Tidak boleh ada teks placeholder di output final.
```

---

## 💻 Browser Issues

### "File not found" saat double-click index.html

- Jangan double-click dari ZIP file. Extract dulu
- Pastikan file di folder yang benar
- Coba drag-drop `index.html` ke browser yang sudah kebuka

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

---

## 🌐 Network Issues

### Wifi lambat banget

- Pakai hotspot HP sementara
- Tutup app yang pakai bandwidth lain (Zoom + browser + Spotify = berat)

---

### `fetch failed` saat install npm

```bash
# Coba registry mirror Indonesia
npm config set registry https://registry.npmmirror.com
npm install -g vercel
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
- **Claude** (claude.ai) — biasanya stabil
- **Gemini** (gemini.google.com) — gratis, fast
- **Kiro.dev**

---

## 📞 Eskalasi (Online Workflow)

Kalau peserta stuck **> 10 menit**:
1. Peserta tulis di **chat Zoom** dengan format: `🆘 STUCK: [error message singkat]`
2. **Asisten DM peserta** via Zoom Chat (private)
3. Kalau perlu, asisten **pull peserta ke Breakout Room** untuk troubleshoot 1-on-1
4. Asisten minta peserta **share screen** untuk lihat masalah langsung
5. Kalau nggak bisa di-fix < 10 menit, switch ke **Plan B**: kasih template-portfolio

**Prinsip:**
- Jangan biarkan peserta stuck > 15 menit total
- Lebih baik skip ke step berikutnya dengan template, lalu balik fix lagi
- **Yang penting: end of workshop semua peserta punya URL live**

---

## 🎯 Quick Win Cheats

### Kalau peserta beneran stuck, kasih template ready

Pemateri / asisten siapkan **1 template portfolio yang udah jadi** di folder `template-portfolio/` (file: `index.html`, `style.css`, `script.js`).

Peserta tinggal:
1. Download template (link di chat Zoom)
2. Edit text manual (nama, project, dll) di `index.html`
3. Deploy: `vercel --prod --yes`

**Done dalam 5 menit.**

Walaupun bukan AI-generated, peserta tetep dapet pengalaman:
- Pakai CLI (Vercel)
- Punya URL live
- Pengalaman push GitHub

Yang penting: **no one leaves empty-handed.**

---

## 🎥 Online Workshop Pro Tips (Asisten)

### Engagement
- **Sebut nama peserta** di chat → bikin merasa dilihat
- **Reaction emoji** sebagai feedback cepat (👍 untuk konfirmasi)
- **Spotlight peserta yang aktif** di chat → dorong yang lain

### Chat Management
- **Pin pesan penting** (link slide, master prompt) di chat
- **Save chat history** ke file (.txt) untuk dokumentasi
- **Cek chat tiap 30 detik** — jangan biarkan pertanyaan menumpuk

### Technical
- **Test Zoom 30 menit sebelum** dengan asisten
- **Backup link slide** ada di multiple tempat (chat Zoom, WA grup)
- **Recording cloud + local** — untuk redundancy
- **Disable participant screen share** kecuali diizinkan

---

**Stay calm, debug rationally, deliver value.** 💪

Khusus online: **patience is everything**. Peserta lebih mudah panik di online — tugas pemateri/asisten = jadi anchor yang tenang.
