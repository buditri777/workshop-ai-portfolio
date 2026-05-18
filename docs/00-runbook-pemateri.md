# 🎯 Runbook Workshop ONLINE via Zoom (Untuk Pemateri)

> Workshop FIKOM UDB — Pembuatan Portofolio Tanpa Coding dengan AI
> **Format: 100% Online via Zoom Meeting**

**Durasi:** 2 jam 15 menit (135 menit)
**Format:** Webinar interaktif via Zoom (screen share + breakout room + chat)
**Target peserta:** Mahasiswa FIKOM UDB (semua angkatan)
**Output peserta:** Setiap peserta keluar dengan **portfolio live** di Vercel + URL siap dishare

---

## ⏱️ Susunan Acara (Online Format)

| Waktu | Durasi | Segmen | Format Zoom |
|-------|--------|--------|-------------|
| 00:00 | 10' | Opening + Cek Audio/Video | Main Room |
| 00:10 | 15' | **Demo: Portfolio dalam 15 Menit** | Pemateri Screen Share |
| 00:25 | 20' | Setup Tools + Verifikasi | Breakout Rooms |
| 00:45 | 60' | 🔥 **Hands-on Praktik** | Main Room + Asisten Standby Chat |
| 01:45 | 15' | Deploy ke Vercel + Share URL di Chat | Main Room |
| 02:00 | 15' | Showcase + Q&A + Foto Bareng | Main Room |

Total: **2j 15m**

---

## 📦 Persiapan H-1 (Pemateri & Panitia)

### Setup Zoom
- [ ] Akun Zoom **Pro/Business** (free hanya 40 menit) — wajib upgrade atau pakai akun resmi UDB
- [ ] Test recording (cloud + local backup)
- [ ] Generate meeting link + passcode
- [ ] Set waiting room ON
- [ ] Set "Allow co-host" → tunjuk asisten sebagai co-host
- [ ] Pre-create breakout rooms (5-6 rooms, 4-5 peserta per room)
- [ ] Custom virtual background dengan logo FIKOM UDB (opsional)

### Hardware Pemateri
- [ ] Laptop dengan kamera HD (atau external webcam)
- [ ] Headset dengan mic eksternal (USB) — bukan earphone HP
- [ ] Internet stabil (kabel LAN > wifi, min. 25 Mbps)
- [ ] Monitor kedua (untuk lihat chat sambil share screen) — sangat dianjurkan
- [ ] Laptop backup / HP standby (kalau laptop utama freeze)

### Software Pemateri
- [ ] Zoom App (latest version) ter-install
- [ ] Test screen share kualitas (full HD)
- [ ] Pre-load semua tab: AI Chat, terminal, browser preview
- [ ] Tutup notifikasi (Slack, WhatsApp, email) — pakai DND mode
- [ ] Cek mic dengan https://mictests.com sebelum mulai

### Materi
- [ ] Link slide deck siap di clipboard: `https://workshop-portofolio-ai.vercel.app`
- [ ] Master prompt template di clipboard / Notion
- [ ] Demo script lengkap (di-cetak / di layar kedua)
- [ ] Backup portfolio (sudah jadi) untuk Plan B kalau live demo gagal

### Asisten/Panitia
- [ ] Briefing role: 1 host pemateri + 2-3 co-host asisten
- [ ] **Chat moderator:** monitor Q&A real-time, jawab pertanyaan teknis
- [ ] **Breakout room facilitator:** pegang 1-2 room saat verifikasi tools
- [ ] **Stream timer:** monitor waktu, kasih cue ke pemateri (chat private)
- [ ] **Documentation:** screenshot showcase, kompilasi URL peserta

### Komunikasi Peserta H-1
Kirim via WA grup workshop:
1. **Link Zoom** + Passcode
2. **Reminder:** join 15 menit lebih awal (08:45 WIB)
3. **Cek list:** Git, Node, CLI sudah install, akun GitHub+Vercel ready
4. **Etiquette:** wajib on-camera, mute saat tidak bicara, gunakan headset
5. **Link slide:** untuk preview materi

