// Data menu dan kandungan gizi per hari (Siklus Menu-1)
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "12 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam geprek Sambal Hijau (PB Bumil) / Ayam saos tomat (PK Balita)",
        laukPendamping: "Tahu Bm Mentega",
        sayur: "Lalap Kubis + Timun (PK Bumil) / Tumis Wortel + Sawi + Pentol (PK Balita)",
        buah: "Semangka",
        pelengkap: "Sambal Ijo",
        foto: "menusenin.png",
        gizi: {
            energi: { kecil: "527.7 Kcal", besar: "599.4 Kcal", bumil: "691.1 Kcal", balita: "491.7 Kcal", alergen: "-" },
            protein: { kecil: "23.4g", besar: "21.2g", bumil: "28.1g", balita: "22.8g", alergen: "-" },
            lemak: { kecil: "20g", besar: "16.9g", bumil: "21.4g", balita: "19.9g", alergen: "-" },
            karbohidrat: { kecil: "66.3g", besar: "86.2g", bumil: "98.6g", balita: "58.3g", alergen: "-" },
            serat: { kecil: "2.1g", besar: "2.4g", bumil: "2.7g", balita: "2g", alergen: "-" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "13 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ikan Dory Katsu Lada Hitam Saus",
        laukPendamping: "Tempe Kemul",
        sayur: "Capcay Sawi Putih + Wortel + Pentol",
        buah: "Pisang",
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
        tanggal: "14 Oktober 2026",
        karbo: "Nasi Nori",
        laukUtama: "Telur Dadar Okonomiyaki",
        laukPendamping: "Tahu Crispy *tp basah (+kucai)",
        sayur: "Curry Jagung Wortel",
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
        tanggal: "15 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Nugget Keju",
        laukPendamping: "Edamame",
        sayur: "Pokcoy Baput + Jamur Shimeji",
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
        tanggal: "16 Oktober 2026",
        karbo: "Potato Wedges",
        laukUtama: "Chiken Strip Saus BBQ",
        laukPendamping: "Edamame",
        sayur: "Kacang Panjang + Jagung Boiled",
        buah: "Jeruk",
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
