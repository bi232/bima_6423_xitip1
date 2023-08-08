const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan sebuah kalimat:", (kalimat) => {
    rl.question("masukkan indeks awal:", (startIndex) => {
        rl.question("masukkan indeks akhir:", (endIndex) => {
            // konversi nilai index ke tipe Number
            startIndex = Number (startIndex);
            endIndex = Number (endIndex);
            // Gunakan method slice untuk mengambil substring daru startindex hingga endindex
            const sliceSubstring = kalimat.slice(startIndex,endIndex);
            console.log(`awal slice dari indeks ${startIndex} hingga ${endIndex}: ${sliceSubstring}`);
            rl.close();
        });
    });
});