const prompt = require('prompt-sync')({sigint: true});

// input data first nummber -> const (var) num1
const num1 = prompt('Enter a first number: ');
// input data second number -> const (var) num1
const num2 = prompt('Enter a second number: ');

// print informasi
console.log('first number + second number =');

// perhitungan penjumlahan
// convert ke number/int/float untuk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));

// const prompt = require('prompt-sync')({ sigint: true });
// const num1 = prompt('Enter a first number: '); // Meminta pengguna untuk memasukkan angka pertama const num2 = prompt('Enter a second number: '); // Meminta pengguna untuk memasukkan angka kedua console.log('first number + second number ='); // Menampilkan teks untuk menandakan hasil penjumlahan // Menghitung penjumlahan angka pertama dan angka kedua, kemudian menampilkannya console.log(Number(num1) + Number(num2));