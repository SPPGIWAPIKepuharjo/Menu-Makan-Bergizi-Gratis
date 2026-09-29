// Data menu dan kandungan gizi per hari
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "28 September 2026",
        karbo: "Nasi Rempah",
        laukUtama: "Semur Telur (Alergen Ayam Kecap)",
        laukPendamping: "Tempe Popcorn",
        sayur: "Tumis Labu Siam + Tahu",
        buah: "Pisang",
        pelengkap: "-",
        foto: "senin.png",
        gizi: {
            energi: { kecil: "515.1 Kcal", besar: "605.4 Kcal", bumil: "709.2 Kcal", balita: "479.1 Kcal", alergen: "536.2 Kcal" },
            protein: { kecil: "18.1g", besar: "19.8g", bumil: "25.5g", balita: "17.5g", alergen: "24g" },
            lemak: { kecil: "14.6g", besar: "14.8g", bumil: "16.7g", balita: "14.5g", alergen: "18.1g" },
            karbohidrat: { kecil: "68.6g", besar: "88.4g", bumil: "104.6g", balita: "60.6g", alergen: "60g" },
            serat: { kecil: "3.6g", besar: "3.8g", bumil: "4.3g", balita: "3.5g", alergen: "3.5g" }
        }
    },
        selasa: {
        hari: "Selasa",
        tanggal: "29 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Goreng Laos",
        laukPendamping: "Tahu Kuning Goreng",
        sayur: "Sambel Goreng Kentang Wortel (PB Bumil) / Tumis Buncis Wortel (PK Balita)",
        buah: "Melon",
        pelengkap: "-",
        foto: "selasa.png",
        gizi: {
            energi: { kecil: "449.9 Kcal", besar: "554.7 Kcal", bumil: "627.8 Kcal", balita: "413.9 Kcal", alergen: "-" },
            protein: { kecil: "20g", besar: "21.7g", bumil: "24.7g", balita: "19.4g", alergen: "-" },
            lemak: { kecil: "16.3g", besar: "16.4g", bumil: "17.6g", balita: "16.2g", alergen: "-" },
            karbohidrat: { kecil: "54.8g", besar: "78g", bumil: "90.5g", balita: "46.8g", alergen: "-" },
            serat: { kecil: "2.6g", besar: "2.4g", bumil: "2.8g", balita: "2.5g", alergen: "-" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "30 September 2026",
        karbo: "Nasi Putih",
        laukUtama: "Telur Ceplok (PB, Bumil Busui) / Telur Ceplok Bm Mentega",
        laukPendamping: "Tahu Popcorn + Bumbu Pecel *khusus PB,Bumil Busui",
        sayur: "Kubis + Kacang Panjang + Timun (PB,Bumil,Busui) / Sayur Bening Kacang Panjang + Labu Siam (PK, Balita)",
        buah: "Semangka",
        pelengkap: "Kerupuk Udang",
        foto: "rabu.png",
        gizi: {
            energi: { kecil: "468.3 Kcal", besar: "645.7 Kcal", bumil: "781.8 Kcal", balita: "432.3 Kcal", alergen: "587.3 Kcal" },
            protein: { kecil: "14.4g", besar: "24.1g", bumil: "27.1g", balita: "13.8g", alergen: "16.2g" },
            lemak: { kecil: "14.9g", besar: "24.8g", bumil: "26g", balita: "14.8g", alergen: "26.3g" },
            karbohidrat: { kecil: "67.8g", besar: "90.9g", bumil: "103.4g", balita: "59.8g", alergen: "91g" },
            serat: { kecil: "2.1g", besar: "4.3g", bumil: "4.7g", balita: "2g", alergen: "2.3g" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "01 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "-",
        laukPendamping: "-",
        sayur: "-",
        buah: "-",
        pelengkap: "Kerupuk",
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
        tanggal: "02 Oktober 2026",
        karbo: "Potato Wedges",
        laukUtama: "Chiken Parmigian (Free gluten dg tepung shilin)",
        laukPendamping: "Edamame",
        sayur: "Saute Jagung+Polong",
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
