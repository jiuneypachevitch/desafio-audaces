import { classificaStrings } from '../src/desafioDois';

describe('desafioDois', () => {
    test('vetor vazio deve retornar um vetor vazio', () => {
        expect(classificaStrings('[]')).toEqual([]);
    })
    test('vetor com um elemento deve retornar o próprio vetor', () => {
        expect(classificaStrings('["a"]')).toEqual(['a']);
    })
    test('vetor com vários elementos deve retornar um vetor com os elementos que contém o maior tamanho', () => {
        expect(classificaStrings('["aba", "aa", "ad", "vcd", "aba"]')).toEqual(['aba', 'vcd', 'aba']);
    })
    test('vetor com vários elementos e com um único elemento com maior tamanho, deve retorná-lo', () => {
        expect(classificaStrings('["aba", "aa", "addr", "vcd", "aba"]')).toEqual(['addr']);
    })
})
