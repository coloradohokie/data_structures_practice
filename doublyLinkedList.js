class Node {
    constructor(value) {
        this.value = value
        this.previous = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(value) {
        const newNode = new Node(value)
        if (this.tail) {
            newNode.previous = this.tail
            this.tail.next = newNode
        }
        this.tail = newNode
        if (!this.head) {
            this.head = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        const poppedNode = this.tail
        if (this.length > 1) {
            this.tail = this.tail.previous
            poppedNode.previous = null
        }
        this.tail.next = null
        this.length--
        return poppedNode
    }

    shift() {
        if (this.length === 0) return undefined
        const shiftedNode = this.head
        if(this.length > 1) {
            this.head = this.head.next
            shiftedNode.next = null
        }
        this.head.previous = null
        this.length--
        return shiftedNode
    }

    unshift(value) {
        const newNode = new Node(value)
        if (this.head) {
            this.head.previous = newNode
            newNode.next = this.head
        }
        this.head = newNode
        if (!this.tail) {
            this.tail = newNode
        }
        this.length++
        return this
    } 

    get(index) {
        if (this.length === 0) return null
        if (index < 0 || index >= this.length) return undefined
        let counter = 0
        let selectedNode = this.head
        if (this.length /2 > index) {
            while (counter < index) {
                selectedNode = selectedNode.next
                counter++            
            }
        } else {
            selectedNode = this.tail
            while (counter < this.length - index - 1) {
                selectedNode = selectedNode.previous
                counter++
            }
        }
        return selectedNode
    }

    set(index, value) {
        let selectedNode = this.get(index)
        if (selectedNode) {
            selectedNode.value = value
            return this
        }
        return undefined
    }

    insert(index, value) {
        if (this.length === 0) {
            if (this.index === 0) {
                return this.push(value)
            } else {
                return undefined
            }
        } 
        let beforeNode = this.get(index - 1)
        if (beforeNode) {
            let newNode = new Node(value)
            let afterNode = beforeNode.next
            newNode.previous = beforeNode
            beforeNode.next = newNode
            afterNode.previous = newNode
            newNode.next = afterNode
            this.length++
            return true
        }
        return undefined
    }

    remove(index) {
        if (this.length === 0) return undefined
        if (index === 0) return this.shift(index)
        if (index === this.length - 1) return this.pop(index)
        let selectedNode = this.get(index)
        if (selectedNode) {
            selectedNode.previous.next = selectedNode.next
            selectedNode.next.previous = selectedNode.previous
            selectedNode.previous = null
            selectedNode.next = null
            this.length--
            return this
        }
        return undefined
    }

    reverse() {
        if (this.length === 1) return this;
        [this.head, this.tail] = [this.tail, this.head];
        let current = this.head;
        while (current) {
            [current.prev, current.next] = [current.next, current.prev];
            current = current.next;
        }
        return this;
    }



}


let list = new DoublyLinkedList()
console.log(list.push(5))
console.log(list.push(10))
console.log(list.push(15))
console.log(list.push(20))
console.log(list.push(25))
console.log(list.push(30))

console.log(list.insert(3, 17))
console.log('3:', list.get(3))