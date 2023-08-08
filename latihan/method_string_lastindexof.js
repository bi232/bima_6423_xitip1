const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan sebuah kalimat:", (kalimat) => {
    rl.question("masukkan kata yang ingin anda cari:", (kataCari) => {
        // gunakan method lastindexOf untuk mencari katacari dalam kalimat
        const indekskataTerakhir = kalimat.lastIndexOf(kataCari);
        if (indekskataTerakhir !== -1){
            console.log(`kata '${kataCari}' ditemukan pada indeks terakhir: ${indekskataTerakhir}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});