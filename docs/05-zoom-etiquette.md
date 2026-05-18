# 🎥 Zoom Etiquette & Breakout Room Guide

> Panduan etika dan tata cara workshop online via Zoom — untuk peserta & panitia.

---

## 👥 Untuk Peserta

### 📋 Sebelum Workshop (H-1)

**Cek Hardware**
- [ ] Laptop udah charge / charger plugged
- [ ] Headset / earphone berfungsi
- [ ] Kamera test: buka Zoom Settings → Video → preview
- [ ] Mic test: Settings → Audio → "Test Mic" → ngomong → liat indikator hijau

**Cek Software**
- [ ] Zoom App ter-update (cek di Zoom → Check for Updates)
- [ ] Browser Chrome/Firefox terupdate
- [ ] Terminal & VS Code standby
- [ ] AI Chat tab udah login

**Cek Lokasi**
- [ ] Tempat tenang (minim suara latar)
- [ ] Pencahayaan cukup (wajah jelas di kamera)
- [ ] Background rapi (atau pakai virtual background)
- [ ] Kasih tau orang rumah biar nggak ganggu 2.5 jam

---

### 🎤 Saat Workshop

#### Audio Etiquette
- ✅ **MUTE mic** by default — unmute hanya saat ditunjuk atau mau bicara
- ✅ Pakai headset / earphone (wajib) — bukan speaker laptop
- ✅ Suppress background noise: Zoom Settings → Audio → "Suppress background noise" → High
- ❌ Jangan ngobrol sama orang sekitar saat unmute
- ❌ Jangan makan/minum bunyi-bunyi saat unmute

#### Video Etiquette
- ✅ **Camera ON** sepanjang workshop — bikin suasana hangat
- ✅ Pakai display name **nama asli + angkatan** (contoh: "Budi Santoso · TI 2024")
- ✅ Foto profil profesional kalau cam off
- ✅ Pencahayaan dari depan (hindari backlight gelap)
- ❌ Jangan tiduran / sambil rebahan di kamera
- ❌ Jangan bareng orang lain di frame (privacy)

#### Chat Etiquette
- ✅ **Tanya di chat** kalau ada pertanyaan teknis
- ✅ Pakai format jelas: `🆘 STUCK: [issue singkat]`
- ✅ React emoji untuk feedback cepat (👍 untuk "ngerti", 🙋 untuk "ada pertanyaan")
- ✅ Submit URL portfolio dengan format yang dikasih
- ❌ Jangan spam emoji / komen nggak relevan
- ❌ Jangan share link yang nggak related dengan workshop

#### Engagement
- ✅ Aktif partisipasi: jawab polling, tanya, share screenshot
- ✅ Ikuti instruksi pemateri secara real-time
- ✅ Kalau ditunjuk, share screen / unmute dengan cepat
- ❌ Jangan AFK tanpa kabar (kalau urgent, bilang di chat)
- ❌ Jangan multi-tasking yang ganggu konsentrasi

---

### 🔧 Common Settings Sebelum Join

**Zoom App → Settings:**

| Tab | Setting | Value |
|-----|---------|-------|
| General | Stop my video when joining a meeting | ❌ Uncheck |
| Audio | Automatically join audio by computer | ✅ Check |
| Audio | Mute my microphone when joining a meeting | ✅ Check |
| Audio | Suppress background noise | High |
| Video | Enable HD | ✅ (kalau internet kuat) |
| Video | Touch up my appearance | ✅ (opsional) |
| Video | Always display participant names on their videos | ✅ Check |
| Recording | Local recording | ✅ Check (bisa rekam sendiri) |

---

## 🛠️ Untuk Panitia / Asisten

### 🔧 Pre-Workshop Setup (Host/Co-host)

**Pre-create Meeting:**
- [ ] Pakai akun Zoom **Pro/Business** (bukan free) — durasi unlimited
- [ ] Schedule meeting dengan **passcode**
- [ ] **Waiting room ON** — peserta diadmin dulu
- [ ] **Mute participants on entry** ON
- [ ] **Disable participant screen share** by default (enable per-request)
- [ ] **Enable polling** untuk audience interaction
- [ ] **Pre-create breakout rooms** (5-6 rooms)
- [ ] **Recording: Cloud + Local** (untuk redundancy)

