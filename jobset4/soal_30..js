//ini tidak bisa diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    // Contoh property length
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});

//Masukkan sebuah kalimat: Ibu kota negara
//Panjang kalimat: 15