// Variáveis TypeAnnotations
let nome: string = 'Sérgio';
let sobrenome: string = 'Felipe';
let idade:number = 38;
console.log(nome + ' ' + sobrenome + ' ' + idade + 'anos');

// Arrays TypeAnnotations
let hardware: string[] = 
['Placa Mãe',
'Processador',
'Memória',
'SSD',
'Placa de Vídeo',
'Fonte',
'Gabinete'];
console.log(hardware);

// Objetos TypeAnnotations
let orcamento: {
    placaMae: number;
    processador: number;
    memoria: number;
    ssd: number;
    placaDeVideo: number;
    fonte: number;
    gabinete: number;
};
orcamento = {
    placaMae: 400,
    processador: 1200,
    memoria: 250,
    ssd: 150,
    placaDeVideo: 2500,
    fonte: 600,
    gabinete: 300
};
console.log(orcamento);

// Function TypeAnnotations
function media (num1:number, num2:number, num3:number){
    return (num1 + num2 + num3) / 3;
}
console.log(media(3, 5, 7));