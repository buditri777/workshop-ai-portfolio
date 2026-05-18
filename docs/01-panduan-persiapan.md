# 📋 Panduan Persiapan Workshop ONLINE via Zoom

> Workshop FIKOM UDB — Pembuatan Portofolio Tanpa Coding dengan AI
> **Format: 100% Online via Zoom Meeting**

**🚨 PENTING:** Selesaikan semua persiapan ini **sebelum hari workshop**. Workshop online artinya **kamu yang harus mandiri** — nggak ada asisten yang bisa pegang laptop kamu langsung.

**Estimasi waktu:** 60–90 menit

---

## ✅ Checklist Cepat

| # | Item | Wajib? | Estimasi |
|---|------|--------|----------|
| 1 | **Zoom App + akun** | ✅ Wajib | 5 menit |
| 2 | **Headset / earphone** | ✅ Wajib | (siapkan) |
| 3 | **Internet stabil min. 10 Mbps** | ✅ Wajib | (cek speedtest) |
| 4 | Akun GitHub | ✅ Wajib | 5 menit |
| 5 | Akun Vercel | ✅ Wajib | 3 menit |
| 6 | Akun Supabase | 🟡 Opsional | 5 menit |
| 7 | 1 Akun AI Chat (ChatGPT/Claude/Gemini/Kiro) | ✅ Wajib | 5 menit |
| 8 | Install Git | ✅ Wajib | 10 menit |
| 9 | Install Node.js (untuk CLI) | ✅ Wajib | 10 menit |
| 10 | Install Codex CLI | ✅ Wajib | 5 menit |
| 11 | Install Vercel CLI | ✅ Wajib | 3 menit |
| 12 | Install Supabase CLI | 🟡 Opsional | 5 menit |
| 13 | Install 9router | 🟡 Opsional | 5 menit |
| 14 | Login & verifikasi semua tools | ✅ Wajib | 10 menit |

---

## 🎥 1. Setup Zoom (Khusus Online Format)

### Install Zoom App
1. Download Zoom Client dari https://zoom.us/download
2. Install (Mac/Windows/Linux semua tersedia)
3. **Buat akun** atau login (free tier OK untuk peserta)
4. Update ke versi terbaru — Zoom sering ada update keamanan

### Test Audio & Video Sebelum Workshop
1. Buka Zoom App → klik foto profil → **Settings**
2. Tab **Audio**:
   - Klik "Test Speaker" → pastikan denger
   - Klik "Test Mic" → ngomong, lihat indikator hijau
   - Centang "Automatically join audio by computer when joining a meeting"
3. Tab **Video**:
   - Pastikan kamera nyala
   - Atur "HD" kalau kamera support
   - Centang "Touch up my appearance" (opsional, bikin muka cerah)
4. Tab **Background & Filters** (opsional):
   - Pakai blur background atau virtual background

### Test Koneksi Internet
1. Buka https://www.speedtest.net
2. Klik "GO" — tunggu hasilnya
3. **Minimum yang dibutuhkan:**
   - Download: 10 Mbps ✓
   - Upload: 5 Mbps ✓
   - Ping: < 50ms ✓
4. Kalau di bawah, pakai kabel LAN atau pindah dekat router

### Headset / Earphone
- **Wajib pakai headset** — bukan speaker laptop (bikin echo!)
- Earphone kabel HP juga OK
- TWS/Bluetooth boleh, tapi pastikan baterai full + suara jernih

---

## 2️⃣ Akun GitHub

GitHub = tempat simpan code kamu. Wajib karena nyambung ke Vercel.

1. Buka https://github.com/signup
2. Pakai email aktif (kuliah atau pribadi)
3. Username yang profesional: **`namasaya`** atau **`namasaya-dev`** — bukan `xXdarkXxlordXx`
4. Verifikasi email
5. ✅ Done — catat username kamu

**Tips:** Pakai nama asli atau nickname yang konsisten dengan email/LinkedIn.

---

## 3️⃣ Akun Vercel

Vercel = hosting gratis untuk web kamu. Login pakai GitHub biar nyambung otomatis.

