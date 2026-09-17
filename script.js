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
            serat: { kecil: "2,7g", besar: "2,9g", bumil: "3,3g", balita: "3,3g", alergen: "-" }
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
        karbo: "Nasi Putih",
        laukUtama: "Tongseng Ayam (Alergen Pentol Kecap)",
        laukPendamping: "Perkedel Tahu",
        sayur: "Tumis Pelangi",
        buah: "Semangka",
        pelengkap: "-",
        foto: "jumat.png",
        gizi: {
            energi: { kecil: "475,3 Kcal", besar: "594 Kcal", bumil: "667,4 Kcal", balita: "439,3 Kcal", alergen: "434 Kcal" },
            protein: { kecil: "20,7g", besar: "25g", bumil: "28g", balita: "20,1g", alergen: "16,2g" },
            lemak: { kecil: "16,4g", besar: "18,4g", bumil: "19,6g", balita: "16,3g", alergen: "25,2g" },
            karbohidrat: { kecil: "60,5g", besar: "80,3g", bumil: "92,8g", balita: "52,5g", alergen: "56,3g" },
            serat: { kecil: "3,2g", besar: "3,4g", bumil: "3,8g", balita: "3,1g", alergen: "3g" }
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
