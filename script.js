// Data menu persis sesuai tabel Siklus Menu-1 terbaru
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "14 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Daging Blackpepper",
        laukPendamping: "Tahu Kremes",
        sayur: "Capcay Sawi Putih + Wortel - Pentol",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "senin.jpg"
    },
    selasa: {
        hari: "Selasa",
        tanggal: "15 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Terik Telur Alergen Ayam Pop",
        laukPendamping: "Tempe Orek Kecap + Teri",
        sayur: "Buncis Baput",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "selasa.jpg"
    },
    rabu: {
        hari: "Rabu",
        tanggal: "16 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Crispy Saus Bistik Alergen Pentol",
        laukPendamping: "Edamame",
        sayur: "Saute Kacang Panjang + Jagung",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "rabu.jpg"
    },
    kamis: {
        hari: "Kamis",
        tanggal: "17 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Tongseng Ayam Alergen Pentol Kecap",
        laukPendamping: "Perkedel Tahu",
        sayur: "Tumis Pelangi Wortel + Babycorn + Sawi",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "kamis.jpg"
    },
    jumat: {
        hari: "Jumat",
        tanggal: "18 September 2026",
        karbo: "Roti Bun (Sekolah) Posyandu Nasi",
        laukUtama: "Patty Crispy Homemade",
        laukPendamping: "Tahu Gejrot (PB Bumil)",
        sayur: "Timun + Mayow (Sekolah)",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "jumat.jpg"
    }
};

function updateMenuHari(keyHari) {
    const data = dataMenu[keyHari];
    if (!data) return;

    // Update Header Hari & Tanggal
    document.getElementById('hari-text').textContent = data.hari;
    document.getElementById('tanggal-text').textContent = data.tanggal;

    // Update Gambar
    const fotoElem = document.getElementById('foto-menu');
    if (fotoElem) fotoElem.src = data.foto;

    // Update Isi Ompreng
    document.getElementById('karbo-text').textContent = data.karbo;
    document.getElementById('lauk-utama-text').textContent = data.laukUtama;
    document.getElementById('lauk-pendamping-text').textContent = data.laukPendamping;
    document.getElementById('sayur-text').textContent = data.sayur;
    document.getElementById('buah-text').textContent = data.buah;
    document.getElementById('minuman-text').textContent = data.minuman;
}

document.addEventListener('DOMContentLoaded', () => {
    const tombolHari = document.querySelectorAll('.btn-day, .btn-hari');

    tombolHari.forEach(button => {
        button.addEventListener('click', (e) => {
            const hariDiPilih = e.currentTarget.getAttribute('data-hari');

            tombolHari.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            updateMenuHari(hariDiPilih);
        });
    });

    // Set default awal ke Senin
    updateMenuHari('senin');
});
