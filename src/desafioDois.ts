import * as readline from 'readline';

export function classificaStrings(input: string): (string | undefined)[] {
    let maxLen = 0;
    let strings = input
        // remove os espaços o e EOF
        .trim() 
        // Usando uma expressão regular obtem-se o conteúdo que estã dentro dos colchetes
        .replace(/^\[(.*)\]$/, "$1")
        // Gera os itens do array usando a vírgula como ponto de quebra
        .split(',')
        // remove as aspas duplas de cada um dos itens e já computa qual é o tamanho do maior item do vetor 
        .map((i) => { 
            i = i.trim().replace(/^\"(.*)\"$/, "$1")
            if (i.length > maxLen)
                maxLen = i.length
            if (i.length > 0)
                return i 
        })
        // filtra os elementos cujo tamanho é igual ao maior tamanho
        .filter((i) => i && i.length === maxLen);
    return strings;
}

function leEntradaDesafioDois() {
    let leInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leInput.question("", function(input) {
        console.log(classificaStrings(input))
        leInput.close();
    });
}

leEntradaDesafioDois();
