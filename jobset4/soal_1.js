// length
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("masukkan sebuah kalimat:",(inputString) => {
    console.log(`panjang kalimat: ${inputString.length}`);
rl.close();
});

// Hitung panjang karakter dari kalimat berikut ini: "Budi adalah seorang siswa jurusan RPL yang
// tinggal didaerah Bekasi" 
// jawaban : 66