---

## 🎬 Segmen 1: Opening + Audio Check (10 menit)

### Tujuan
- Pastikan semua peserta bisa dengar & dilihat
- Set ground rules Zoom
- Cairkan suasana

### Script

**08:45 WIB — Pre-Show (15 menit sebelum mulai)**
- Buka Zoom, admit peserta dari waiting room
- Sambil nunggu peserta join, putar background music ringan
- Tampilkan slide cover sebagai screen share
- Ucapkan sapaan kasual sambil cek mic peserta yang udah masuk
- "Halo, kalo udah denger suara saya, kasih reaction 👋 di Zoom ya"

**09:00 WIB — Opening (2 menit)**
> "Selamat pagi semuanya! Selamat datang di workshop online FIKOM UDB. Saya [nama], hari ini kita bakal bikin portfolio profesional dalam 15 menit pakai AI. Tanpa coding. Dari rumah masing-masing."

**Ground Rules Zoom (3 menit)**
> "Sebelum mulai, mari kita set ground rules biar workshop ini smooth:
> 1. **Camera ON** — biar suasana hangat, kayak di kelas beneran
> 2. **Mute mic** kalau nggak ngomong — biar audio bersih
> 3. **Pakai headset** — hindari echo
> 4. **Tanya di chat dulu** — asisten kami akan jawab. Kalau mau tanya verbal, raise hand
> 5. **Jangan keluar ruangan** — workshop hands-on, kalau ketinggalan susah ngejar
> 6. **Workshop ini direkam** — yang nggak nyaman on-cam, boleh off, tapi mute & nama jelas"

**Ice Breaker (3 menit)**
- "Sambil saya share screen, kalian ketik di chat:
  1. **Nama** + **angkatan**
  2. **1 emoji** yang menggambarkan mood pagi ini
  3. **1 hal** yang kalian harapkan dari workshop ini"
- Pemateri baca beberapa response → engagement boost

**Cek Persiapan via Polling Zoom (2 menit)**
Pakai fitur Zoom Polling:
- "Yang sudah install Codex CLI?" (Ya/Belum)
- "Yang sudah punya akun Vercel?" (Ya/Belum)
- "Yang masih kosongan / butuh bantuan setup?" (Ya/Tidak)

Hasil polling kasih tahu asisten siapa yang perlu di-pair-up di breakout room.

---

## 🎬 Segmen 2: Live Demo via Screen Share (15 menit)

### Setup Zoom
- Pemateri: **Share Screen → Window** (pilih window AI Chat / browser / VS Code)
- ⚠️ **JANGAN** share entire desktop — peserta bisa lihat notifikasi pribadi
- Centang "**Optimize for video clip**" — kalau ada animasi
- Centang "**Share computer audio**" — kalau ada video/audio playback

### Script Demo

**1. Opening Demo (1 menit)**
> "Saya bakal bikin portfolio dari nol di depan kalian. Stopwatch saya nyalain. Target: live URL dalam 10 menit."

> "Yang penting **kalian PERHATIKAN flow-nya**, bukan ngikutin step-by-step sekarang. Praktik kalian sendiri di sesi berikutnya."

**2. Buka AI Chat (2 menit)**
- Switch share window ke browser dengan Claude/Codex/ChatGPT
- "Ini halaman AI yang akan kita pakai. Sekarang masih kosong."
- Paste master prompt + ganti placeholder dengan data demo

**3. Tunggu AI Generate (1 menit)**
- "Sambil nunggu AI ngeluarin code, ada yang punya pertanyaan? Tulis di chat."
- Asisten siap jawab di chat sambil pemateri tetap bicara

**4. Save File (2 menit)**
- Switch share ke VS Code
- Buat folder `portfolio-demo/`
- Copy-paste 3 file dari output AI
- Highlight: "Tidak ada baris code yang saya tulis. 0 baris."

