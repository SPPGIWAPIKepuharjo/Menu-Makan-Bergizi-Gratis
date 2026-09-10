const dataMenu = {
    kamis: {
        hari: "Kamis",
        tanggal: "27 Agustus 2026",
        hewani: "Dimsum Ayam",
        nabati: "Tempe Oreg",
        sayur: "Sayur Bening Labu",
        buah: "Jeruk Madu Siam",
        energiK: "448.19", energiB: "736.55",
        proteinK: "15.13", proteinB: "25.03",
        seratK: "3.21", seratB: "4.49"
    }
};

function changeMenu(hariKey) {
    const data = dataMenu[hariKey];
    if (!data) return;

    document.getElementById('hari-text').innerText = data.hari;
    document.getElementById('tanggal-text').innerText = data.tanggal;
    document.getElementById('lauk-hewani').innerText = data.hewani;
    document.getElementById('lauk-nabati').innerText = data.nabati;
    document.getElementById('sayur').innerText = data.sayur;
    document.getElementById('buah').innerText = data.buah;
    
    document.getElementById('energi-k').innerText = data.energiK;
    document.getElementById('energi-b').innerText = data.energiB;
    document.getElementById('protein-k').innerText = data.proteinK;
    document.getElementById('protein-b').innerText = data.proteinB;
    document.getElementById('serat-k').innerText = data.seratK;
    document.getElementById('serat-b').innerText = data.seratB;
}
