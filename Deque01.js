class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    size() {
        return this.count - this.lowestCount
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

    addFront(element) {
        // adiciona um elemento no inicio da fila
        if(this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i  > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }

    }

    addBack(element) {
        // adiciona um elemento no final da fila

    }

    removeFront() {
        // remove o primeiro elemento da fila

    }

    removeBack() {
        // remove o ultimo elemento da fila
    }

    peekFront() {
        // retorna o primeiro elemento da fila
    }

    peekBack() {
        // retorna o ultimo elemento da fila
    }
}