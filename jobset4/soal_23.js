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
//Masukkan sebuah kalimat: Universitas Gajah Mada adalah salah satu universitas fa
//vorite di indoensia
//Masukkan indeks awal: 25
//Masukkan panjang substring: 7
//hasil substring dari indeks 25 dengan panjang 7: alah sa