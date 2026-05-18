# 📋 Panduan Persiapan Workshop

> Workshop FIKOM UDB — Pembuatan Portofolio Tanpa Coding dengan AI

**🚨 PENTING:** Selesaikan semua persiapan ini **sebelum hari workshop**. Wifi kampus saat workshop akan padat — jangan andalkan untuk install software.

**Estimasi waktu:** 60–90 menit

---

## ✅ Checklist Cepat

| # | Item | Wajib? | Estimasi |
|---|------|--------|----------|
| 1 | Akun GitHub | ✅ Wajib | 5 menit |
| 2 | Akun Vercel | ✅ Wajib | 3 menit |
| 3 | Akun Supabase | 🟡 Opsional | 5 menit |
| 4 | 1 Akun AI Chat (ChatGPT/Claude/Gemini/Kiro) | ✅ Wajib | 5 menit |
| 5 | Install Git | ✅ Wajib | 10 menit |
| 6 | Install Node.js (untuk CLI) | ✅ Wajib | 10 menit |
| 7 | Install Codex CLI | ✅ Wajib | 5 menit |
| 8 | Install Vercel CLI | ✅ Wajib | 3 menit |
| 9 | Install Supabase CLI | 🟡 Opsional | 5 menit |
| 10 | Install 9router | 🟡 Opsional | 5 menit |
| 11 | Login & verifikasi semua tools | ✅ Wajib | 10 menit |

---

## 1️⃣ Akun GitHub

GitHub = tempat simpan code kamu. Wajib karena nyambung ke Vercel.

1. Buka https://github.com/signup
2. Pakai email aktif (kuliah atau pribadi).
3. Username yang profesional: **`namasaya`** atau **`namasaya-dev`** — bukan `xXdarkXxlordXx`.
4. Verifikasi email.
5. ✅ Done — catat username kamu.

**Tips:** Pakai nama asli atau nickname yang konsisten dengan email/LinkedIn.

---

## 2️⃣ Akun Vercel

Vercel = hosting gratis untuk web kamu. Login pakai GitHub biar nyambung otomatis.

1. Buka https://vercel.com/signup
2. Klik **"Continue with GitHub"** → authorize.
3. Pilih plan **Hobby (Free)** — gratis selamanya untuk personal.
4. ✅ Done.

---

## 3️⃣ Akun Supabase (Opsional)

Supabase = backend database gratis. Berguna kalau portfolio kamu mau ada fitur kontak form yang nyimpen data.

1. Buka https://supabase.com
2. Klik **"Start your project"** → login pakai GitHub.
3. Skip dulu bikin project — nanti pas workshop.

---

## 4️⃣ Akun AI Chat (Pilih Salah Satu)

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

## 5️⃣ Install Git

Git = tool wajib untuk version control + push ke GitHub.

### Windows
1. Download dari https://git-scm.com/download/win
2. Run installer → next-next-next (default settings).
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

## 6️⃣ Install Node.js

Node.js dibutuhkan untuk install Vercel CLI, Codex CLI, dan tools lain.

### Cara Termudah — Pakai Installer
1. Download **LTS version** dari https://nodejs.org
2. Run installer (default settings).
3. Verifikasi:
   ```bash
   node --version    # v20.x.x atau lebih baru
   npm --version     # 10.x.x atau lebih baru
   ```

---

## 7️⃣ Install Codex CLI

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
- Akan muncul kode 8-digit + URL.
- Buka URL, masukkan kode, authorize.
- ✅ Done.

> ⚠️ **Note:** Kalau pakai ChatGPT Free tier, ada limit penggunaan harian. Untuk workshop, biasanya cukup.

---

## 8️⃣ Install Vercel CLI

```bash
npm install -g vercel
vercel --version
```

**Login:**
```bash
vercel login
# Pilih "Continue with GitHub" → authorize di browser.
```

**Verifikasi:**
```bash
vercel whoami
# Output: username-kamu
```

---

## 9️⃣ Install Supabase CLI (Opsional)

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

## 🔟 Install 9router (Opsional)

9router = AI routing manager untuk pakai banyak model AI lewat 1 endpoint.

1. Buka https://9router.com
2. Daftar / login.
3. Ikuti petunjuk install di dashboard mereka.

> ⚠️ **Note:** 9router tidak wajib untuk workshop ini. Boleh skip kalau bingung — kita akan pakai AI chat langsung (ChatGPT/Claude).

---

## 1️⃣1️⃣ Final Verification

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

## 🎒 Yang Dibawa Saat Workshop

- ✅ **Laptop** dengan semua tools terinstall
- ✅ **Charger** (workshop 2.5 jam, jangan kehabisan baterai)
- ✅ **Mouse** (opsional, biar nyaman)
- ✅ **Catatan project** kamu (mau tampilin apa di portfolio):
  - 3-5 project terbaik
  - Foto/screenshot project (kalau ada)
  - Link demo / repo (kalau ada)
- ✅ **Foto profil** profesional (300x300 minimum)
- ✅ **CV terbaru** (untuk referensi konten)
- ✅ **Mood untuk eksplorasi** — siap bereksperimen sama AI

---

## 🆘 Stuck? Troubleshooting

### "command not found" setelah install
- **Restart terminal** (tutup dan buka lagi).
- Restart laptop kalau masih nggak jalan.

### Git push butuh password
- Generate **Personal Access Token** di https://github.com/settings/tokens
- Atau pakai `gh auth login` (install GitHub CLI dulu: https://cli.github.com)

### Codex CLI gagal login
- Pastikan udah punya akun ChatGPT (https://chat.openai.com).
- Kode device expired setelah 15 menit — generate ulang dengan `codex login --device-auth`.

### Vercel CLI gagal deploy
- Cek `vercel whoami` — harus return username.
- Kalau tidak, login ulang: `vercel logout && vercel login`.

### npm install error "EACCES" di Mac/Linux
- Pakai `sudo` di depan command:
  ```bash
  sudo npm install -g <package>
  ```

### "node: command not found" di Windows setelah install
- Restart laptop, jangan cuma restart terminal.
- Pastikan saat install Node, opsi "Add to PATH" tercentang.

---

## 📞 Butuh Bantuan?

Kalau ada yang stuck, **chat panitia** atau tanya di grup WA workshop. Jangan tunggu hari-H baru install — datang dengan tools sudah ready, biar fokus belajar bikin portfolio.

**See you at the workshop! 🚀**
