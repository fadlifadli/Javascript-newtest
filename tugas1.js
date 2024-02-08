const prompt = require('prompt-sync')();

// Function to calculate square root
function squareRoot(x) {
    return Math.sqrt(x);
}

// Main function
function main() {
    const input = parseFloat(prompt('Masukkan bilangan genap: '));
    console.log('Tugas-1 Pekanan-2 A.N M.Fadhli A.C')

    // Check if input is less than 0
    if (input < 0) {
        console.log('Tidak bisa input bilangan negatif');
        return;
    }

    // Check if input is odd
    if (input % 2 !== 0) {
        console.log('Tidak bisa input bilangan ganjil');
        return;
    }

    // Calculate and print square root
    const result = squareRoot(input);
    console.log(`Akar pangkat 2 dari ${input} adalah ${result}`);
}

// Call main function
main();