# 🎯 Runbook Workshop (Untuk Pemateri)

> Workshop FIKOM UDB — Pembuatan Portofolio Tanpa Coding dengan AI

**Durasi:** 2 jam 15 menit (135 menit)
**Format:** Hybrid — pemaparan + demo + hands-on
**Target peserta:** Mahasiswa FIKOM UDB (semua angkatan)
**Output peserta:** Setiap peserta keluar dengan **portfolio live** di Vercel + URL siap dishare

---

## ⏱️ Susunan Acara

| Waktu | Durasi | Segmen | PIC |
|-------|--------|--------|-----|
| 00:00 | 10' | Opening + Ice Breaker | MC |
| 00:10 | 15' | **Demo: Portfolio dalam 15 Menit** | Pemateri |
| 00:25 | 20' | Setup Tools + Verifikasi | Pemateri + Asisten |
| 00:45 | 60' | 🔥 **Hands-on Praktik** | Pemateri + Asisten |
| 01:45 | 15' | Deploy ke Vercel + Custom Domain | Pemateri |
| 02:00 | 15' | Showcase + Q&A + Closing | Semua |

Total: **2j 15m**

---

## 📦 Persiapan H-1

### Pemateri
- [ ] Test slide deck di laptop yang akan dipakai
- [ ] Test demo end-to-end: prompt → save → deploy → live URL (target < 10 menit)
- [ ] Siapkan akun "demo" di GitHub & Vercel khusus presentasi
- [ ] Siapkan template prompt di clipboard manager
- [ ] Backup slide ke USB / cloud
- [ ] Test mic, projector, internet di ruang workshop
- [ ] Siapkan link slide deck di QR code (untuk peserta scan)

### Asisten (2-3 orang)
- [ ] Briefing alur workshop & expected blockers
- [ ] Persiapkan stiker hijau (siap)/merah (perlu bantuan) untuk tracking peserta
- [ ] Daftar peserta + status persiapan tools

### Materi Cetak
- [ ] Handout panduan persiapan (untuk peserta yang belum siap)
- [ ] Cheatsheet command (1 lembar A4)
- [ ] Master prompt template (1 lembar A4)

### Logistik
- [ ] Wifi password ditempel di papan tulis (jelas, gede)
- [ ] Stop kontak sufficient untuk 30+ laptop
- [ ] Air mineral untuk peserta
- [ ] Snack untuk break (kalau ada)

---

## 🎬 Segmen 1: Opening (10 menit)

### Tujuan
- Cairin suasana
- Set ekspektasi — apa yang akan dipelajari
- Konfirmasi kesiapan tools

### Script

**Pembukaan (2 menit)**
> "Selamat datang di workshop. Hari ini kita bakal bikin portfolio profesional dalam 15 menit. Tanpa coding. Pakai AI. Yang masih ragu, di akhir sesi kalian bakal punya URL portfolio yang bisa langsung kalian share ke LinkedIn."

**Ice breaker (3 menit)**
- Tanya peserta:
  1. "Siapa yang punya portfolio?" (angkat tangan)
  2. "Siapa yang udah pernah pakai AI untuk bikin code?" (angkat tangan)
  3. "Siapa yang takut sama coding?" (biasanya banyak)
- Insight: "Workshop ini buat kalian semua, especially yang takut coding."

**Cek persiapan (3 menit)**
- "Yang sudah install Codex CLI, angkat tangan."
- "Yang sudah punya akun Vercel, angkat tangan."
- "Yang masih kosongan?" → asisten standby bantu install.

**Set ekspektasi (2 menit)**
- "Akhir workshop, target: 1 portfolio live, 1 URL siap dishare."
- "Yang ketinggalan, tetap bisa lanjut di rumah pakai handout."

---

## 🎬 Segmen 2: Live Demo (15 menit)

### Tujuan
Menunjukkan **proses lengkap** dari nol ke live, agar peserta paham flow-nya sebelum praktik sendiri.

### Script Demo

**1. Opening Demo (1 menit)**
> "Saya bakal bikin portfolio dari nol. Stopwatch jalan. Tantangan: live URL dalam 10 menit."

**2. Buka AI Chat (2 menit)**
- Buka Claude / Codex / ChatGPT
- Tunjukkan tab kosong: "Belum ada apa-apa di sini."
- Paste master prompt:
```
Buatkan website portfolio untuk:
Nama: Ahmad Budi (Mahasiswa Teknik Informatika UDB)
Pitch: Suka bikin web app yang bermanfaat
Skills: HTML, CSS, JavaScript, Python, Figma
Projects:
  1. Tapakku - Web profil jasa sol sepatu - tapakku.vercel.app
  2. Inspira Thrift - Landing hoodie thrift - inspira-thrift.vercel.app
  3. TI 24 A6 - Website kelas - ti-24-a6.vercel.app
Kontak:
  - email: ahmad@gmail.com
  - LinkedIn: linkedin.com/in/ahmadbudi
  - GitHub: ahmadbudi
Style: Modern dark theme, gradient accent, smooth animations.
Stack: HTML + CSS + JavaScript (no framework).
Output: 3 file (index.html, style.css, script.js).
```

