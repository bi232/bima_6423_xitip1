const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan sebuah kalimat:", (kalimat) => {
    rl.question("masukkan indeks awal:", (startIndex) => {
        rl.question("masukkan indeks terakhir:", (endIndex) => {
            // konversi nilai indeks ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // gunakan method substring untuk mengambil substring dari startindex hingga endindex 
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
            rl.close();
        });
    });
});
// Ambil substring dari kalimat "Welcome to the world of programming" mulai dari indeks 11
// hingga akhir kalimat.
// Jawaban:  the world of programming
