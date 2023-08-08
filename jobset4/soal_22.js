const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) => {
            // Konversi nilai indeks ke tipe Number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // Gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
            const substringResult = kalimat.substring(startIndex, endIndex); console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${endIndex}: ${substringResult}
            `);
            rl.close();
        });
    });
});
// Dapatkan substr dari kalimat "Halo, perkenalkan nama saya adalah Javascript" mulai dari
// indeks 8 dengan panjang 5 karakter.
// Jawaban: Hasil substring dari indeks 8 dengan panjang 5:  pe
