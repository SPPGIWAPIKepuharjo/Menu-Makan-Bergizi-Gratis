// Data menu dan kandungan gizi per hari
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "14 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Daging Blackpepper",
        laukPendamping: "Tahu Kremes",
        sayur: "Capcay Sawi Putih + Wortel - Pentol",
        buah: "Semangka",
        pelengkap: "Kerupuk Udang",
        foto: "menusenin.png",
        gizi: {
            energi: { kecil: "514,9 Kcal", besar: "605,2 Kcal", bumil: "678,3 Kcal", balita: "478,9 Kcal", alergen: "-" },
            protein: { kecil: "18,1g", besar: "19,8g", bumil: "22,8g", balita: "17,5g", alergen: "-" },
            lemak: { kecil: "19,7g", besar: "19,9g", bumil: "21,1g", balita: "19,6g", alergen: "-" },
            karbohidrat: { kecil: "69,1g", besar: "88,9g", bumil: "101,4g", balita: "61,1g", alergen: "-" },
            serat: { kecil: "2,7g", besar: "2,9g", bumil: "3,3g", balita: "2,6g", alergen: "-" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "15 September 2026",
        karbo: "-",
        laukUtama: "-",
        laukPendamping: "-",
        sayur: "-",
        buah: "-",
        pelengkap: "-",
        foto: "selasa.jpg",
        gizi: {
            energi: { kecil: "0 Kcal", besar: "0 Kcal", bumil: "0 Kcal", balita: "0 Kcal", alergen: "-" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            karbohidrat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "16 September 2026",
        karbo: "-",
        laukUtama: "-",
        laukPendamping: "-",
        sayur: "-",
        buah: "-",
        pelengkap: "-",
        foto: "rabu.jpg",
        gizi: {
            energi: { kecil: "0 Kcal", besar: "0 Kcal", bumil: "0 Kcal", balita: "0 Kcal", alergen: "-" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            karbohidrat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "17 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Terik Telur (Alergen Chicken Pop)",
        laukPendamping: "Orek Tempe dan Teri",
        sayur: "Buncis Bawang Putih",
        buah: "Kelengkeng",
        pelengkap: "-",
        foto: "kamis.png",
        gizi: {
            energi: { kecil: "430,1 Kcal", besar: "520,4 Kcal", bumil: "624,2 Kcal", balita: "394,1 Kcal", alergen: "487,2 Kcal" },
            protein: { kecil: "17g", besar: "18,7g", bumil: "24,4g", balita: "16,4g", alergen: "23,5g" },
            lemak: { kecil: "13,9g", besar: "14,1g", bumil: "16g", balita: "13,8g", alergen: "17,5g" },
            karbohidrat: { kecil: "60g", besar: "79,8g", bumil: "96g", balita: "52g", alergen: "59,4g" },
            serat: { kecil: "2,7g", besar: "2,9g", bumil: "3,4g", balita: "2,8g", alergen: "2,7g" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "18 September 2026",
        karbo: "Roti Bun (Sekolah) Posyandu Nasi",
        laukUtama: "Patty Crispy Homemade",
        laukPendamping: "Tahu Gejrot (PB Bumil)",
        sayur: "Timun + Mayow (Sekolah)",
        buah: "Pisang",
        pelengkap: "-",
        foto: "jumat.jpg",
        gizi: {
            energi: { kecil: "0 Kcal", besar: "0 Kcal", bumil: "0 Kcal", balita: "0 Kcal", alergen: "-" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            karbohidrat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" }
        }
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
    
    // Update Pelengkap / Tambahan (Pastikan membaca data.tambahan)
    const pelengkapElem = document.getElementById('pelengkap');
    if (pelengkapElem) {
        pelengkapElem.textContent = data.tambahan || "-";
    }

    // Update Tabel Kandungan Gizi
    if (data.gizi) {
        // Energi
        document.getElementById('energi-kecil').textContent = data.gizi.energi.kecil;
        document.getElementById('energi-besar').textContent = data.gizi.energi.besar;
        document.getElementById('energi-bumil').textContent = data.gizi.energi.bumil;
        document.getElementById('energi-balita').textContent = data.gizi.energi.balita;
        document.getElementById('energi-alergen').textContent = data.gizi.energi.alergen;

        // Protein
        document.getElementById('protein-kecil').textContent = data.gizi.protein.kecil;
        document.getElementById('protein-besar').textContent = data.gizi.protein.besar;
        document.getElementById('protein-bumil').textContent = data.gizi.protein.bumil;
        document.getElementById('protein-balita').textContent = data.gizi.protein.balita;
        document.getElementById('protein-alergen').textContent = data.gizi.protein.alergen;

        // Lemak
        document.getElementById('lemak-kecil').textContent = data.gizi.lemak.kecil;
        document.getElementById('lemak-besar').textContent = data.gizi.lemak.besar;
        document.getElementById('lemak-bumil').textContent = data.gizi.lemak.bumil;
        document.getElementById('lemak-balita').textContent = data.gizi.lemak.balita;
        document.getElementById('lemak-alergen').textContent = data.gizi.lemak.alergen;

        // Karbohidrat
        document.getElementById('karbo-kecil').textContent = data.gizi.karbohidrat.kecil;
        document.getElementById('karbo-besar').textContent = data.gizi.karbohidrat.besar;
        document.getElementById('karbo-bumil').textContent = data.gizi.karbohidrat.bumil;
        document.getElementById('karbo-balita').textContent = data.gizi.karbohidrat.balita;
        document.getElementById('karbo-alergen').textContent = data.gizi.karbohidrat.alergen;

        // Serat
        document.getElementById('serat-kecil').textContent = data.gizi.serat.kecil;
        document.getElementById('serat-besar').textContent = data.gizi.serat.besar;
        document.getElementById('serat-bumil').textContent = data.gizi.serat.bumil;
        document.getElementById('serat-balita').textContent = data.gizi.serat.balita;
        document.getElementById('serat-alergen').textContent = data.gizi.serat.alergen;
    }
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

    // Set default awal ke Kamis (atau sesuaikan)
    updateMenuHari('senin');
});