**3. Tunggu AI Generate (1 menit)**
- Sambil nunggu, jelaskan: "AI lagi nulis 500-1000 baris code untuk kita."

**4. Save File (2 menit)**
- Buat folder `portfolio-demo/`
- Copy-paste 3 file dari output AI
- Highlight: "Tidak ada baris code yang saya tulis. 0 baris."

**5. Preview Lokal (1 menit)**
- Double-click `index.html`
- Browser kebuka, portfolio muncul
- Scroll-scroll, tunjukkan section: hero, about, skills, projects, contact

**6. Iterate sekali (2 menit)**
- "Saya nggak suka warnanya hijau, mau ganti biru" → minta AI
- Replace `style.css`
- Refresh browser → warna berubah

**7. Deploy ke Vercel (2 menit)**
```bash
cd portfolio-demo
vercel --prod --yes
```
- Tunggu 10-30 detik
- URL muncul → klik
- "Sekarang portfolio saya **online**, bisa diakses dari HP, dari laptop temen, dari mana aja di dunia."

**8. Push GitHub (2 menit)**
```bash
git init -b main
git add .
git commit -m "init portfolio"
gh repo create portfolio-demo --public --source=. --remote=origin --push
```
- Buka GitHub → tunjukkan repo

**9. Recap (2 menit)**
- "Total waktu: 8 menit 32 detik."
- "Hasil: portfolio profesional, live, source code di GitHub."
- "Sekarang giliran kalian. Siap?"

### Notes Pemateri
- ⚠️ Demo wajib mulus — **rehearsal H-1 minimal 2x**.
- Kalau AI lemot, sambil nunggu cerita pengalaman / jokes.
- Backup plan: prepare 1 portfolio yang udah jadi, tunjukkan sebagai "ini hasilnya" kalau live demo gagal total.

---

## 🎬 Segmen 3: Setup Tools (20 menit)

### Tujuan
Pastikan **100% peserta** punya tools yang ready sebelum mulai praktik.

### Flow

**1. Verifikasi Cepat (5 menit)**
Pemateri minta peserta jalankan satu-satu di terminal masing-masing:
```bash
git --version
node --version
codex --version
vercel --version
```
- Yang semua muncul versi → **stiker hijau** (siap)
- Yang ada error → **stiker merah** (perlu bantuan)

**2. Pair Up (5 menit)**
- Peserta hijau bantu peserta merah di sebelahnya
- Asisten roaming bantu yang stuck > 5 menit

**3. Login Verification (5 menit)**
```bash
vercel whoami    # harus return username
gh auth status   # harus return logged in (kalau install gh)
```

**4. Common Issues Solving (5 menit)**

| Issue | Fix |
|-------|-----|
| `codex: command not found` | `sudo npm install -g @openai/codex` (Mac/Linux) atau as Admin (Win) |
| `git: command not found` | Install Git, restart terminal |
| Vercel login gagal | `vercel logout && vercel login` |
| Codex login expired | `codex login --device-auth` regenerate |
| Internet lemot | Pakai hotspot HP sebagai backup |

**5. Bagi Tim (kondisional)**
- Peserta dibagi 4-5 orang per tim
- 1 asisten per 2 tim untuk tracking progress

---

## 🎬 Segmen 4: HANDS-ON (60 menit) 🔥

### Tujuan
Setiap peserta keluar workshop dengan **portfolio live**.

### Sub-segmen

#### A. Brainstorm (10 menit)
**Aktivitas:** Peserta isi worksheet (1 lembar A4) dengan:
- Nama lengkap
- Role / spesialisasi (1 kalimat)
- Pitch 1 kalimat: "Saya bantu orang dengan ___"
- 5 skills utama
- 3 project terbaik (nama + 1 kalimat deskripsi + link kalau ada)
- Email + LinkedIn + GitHub

**Pemateri:** Keliling cek kualitas isian. Yang bingung, kasih contoh konkret.

#### B. Generate dengan AI (15 menit)
**Aktivitas:** Setiap peserta paste **master prompt** ke AI, ganti placeholder dengan data sendiri.

**Pemateri:**
- Tampilkan master prompt di layar utama (file: `02-prompt-templates.md`).
- Reminder: "Lebih spesifik, lebih bagus output. Sebut warna, vibe, referensi style (Linear/Stripe/Vercel)."
- Asisten roaming bantu peserta yang AI-nya kasih output aneh.

**Tips Pemateri:**
- Kalau output terpotong → minta lanjutan: "lanjutkan style.css dari mana saya berhenti"
- Kalau output kepanjangan → minta dipecah: "kirim index.html dulu, abis itu style.css"

#### C. Save & Preview (10 menit)
**Aktivitas:**
1. Buat folder `portfolio/` di Desktop.
2. Save 3 file dari AI: `index.html`, `style.css`, `script.js`.
3. Double-click `index.html` → buka di browser.
4. Scroll, cek semua section.

**Common Issues:**
- File save dengan ekstensi `.txt` → pastikan ekstensi yang benar
- CSS tidak load → pastikan nama file & path link di HTML benar
- Foto tidak muncul → wajar, akan diisi nanti

