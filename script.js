// Data Menu & Nutrisi per Hari
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "24 Agustus 2026",
        foto: "martabak.jpg", // Ganti dengan nama file gambar sesuai hari
        karbo: "Nasi Putih",
        laukUtama: "Ayam Goreng",
        laukPendamping: "Tahu Goreng",
        sayur: "Tumis Buncis",
        buah: "Pisang",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "420 kcal", besar: "620 kcal", bumil: "720 kcal", balita: "320 kcal" },
            protein: { kecil: "15g", besar: "22g", bumil: "27g", balita: "11g" },
            lemak: { kecil: "10g", besar: "18g", bumil: "22g", balita: "8g" },
            karbo: { kecil: "52g", besar: "75g", bumil: "85g", balita: "42g" },
            serat: { kecil: "3g", besar: "5g", bumil: "6g", balita: "2g" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "25 Agustus 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Kuning",
        laukUtama: "Ikan Balado",
        laukPendamping: "Tempe Orek",
        sayur: "Capcay",
        buah: "Jeruk",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "430 kcal", besar: "630 kcal", bumil: "730 kcal", balita: "330 kcal" },
            protein: { kecil: "16g", besar: "23g", bumil: "28g", balita: "12g" },
            lemak: { kecil: "11g", besar: "19g", bumil: "23g", balita: "9g" },
            karbo: { kecil: "53g", besar: "76g", bumil: "86g", balita: "43g" },
            serat: { kecil: "3g", besar: "5g", bumil: "6g", balita: "2g" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "26 Agustus 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Putih",
        laukUtama: "Daging Rendang",
        laukPendamping: "Perkedel Kentang",
        sayur: "Sayur Sop",
        buah: "Apel",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "450 kcal", besar: "650 kcal", bumil: "750 kcal", balita: "350 kcal" },
            protein: { kecil: "17g", besar: "25g", bumil: "30g", balita: "13g" },
            lemak: { kecil: "12g", besar: "20g", bumil: "25g", balita: "10g" },
            karbo: { kecil: "55g", besar: "80g", bumil: "90g", balita: "45g" },
            serat: { kecil: "4g", besar: "6g", bumil: "7g", balita: "3g" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "27 Agustus 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Semur",
        laukPendamping: "Tahu Bacem",
        sayur: "Sayur Bening Bayam",
        buah: "Pisang Ambon",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "440 kcal", besar: "640 kcal", bumil: "740 kcal", balita: "340 kcal" },
            protein: { kecil: "16g", besar: "24g", bumil: "29g", balita: "12g" },
            lemak: { kecil: "11g", besar: "19g", bumil: "24g", balita: "9g" },
            karbo: { kecil: "54g", besar: "78g", bumil: "88g", balita: "44g" },
            serat: { kecil: "3g", besar: "5g", bumil: "6g", balita: "2g" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "28 Agustus 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Uduk",
        laukUtama: "Telur Balado",
        laukPendamping: "Tahu Goreng",
        sayur: "Tumis Kangkung",
        buah: "Semangka",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "410 kcal", besar: "610 kcal", bumil: "710 kcal", balita: "310 kcal" },
            protein: { kecil: "14g", besar: "21g", bumil: "26g", balita: "10g" },
            lemak: { kecil: "10g", besar: "17g", bumil: "21g", balita: "8g" },
            karbo: { kecil: "50g", besar: "73g", bumil: "83g", balita: "40g" },
            serat: { kecil: "3g", besar: "4g", bumil: "5g", balita: "2g" }
        }
    }
};

// Ambil elemen DOM
const buttons = document.querySelectorAll('.btn-hari');
const hariText = document.getElementById('hari-text');
const tanggalText = document.getElementById('tanggal-text');
const fotoMenu = document.getElementById('foto-menu');

const karboText = document.getElementById('karbo-text');
const laukUtamaText = document.getElementById('lauk-utama-text');
const laukPendampingText = document.getElementById('lauk-pendamping-text');
const sayurText = document.getElementById('sayur-text');
const buahText = document.getElementById('buah-text');
const minumanText = document.getElementById('minuman-text');

// Elemen Tabel Gizi
const energiKecil = document.getElementById('energi-kecil');
const energiBesar = document.getElementById('energi-besar');
const energiBumil = document.getElementById('energi-bumil');
const energiBalita = document.getElementById('energi-balita');

const proteinKecil = document.getElementById('protein-kecil');
const proteinBesar = document.getElementById('protein-besar');
const proteinBumil = document.getElementById('protein-bumil');
const proteinBalita = document.getElementById('protein-balita');

const lemakKecil = document.getElementById('lemak-kecil');
const lemakBesar = document.getElementById('lemak-besar');
const lemakBumil = document.getElementById('lemak-bumil');
const lemakBalita = document.getElementById('lemak-balita');

const karboKecil = document.getElementById('karbo-kecil');
const karboBesar = document.getElementById('karbo-besar');
const karboBumil = document.getElementById('karbo-bumil');
const karboBalita = document.getElementById('karbo-balita');

const seratKecil = document.getElementById('serat-kecil');
const seratBesar = document.getElementById('serat-besar');
const seratBumil = document.getElementById('serat-bumil');
const seratBalita = document.getElementById('serat-balita');

// Fungsi untuk memperbarui tampilan berdasarkan hari yang dipilih
function updateTampilan(keyHari) {
    const data = dataMenu[keyHari];
    if (!data) return;

    // Update Header Hari & Tanggal
    hariText.textContent = data.hari;
    tanggalText.textContent = data.tanggal;

    // Update Foto & Menu
    fotoMenu.src = data.foto;
    karboText.textContent = data.karbo;
    laukUtamaText.textContent = data.laukUtama;
    laukPendampingText.textContent = data.laukPendamping;
    sayurText.textContent = data.sayur;
    buahText.textContent = data.buah;
    minumanText.textContent = data.minuman;

    // Update Tabel Gizi
    energiKecil.textContent = data.gizi.energi.kecil;
    energiBesar.textContent = data.gizi.energi.besar;
    energiBumil.textContent = data.gizi.energi.bumil;
    energiBalita.textContent = data.gizi.energi.balita;

    proteinKecil.textContent = data.gizi.protein.kecil;
    proteinBesar.textContent = data.gizi.protein.besar;
    proteinBumil.textContent = data.gizi.protein.bumil;
    proteinBalita.textContent = data.gizi.protein.balita;

    lemakKecil.textContent = data.gizi.lemak.kecil;
    lemakBesar.textContent = data.gizi.lemak.besar;
    lemakBumil.textContent = data.gizi.lemak.bumil;
    lemakBalita.textContent = data.gizi.lemak.balita;

    karboKecil.textContent = data.gizi.karbo.kecil;
    karboBesar.textContent = data.gizi.karbo.besar;
    karboBumil.textContent = data.gizi.karbo.bumil;
    karboBalita.textContent = data.gizi.karbo.balita;

    seratKecil.textContent = data.gizi.serat.kecil;
    seratBesar.textContent = data.gizi.serat.besar;
    seratBumil.textContent = data.gizi.serat.bumil;
    seratBalita.textContent = data.gizi.serat.balita;
}

// Event Listener untuk Tombol Hari
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Hapus status active dari semua tombol
        buttons.forEach(btn => btn.classList.remove('active'));

        // Tambah status active ke tombol yang diklik
        this.classList.add('active');

        // Ambil data-hari dan update seluruh isi halaman
        const hariDipilih = this.getAttribute('data-hari');
        updateTampilan(hariDipilih);
    });
});

// Set tampilan awal ke hari Senin saat pertama kali dibuka
updateTampilan('senin');
