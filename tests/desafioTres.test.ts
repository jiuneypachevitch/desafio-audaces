import { inverteConteudoParenteses } from '../src/desafioTres';

describe('desafiotres', () => {
    test('string sem nenhum parênteses deve retornar a string', () => {
        expect(inverteConteudoParenteses('foo')).toEqual('foo');
    })
    test('string com parênteses e sem conteúdo deve retornar uma string vazia', () => {
        expect(inverteConteudoParenteses('()')).toEqual('');
    })
    test('string com apenas um conteúdo entre parênteses deve retorná-lo invertido e sem os parênteses', () => {
        expect(inverteConteudoParenteses('(baz)')).toEqual('zab');
    })
    test('string com mais de um conteúdo entre parênteses deve retorná-los invertidos e sem os parênteses', () => {
        expect(inverteConteudoParenteses('(baz)and(bar)')).toEqual('zabandrab');
    })
    test('string com conteúdos entre parênteses aninhados deve retorná-los invertidos, respeitando a ordem de precedência e sem os parênteses', () => {
        expect(inverteConteudoParenteses('(foo(baz))and(bar)')).toEqual('bazoofandrab');
    })
})
