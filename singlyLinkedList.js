class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let tempNode = new Node(val)
        if (this.length === 0) {
            this.head = tempNode
            this.tail = tempNode
        } else {
            this.tail.next = tempNode
            this.tail = tempNode
        }
        this.length++
        return this
    }

    // traverse() {
    //     let current = this.head
    //     while(current) {
    //         current = current.next
    //     }
    // }

    pop() {
        if (!this.head) return undefined

        let current = this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            this.length--
            return current
        }
        while(current.next.next !== null) {
            current = current.next
        }
        const val = current.next
        current.next = null
        this.tail = current
        this.length--
        return val
    }

    shift() {
        if (!this.head) return undefined
        let val = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) this.tail = null
        return val
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined
        if (index === this.length -1) return this.tail
        let current = this.head
        let i = 0
        while (i < index) {
            current = current.next
            i++
        }
        return current
    }

    set(index, value) {
        let selectedNode = this.get(index)
        if (selectedNode) {
            selectedNode.val = value
        }
        return selectedNode
    }

    insert(index, value) {
        const newNode = new Node(value)
        if (index < -1 || index > this.length) return undefined
        if (index === -1 || index === this.length) return this.push(value)
        if (index === 0) return this.unshift(value)
        let selectedNode = this.get(index -1)
        newNode.next = selectedNode.next
        selectedNode.next = newNode
        this.length++
        return this
    }

    remove(index) {
        if (index > this.length || index < 0) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1 ) return this.pop()
        let previousNode = this.get(index -1)
        let selectedNode = previousNode.next
        previousNode.next = selectedNode.next
        this.length--
        return selectedNode
    }

    reverse() {
        if (this.length <= 1) return this
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            console.log(i, node)
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("333")
console.log(list.reverse())
// for (let i=0; i< list.length; i++) {
//     console.log(list.get(i))
// }