**5. Preview Lokal (1 menit)**
- Switch share ke File Explorer / Finder
- Double-click `index.html`
- Browser kebuka, portfolio muncul
- Scroll-scroll, tunjukkan section

**6. Iterate sekali (2 menit)**
- "Saya nggak suka warnanya hijau, mau ganti biru" → minta AI ulang
- Replace `style.css`
- Refresh browser → warna berubah

**7. Deploy ke Vercel (2 menit)**
- Switch share ke Terminal
```bash
cd portfolio-demo
vercel --prod --yes
```
- Tunggu 10-30 detik
- URL muncul → klik
- "Sekarang portfolio saya **online**, bisa diakses dari HP, dari laptop kalian, dari mana aja di dunia."

**8. Push GitHub (2 menit)**
```bash
git init -b main
git add .
git commit -m "init portfolio"
gh repo create portfolio-demo --public --source=. --remote=origin --push
```
- Buka GitHub di browser → tunjukkan repo

**9. Recap di Chat (2 menit)**
- "Total waktu: [X] menit. Sekarang giliran kalian. Siap?"
- Asisten paste link slide + master prompt di chat Zoom

### ⚠️ Catatan Pemateri Online
- **Bicara lebih lambat** dari workshop offline — peserta lebih susah focus via screen
- **Sebut nama peserta** yang aktif di chat — bikin engagement tinggi
- **Cek chat tiap 30 detik** — kalau perlu, asisten yang baca chat dengan suara
- **Pakai pointer Zoom** (Annotate → Spotlight) untuk tunjuk bagian penting di screen
- **Zoom in/out** kalau text terlalu kecil di screen — Cmd/Ctrl + scroll wheel

---

## 🎬 Segmen 3: Setup Tools — Breakout Rooms (20 menit)

### Tujuan
Pastikan **100% peserta** punya tools yang ready sebelum mulai praktik.

### Flow

**1. Polling Hasil Cek (2 menit)**
Pemateri minta polling lagi:
- "Yang sudah ready (semua tool installed)?" → masuk room "🟢 Ready"
- "Yang butuh bantuan setup?" → masuk room "🟡 Setup Help"

**2. Auto-assign Breakout Rooms (2 menit)**
Co-host buka **Breakout Rooms**:
- 1 room "🟢 Ready" untuk peserta yang siap (asisten cuma standby Q&A)
- 4-5 room "🟡 Setup Help" (4 peserta per room + 1 asisten)

**3. Pair Up + Troubleshoot (10 menit)**
Di room "🟡":
- Asisten minta peserta share screen masing-masing
- Cek satu-satu:
  ```bash
  git --version
  node --version
  codex --version
  vercel --version
  vercel whoami
  ```
- Yang error → asisten guide install/fix
- Yang ready → bantu peserta lain

Di room "🟢":
- Asisten kasih challenge bonus: explore master prompt, baca dokumentasi
- Atau peserta diskusi project ide masing-masing

**4. Common Issues — Asisten Pegang Cheat Sheet (5 menit)**

| Issue | Fix |
|-------|-----|
| `codex: command not found` | Mac: `sudo npm install -g @openai/codex`. Win: as Admin. |
| `git: command not found` | Install Git, **restart laptop** (bukan terminal) |
| Vercel login gagal | `vercel logout && vercel login` |
| Codex login expired | `codex login --device-auth` regenerate |
| Internet lemot | Pakai hotspot HP sebagai backup |

**5. Close Breakout Rooms (1 menit)**
- Co-host broadcast: "Breakout rooms close in 60 seconds"
- Semua peserta kembali ke main room

---

## 🎬 Segmen 4: HANDS-ON Main Room (60 menit) 🔥

### Setup Zoom
- Pemateri tetap share screen dengan **slide deck** (mode "Side-by-side: Speaker")
- Asisten standby di **chat Zoom** untuk Q&A
- Recording ON (cloud + local backup)

### Sub-segmen

#### A. Brainstorm (10 menit)
**Aktivitas:** Peserta isi worksheet brainstorm digital.

