// concat
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan kalimat pertama:", (kalimat1) => {
    rl.question("masukan kalimat kedua:", (kalimat2) => {
        // menggabungkan kalimat1 dan kalimat2 menggunakan method concat()
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan: ${kalimatGabungan}`);
        rl.close();
    });
});
// Gabungkan kata berikut "Hello" dan "world!" untuk membentuk sebuah kalimat.
// Jawaban:helloworld