const prompt = require('prompt-sync')({sigint: true});

 

const password = prompt('Enter password: ');

const validPassword = 'Fadhli'

 

if(password===validPassword){

    console.log("Selamat datang bos Fadhli ^_^!")

}

else {

    console.log("Password Salah, coba lagi!")

}

console.log("Terimakasih sudah menggunakan aplikasi kami ^_^")