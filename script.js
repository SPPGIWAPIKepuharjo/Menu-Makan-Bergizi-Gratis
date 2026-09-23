// Data menu dan kandungan gizi per hari
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "21 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Daging Garang Asem",
        laukPendamping: "Tempe Bacem",
        sayur: "Tumis Labu Siam + Wortel",
        buah: "Kelengkeng",
        pelengkap: "-",
        foto: "20.PNG",
        gizi: {
            energi: { kecil: "446,6 Kcal", besar: "540,1 Kcal", bumil: "643,9 Kcal", balita: "410,6 Kcal", alergen: "-" },
            protein: { kecil: "19,6g", besar: "21,4g", bumil: "27,1g", balita: "19g", alergen: "-" },
            lemak: { kecil: "14,7g", besar: "15,1g", bumil: "17g", balita: "14,6g", alergen: "-" },
            karbohidrat: { kecil: "59,8g", besar: "80,2g", bumil: "96,4g", balita: "51,8g", alergen: "-" },
            serat: { kecil: "3g", besar: "3,5g", bumil: "4g", balita: "2,9g", alergen: "-" }
        }
    },
        selasa: {
        hari: "Selasa",
        tanggal: "22 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Crispy Saus Bistik Alergen Pentol Kecap",
        laukPendamping: "Edamame",
        sayur: "Saute Kacang Panjang + Jagung",
        buah: "Semangka",
        pelengkap: "-",
        foto: "22.png",
        gizi: {
            energi: { kecil: "491,7 Kcal", besar: "610,4 Kcal", bumil: "664,5 Kcal", balita: "455,7 Kcal", alergen: "385,7 Kcal" },
            protein: { kecil: "17,6g", besar: "21,9g", bumil: "22,9g", balita: "17g", alergen: "11,2g" },
            lemak: { kecil: "13,7g", besar: "15,7g", bumil: "15,7g", balita: "13,6g", alergen: "22,8g" },
            karbohidrat: { kecil: "70,5g", besar: "90,3g", bumil: "102,3g", balita: "62,5g", alergen: "52,5g" },
            serat: { kecil: "2,1g", besar: "2,3g", bumil: "2,4g", balita: "2g", alergen: "2g" }
        }
    },
        rabu: {
        hari: "Rabu",
        tanggal: "23 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Nuget Chiken Finger",
        laukPendamping: "Tahu Sutra Crispy",
        sayur: "Saute Mix Vege *wortel+jagung+polong",
        buah: "Jeruk Semboro",
        pelengkap: "-",
        foto: "23.png",
        gizi: {
            energi: { kecil: "537.7 Kcal", besar: "628 Kcal", bumil: "701.1 Kcal", balita: "501.7 Kcal", alergen: "-" },
            protein: { kecil: "20.8g", besar: "22.5g", bumil: "25.5g", balita: "20.2g", alergen: "-" },
            lemak: { kecil: "15.4g", besar: "15.6g", bumil: "16.8g", balita: "15.3g", alergen: "-" },
            karbohidrat: { kecil: "76.7g", besar: "96.5g", bumil: "109g", balita: "68.7g", alergen: "-" },
            serat: { kecil: "4.8g", besar: "5g", bumil: "5.4g", balita: "4.7g", alergen: "-" }
        }
    },
        kamis: {
        hari: "Kamis",
        tanggal: "24 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Telur Fuyunghai *saos + kc polong",
        laukPendamping: "Tempe Kemul",
        sayur: "Capcay Sawi Putih + Wortel - Pentol",
        buah: "Anggur Red Globe",
        pelengkap: "-",
        foto: "24.png",
        gizi: {
            energi: { kecil: "485.5 Kcal", besar: "575.8 Kcal", bumil: "714.6 Kcal", balita: "449.5 Kcal", alergen: "500.2 Kcal" },
            protein: { kecil: "20.7g", besar: "22.4g", bumil: "29.1g", balita: "20.1g", alergen: "23.5g" },
            lemak: { kecil: "17.5g", besar: "17.7g", bumil: "19.7g", balita: "17.4g", alergen: "18.4g" },
            karbohidrat: { kecil: "65.4g", besar: "85.2g", bumil: "108.4g", balita: "57.4g", alergen: "63.9g" },
            serat: { kecil: "2.4g", besar: "2.6g", bumil: "3.1g", balita: "2.3g", alergen: "2.3g" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "25 September 2026",
        karbo: "Roti Bun",
        laukUtama: "Patty Crispy Homemade",
        laukPendamping: "Tahu Gejrot (PB Bumil)",
        sayur: "Timun + Tomat Mayow (Sekolah)",
        buah: "-",
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

    const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val || "-";
    };

    // Update Header
    setTxt('hari-text', data.hari);
    setTxt('tanggal-text', data.tanggal);

    // Update Gambar
    const fotoElem = document.getElementById('foto-menu');
    if (fotoElem) fotoElem.src = data.foto;

    // Update Isi Ompreng
    setTxt('karbo-text', data.karbo);
    setTxt('lauk-utama-text', data.laukUtama);
    setTxt('lauk-pendamping-text', data.laukPendamping);
    setTxt('sayur-text', data.sayur);
    setTxt('buah-text', data.buah);
    
    // Update Pelengkap
    const nilaiPelengkap = data.pelengkap || data.Tambahan || data.tambahan || "-";
    setTxt('pelengkap-text', nilaiPelengkap);

    // Update Tabel Gizi
    if (data.gizi) {
        setTxt('energi-kecil', data.gizi.energi.kecil);
        setTxt('energi-besar', data.gizi.energi.besar);
        setTxt('energi-bumil', data.gizi.energi.bumil);
        setTxt('energi-balita', data.gizi.energi.balita);
        setTxt('energi-alergen', data.gizi.energi.alergen);

        setTxt('protein-kecil', data.gizi.protein.kecil);
        setTxt('protein-besar', data.gizi.protein.besar);
        setTxt('protein-bumil', data.gizi.protein.bumil);
        setTxt('protein-balita', data.gizi.protein.balita);
        setTxt('protein-alergen', data.gizi.protein.alergen);

        setTxt('lemak-kecil', data.gizi.lemak.kecil);
        setTxt('lemak-besar', data.gizi.lemak.besar);
        setTxt('lemak-bumil', data.gizi.lemak.bumil);
        setTxt('lemak-balita', data.gizi.lemak.balita);
        setTxt('lemak-alergen', data.gizi.lemak.alergen);

        setTxt('karbo-kecil', data.gizi.karbohidrat.kecil);
        setTxt('karbo-besar', data.gizi.karbohidrat.besar);
        setTxt('karbo-bumil', data.gizi.karbohidrat.bumil);
        setTxt('karbo-balita', data.gizi.karbohidrat.balita);
        setTxt('karbo-alergen', data.gizi.karbohidrat.alergen);

        setTxt('serat-kecil', data.gizi.serat.kecil);
        setTxt('serat-besar', data.gizi.serat.besar);
        setTxt('serat-bumil', data.gizi.serat.bumil);
        setTxt('serat-balita', data.gizi.serat.balita);
        setTxt('serat-alergen', data.gizi.serat.alergen);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tombolHari = document.querySelectorAll('.btn-day, .btn-hari, [data-hari]');

    tombolHari.forEach(button => {
        button.addEventListener('click', (e) => {
            const hariDiPilih = e.currentTarget.getAttribute('data-hari');

            tombolHari.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            updateMenuHari(hariDiPilih);
        });
    });

    updateMenuHari('senin');
});
