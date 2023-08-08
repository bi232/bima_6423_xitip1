const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan sebuah kalimat:", (kalimat) => {
    // Gunakan method TopUpperCase untuk mengubah kalimat menjadi huruf besar
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`kalimat dakan huruf besar: ${kalimatUpperCase}`);
    rl.close();
})