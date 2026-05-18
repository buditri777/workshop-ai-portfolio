# 🎯 Cheatsheet — Workshop Portfolio AI

> 1 halaman, semua command yang kamu butuhkan. Print dan tempel di samping laptop.

---

## 🚀 FLOW LENGKAP (15 menit)

```
1. PROMPT AI       →  Copy master prompt, isi data kamu
2. SAVE FILES      →  index.html, style.css, script.js
3. PREVIEW         →  Double-click index.html
4. ITERATE         →  Minta AI ubah yang kurang sreg
5. DEPLOY          →  vercel --prod --yes
6. PUSH GITHUB     →  gh repo create ...
```

---

## 📦 SETUP PROJECT

```bash
# Bikin folder
mkdir portfolio
cd portfolio

# Init git
git init -b main

# Configure git (hanya sekali)
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

---

## 🤖 CODEX CLI

```bash
# Login (pakai akun ChatGPT)
codex login --device-auth

# Cek status
codex login status

# Pakai
codex "buatkan portfolio dengan..."

# Logout
codex logout
```

---

## 🚀 VERCEL CLI

```bash
# Login (pakai GitHub)
vercel login

# Cek user
vercel whoami

# Deploy production
vercel --prod --yes

# Deploy dengan nama custom
vercel --prod --yes --name my-portfolio

# List deployments
vercel ls

# Remove deployment
vercel rm <deployment-url>
```

**Output deploy:**
```
✓ Production: https://my-portfolio-xxx.vercel.app
```

---

## 🐙 GITHUB CLI (gh)

```bash
# Login (pakai browser)
gh auth login

# Bikin repo + push (1 command)
gh repo create portfolio --public --source=. --remote=origin --push

# Atau: bikin repo aja
gh repo create portfolio --public

# Buka repo di browser
gh repo view --web
```

---

## 📝 GIT BASIC (5 perintah saja)

```bash
git status          # Cek file yang berubah
git add .           # Stage semua perubahan
git commit -m "update text"   # Commit
git push            # Push ke GitHub
git pull            # Tarik update dari GitHub
```

---

## 🔄 UPDATE PORTFOLIO

```bash
# Edit file (pakai VS Code / Notepad / dsb)

# Lalu:
git add .
git commit -m "update: tambah project baru"
git push
vercel --prod    # Re-deploy
```

---

## 🆘 TROUBLESHOOTING

| Error | Fix |
|-------|-----|
| `codex: command not found` | `sudo npm install -g @openai/codex` |
| `vercel: command not found` | `npm install -g vercel` |
| `git: command not found` | Install Git, restart terminal |
| Login Codex expired | `codex login --device-auth` regenerate |
| Vercel HTTP 401 di URL | Vercel dashboard → Settings → Deployment Protection → Off |
| GitHub push butuh password | `gh auth login` (pakai gh CLI) |
| File foto nggak muncul | Cek path: harus relatif dari index.html |
| Mobile jelek | DevTools → toggle device → minta AI fix CSS responsive |
| AI output kepanjangan | Minta per file: "kirim index.html dulu" |

---

## 🎨 STRUCTURE FOLDER

```
portfolio/
├── index.html      ← Halaman utama
├── style.css       ← Styling
├── script.js       ← Interaktivitas
└── (assets/)       ← Foto, font (opsional)
```

---

## 🔥 PROMPT CEPAT

### Generate awal:
```
Buatkan portfolio personal untuk [nama], [role].
Skills: [list].
Projects: [list].
Style: dark modern, gradient ungu-biru.
Output: 3 file siap deploy ke Vercel.
```

### Iterate:
```
Ubah warna primary jadi merah marun (#8b0000).
Kirim style.css yang sudah diupdate.
```

### Tambah section:
```
Tambahin section testimoni dengan 3 quote dari teman/mentor.
Sisipkan setelah Projects.
Kirim HTML + CSS yang baru.
```

### Fix mobile:
```
Test di mobile 375px. CSS responsive ada masalah di [section X].
Tolong fix dan kirim ulang style.css.
```

---

## 📋 CHECKLIST KONTEN

Sebelum deploy, pastikan:

- [ ] Nama lengkap (bukan "Nama Anda")
- [ ] Foto profil (kalau ada)
- [ ] Bio real, bukan Lorem Ipsum
- [ ] Project links bisa diklik
- [ ] Email kontak valid
- [ ] LinkedIn link benar
- [ ] GitHub link benar
- [ ] Tidak ada placeholder text
- [ ] Mobile bagus (test di HP)
- [ ] Semua link bisa dibuka

---

## 🎁 BONUS COMMANDS

### Live preview lokal (auto-reload):
```bash
npx serve
# Buka http://localhost:3000
```

### Custom domain di Vercel:
```bash
vercel domains add namasaya.com
```

### Hapus deployment:
```bash
vercel rm portfolio-xxx.vercel.app --yes
```

### Cek logs deploy:
```bash
vercel logs <deployment-url>
```

---

## ⌨️ SHORTCUT TERMINAL

| Shortcut | Fungsi |
|----------|--------|
| `↑` / `↓` | History command |
| `Tab` | Auto-complete |
| `Ctrl+C` | Cancel command |
| `Ctrl+L` / `clear` | Clear screen |
| `pwd` | Lokasi sekarang |
| `ls` (Mac/Linux) / `dir` (Win) | List file |
| `cd ..` | Naik 1 folder |
| `cd ~` | Ke home |

---

**🚀 Ready to ship. Selamat ngoprek!**
