// CharAt
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// charAt
rl.question("masukkan sebuah kalimat: ", (inputString) => {
    rl.question("masukkan indeks yang ingin anda cek:", (index) => {
        // konversi nilai index ke tipe number
        index = Number(index)
        // periksa apakah index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            // gunakan method charAt untuk mendapatkan karakter pada indeks yang diminta
            const character = inputString.charAt(index);
            console.log(`karakter pada indeks ${index}: ${character}`);
        } else {
            console.log("indeks tidak valid!");
        }
        rl.close();
    });

});
// Karakter apa yang terdapat pada indeks ke-7 dalam kata "Republik Indonesia"?
// Jawaban: k