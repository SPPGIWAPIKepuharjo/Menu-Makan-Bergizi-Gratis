// ==========================================
// DATA MENU & KANDUNGAN GIZI (SENIN - JUMAT)
// ==========================================
// Silakan sesuaikan nama foto, hidangan, atau angka gizi sesuai kebutuhan harian SPPG

const dataMenu = {
    senin: {
        hari: "Senin",
        tanggal: "24 Agustus 2026",
        foto: "martabak.jpg", // Ganti dengan nama file foto menu hari Senin
        karbo: "Nasi Putih",
        laukUtama: "Ayam Semur",
        laukPendamping: "Tahu Bacem",
        sayur: "Sayur Bening Bayam",
        buah: "Pisang Ambon",
        minuman: "Susu UHT",
        gizi: {
            kecil:  { energi: "440 kcal", protein: "16g", lemak: "11g", karbo: "54g", serat: "3g" },
            besar:  { energi: "640 kcal", protein: "24g", lemak: "19g", karbo: "78g", serat: "5g" },
            bumil:  { energi: "740 kcal", protein: "29g", lemak: "24g", karbo: "88g", serat: "6g" },
            balita: { energi: "340 kcal", protein: "12g", lemak: "9g",  karbo: "44g", serat: "2g" }
        }
    },
    selasa: {
        hari: "Selasa",
        tanggal: "25 Agustus 2026",
        foto: "martabak.jpg", // Ganti dengan nama file foto menu hari Selasa
        karbo: "Nasi Putih",
        laukUtama: "Ikan Goreng Tepung",
        laukPendamping: "Tempe Goreng",
        sayur: "Tumis Buncis & Wortel",
        buah: "Jeruk Sweet",
        minuman: "Air Mineral",
        gizi: {
            kecil:  { energi: "450 kcal", protein: "17g", lemak: "12g", karbo: "56g", serat: "3g" },
            besar:  { energi: "660 kcal", protein: "26g", lemak: "20g", karbo: "80g", serat: "5g" },
            bumil:  { energi: "750 kcal", protein: "31g", lemak: "25g", karbo: "90g", serat: "6g" },
            balita: { energi: "350 kcal", protein: "13g", lemak: "10g", karbo: "45g", serat: "2g" }
        }
    },
    rabu: {
        hari: "Rabu",
        tanggal: "26 Agustus 2026",
        foto: "martabak.jpg", // Ganti dengan nama file foto menu hari Rabu
        karbo: "Nasi Kuning",
        laukUtama: "Empal Daging",
        laukPendamping: "Perkedel Kentang",
        sayur: "Orek Tempe & Kacang",
        buah: "Semangka",
        minuman: "Susu UHT",
        gizi: {
            kecil:  { energi: "470 kcal", protein: "18g", lemak: "13g", karbo: "55g", serat: "4g" },
            besar:  { energi: "680 kcal", protein: "27g", lemak: "22g", karbo: "82g", serat: "5g" },
            bumil:  { energi: "780 kcal", protein: "32g", lemak: "27g", karbo: "92g", serat: "7g" },
            balita: { energi: "360 kcal", protein: "13g", lemak: "11g", karbo: "46g", serat: "3g" }
        }
    },
    kamis: {
        hari: "Kamis",
        tanggal: "27 Agustus 2026",
        foto: "martabak.jpg", // Ganti dengan nama file foto menu hari Kamis
        karbo: "Nasi Putih",
        laukUtama: "Ayam Goreng Krispi",
        laukPendamping: "Tahu Isi",
        sayur: "Capcay Sayur",
        buah: "Melon",
        minuman: "Susu UHT",
        gizi: {
            kecil:  { energi: "460 kcal", protein: "16g", lemak: "12g", karbo: "57g", serat: "3g" },
            besar:  { energi: "670 kcal", protein: "25g", lemak: "21g", karbo: "81g", serat: "5g" },
            bumil:  { energi: "760 kcal", protein: "30g", lemak: "26g", karbo: "91g", serat: "6g" },
            balita: { energi: "355 kcal", protein: "12g", lemak: "10g", karbo: "45g", serat: "2g" }
        }
    },
    jumat: {
        hari: "Jumat",
        tanggal: "28 Agustus 2026",
        foto: "martabak.jpg", // Ganti dengan nama file foto menu hari Jumat
        karbo: "Nasi Uduk",
        laukUtama: "Telur Balado",
        laukPendamping: "Tahu Goreng",
        sayur: "Sayur Sop Komplit",
        buah: "Pisang Cavendish",
        minuman: "Air Mineral",
        gizi: {
            kecil:  { energi: "445 kcal", protein: "15g", lemak: "11g", karbo: "53g", serat: "3g" },
            besar:  { energi: "650 kcal", protein: "23g", lemak: "19g", karbo: "79g", serat: "4g" },
            bumil:  { energi: "730 kcal", protein: "28g", lemak: "23g", karbo: "87g", serat: "5g" },
            balita: { energi: "340 kcal", protein: "11g", lemak: "9g",  karbo: "43g", serat: "2g" }
        }
    }
};

