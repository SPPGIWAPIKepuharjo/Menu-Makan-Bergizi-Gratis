// Data menu dan kandungan gizi per hari (Siklus Menu-1)
const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "26 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Lapis Daging",
        laukPendamping: "Kering Tempe",
        sayur: "Kimlo Wortel Jamur Kuping",
        buah: "Jeruk",
        pelengkap: "-",
        foto: "senin.png",
        gizi: {
            energi: { kecil: "509.5 Kcal", besar: "599.8 Kcal", bumil: "703.6 Kcal", balita: "473.5 Kcal", alergen: "-" },
            protein: { kecil: "19.7g", besar: "21.4g", bumil: "27.1g", balita: "19.1g", alergen: "-" },
            lemak: { kecil: "15g", besar: "15.2g", bumil: "17.1g", balita: "14.9g", alergen: "-" },
            karbohidrat: { kecil: "76.7g", besar: "96.5g", bumil: "112.7g", balita: "68.7g", alergen: "-" },
            serat: { kecil: "4.3g", besar: "4.5g", bumil: "5g", balita: "4.2g", alergen: "-" }
        }
    },
      selasa: {
        hari: "Selasa",
        tanggal: "27 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Chiken Strip Richeese Sauce (PB Bumil) / Chiken Strip Rose Sauce (PK Balita)",
        laukPendamping: "Tahu Sutra Goreng",
        sayur: "Saute Buncis Jagung",
        buah: "Semangka",
        pelengkap: "-",
        foto: "selasa.png",
        gizi: {
            energi: { kecil: "502.7 Kcal", besar: "621.4 Kcal", bumil: "694.5 Kcal", balita: "466.7 Kcal", alergen: "-" },
            protein: { kecil: "19.7g", besar: "24g", bumil: "27g", balita: "19.1g", alergen: "-" },
            lemak: { kecil: "15g", besar: "17g", bumil: "18.2g", balita: "14.9g", alergen: "-" },
            karbohidrat: { kecil: "72.3g", besar: "92.1g", bumil: "104.6g", balita: "64.3g", alergen: "-" },
            serat: { kecil: "2.4g", besar: "2.6g", bumil: "3g", balita: "2.3g", alergen: "-" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "28 Oktober 2026",
        karbo: "Nasi Gurih",
        laukUtama: "Telur Ceplok Pepes Kemangi",
        laukPendamping: "Tempe Kemul",
        sayur: "Tumis Labu Siam Tahu",
        buah: "Jeruk Baby Java",
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
        tanggal: "29 Oktober 2026",
        karbo: "Nasi Putih",
        laukUtama: "Ayam Bakar *Sambal Tomat(Khusus PB,Bumil)",
        laukPendamping: "Tahu Kremes",
        sayur: "Lalap Kubis + Timun (PB) / Tumis Kc Panjang Kecap (Bumil,PK,Balita)",
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
        tanggal: "30 Oktober 2026",
        karbo: "Roti Tawar",
        laukUtama: "Dimsum Ayam Homemade",
        laukPendamping: "Edamame",
        sayur: "Creamy Cream Sup (Polong Wortel Jagung)",
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
