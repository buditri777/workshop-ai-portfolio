# 🪄 Master Prompt Templates

> Copy-paste prompts untuk bikin portfolio dengan AI. Ganti bagian `[...]` dengan data kamu.

---

## ⭐ MASTER PROMPT — Use This First

```
Buatkan website portfolio personal yang modern dan profesional dengan info berikut:

# IDENTITAS
Nama: [Ahmad Budi Santoso]
Role: [Mahasiswa Teknik Informatika UDB / Web Developer / UI Designer]
Pitch 1 kalimat: [Saya bantu bisnis kecil bikin web app yang simpel tapi powerful]
Tagline (opsional): [Crafting digital experiences, one project at a time]

# SKILLS (5-10 items)
- [HTML5, CSS3, JavaScript]
- [Python, Node.js]
- [Figma, Adobe XD]
- [React, Next.js]
- [Git, Vercel, GitHub]

# PROJECTS (3-5 items, format: Nama - Deskripsi - Link)
1. [Tapakku] - [Web profil jasa sol sepatu, dibikin dengan HTML+CSS+JS, deploy Vercel] - [https://tapakku.vercel.app]
2. [Inspira Thrift] - [Landing page hoodie thrift dengan tema streetwear bold] - [https://inspira-thrift.vercel.app]
3. [TI 24 A6] - [Website profil kelas Teknik Informatika dengan dark theme] - [https://ti-24-a6.vercel.app]

# EXPERIENCE (kalau ada)
- [Magang Web Developer di PT XYZ - Jan 2025 - Mar 2025]
- [Freelance UI Designer - Sept 2024 - sekarang]
- [Anggota HMTI UDB - Sept 2024 - sekarang]

# EDUCATION
- [S1 Teknik Informatika - Universitas Duta Bangsa Surakarta - 2024 - 2028]

# KONTAK
Email: [ahmadbudi@gmail.com]
LinkedIn: [linkedin.com/in/ahmadbudi]
GitHub: [github.com/ahmadbudi]
Instagram (opsional): [@ahmadbudi.dev]
WhatsApp (opsional): [+62 812 xxxx xxxx]

# STYLE PREFERENCES
- Theme: [Dark theme dengan gradient accent ungu-biru]
- Vibe: [Modern, profesional, sedikit playful]
- Inspiration: [Linear.app / Vercel / Stripe]
- Font: [Sans-serif modern, contoh: Inter, Space Grotesk]
- Animation: [Smooth scroll, fade-in on scroll, hover effects]

# REQUIREMENTS
- Stack: HTML5 + CSS3 + Vanilla JavaScript (no framework, no build step)
- Output: 3 file siap deploy: index.html, style.css, script.js
- Sections wajib: Hero, About, Skills, Projects, Experience (jika ada), Contact, Footer
- Mobile responsive (< 768px tampil bagus)
- Semantic HTML
- Accessible (alt text, aria-labels)
- Pakai Google Fonts
- Pakai SVG icons atau emoji (jangan icon library yang butuh CDN)
- Smooth scroll untuk anchor links
- Animation pas scroll (Intersection Observer)
- Mobile nav toggle
- Optimasi SEO basic: meta description, Open Graph tags

Mohon hasilnya rapi, konsisten, dan profesional.
```

---

## 🎨 Variasi Style — Pilih yang Cocok

### Style 1: Minimalist Clean (Linear / Vercel inspired)
```
Style: Minimalist clean dengan banyak whitespace.
Color: Black/white dasar, accent biru elektrik (#0066ff).
Font: Inter atau system-ui.
Animation: Subtle, hampir tidak terlihat. Smooth fade.
Vibe: Premium tech startup.
```

### Style 2: Bold Streetwear (Drake / Off-White inspired)
```
Style: Bold streetwear dengan border thick + box shadow offset.
Color: Cream background (#faf6ef), accent oranye (#ff5722) dan kuning (#ffd84d).
Font: Bebas Neue untuk heading, Archivo untuk body.
Animation: Punchy, energetic.
Vibe: Urban, young, gen-z.
```

### Style 3: Earthy Premium (Hermès / Aesop inspired)
```
Style: Earthy premium dengan warna hangat.
Color: Warm beige (#f3ebe0), accent coklat tua (#5d4037), gold (#d4a574).
Font: Playfair Display untuk heading, Inter untuk body.
Animation: Slow, elegant.
Vibe: Heritage brand, hand-crafted.
```

### Style 4: Cyberpunk Future (Linear meets Tron)
```
Style: Cyberpunk future dengan neon glow.
Color: Deep black (#0a0a0f), accent cyan (#00d9ff) + magenta (#ff6ec7).
Font: Space Grotesk + JetBrains Mono untuk code.
Animation: Glitch effect, glow pulse.
Vibe: Tech-forward, gaming, AI-era.
```

### Style 5: Soft Pastel (Spotify Wrapped style)
```
Style: Soft pastel playful.
Color: Cream + lavender + sage green + peach.
Font: Comfortaa atau DM Sans, rounded.
Animation: Bouncy, fun.
Vibe: Friendly, approachable, creative.
```

---

## 🔧 Iteration Prompts (Untuk Polish)

### "Output AI kepanjangan"
```
Tolong hanya kirim file [index.html / style.css / script.js] saja dulu.
Setelah saya save, baru lanjut file berikutnya.
```

