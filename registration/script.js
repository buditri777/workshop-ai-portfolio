// ===== Registration Form Handler =====
// Mode: localStorage (untuk demo standalone) + WhatsApp redirect
// Untuk integrasi real, ganti handler ke Google Forms / Notion / Airtable / Supabase

const form = document.getElementById('registrationForm');
const successState = document.getElementById('successState');

// ===== CONFIG =====
// Ganti nomor WA panitia di sini
const PANITIA_WA = '628111234567'; // tanpa + atau spasi

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Mengirim...';

    // Collect form data
    const formData = new FormData(form);
    const data = {
        nama: formData.get('nama'),
        nim: formData.get('nim'),
        email: formData.get('email'),
        wa: formData.get('wa'),
        prodi: formData.get('prodi'),
        angkatan: formData.get('angkatan'),
        level: formData.get('level'),
        ai_exp: formData.get('ai_exp'),
        harapan: formData.get('harapan') || '-',
        timestamp: new Date().toISOString()
    };

    // Save to localStorage (untuk demo / backup)
    const registrations = JSON.parse(localStorage.getItem('workshop_registrations') || '[]');
    registrations.push(data);
    localStorage.setItem('workshop_registrations', JSON.stringify(registrations));

    // ===== KIRIM KE PANITIA VIA WHATSAPP =====
    // User di-redirect ke WhatsApp dengan pesan pre-filled ke nomor panitia
    const message = encodeURIComponent(
        `🚀 *PENDAFTARAN WORKSHOP PORTOFOLIO AI · FIKOM UDB*\n\n` +
        `*Nama:* ${data.nama}\n` +
        `*NIM:* ${data.nim}\n` +
        `*Email:* ${data.email}\n` +
        `*WhatsApp:* ${data.wa}\n` +
        `*Prodi:* ${data.prodi}\n` +
        `*Angkatan:* ${data.angkatan}\n` +
        `*Level Coding:* ${data.level}\n` +
        `*Pengalaman AI:* ${data.ai_exp}\n` +
        `*Harapan:* ${data.harapan}\n\n` +
        `Mohon konfirmasi pendaftaran saya. Terima kasih!`
    );

    const waUrl = `https://wa.me/${PANITIA_WA}?text=${message}`;

    // Optional: kirim juga ke Google Form / API
    // await sendToGoogleForm(data);

    // Show success
    setTimeout(() => {
        form.style.display = 'none';
        successState.classList.add('show');

        // Auto-open WhatsApp setelah 1 detik
        setTimeout(() => {
            window.open(waUrl, '_blank');
        }, 800);
    }, 600);
});

// ===== TEMPLATE: Send to Google Form =====
// Untuk integrasi real, uncomment & isi formId + entry IDs
/*
async function sendToGoogleForm(data) {
    const formId = 'GOOGLE_FORM_ID';
    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const formData = new FormData();
    formData.append('entry.111111', data.nama);
    formData.append('entry.222222', data.nim);
    formData.append('entry.333333', data.email);
    formData.append('entry.444444', data.wa);
    formData.append('entry.555555', data.prodi);
    formData.append('entry.666666', data.angkatan);
    formData.append('entry.777777', data.level);
    formData.append('entry.888888', data.ai_exp);
    formData.append('entry.999999', data.harapan);

    try {
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        });
    } catch (err) {
        console.warn('Google Form submission may have failed:', err);
    }
}
*/

// ===== TEMPLATE: Send to Supabase =====
/*
async function sendToSupabase(data) {
    const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
    const SUPABASE_KEY = 'YOUR-ANON-KEY';

    await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
        method: 'POST',
        headers: {
            'apikey': SUPABASE_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        },
        body: JSON.stringify(data)
    });
}
*/

// ===== Admin tool: lihat semua pendaftar (buka Console di browser) =====
window.viewRegistrations = () => {
    const regs = JSON.parse(localStorage.getItem('workshop_registrations') || '[]');
    console.table(regs);
    return regs;
};

window.exportRegistrations = () => {
    const regs = JSON.parse(localStorage.getItem('workshop_registrations') || '[]');
    if (regs.length === 0) {
        console.log('Belum ada pendaftar.');
        return;
    }

    // CSV export
    const headers = Object.keys(regs[0]);
    const csv = [
        headers.join(','),
        ...regs.map(r => headers.map(h => `"${(r[h] || '').toString().replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pendaftar-workshop-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    console.log(`✓ Exported ${regs.length} registrations to CSV`);
};

console.log('%c🚀 Workshop Registration Form', 'font-size: 18px; font-weight: bold; color: #7c5cff;');
console.log('%cAdmin tools: viewRegistrations() · exportRegistrations()', 'color: #00d9ff;');
