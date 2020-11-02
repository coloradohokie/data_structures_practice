class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    contains(value) {
        function pushChildren() {
            if (queue.length) {
                const selectedNode = queue.shift()
                if (selectedNode.value === value) {
                    return true
                } else {
                    visited.push(selectedNode)
                    if (selectedNode.left) {
                        queue.push(selectedNode.left)
                    }
                    if (selectedNode.right) {
                        queue.push(selectedNode.right)
                    }
                    return pushChildren()
                }
            } else {
                return false
            }
        }

        if (!this.root) return null
        const queue = []
        const visited = []
        queue.push(this.root)
        return pushChildren()
    }

    listValues() {
        const traverse = (node) => {
            values.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            if (queue.length) traverse(queue.shift())
        }

        if (!this.root) return null
        const queue = []
        const values = []
        traverse(this.root)
        return values
    }

    dfsListValues() {
        function traverse(node) {
            values.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        if(!this.root) return null
        const values = []
        traverse(this.root)
        return values
    }

    postOrderListValues() {
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse (node.right)
            values.push(node.value)
        }

        const values = []
        traverse(this.root)
        return values
    }

    inOrderListValues() {
        const traverse = node => {
            if (node.left) traverse(node.left)
            values.push(node.value)
            if (node.right) traverse(node.right)
        }

        const values = []
        traverse(this.root)
        return values
    }


}



let tree = new BinaryTree
let nodeRoot = new Node(5)
let node1l = new Node (10)
let node1r = new Node (20)
let node2l = new Node (40)
let node2r = new Node (60)
let node3r = new Node (15)
tree.root = nodeRoot

nodeRoot.left = node1l
nodeRoot.right = node1r
node1l.left = node2l
node1l.right = node2r
node1r.right = node3r


console.log(tree.contains(60))
console.log(tree.listValues())
console.log(tree.dfsListValues())
console.log(tree.postOrderListValues())
console.log(tree.inOrderListValues())
