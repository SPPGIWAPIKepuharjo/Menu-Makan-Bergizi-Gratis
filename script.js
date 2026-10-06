// Data menu dan kandungan gizi per hari (Siklus Menu-2)
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "05 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Daging Yakiniku",
        laukPendamping: "Tempe Cabe Garam",
        sayur: "Sup Jagung + Wortel",
        buah: "Semangka",
        pelengkap: "Kerupuk",
        foto: "senin.png",
        gizi: {
            energi: { kecil: "532.2 Kcal", besar: "622.5 Kcal", bumil: "726.3 Kcal", balita: "496.2 Kcal", alergen: "-" },
            protein: { kecil: "20.4g", besar: "22.1g", bumil: "27.8g", balita: "19.8g", alergen: "-" },
            lemak: { kecil: "17.2g", besar: "17.4g", bumil: "19.3g", balita: "17.1g", alergen: "-" },
            karbohidrat: { kecil: "73.3g", besar: "93.1g", bumil: "109.3g", balita: "65.3g", alergen: "-" },
            serat: { kecil: "2.5g", besar: "2.7g", bumil: "3.2g", balita: "2.4g", alergen: "-" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "06 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Rambutan *Adonan ayam spt biasa bm Koloke",
        laukPendamping: "Edamame",
        sayur: "Capcay Pakcoy + Wortel + Pentol",
        buah: "Melon",
        pelengkap: "-",
        foto: "selasa.png",
        gizi: {
            energi: { kecil: "484.5 Kcal", besar: "574.8 Kcal", bumil: "660.8 Kcal", balita: "448.5 Kcal", alergen: "-" },
            protein: { kecil: "17.9g", besar: "19.6g", bumil: "23.2g", balita: "17.3g", alergen: "-" },
            lemak: { kecil: "17.6g", besar: "17.8g", bumil: "19.6g", balita: "17.5g", alergen: "-" },
            karbohidrat: { kecil: "60g", besar: "79.8g", bumil: "91.9g", balita: "52g", alergen: "-" },
            serat: { kecil: "1.4g", besar: "1.6g", bumil: "1.7g", balita: "1.3g", alergen: "-" }
        }
    },
        rabu: {
        hari: "Rabu",
        tanggal: "07 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Rolade Telur Saus Padang (Alergen Pentol Goreng)",
        laukPendamping: "Orek Tahu Kemangi",
        sayur: "Tumis Labu Siam + Jagung",
        buah: "Jeruk Keprok",
        pelengkap: "Saus Asam Manis",
        foto: "rabu.jpg",
        gizi: {
            energi: { kecil: "423.9 Kcal", besar: "514.2 Kcal", bumil: "587.3 Kcal", balita: "387.9 Kcal", alergen: "453.9 Kcal" },
            protein: { kecil: "14.3g", besar: "16g", bumil: "19g", balita: "13.7g", alergen: "14.3g" },
            lemak: { kecil: "12.9g", besar: "13.1g", bumil: "14.3g", balita: "12.8g", alergen: "24.2g" },
            karbohidrat: { kecil: "66g", besar: "85.8g", bumil: "98.3g", balita: "58g", alergen: "69.5g" },
            serat: { kecil: "4.2g", besar: "4.4g", bumil: "4.8g", balita: "4.1g", alergen: "4.2g" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "08 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Panggang Madu",
        laukPendamping: "Tahu Padat Goreng",
        sayur: "Buncis Baput",
        buah: "-",
        pelengkap: "-",
        foto: "menukamis.png",
        gizi: {
            energi: { kecil: "0 Kcal", besar: "0 Kcal", bumil: "0 Kcal", balita: "0 Kcal", alergen: "-" },
            protein: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            lemak: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            karbohidrat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" },
            serat: { kecil: "0g", besar: "0g", bumil: "0g", balita: "0g", alergen: "-" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "09 Oktober 2026",
        karbo: "Roti Tawar Panggang",
        laukUtama: "Chiken Strip",
        laukPendamping: "Edamame",
        sayur: "Timun Mayo Saos",
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
