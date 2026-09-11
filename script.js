// Data menu dan tanggal sesuai tabel Siklus Menu
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "14 September 2026",
        tglSingkat: "14 Sep",
        karbo: "Nasi Putih",
        laukUtama: "Daging Blackpepper",
        laukPendamping: "Tahu Kremes",
        sayur: "Capcay Sawi Putih + Wortel - Pentol",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "martabak.jpg" // Ganti sesuai file foto Senin kamu
    },
    selasa: {
        hari: "Selasa",
        tanggal: "15 September 2026",
        tglSingkat: "15 Sep",
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
        tglSingkat: "16 Sep",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Crispy Saus B...", // Lengkapi sesuai tabel kamu
        laukPendamping: "Edamame",
        sayur: "Saute Kacang Panja...",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "rabu.jpg"
    },
    kamis: {
        hari: "Kamis",
        tanggal: "17 September 2026",
        tglSingkat: "17 Sep",
        karbo: "Nasi Putih",
        laukUtama: "-",
        laukPendamping: "-",
        sayur: "-",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "kamis.jpg"
    },
    jumat: {
        hari: "Jumat",
        tanggal: "18 September 2026",
        tglSingkat: "18 Sep",
        karbo: "Nasi Putih",
        laukUtama: "-",
        laukPendamping: "-",
        sayur: "-",
        buah: "Pisang",
        minuman: "Susu UHT",
        foto: "jumat.jpg"
    }
};

// Fungsi untuk mengganti tampilan menu saat tombol hari diklik
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

// Inisialisasi Event Listener Tombol
document.addEventListener('DOMContentLoaded', () => {
    const tombolHari = document.querySelectorAll('.btn-day, .btn-hari');

    // Update label tanggal singkat pada tombol navigasi bawah
    tombolHari.forEach(button => {
        const keyHari = button.getAttribute('data-hari');
        if (dataMenu[keyHari]) {
            const spanTgl = button.querySelector('span');
            if (spanTgl) {
                spanTgl.textContent = dataMenu[keyHari].tglSingkat;
            }
        }

        // Event Klik Tombol Hari
        button.addEventListener('click', (e) => {
            const hariDiPilih = e.currentTarget.getAttribute('data-hari');

            tombolHari.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            updateMenuHari(hariDiPilih);
        });
    });

    // Set default ke hari Senin saat pertama kali buka
    updateMenuHari('senin');
});
