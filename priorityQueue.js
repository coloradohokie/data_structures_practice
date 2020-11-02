class PriorityQueue {
    constructor() {
        this.queue = []
    }

    enqueue(value, priority) {
        const node = new Node(value, priority)
        this.queue.push(node)
        let index = this.queue.length - 1
        let parentIndex = Math.floor((index - 1)/2)
        if (this.queue.length > 1) {
            while (this.queue[index].priority < this.queue[parentIndex].priority) {
                [this.queue[index], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[index]]
                index = parentIndex
                parentIndex = Math.floor((index-1)/2)
                parentIndex >= 0 ? parentIndex = parentIndex : parentIndex = 0
            }
        }
        return this.queue
    }

    dequeue() {
        const max = this.queue[0]
        this.queue[0] = this.queue.pop()
        let index = 0
        let leftChildIndex = 1
        let rightChildIndex = 2
        // console.log(this.queue[index], this.queue[leftChildIndex], this.queue[rightChildIndex])
        while (
                (this.queue[leftChildIndex] && this.queue[index].priority >= this.queue[leftChildIndex].priority) || 
                (this.queue[rightChildIndex] && this.queue[index].priority >= this.queue[rightChildIndex].priority)
            ) {
            if (this.queue[rightChildIndex] && this.queue[leftChildIndex].priority < this.queue[rightChildIndex].priority) {
                [this.queue[index], this.queue[leftChildIndex]] = [this.queue[leftChildIndex], this.queue[index]]
                index = leftChildIndex
                leftChildIndex = index * 2 + 1
                rightChildIndex = index * 2 + 2

            } else {
                [this.queue[index], this.queue[rightChildIndex]] = [this.queue[rightChildIndex], this.queue[index]]
                index = rightChildIndex
                leftChildIndex = index * 2 + 1
                rightChildIndex = index * 2 + 2
            }
            // console.log(this.queue[index], this.queue[leftChildIndex], this.queue[rightChildIndex])
        }
        return { max, queue: this.queue}
    }
}

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

const tasks = new PriorityQueue

tasks.enqueue("Gabbie", 4)
tasks.enqueue("Zelda", 1)
tasks.enqueue("Penelope", 1)
tasks.enqueue("Libby", 3)
tasks.enqueue("Suzanna", 5)
tasks.enqueue("Kaleesy", 1)
console.log(tasks.enqueue("Chanel", 2))

console.log(tasks.dequeue())
console.log(tasks.dequeue())
console.log(tasks.dequeue())
console.log(tasks.dequeue())
console.log(tasks.dequeue())