import * as readline from 'readline';

export function inverteConteudoParenteses(input: string): string {
    // obtem um vetor com as ocorrências de ( ) e seu conteúdo
    let parenteses = input.trim().match(/\((?:[^()]|\([^()]*\))*\)/g);
    // Se tiver ocorrências de parênteses, percorre todas e recursivamente processa os parênteses aninhados
    parenteses && parenteses.map((item) => {
        let noParenteses = item.replace(/^\((.*)\)$/, "$1");
        let itemNested = inverteConteudoParenteses(noParenteses);
        let reverso = itemNested.split('').reverse().join('');
        input = input.replace(item, reverso);
    });
    return input;
}

function leEntradaDesafioTres() {
    let leInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leInput.question("", function(input) {
        console.log(inverteConteudoParenteses(input))
        leInput.close();
    });
}

leEntradaDesafioTres();
