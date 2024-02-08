const prompt = require('prompt-sync')({sigint: true});

 

const nilai = prompt('Masukan nilai: ');

let grade;

 

if(nilai>90){

    grade = "A"

} else if(nilai>80) {

    grade = "B+"

} else if (nilai>70){

    grade = "B"

} else {

    grade = "F"

}

console.log("Grade adalah = " + grade)