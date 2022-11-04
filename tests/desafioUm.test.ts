import { calculaEstatuasAdicionais, inputParaArray } from '../src/desafioUm';

describe('desafioUm', () => {
    test('vetor vazio deve retornar zero', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[1,2]'));
        expect(calc).toBe(0);
    })
    test('vetor com um elemento deve retornar zero', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[1]'));
        expect(calc).toBe(0);
    })
    test('vetor contendo [1,1] deve retornar zero', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[1,1]'));
        expect(calc).toBe(0);
    })
    test('vetor contendo [1,2,3,4,5] deve retornar zero', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[1,2,3,4,5]'));
        expect(calc).toBe(0);
    })
    test('vetor contendo [0, 9] deve retornar 8', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[0,9]'));
        expect(calc).toBe(8);
    })
    test('vetor contendo [9, 0] deve retornar 8', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[0,9]'));
        expect(calc).toBe(8);
    })
    test('vetor contendo [9,5,0] deve retornar 7', () => {
        const calc = calculaEstatuasAdicionais(inputParaArray('[9,5,0]'));
        expect(calc).toBe(7);
    })
})
