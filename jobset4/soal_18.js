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

//Masukkan sebuah kalimat: SMK Strada Jakarta
//Masukkan indeks awal: 0
//Masukkan indeks akhir: 3
//Hasil substring dari indeks 0 hingga 3: SMK