**Pemateri:**
- Share link worksheet: `https://fikom-workshop-worksheet.vercel.app`
- "Buka di tab baru, isi sambil dengerin saya"
- Sambil peserta isi, pemateri kasih guide:
  - "Pitch 1 kalimat = pakai format: 'Saya bantu [siapa] dengan [apa]'"
  - "Project = pilih yang kamu beneran ngerjain, bukan tugas kelompok yang lo cuma jadi notulis"

**Asisten:** Standby chat, jawab pertanyaan brainstorm.

#### B. Generate dengan AI (15 menit)
**Aktivitas:** Setiap peserta paste **master prompt** ke AI, ganti placeholder.

**Pemateri:**
- Share link master prompt di chat: `https://workshop-portofolio-ai.vercel.app#9`
- Reminder: "Lebih spesifik, lebih bagus output."
- Tampilkan timer di screen: "15 menit dari sekarang"

**Tips Pemateri:**
- Setelah 5 menit, tanya: "Sudah ada yang dapet output dari AI?" → reaction 👍 di Zoom
- Setelah 10 menit: "Yang masih stuck di prompt, ketik di chat 'STUCK PROMPT'" → asisten DM bantu

#### C. Save & Preview (10 menit)
**Aktivitas:**
1. Buat folder `portfolio/` di Desktop
2. Save 3 file dari AI
3. Double-click `index.html` → preview di browser
4. **Share screenshot di chat Zoom** (peserta yang udah jadi)

**Pemateri:** Apresiasi peserta yang share screenshot pertama → motivasi yang lain.

#### D. Iterate & Polish (15 menit)
**Aktivitas:** Peserta minta AI ubah hal-hal yang kurang sreg.

**Pemateri:**
- Share contoh iteration di screen utama:
  - "Ubah warna jadi merah marun"
  - "Tambahin section testimoni"
  - "Bikin font hero lebih besar"
- "Mau ada yang request live? Type request di chat, kita coba bareng!"
- Pilih 2-3 request → demo iterate live

#### E. Konten Final (10 menit)
**Aktivitas:** Replace placeholder content dengan konten asli.

**Checklist konten** (share di chat sebagai pesan):
- ✅ Nama lengkap (bukan "Nama Anda")
- ✅ Bio yang real, bukan Lorem Ipsum
- ✅ Project links **bisa diklik**
- ✅ Email kontak **valid**
- ✅ Link LinkedIn & GitHub **bisa dibuka**

---

## 🎬 Segmen 5: Deploy + Share di Chat (15 menit)

### Setup Zoom
- Pemateri share screen, demo deploy bareng peserta
- Asisten kompilasi URL di Google Sheet / Notion

### Steps

**1. Deploy Bareng (8 menit)**

Pemateri command:
```bash
cd portfolio
git init -b main
git add .
git commit -m "init portfolio"
vercel --prod --yes
```

Peserta ikutin di laptop masing-masing.

**Tampilkan timer di screen.** "10 menit deploy session — yang lebih cepat selesai, share URL di chat!"

**2. Submit URL di Chat Zoom (5 menit)**
- Pemateri pasang format di chat:
  ```
  📝 SUBMIT URL FORMAT:
  Nama: [Budi Santoso]
  URL: [https://my-portfolio.vercel.app]
  ```
- Peserta submit → asisten kompilasi ke Google Sheet

**3. Live Verification (2 menit)**
- Asisten random pilih 2-3 URL → cek HTTP 200 → tampilkan di screen
- "Selamat, sudah live!" → reaction 🎉 dari semua peserta

---

## 🎬 Segmen 6: Showcase + Q&A + Foto Bareng (15 menit)

### Showcase via Screen Share Peserta (8 menit)
- Pemateri pilih 3-5 peserta yang URL-nya bagus
- "Boleh share screen sebentar, ceritain portfolio kamu?"
- Peserta on screen 1-2 menit per orang
- Pemateri & peserta lain kasih apresiasi via reaction + chat
- Tantangan kecil: "Nilai 1-10 portfolio teman ini di chat"