### "Nggak suka warna / font"
```
Ubah:
- Warna primary jadi [#xxxxxx]
- Font heading jadi [nama font Google]
- Background jadi [warna]
Kirim ulang style.css yang sudah diupdate (jangan ulangi index.html).
```

### "Tambah section baru"
```
Tambahkan section [Testimoni / Blog Posts / Achievements] dengan konten:
[konten kamu]
Sisipkan setelah section [Projects / Experience].
Kirim:
1. Bagian HTML yang baru saja
2. CSS yang relevan
```

### "Mobile responsive jelek"
```
Test di mobile (375px width). Saya lihat masalah:
- [Section X kepotong]
- [Font terlalu kecil]
- [Padding jelek]
Tolong fix CSS responsive-nya, kirim ulang style.css.
```

### "Bikin lebih hidup"
```
Tambahin micro-interactions:
- Counter animation di stats
- Fade-in saat scroll (Intersection Observer)
- Hover effect di card (subtle scale + shadow)
- Smooth scroll untuk anchor link
- Floating badge di hero (subtle animation)

Kirim script.js yang baru + CSS animation yang dibutuhkan.
```

### "SEO + Meta tags"
```
Tambahkan SEO meta tags lengkap di <head>:
- meta description
- Open Graph (og:title, og:description, og:image)
- Twitter Card
- Canonical URL: [https://namasaya.vercel.app]
- Favicon: [emoji atau path file]

Kirim hanya bagian <head> yang updated.
```

### "Dark/Light Mode Toggle"
```
Tambahin dark/light mode toggle:
- Tombol di pojok kanan atas (icon sun/moon)
- Pakai localStorage untuk persist preferensi
- Smooth transition antar mode
- CSS pakai variables di :root (light) dan [data-theme="dark"] (dark)

Kirim:
1. Update HTML (button toggle)
2. Update CSS (variables + dark mode rules)
3. Update JS (toggle logic + localStorage)
```

---

## 🎯 Specialized Prompts

### Untuk UI/UX Designer
```
Tambahin:
- Section "Design Process" (Discover → Define → Design → Deliver)
- Section "Case Studies" — tiap project punya halaman detail (problem, solution, result)
- Mockup placeholder untuk Figma embed
- Color palette showcase
```

### Untuk Backend Developer
```
Tambahin:
- Section "Tech Stack" dengan icon-icon (Python, Node, PostgreSQL, Docker, AWS)
- Section "API Projects" — list REST API yang pernah dibikin + dokumentasi
- Section "Open Source Contributions" — link ke PR di GitHub
- Code snippet preview di hero (typing animation)
```

### Untuk Mobile Developer
```
Tambahin:
- Mockup HP (iPhone/Android) di hero, ada video / screenshot app
- Section "App Showcase" — App Store/Play Store badges
- Tech stack: Flutter, React Native, Swift, Kotlin
- Download stats / user reviews per app
```

### Untuk Data Scientist
```
Tambahin:
- Section "Notable Models" dengan metric (accuracy, F1, ROC-AUC)
- Section "Research Papers" — link ke arxiv / Google Scholar
- Section "Tools" — Python, Jupyter, Pandas, Sklearn, PyTorch, TensorFlow
- Chart/graph showcase di hero
```

### Untuk Multimedia / Content Creator
```
Style: visual-heavy.
Tambahin:
- Hero pakai video background (atau GIF)
- Galeri grid format Pinterest/masonry
- Video embed (YouTube)
- Section "Brands I've Worked With" — logo client
- Social media followers count
```

---

## 💡 Pro Tips Prompt

1. **Specific > Vague**
   ❌ "Bikin portfolio bagus"
   ✅ "Bikin portfolio dengan dark theme, accent ungu, inspirasi Linear.app"

2. **Sebut Referensi**
   ❌ "Modern animations"
   ✅ "Animations like the homepage of vercel.com — smooth fade + subtle parallax"

3. **Preview Dulu, Iterate Setelah**
   - Generate full → preview di browser → iterate per section
   - Jangan minta semua perubahan sekaligus

4. **Pisah HTML / CSS / JS**
   - Minta AI kirim per file: "kirim index.html dulu"
   - Lebih mudah copy-paste, lebih sedikit error

5. **Test Mobile Sejak Awal**
   - Buka DevTools → toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
   - Cek di 375px width (iPhone SE)
   - Kalau ada masalah → minta AI fix langsung

---

## 🔥 Bonus: Prompt untuk Konten

Kalau bingung mau nulis apa di "About Me":

```
Saya mahasiswa [jurusan] di [kampus], saat ini semester [X].
Latar belakang: [pengalaman organisasi/magang/proyek]
Yang saya suka: [coding/design/data/...]
Yang saya benci: [bug yang nggak ke-reproduce, dsb]
Goal 5 tahun: [jadi senior engineer / launching produk sendiri / dsb]

Tulisin "About Me" 3 paragraf yang:
- Otentik (bukan corporate-speak)
- Tunjukkan kepribadian
- Tetap profesional
- Bahasa Indonesia
- Maksimal 150 kata
```

---

**Selamat ngoprek!** Inget: AI itu asisten, bukan pengganti otak kamu. Tetep lo yang decide mau bikin portfolio kayak apa. 🚀