#### D. Iterate & Polish (15 menit)
**Aktivitas:** Peserta minta AI ubah hal-hal yang kurang sreg.

**Contoh request:**
- "Ubah warna utama jadi merah marun"
- "Tambahin section testimoni"
- "Bikin font lebih besar di hero"
- "Tambahkan dark/light mode toggle"
- "Bikin animasi yang lebih smooth"

**Pemateri:** Tunjukkan 2-3 contoh iteration di layar utama untuk inspirasi.

#### E. Konten Final (10 menit)
**Aktivitas:** Replace placeholder content dengan konten asli.

**Checklist konten:**
- [ ] Nama lengkap (bukan "Nama Anda")
- [ ] Foto profil (kalau ada — atau placeholder yang oke)
- [ ] Bio yang real, bukan Lorem Ipsum
- [ ] Project links yang **bisa diklik**
- [ ] Email kontak yang **valid**
- [ ] Link LinkedIn & GitHub yang **bisa dibuka**

---

## 🎬 Segmen 5: Deploy (15 menit)

### Tujuan
Setiap peserta dapat **URL live** dari portfolio mereka.

### Steps

**1. Persiapan (3 menit)**
```bash
cd ~/Desktop/portfolio
git init -b main
git add .
git commit -m "init portfolio"
```

**2. Deploy ke Vercel (5 menit)**
```bash
vercel --prod --yes
# Ikuti prompt:
# - Set up & deploy: Y
# - Scope: pilih akun pribadi
# - Link to existing: N
# - Project name: portfolio (atau bebas)
# - Directory: ./
# - Override settings: N
```

**Output:**
```
✓ Production: https://portfolio-xxx.vercel.app
```

**3. Cek URL (2 menit)**
- Klik URL → portfolio terbuka
- Pastikan semua section tampil dengan benar
- **Test di HP** — buka URL di browser HP

**4. Push GitHub (5 menit)**
```bash
gh repo create portfolio --public --source=. --remote=origin --push
# Atau manual:
# git remote add origin https://github.com/user/portfolio.git
# git push -u origin main
```

### Common Issues

| Issue | Solusi |
|-------|--------|
| `vercel: command not found` | Install ulang: `npm install -g vercel` |
| Deploy stuck di "Uploading" | Cek koneksi internet, retry |
| HTTP 401 di URL | SSO Protection aktif → masuk Vercel dashboard, Settings → Deployment Protection → Off |
| File tidak ke-deploy | Pastikan `index.html` ada di root folder |

---

## 🎬 Segmen 6: Showcase + Q&A (15 menit)

### Showcase (8 menit)
- Pemateri ajak 4-5 peserta tampilin URL portfolio di layar
- Highlight kelebihan masing-masing
- Kasih apresiasi → bangkitkan motivasi

### Q&A (5 menit)
**Pertanyaan umum:**
1. "Bisa ganti tema apa aja?" — Iya, minta AI ubah → re-deploy
2. "Domain custom mahal nggak?" — `~140K/tahun` di Niagahoster/Domainesia
3. "Kalau AI berbohong / kasih code error?" — Pakai prompt: "test code-mu, fix error yang muncul"
4. "Bisa update nanti dari HP?" — Bisa, edit di GitHub.dev langsung dari HP
5. "Bedanya sama Wix/Webflow?" — Lebih cepat, lebih custom, gratis selamanya

### Closing (2 menit)
- Recap: "Berapa menit kalian bikin portfolio? **15 menit ke 30 menit**."
- Action item:
  1. Share URL di IG story / LinkedIn malam ini
  2. Update CV dengan link portfolio
  3. Apply 1 magang sebelum minggu depan
- Foto bareng → posting di IG dengan tag `@fikomudb`

---

## 📊 Metrik Sukses Workshop

- ✅ **>= 90% peserta** punya URL portfolio live di akhir workshop
- ✅ **>= 50% peserta** posting URL di IG/LinkedIn dalam 24 jam
- ✅ **>= 1 peserta** dapat panggilan magang/wawancara dalam 2 minggu (ideal)

---

## 🆘 Plan B (Kalau Ada Masalah)

| Masalah | Plan B |
|---------|--------|
| Internet kampus mati total | Pakai hotspot HP semua peserta |
| AI down (ChatGPT/Claude offline) | Pindah ke alternatif (Gemini, Kiro) |
| Peserta majority belum install tools | Kurangi waktu demo (10 menit), perpanjang setup (40 menit) |
| Time over di hands-on | Skip showcase, lanjut deploy via WA grup nanti |
| Pemateri sakit/halangan | Asisten utama backup, sederhanakan ke 1 path: prompt → save → deploy |

---

## 📚 Reference Files

- `00-deck.pdf` — Slide presentasi (export dari `slides/index.html`)
- `01-panduan-persiapan.md` — Untuk peserta sebelum workshop
- `02-prompt-templates.md` — Master prompt + variasi
- `03-cheatsheet-command.md` — Cheat sheet 1 halaman
- `04-troubleshooting.md` — Common errors + fixes

---

**Good luck, semoga workshop sukses besar! 🎉**