**Co-host Roles:**
- 1 **Pemateri (Host)** — main speaker, share screen
- 1 **Chat Moderator** — monitor chat, jawab pertanyaan teknis
- 1 **Breakout Room Manager** — handle breakout rooms saat segmen 3
- 1 **Stream Timer** — kasih cue waktu ke pemateri (chat private)
- 1 **Documentation** — screenshot, kompilasi URL peserta

---

### 🎯 Breakout Room Best Practices

#### Kapan Pakai Breakout Room

**Workshop Portfolio AI:**
- **Segmen 3 (Setup Tools Verifikasi)** — 20 menit
- 1-on-1 troubleshoot kalau ada peserta stuck > 10 menit

#### Cara Pakai

**1. Pre-create Rooms (sebelum mulai)**
- Klik "Breakout Rooms" di toolbar Zoom
- Set jumlah rooms: **6 rooms**
- Strategy assignment:
  - **Room 1: 🟢 READY** — peserta yang udah install semua tools
  - **Room 2-5: 🟡 SETUP HELP** — 4 peserta + 1 asisten per room
  - **Room 6: 🆘 EMERGENCY** — peserta yang super stuck (1-on-1 dengan asisten senior)

**2. Assignment Method**
- **Manual assignment** (recommended): pemateri assign berdasarkan polling result
- **Self-select** (lebih praktis): peserta pilih sendiri room mereka

**3. Set Timer**
- Set 15 menit per session
- "Allow participants to return to main session at any time" → ON
- "Broadcast message to all" tiap 5 menit untuk update

**4. Asisten di Breakout Room**
- Sebagai room facilitator, asisten masuk ke room yang ditunjuk
- Greet peserta: "Halo, ada yang bisa saya bantu setup-nya?"
- Minta peserta share screen kalau perlu liat masalah
- Walk through troubleshoot bareng-bareng
- Pair peserta yang udah selesai untuk bantu yang belum

**5. Close Rooms**
- 60 detik sebelum tutup, broadcast message: "Breakout closing in 60 seconds"
- Klik "Close All Rooms" → countdown 60 detik
- Semua kembali ke main room

---

### 💬 Chat Moderation Playbook

#### Format Chat yang Direspons

| Chat Tag | Respon |
|----------|--------|
| `🆘 STUCK: ...` | DM asisten, follow up via private chat / breakout |
| `🙋 TANYA: ...` | Jawab di public chat atau angkat ke pemateri verbal |
| `✅ DONE: ...` | Kasih reaction 🎉, dorong yang lain |
| `📤 URL: ...` | Catat di Google Sheet untuk kompilasi |
| `❓ ...` | Jawab di public chat dengan @mention |

#### Pin Penting di Chat

Pin pesan-pesan ini di awal workshop:
1. **Link slide:** https://workshop-portofolio-ai.vercel.app
2. **Master prompt:** [link ke 02-prompt-templates.md]
3. **Cheatsheet:** [link ke 03-cheatsheet-command.md]
4. **Format submit URL:**
   ```
   📝 Format Submit:
   Nama: [Budi Santoso]
   URL: [https://my-portfolio.vercel.app]
   ```

#### Auto-Save Chat

- Settings → Chat → "Auto-save chats" ON
- Lokasi: Documents/Zoom/[date]_[meeting_name]/meeting_saved_chat.txt
- Berguna untuk:
  - Dokumentasi pertanyaan & FAQ
  - Kompilasi URL peserta
  - Identify peserta yang aktif (untuk doorprize, dll)

---

### 🚨 Plan B Online Workshop

#### Skenario 1: Pemateri Disconnect

**Action:**
1. Co-host langsung **claim host role** (Promote → Make host)
2. Co-host take over: "Tunggu sebentar, pemateri lagi reconnect"
3. Putar music ringan / share materi pendukung
4. Pemateri reconnect → minta host role balik

**Prevention:**
- Pemateri pakai kabel LAN
- HP standby dengan Zoom App ter-install
- Backup laptop kedua sudah login

---

#### Skenario 2: Banyak Peserta Drop / Audio Lag

**Action:**
1. Pause workshop sebentar
2. Pemateri info: "Sepertinya ada masalah koneksi, mari cek 30 detik"
3. Restart screen share
4. Lower video quality: Zoom Settings → Video → uncheck HD

**Prevention:**
- Kapasitas Zoom max 100-300 peserta (sesuai plan)
- Jangan host meeting di jam padat (jam kerja kantor)

---

