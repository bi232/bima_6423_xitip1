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
//Masukkan sebuah kalimat: Jika anda ingin menjadi orang sukses, jangan berhenti u
//ntuk bermimpi
//Masukkan indeks awal: 7
//Masukkan panjang substring: 60
//hasil substring dari indeks 7 dengan panjang 60: da ingin menjadi orang sukses,
//jangan berhenti untuk bermimp