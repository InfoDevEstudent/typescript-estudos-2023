//Exemplo 01 - Uso de Colchetes:
let frutas: string[] = ['🍉', '🍋', '🍌', '🍑', '🍓', '🍒'];
console.log(frutas[3]);

//Exemplo 02 - Arrays Object: MUITO MAIS COMUM NO DIA A DIA!
let frutas1: Array<string> = ['🍉', '🍋', '🍌', '🍑', '🍓', '🍒'];
console.log(frutas1[5]);

//Exemplo 03 - Adicionando mais strings com método 'push':
let linguasFaladas: Array<string> = ['Português', 'Inglês'];
console.log(linguasFaladas);
linguasFaladas.push('Espanhol');
console.log(linguasFaladas);

//Exemplo 04 - Identificar tamanho do array - método 'length':
let hardSkills: Array<string> = ['html', 'css', 'javascript', 'typescript'];
console.log(hardSkills.length);

//Exemplo 05 - Exemplo de Array com 'Spread Operator':
let alunosMatriculas: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(alunosMatriculas);
alunosMatriculas = [... alunosMatriculas, 7, 8, 9, 10];
console.log(alunosMatriculas);

//Exemplo 05 - Exemplo de Array com Laço de Iteração:
let linguagemProg: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#', 'JAVA');

function functionLinguagens (linguagemProg:string[]){
    for (let i = 0; i < linguagemProg.length; i++) {
        console.log(linguagemProg[i]);
    }
}

functionLinguagens(linguagemProg);