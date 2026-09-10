// Data Menu & Nutrisi per Hari (Siklus Menu-1: 14 - 18 September 2026)
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "14 September 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Putih",
        laukUtama: "Daging Blackpepper",
        laukPendamping: "Tahu Kremes",
        sayur: "Capcay Sawi Putih + Wortel - Pentol",
        buah: "Pisang",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "0 kcal", besar: "0 kcal", bumil: "0 kcal", balita: "0 kcal", alergen: "-" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            karbo: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "15 September 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Putih",
        laukUtama: "Terik Telur (Alergen: Ayam Pop)",
        laukPendamping: "Tempe Orek Kecap + Teri",
        sayur: "Buncis Baput",
        buah: "Pisang",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "0 kcal", besar: "0 kcal", bumil: "0 kcal", balita: "0 kcal", alergen: "0 kcal" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            karbo: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "16 September 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Crispy Saus Bistik (Alergen: Pentol)",
        laukPendamping: "Edamame",
        sayur: "Saute Kacang Panjang + Jagung",
        buah: "Pisang",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "0 kcal", besar: "0 kcal", bumil: "0 kcal", balita: "0 kcal", alergen: "0 kcal" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            karbo: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "17 September 2026",
        foto: "martabak.jpg",
        karbo: "Nasi Putih",
        laukUtama: "Tongseng Ayam (Alergen: Pentol Kecap)",
        laukPendamping: "Perkedel Tahu",
        sayur: "Tumis Pelangi Wortel + Babycorn + Sawi",
        buah: "Pisang",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "0 kcal", besar: "0 kcal", bumil: "0 kcal", balita: "0 kcal", alergen: "0 kcal" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            karbo: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "0g" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "18 September 2026",
        foto: "martabak.jpg",
        karbo: "Roti Bun (Sekolah) / Nasi (Posyandu)",
        laukUtama: "Patty Crispy Homemade",
        laukPendamping: "Tahu Gejrot (PB Bumil)",
        sayur: "Timun + Mayow (Sekolah)",
        buah: "Pisang",
        minuman: "Susu UHT",
        gizi: {
            energi: { kecil: "0 kcal", besar: "0 kcal", bumil: "0 kcal", balita: "0 kcal", alergen: "-" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            karbo: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" }
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
const energiAlergen = document.getElementById('energi-alergen');

const proteinKecil = document.getElementById('protein-kecil');
const proteinBesar = document.getElementById('protein-besar');
const proteinBumil = document.getElementById('protein-bumil');
const proteinBalita = document.getElementById('protein-balita');
const proteinAlergen = document.getElementById('protein-alergen');

const lemakKecil = document.getElementById('lemak-kecil');
const lemakBesar = document.getElementById('lemak-besar');
const lemakBumil = document.getElementById('lemak-bumil');
const lemakBalita = document.getElementById('lemak-balita');
const lemakAlergen = document.getElementById('lemak-alergen');

const karboKecil = document.getElementById('karbo-kecil');
const karboBesar = document.getElementById('karbo-besar');
const karboBumil = document.getElementById('karbo-bumil');
const karboBalita = document.getElementById('karbo-balita');
const karboAlergen = document.getElementById('karbo-alergen');

const seratKecil = document.getElementById('serat-kecil');
const seratBesar = document.getElementById('serat-besar');
const seratBumil = document.getElementById('serat-bumil');
const seratBalita = document.getElementById('serat-balita');
const seratAlergen = document.getElementById('serat-alergen');

function updateTampilan(keyHari) {
    const data = dataMenu[keyHari];
    if (!data) return;

    hariText.textContent = data.hari;
    tanggalText.textContent = data.tanggal;

    fotoMenu.src = data.foto;
    karboText.textContent = data.karbo;
    laukUtamaText.textContent = data.laukUtama;
    laukPendampingText.textContent = data.laukPendamping;
    sayurText.textContent = data.sayur;
    buahText.textContent = data.buah;
    minumanText.textContent = data.minuman;

    // Nilai Gizi
    energiKecil.textContent = data.gizi.energi.kecil;
    energiBesar.textContent = data.gizi.energi.besar;
    energiBumil.textContent = data.gizi.energi.bumil;
    energiBalita.textContent = data.gizi.energi.balita;
    if (energiAlergen) energiAlergen.textContent = data.gizi.energi.alergen;

    proteinKecil.textContent = data.gizi.protein.kecil;
    proteinBesar.textContent = data.gizi.protein.besar;
    proteinBumil.textContent = data.gizi.protein.bumil;
    proteinBalita.textContent = data.gizi.protein.balita;
    if (proteinAlergen) proteinAlergen.textContent = data.gizi.protein.alergen;

    lemakKecil.textContent = data.gizi.lemak.kecil;
    lemakBesar.textContent = data.gizi.lemak.besar;
    lemakBumil.textContent = data.gizi.lemak.bumil;
    lemakBalita.textContent = data.gizi.lemak.balita;
    if (lemakAlergen) lemakAlergen.textContent = data.gizi.lemak.alergen;

    karboKecil.textContent = data.gizi.karbo.kecil;
    karboBesar.textContent = data.gizi.karbo.besar;
    karboBumil.textContent = data.gizi.karbo.bumil;
    karboBalita.textContent = data.gizi.karbo.balita;
    if (karboAlergen) karboAlergen.textContent = data.gizi.karbo.alergen;

    seratKecil.textContent = data.gizi.serat.kecil;
    seratBesar.textContent = data.gizi.serat.besar;
    seratBumil.textContent = data.gizi.serat.bumil;
    seratBalita.textContent = data.gizi.serat.balita;
    if (seratAlergen) seratAlergen.textContent = data.gizi.serat.alergen;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const hariDipilih = this.getAttribute('data-hari');
        updateTampilan(hariDipilih);
    });
});

// Set tampilan awal ke hari Senin
updateTampilan('senin');
