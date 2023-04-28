let firstName:string = 'Sergio';
let lastName:string = 'Felipe';
let ages:number = 38;
let estature:number = 1.75;
let kg:number = 66;

const calcIMC:number = kg / (estature * estature);

function resultIMG (){
    if (calcIMC > 18.5 && calcIMC <= 24.9){
        return console.log('Parabéns:', firstName, lastName+',', 'hoje com', ages, 'anos, seu IMC', calcIMC.toFixed(2), 'é BOM!');
    } else if (calcIMC < 18.5){
        return console.log('Atenção: ', firstName, lastName+',', 'hoje com', ages, 'anos, seu IMC', calcIMC.toFixed(2), 'é RUIM!')
    }
}

console.log(resultIMG());