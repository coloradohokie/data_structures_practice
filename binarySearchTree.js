class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertNode(value, parent, direction) {
        let newNode = new Node(value)
        parent[direction] = newNode
        return this
    }

    compareValues(newValue, parentNode) {
        if (newValue > parentNode.value) {
            parentNode.right ? 
                this.compareValues(newValue, parentNode.right) :
                this.insertNode(newValue, parentNode, "right")
        } else if (newValue < parentNode.value) {
            parentNode.left ?
                this.compareValues(newValue, parentNode.left) :
                this.insertNode(newValue, parentNode, "left")
        } else {
            parentNode.count++
        }
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
            return this
        } else {
            this.compareValues(value, this.root)
            return this
        }
    }

    findValue(value, parentNode) {
        if (value === parentNode.value) return true
        if (value < parentNode.value) return parentNode.left ? this.findValue(value, parentNode.left) : false
        if (value > parentNode.value) return parentNode.right ? this.findValue(value, parentNode.right) : false
    }

    contains(searchValue) {
        return this.root ? this.findValue(searchValue, this.root) : false
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.count = 1
        this.left = null
        this.right = null
    }
}


let tree = new BinarySearchTree()
console.log(tree.insert(50))
console.log(tree.insert(20))
console.log(tree.insert(70))
console.log(tree.insert(10))
console.log(tree.insert(20))

console.log(tree.contains(50))
console.log(tree.contains(20))
console.log(tree.contains(10))
console.log(tree.contains(5))
console.log(tree.contains(90))
console.log(tree.contains(70))