// ==========================================
// FUNGSI UTAMA UNTUK UPDATE TAMPILAN WEBSITE
// ==========================================

function updateTampilan(hari) {
    const data = dataMenu[hari];
    if (!data) return;

    // 1. Update Hari, Tanggal & Foto Menu
    document.getElementById("hari-text").innerText = data.hari;
    document.getElementById("tanggal-text").innerText = data.tanggal;
    
    // Ganti foto menu (memastikan gambar diperbarui)
    const fotoElem = document.getElementById("foto-menu");
    if (fotoElem) {
        fotoElem.src = data.foto;
        fotoElem.alt = "Foto Menu " + data.hari;
    }

    // 2. Update Komposisi Menu
    document.getElementById("karbo-text").innerText = data.karbo;
    document.getElementById("lauk-utama-text").innerText = data.laukUtama;
    document.getElementById("lauk-pendamping-text").innerText = data.laukPendamping;
    document.getElementById("sayur-text").innerText = data.sayur;
    document.getElementById("buah-text").innerText = data.buah;
    document.getElementById("minuman-text").innerText = data.minuman;

    // 3. Update Nilai Gizi - Porsi Kecil
    document.getElementById("energi-kecil").innerText = data.gizi.kecil.energi;
    document.getElementById("protein-kecil").innerText = data.gizi.kecil.protein;
    document.getElementById("lemak-kecil").innerText = data.gizi.kecil.lemak;
    document.getElementById("karbo-kecil").innerText = data.gizi.kecil.karbo;
    document.getElementById("serat-kecil").innerText = data.gizi.kecil.serat;

    // 4. Update Nilai Gizi - Porsi Besar
    document.getElementById("energi-besar").innerText = data.gizi.besar.energi;
    document.getElementById("protein-besar").innerText = data.gizi.besar.protein;
    document.getElementById("lemak-besar").innerText = data.gizi.besar.lemak;
    document.getElementById("karbo-besar").innerText = data.gizi.besar.karbo;
    document.getElementById("serat-besar").innerText = data.gizi.besar.serat;

    // 5. Update Nilai Gizi - Ibu Hamil & Menyusui
    document.getElementById("energi-bumil").innerText = data.gizi.bumil.energi;
    document.getElementById("protein-bumil").innerText = data.gizi.bumil.protein;
    document.getElementById("lemak-bumil").innerText = data.gizi.bumil.lemak;
    document.getElementById("karbo-bumil").innerText = data.gizi.bumil.karbo;
    document.getElementById("serat-bumil").innerText = data.gizi.bumil.serat;

    // 6. Update Nilai Gizi - Balita
    document.getElementById("energi-balita").innerText = data.gizi.balita.energi;
    document.getElementById("protein-balita").innerText = data.gizi.balita.protein;
    document.getElementById("lemak-balita").innerText = data.gizi.balita.lemak;
    document.getElementById("karbo-balita").innerText = data.gizi.balita.karbo;
    document.getElementById("serat-balita").innerText = data.gizi.balita.serat;
}

// ==========================================
// MENANGKAP KLIK NAVIGASI TOMBOL HARI
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const tombolHari = document.querySelectorAll(".btn-hari");

    tombolHari.forEach(button => {
        button.addEventListener("click", function () {
            // Hilangkan status aktif dari semua tombol
            tombolHari.forEach(btn => btn.classList.remove("active"));
            
            // Beri status aktif pada tombol yang diklik
            this.classList.add("active");

            // Ambil atribut data-hari (senin, selasa, rabu, kamis, jumat)
            const hariDipilih = this.getAttribute("data-hari");
            
            // Jalankan fungsi update
            updateTampilan(hariDipilih);
        });
    });
});
