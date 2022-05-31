class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // metodos

    // Como estamos trabalhando com objeto, essa versao do metodo push nos 
    // permite fazer push somente de um unico elemento de cada vez. Podemos ver o codigo do metodo push a seguir
    push(element) {
        this.items[this.count] = element;
        this.count++
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.items = {}
        this.count = 0;
        while (!this.isEmpty()) {
            this.pop()
        }
    }
    // metodo toString para que possamos exibir o conteudo da pilha de modo semelhante a um array
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const stack = new Stack();
stack.push(5)
stack.push(8)
console.log(stack);