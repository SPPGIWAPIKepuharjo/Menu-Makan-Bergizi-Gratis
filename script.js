// Data menu dan kandungan gizi per hari (Siklus Menu-2)
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "19 Oktober 2026",
        karbo: "Nasi Gurih",
        laukUtama: "Telur Ceplok Abon (Alergen Pentol Goreng Abon)",
        laukPendamping: "Tempe Orek Kemangi",
        sayur: "Tumis Buncis Jagung",
        buah: "Melon",
        pelengkap: "-",
        foto: "senin.png",
        gizi: {
            energi: { kecil: "454.4 Kcal", besar: "544.7 Kcal", bumil: "648.5 Kcal", balita: "418.4 Kcal", alergen: "447.1 Kcal" },
            protein: { kecil: "19.5g", besar: "21.2g", bumil: "26.9g", balita: "18.9g", alergen: "19g" },
            lemak: { kecil: "14.4g", besar: "14.6g", bumil: "16.5g", balita: "14.3g", alergen: "25.5g" },
            karbohidrat: { kecil: "62g", besar: "81.8g", bumil: "98g", balita: "54g", alergen: "57.4g" },
            serat: { kecil: "2.2g", besar: "2.4g", bumil: "2.9g", balita: "2.1g", alergen: "2.1g" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "20 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Koloke",
        laukPendamping: "Tahu Goreng",
        sayur: "Capcay Sawi Putih + Wortel + Pentol",
        buah: "Semangka",
        pelengkap: "-",
        foto: "selasa.png",
        gizi: {
            energi: { kecil: "499.3 Kcal", besar: "618 Kcal", bumil: "691.1 Kcal", balita: "463.3 Kcal", alergen: "-" },
            protein: { kecil: "20.8g", besar: "25.1g", bumil: "28.1g", balita: "20.2g", alergen: "-" },
            lemak: { kecil: "18.2g", besar: "20.2g", bumil: "21.4g", balita: "18.1g", alergen: "-" },
            karbohidrat: { kecil: "66.3g", besar: "86.1g", bumil: "98.6g", balita: "58.3g", alergen: "-" },
            serat: { kecil: "2.1g", besar: "2.3g", bumil: "2.7g", balita: "2g", alergen: "-" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "21 Oktober 2026",
        karbo: "Lontong (PB Bumil) / Nasi Putih (PK Balita)",
        laukUtama: "Tahu Telur Ayam",
        laukPendamping: "Bumbu Kacang Tahu Crispy",
        sayur: "Kubis + Timun + Kacang Panjang (PB Bumil) / Sayur Bening (PK Balita)",
        buah: "Kelengkeng",
        pelengkap: "-",
        foto: "rabu.png",
        gizi: {
            energi: { kecil: "400.9 Kcal", besar: "555.1 Kcal", bumil: "609.1 Kcal", balita: "364.9 Kcal", alergen: "-" },
            protein: { kecil: "15.2g", besar: "19.6g", bumil: "22.6g", balita: "14.6g", alergen: "-" },
            lemak: { kecil: "10.9g", besar: "26.5g", bumil: "27.8g", balita: "10.8g", alergen: "-" },
            karbohidrat: { kecil: "62.7g", besar: "73.2g", bumil: "80.7g", balita: "54.7g", alergen: "-" },
            serat: { kecil: "3.3g", besar: "6.2g", bumil: "6.5g", balita: "3.2g", alergen: "-" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "22 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Rawon Daging",
        laukPendamping: "Tempe Goreng",
        sayur: "Labu Siam + Toge",
        buah: "Pisang",
        pelengkap: "-",
        foto: "kamis.png",
        gizi: {
            energi: { kecil: "509.2 Kcal", besar: "599.5 Kcal", bumil: "703.3 Kcal", balita: "473.2 Kcal", alergen: "-" },
            protein: { kecil: "19.7g", besar: "21.4g", bumil: "27.1g", balita: "19.1g", alergen: "-" },
            lemak: { kecil: "15.5g", besar: "15.7g", bumil: "17.6g", balita: "15.4g", alergen: "-" },
            karbohidrat: { kecil: "64g", besar: "83.8g", bumil: "100g", balita: "56g", alergen: "-" },
            serat: { kecil: "3.5g", besar: "3.7g", bumil: "4.2g", balita: "3.4g", alergen: "-" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "23 Oktober 2026",
        karbo: "Roti Bun",
        laukUtama: "Chiken Patty",
        laukPendamping: "Kacang Rebus",
        sayur: "Timun Slice",
        buah: "Semangka",
        pelengkap: "-",
        foto: "jumat.png",
        gizi: {
            energi: { kecil: "502.6 Kcal", besar: "531.1 Kcal", bumil: "588 Kcal", balita: "502.6 Kcal", alergen: "-" },
            protein: { kecil: "18.7g", besar: "21.4g", bumil: "26.7g", balita: "18.7g", alergen: "-" },
            lemak: { kecil: "20.8g", besar: "22.7g", bumil: "26.4g", balita: "20.8g", alergen: "-" },
            karbohidrat: { kecil: "56.9g", besar: "56.9g", bumil: "56.9g", balita: "56.9g", alergen: "-" },
            serat: { kecil: "3.1g", besar: "3.1g", bumil: "3.1g", balita: "3.1g", alergen: "-" }
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
