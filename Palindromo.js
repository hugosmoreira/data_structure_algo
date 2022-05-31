// Um palindromo e uma plavramfase, numero ou outra sequencia de caracteres que e lido igualmente
// de tras para frente ou de frente para tras, por exemplo:, madam ou rececar.

// Ha diferentes algoritimos que podem ser usados para verificar se uma palavra e um palindromo. O modo mais facil eh inverter a string
// e compara-la com a string original. Se as duas strings forem iguais, teremos um palindromo. Tambem podemos usar uma pilha para fazer a verificacao
// A maneira mais facil de resolver esse problema com estrutura de dados e usando um deque.


function palidromeChecker(aString) {
    if(aString === undefined || aString === null || aString !== null && aString.length === 0) {
        return false
    }
    const deque = new Deque();
}