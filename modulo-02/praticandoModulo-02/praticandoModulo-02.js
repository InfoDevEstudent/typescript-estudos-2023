"use strict";
let firstName = 'Sergio';
let lastName = 'Felipe';
let ages = 38;
let estature = 1.75;
let kg = 66;
const calcIMC = kg / (estature * estature);
function resultIMG() {
    if (calcIMC > 18.5 && calcIMC <= 24.9) {
        return console.log('Parabéns:', firstName, lastName + ',', 'hoje com', ages, 'anos, seu IMC', calcIMC.toFixed(2), 'é BOM!');
    }
    else if (calcIMC < 18.5) {
        return console.log('Atenção: ', firstName, lastName + ',', 'hoje com', ages, 'anos, seu IMC', calcIMC.toFixed(2), 'é RUIM!');
    }
}
console.log(resultIMG());
