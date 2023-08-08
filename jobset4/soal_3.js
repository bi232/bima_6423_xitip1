// ChatAT
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan sebuah kalimat:", (inputString) => {
    console.log(`Jumlah Karakter: ${inputString.length}`);
    rl.close();
});
// Berapa karakterkah dalam kata "Ibu Kota Negara"?
// jawaban: 15
