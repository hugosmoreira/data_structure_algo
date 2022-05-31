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

const queue = new Queue()
queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString())
queue.enqueue('Camila')
console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
console.log(queue.toString())