### Q&A (5 menit)
**Pertanyaan umum yang biasa muncul:**
1. "Bisa ganti tema apa aja?" — Iya, minta AI
2. "Domain custom mahal nggak?" — `~140K/tahun`
3. "Kalau AI kasih code error?" — Pakai prompt: "test code-mu, fix error"
4. "Bisa update dari HP?" — Bisa, edit di github.dev
5. "Bedanya sama Wix/Webflow?" — Lebih cepat, lebih custom, gratis selamanya

**Pemateri:** Pilih 3-5 pertanyaan dari chat, jawab verbal di screen.

### Closing + Foto Bareng (2 menit)
> "Tantangan kalian: share URL portfolio di IG/LinkedIn malam ini, tag @fikomudb. Yang nggak nge-share = ngerugiin diri sendiri."

**Foto Zoom Bareng:**
- "Semua nyalain camera, kasih senyum/peace sign"
- Asisten screenshot Gallery View → posting di IG FIKOM UDB
- Pemateri: "Sampai ketemu di workshop berikutnya, terima kasih semua! 👋"

---

## 📊 Metrik Sukses Workshop Online

- ✅ **>= 90% peserta** punya URL portfolio live di akhir workshop
- ✅ **>= 80% peserta** ON CAMERA selama workshop
- ✅ **>= 50% peserta** posting URL di IG/LinkedIn dalam 24 jam
- ✅ **Zoom drop rate < 10%** (peserta yang keluar di tengah)
- ✅ Recording uploaded ke YouTube/Drive untuk akses 30 hari

---

## 🆘 Plan B Online (Kalau Ada Masalah)

| Masalah | Plan B |
|---------|--------|
| Internet pemateri putus | Co-host langsung take over, pemateri reconnect via HP |
| Zoom 40-min limit kena (kalau pakai free) | Restart meeting, kirim link baru via WA grup |
| Peserta tidak bisa join | Asisten DM bantu via WhatsApp, kasih recording nanti |
| Screen share stuck/buffer | Tutup share, restart, atau switch ke share window aja |
| Audio echo | Pemateri minta peserta cek "Audio Settings → Test Speaker & Microphone" |
| AI down (ChatGPT/Claude offline) | Pindah ke alternatif (Gemini, Kiro), share link di chat |
| Banyak peserta gagal deploy | Skip ke template-portfolio, deploy template aja, peserta tetap dapat URL live |

---

## 📚 Online-Specific Tips

### Engagement
- **Sebut nama peserta** sesering mungkin — efek besar di online
- **Pakai polling Zoom** tiap segmen (3-4 polling) — keep them awake
- **Reaction emoji** sebagai feedback cepat — efektif di webinar
- **Spotlight peserta yang aktif** — kasih shoutout

### Anti-Boring
- **Ganti energy** tiap 10 menit (humor, slide visual baru, demo)
- **Jangan terlalu lama bicara monolog** — max 3 menit, lalu interaksi
- **Tampilkan diri di kamera** — jangan cuma share screen tok
- **Pakai virtual background fun** kalau mau (logo FIKOM, gedget)

### Technical
- **Test Zoom 30 menit sebelum** dengan asisten
- **Backup URL slide** ada di multiple tempat (chat Zoom, WA grup, IG bio)
- **Recording cloud + local** — kalau salah satu fail
- **Disable participant screen share** kecuali diizinkan — hindari accidental share

---

## 📚 Reference Files

- `00-deck.html` — Slide presentasi (deploy: workshop-portofolio-ai.vercel.app)
- `01-panduan-persiapan.md` — Untuk peserta sebelum workshop (versi online)
- `02-prompt-templates.md` — Master prompt + variasi
- `03-cheatsheet-command.md` — Cheat sheet 1 halaman
- `04-troubleshooting.md` — Common errors + Zoom-specific fixes

---

**Selamat menyelenggarakan workshop online! 🎉 Yang penting: streaming smooth, peserta engaged, URL live.**
