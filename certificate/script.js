// ===== Certificate Generator =====

const fields = ['participantName', 'nim', 'prodi', 'tanggal', 'pemateri', 'jabatanPemateri', 'nomor'];
const displayMap = {
    participantName: 'participantDisplay',
    nim: 'nimDisplay',
    prodi: 'prodiDisplay',
    tanggal: 'tanggalDisplay',
    pemateri: 'pemateriDisplay',
    jabatanPemateri: 'jabatanDisplay',
    nomor: 'nomorDisplay'
};

function update() {
    fields.forEach(field => {
        const input = document.getElementById(field);
        const display = document.getElementById(displayMap[field]);
        if (input && display) {
            display.textContent = input.value || '—';
        }
    });
}

// ===== Theme switching =====
function changeTheme(theme) {
    const cert = document.getElementById('certificate');
    cert.classList.remove('theme-classic', 'theme-modern', 'theme-minimal');
    cert.classList.add(`theme-${theme}`);
}

// ===== Download as PDF (via print) =====
function downloadPDF() {
    alert('Tekan Ctrl+P (Cmd+P di Mac) → "Save as PDF" → Layout: Landscape → Margins: None → Background graphics: ✓');
    setTimeout(() => window.print(), 300);
}

// ===== Bulk Generate =====
async function bulkGenerate() {
    const namesText = document.getElementById('bulkNames').value.trim();
    if (!namesText) {
        alert('Masukkan minimal 1 nama peserta.');
        return;
    }

    const names = namesText.split('\n').map(n => n.trim()).filter(Boolean);
    const status = document.getElementById('bulkStatus');

    if (names.length === 0) return;

    status.textContent = `Memulai generate ${names.length} sertifikat...`;

    const baseUrl = window.location.href.split('?')[0];
    const links = [];

    names.forEach((name, idx) => {
        const params = new URLSearchParams({
            name: name,
            nim: '-',
            prodi: document.getElementById('prodi').value,
            tanggal: document.getElementById('tanggal').value,
            pemateri: document.getElementById('pemateri').value,
            jabatan: document.getElementById('jabatanPemateri').value,
            nomor: `FIKOM/WS/2026/${String(idx + 1).padStart(3, '0')}`
        });
        links.push(`${idx + 1}. ${name}\n   ${baseUrl}?${params}`);
    });

    // Show all links
    const allLinks = links.join('\n\n');

    // Create downloadable text file with all links
    const blob = new Blob([
        `=== SERTIFIKAT BULK GENERATE ===\n`,
        `Total: ${names.length} sertifikat\n`,
        `Generated: ${new Date().toLocaleString('id-ID')}\n\n`,
        allLinks
    ].join(''), { type: 'text/plain;charset=utf-8;' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bulk-certificates-${new Date().toISOString().slice(0,10)}.txt`;
    a.click();

    status.innerHTML = `✅ <strong>${names.length}</strong> link sertifikat ter-generate. Cek file yang ter-download.`;
}

// ===== Load from URL params (untuk bulk mode) =====
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('name')) {
        document.getElementById('participantName').value = params.get('name') || 'Peserta';
        document.getElementById('nim').value = params.get('nim') || '-';
        document.getElementById('prodi').value = params.get('prodi') || 'Teknik Informatika';
        document.getElementById('tanggal').value = params.get('tanggal') || '18 Mei 2026';
        document.getElementById('pemateri').value = params.get('pemateri') || 'Pemateri Workshop';
        document.getElementById('jabatanPemateri').value = params.get('jabatan') || 'Dosen FIKOM UDB';
        document.getElementById('nomor').value = params.get('nomor') || 'FIKOM/WS/2026/001';
        update();

        // Auto print mode (?print=true)
        if (params.get('print') === 'true') {
            setTimeout(() => window.print(), 1000);
        }
    }
}

// ===== Init =====
loadFromURL();
update();

console.log('%c🎓 Certificate Generator', 'font-size: 18px; font-weight: bold; color: #d4af37;');
console.log('%cBulk URL: ?name=Budi&nim=2024xxx&prodi=TI&tanggal=18 Mei 2026', 'color: #888;');