#### Skenario 3: Peserta Disruptif (Spam / Inappropriate)

**Action:**
1. **Mute** peserta langsung (host control)
2. **Disable cam** kalau perlu
3. **Remove participant** kalau lanjut disruptif
4. **Lock meeting** kalau ada gangguan masal

**Prevention:**
- Waiting room ON
- Disable rename
- Disable participant screen share
- Disable participant chat ke "everyone publicly" (saat masalah)

---

#### Skenario 4: Recording Gagal

**Action:**
1. Cek 5 menit sekali apakah masih recording (bottom-left ada indicator merah)
2. Backup: peserta yang OBS/Streamlabs juga rekam (volunteer)
3. Kalau cloud recording fail, upload local recording ke Drive setelahnya

**Prevention:**
- Recording: **Cloud + Local simultaneously**
- Test recording di meeting trial (rekam 1 menit, cek hasilnya)
- Cukup storage di laptop pemateri (min. 10 GB free)

---

### 📊 Polling Templates

Pakai Zoom Polling untuk engagement.

**Polling 1 — Awal Workshop**
```
Q: Tools mana aja yang udah ter-install?
☐ Git
☐ Node.js
☐ Codex CLI
☐ Vercel CLI
☐ GitHub account
☐ Vercel account
☐ Belum install apa-apa
```

**Polling 2 — Tengah Workshop**
```
Q: Sudah berhasil generate code dari AI?
○ Ya, smooth
○ Ya, tapi outputnya aneh
○ Belum, masih bingung prompt-nya
○ Belum, AI-nya error
```

**Polling 3 — Akhir Workshop**
```
Q: Rating workshop ini?
○ ⭐ 1
○ ⭐⭐ 2
○ ⭐⭐⭐ 3
○ ⭐⭐⭐⭐ 4
○ ⭐⭐⭐⭐⭐ 5
```

---

### 🎁 Engagement Tactics

**Pakai untuk Maintain Energy Online**

1. **Reaction Bursts**
   - "Yang udah berhasil deploy, kasih 🎉 di Zoom!"
   - "Yang masih stuck, kasih 🤔 — kita bantuin!"

2. **Spotlight Peserta**
   - Pilih peserta yang aktif chat → "Mas Budi, boleh share screen sebentar?"

3. **Doorprize / Reward**
   - Peserta pertama yang deploy → mention di IG story FIKOM
   - Peserta dengan portfolio paling kreatif → souvenir digital

4. **Energy Check Tiap 20 Menit**
   - "Yang masih semangat, kasih 🔥!"
   - "Yang udah mulai capek, kasih 😴 — kita break sebentar"

5. **Challenges**
   - "Race time: siapa pertama deploy live URL?"
   - "Best dark theme portfolio dapat shoutout!"

---

## 🎯 Closing Checklist

### Akhir Workshop (Pemateri)
- [ ] Recap key takeaways (3 poin)
- [ ] Reminder: share URL di IG/LinkedIn malam ini
- [ ] Info: link recording dikirim H+1
- [ ] Info: e-sertifikat dikirim H+3
- [ ] Foto Zoom bareng (Gallery View screenshot)
- [ ] Stop recording
- [ ] End meeting for all

### Post-Workshop (Panitia)
- [ ] Upload recording ke YouTube unlisted / Drive
- [ ] Compile semua URL peserta ke Google Sheet
- [ ] Generate sertifikat dari `fikom-workshop-sertifikat.vercel.app`
- [ ] Kirim email berisi: link recording + e-sertifikat + grup Telegram
- [ ] Posting recap reels di IG
- [ ] Survei feedback peserta (Google Form)

---

## 📚 Useful Zoom Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `Alt + A` (Win) / `Cmd + Shift + A` (Mac) | Mute/unmute audio |
| `Alt + V` (Win) / `Cmd + Shift + V` (Mac) | Start/stop video |
| `Alt + S` (Win) / `Cmd + Shift + S` (Mac) | Share screen |
| `Alt + R` (Win) / `Cmd + Shift + R` (Mac) | Start recording |
| `Alt + H` (Win) / `Cmd + Shift + H` (Mac) | Show/hide chat |
| `Alt + Y` (Win) / `Cmd + Shift + Y` (Mac) | Raise/lower hand |
| `Spacebar (hold)` | Push-to-talk (when muted) |

---

**Online workshop = different game. Patience + clarity + engagement = success. 🎥🚀**