1. Buka https://vercel.com/signup
2. Klik **"Continue with GitHub"** → authorize
3. Pilih plan **Hobby (Free)** — gratis selamanya untuk personal
4. ✅ Done

---

## 4️⃣ Akun Supabase (Opsional)

Supabase = backend database gratis. Berguna kalau portfolio kamu mau ada fitur kontak form yang nyimpen data.

1. Buka https://supabase.com
2. Klik **"Start your project"** → login pakai GitHub
3. Skip dulu bikin project — nanti pas workshop

---

## 5️⃣ Akun AI Chat (Pilih Salah Satu)

Pilih **minimal 1**:

### Opsi A — ChatGPT (OpenAI)
- https://chat.openai.com → daftar
- Plan free cukup untuk workshop ini

### Opsi B — Claude (Anthropic)
- https://claude.ai → daftar pakai Google
- Free tier dapet model bagus

### Opsi C — Gemini (Google)
- https://gemini.google.com → login pakai akun Google
- Gratis, fast

### Opsi D — Kiro.dev
- https://kiro.dev → daftar
- Khusus untuk dev — built-in spec mode

**Rekomendasi:** Untuk pemula → **ChatGPT** atau **Claude**. Untuk yang udah agak ngerti → **Kiro.dev** karena outputnya code-ready.

---

## 6️⃣ Install Git

Git = tool wajib untuk version control + push ke GitHub.

### Windows
1. Download dari https://git-scm.com/download/win
2. Run installer → next-next-next (default settings)
3. Buka **PowerShell** atau **Git Bash**, ketik:
   ```bash
   git --version
   ```
   Output harus: `git version 2.x.x`

### Mac
```bash
# Install Homebrew kalau belum ada
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install git
brew install git
git --version
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install git -y
git --version
```

### Configure Git (semua OS)
```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
git config --global init.defaultBranch main
```

---

## 7️⃣ Install Node.js

Node.js dibutuhkan untuk install Vercel CLI, Codex CLI, dan tools lain.

### Cara Termudah — Pakai Installer
1. Download **LTS version** dari https://nodejs.org
2. Run installer (default settings)
3. Verifikasi:
   ```bash
   node --version    # v20.x.x atau lebih baru
   npm --version     # 10.x.x atau lebih baru
   ```

---

## 8️⃣ Install Codex CLI

Codex = AI coder dari OpenAI yang jalan langsung di terminal kamu.

```bash
# Mac/Linux (perlu sudo)
sudo npm install -g @openai/codex

# Windows (PowerShell as Admin)
npm install -g @openai/codex
```

**Verifikasi:**
```bash
codex --version
# Output: codex-cli 0.x.x
```

**Login Codex** (lakukan setelah punya akun ChatGPT):
```bash
codex login --device-auth
```
- Akan muncul kode 8-digit + URL
- Buka URL, masukkan kode, authorize
- ✅ Done

> ⚠️ **Note:** Kalau pakai ChatGPT Free tier, ada limit penggunaan harian. Untuk workshop, biasanya cukup.

---

## 9️⃣ Install Vercel CLI

```bash
npm install -g vercel
vercel --version
```

**Login:**
```bash
vercel login
# Pilih "Continue with GitHub" → authorize di browser
```

**Verifikasi:**
```bash
vercel whoami
# Output: username-kamu
```

---

## 🔟 Install Supabase CLI (Opsional)

```bash
# Mac
brew install supabase/tap/supabase

# Windows (Scoop)
scoop install supabase

# npm (cross-platform, simple)
npm install -g supabase

# Verifikasi
supabase --version
```

---

## 1️⃣1️⃣ Install 9router (Opsional)

9router = AI routing manager untuk pakai banyak model AI lewat 1 endpoint.

1. Buka https://9router.com
2. Daftar / login
3. Ikuti petunjuk install di dashboard mereka

> ⚠️ **Note:** 9router tidak wajib untuk workshop ini.

---

## 1️⃣2️⃣ Final Verification

Buka terminal, jalankan satu-satu untuk pastikan semua siap:

