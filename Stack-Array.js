

// acima criamos uma classe Stack baseada em um array
// e implementamos um método push que adiciona um elemento no topo do array
// push(element(s)): esse metodo adiciona um novo elemento (ou varios elementos) no topo da pilha( topo do stack)
// pop(): esse metodo remove o elemento do topo da pilha. Retorna o elemento removido

// peek(): esse metodo retorna o elemento do topo da pilha sem removê-lo.
// isEmpty(): esse metodo retorna true se a pilha estiver vazia, false caso contrário.
// size(): esse metodo retorna o tamanho da pilha. Semelhante a length  de um array
// clear(): esse metodo limpa a pilha. Semelhante ao clear de um array

class Stack {
    constructor(value) {
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    // saber o ultimo elemento adicionado em nossa pilha usamos o metodo peek, esse devolvera o item que esta no topo da pilha. 
    // Como estamos usando internamente um array para armazenar os itens, o ultimo item de um array pode ser obtido usando length -1.

    isEmpty() {
        return this.items.length === 0;
    }
    // isEmpty(): esse metodo retorna true se a pilha estiver vazia, false caso contrário.

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
    // clear(): esse metodo limpa a pilha. Semelhante ao clear de um array

}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(5)
stack.push(8)
console.log(stack.peek());
stack.push(11)
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15)
stack.pop()
stack.pop()
console.log(stack)
