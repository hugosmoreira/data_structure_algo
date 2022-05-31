// Como as filas sao aplicadas com frequencia em ciencia da computacao e nossas vidas, ha algumas versoes modificadas em relacao a fila padrao
// que implementamos neste capitulo. Uma das versoes modificadas e a fila circular. Um exemplo de fila circular e o jogo Bata Quente ou Hot Potato.
// Nese jogo as criancas se organizacam em um circulo e passam a batata quene para o seu vizinho o mais rapido possivel. 
// Em determinado ponto do jogo, a batata quente para de ser passada pelo circulo de criancas e a crianca que tiver a batata quente em maos devera sair 
// do circulo. Esse acao sera repetida ate que reste apenas uma crianca (a vencedora).
// No Exemplo, implementamos uma simulacao do jogo de batata Quente:


class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    // enqueue Este metodo sera responsavel pela adicao de elementos na fila, com um detalhe muito importante: so podemos adicionar itens no final da fila.

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }
    // dequeue responsavel pela remocao de elementos da fila, com um detalhe muito importante: so podemos remover itens do inicio da fila.
    dequeue() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if(this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

function hotPotato(elementList, num) {
    const queue = new Queue();
    const elimitatedlist = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }
    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedlist.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedlist,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => console.log(`${name} was eliminated from the Hot Potato game.`));
console.log(`The winner is ${result.winner}!`);