```bash
git --version           # ✅ git version 2.x
node --version          # ✅ v20.x atau lebih baru
npm --version           # ✅ 10.x
codex --version         # ✅ codex-cli 0.x
vercel --version        # ✅ Vercel CLI 5x.x
gh --version            # ✅ gh version 2.x (kalau install gh CLI)

vercel whoami           # ✅ username Vercel
git config --global user.name   # ✅ nama kamu
```

Kalau semua keluar version (bukan error "command not found"), **kamu siap workshop**.

---

## 🎒 Yang Dipersiapkan Hari-H Workshop Online

### Hardware
- ✅ **Laptop** dengan semua tools terinstall
- ✅ **Charger** plugged (workshop 2.5 jam)
- ✅ **Headset / earphone** terkoneksi
- ✅ **Internet stabil** (kabel LAN > wifi kalau bisa)
- ✅ **HP backup** untuk kontak panitia kalau ada masalah
- ✅ **Lampu cukup** kalau on camera (hindari backlight gelap)

### Software
- ✅ **Zoom App** ter-install + login
- ✅ **Browser** Chrome/Firefox terupdate
- ✅ **Terminal** sudah dibuka
- ✅ **VS Code / text editor** standby
- ✅ **AI Chat tab** sudah dibuka (Claude/ChatGPT/dst)

### Lokasi Workshop
- ✅ **Tempat tenang** — minim suara latar
- ✅ **Pencahayaan cukup** — wajah jelas di kamera
- ✅ **Background rapi** — atau pakai virtual background Zoom
- ✅ **Bebas gangguan** — kasih tahu orang rumah jangan ganggu 2.5 jam

### Konten
- ✅ **Catatan project** kamu (mau tampilin apa di portfolio)
- ✅ **Foto profil** profesional (kalau ada)
- ✅ **CV terbaru** (untuk referensi konten)

### Mental
- ✅ **Bangun lebih awal** — sarapan, ngopi, ke toilet dulu
- ✅ **Mood eksplorasi** — siap bereksperimen sama AI
- ✅ **Kesabaran** — workshop online butuh fokus lebih

---

## 🆘 Stuck? Troubleshooting

### "command not found" setelah install
- **Restart terminal** (tutup dan buka lagi)
- **Restart laptop** kalau masih nggak jalan

### Git push butuh password
- Generate **Personal Access Token** di https://github.com/settings/tokens
- Atau pakai `gh auth login` (install GitHub CLI dulu: https://cli.github.com)

### Codex CLI gagal login
- Pastikan udah punya akun ChatGPT (https://chat.openai.com)
- Kode device expired setelah 15 menit — generate ulang dengan `codex login --device-auth`

### Vercel CLI gagal deploy
- Cek `vercel whoami` — harus return username
- Kalau tidak, login ulang: `vercel logout && vercel login`

### npm install error "EACCES" di Mac/Linux
- Pakai `sudo` di depan command:
  ```bash
  sudo npm install -g <package>
  ```

### "node: command not found" di Windows setelah install
- Restart laptop, jangan cuma restart terminal
- Pastikan saat install Node, opsi "Add to PATH" tercentang

### Zoom audio echo
- Pastikan pakai headset (bukan speaker laptop)
- Settings → Audio → "Echo cancellation" → ON
- Mute mic kalau nggak ngomong

### Zoom video lag/freeze
- Tutup app berat lain (Spotify, browser tabs banyak)
- Settings → Video → uncheck "HD" → quality lebih ringan
- Disable virtual background kalau laptop spec rendah

### Internet putus saat workshop
- Tethering dari HP cepet (4G/5G)
- Reconnect Zoom, panitia akan admit lagi
- Kalau parah, lihat recording (akses 30 hari)

---

## 📞 Butuh Bantuan?

Kalau ada yang stuck, **chat panitia** atau tanya di grup WA workshop. Jangan tunggu hari-H baru install — datang dengan tools sudah ready, biar fokus belajar bikin portfolio.

**Hari-H Schedule:**
- 08:45 WIB — Join Zoom (15 menit lebih awal!)
- 09:00 WIB — Workshop dimulai
- 11:30 WIB — Selesai

**See you in Zoom! 🎥🚀**
