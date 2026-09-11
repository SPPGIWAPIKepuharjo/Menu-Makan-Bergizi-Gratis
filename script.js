document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua tombol hari
    const tombolHari = document.querySelectorAll('.btn-day, .btn-hari');

    tombolHari.forEach(button => {
        button.addEventListener('click', (e) => {
            // Menggunakan e.currentTarget agar selalu membaca atribut dari tag <button>
            const hariDiPilih = e.currentTarget.getAttribute('data-hari');

            // 1. Ubah status aktif pada tombol
            tombolHari.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            // 2. Panggil fungsi update data/tampilan menu
            if (typeof gantiHari === 'function') {
                gantiHari(hariDiPilih);
            } else {
                updateMenuHari(hariDiPilih);
            }
        });
    });
});
