import * as readline from 'readline';

export function calculaEstatuasAdicionais(estatuas: number[]): number {
    // Obtem o menor valor contido no vetor
    let min = Math.min(...estatuas);
    // Obtem o maior valor contido no vetor
    let max = Math.max(...estatuas);
    // Sabendo o menor e o maior valor, faz-se a verificação de qual é o intervalo, 
    // subtraí-se do intervalor a quantidade de valores contidos no vetor e soma-se um
    // pois deve-se considerar na operação o valor do menor valor do vetor.
    return max - min - estatuas.length + 1;
}

export function inputParaArray(input: String): number[] {
    try {
        let estatuas = input
            // remove os espaços
            .trim() 
            // Usando uma expressão regular obtem-se o conteúdo que estã dentro dos colchetes
            .replace(/^\[(.*)\]$/, "$1")
            // Gera os itens do array usando a vírgula como ponto de quebra
            .split(',')
            // e converte o valor para inteiro se estiver dentro dos valores aceitos (inteiros e positivos)
            .map((i) => { 
                if (+i < 0 || +i % 1 != 0) {
                    throw new Error("O tamanho da estátua deve ser inteiro e positivo");
                }
                return +i 
            });
            // remove os números repetidos, se houver.
            estatuas = estatuas.filter((element, i) => i === estatuas.indexOf(element));
        return estatuas;    
    } catch (e) {
        console.log(e);
    }
    return []
}

function leEntradaDesafioUm(): void {
    let leInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leInput.question("", function(input) {
        console.log(calculaEstatuasAdicionais(inputParaArray(input)));
        leInput.close();
    });
}

leEntradaDesafioUm();
