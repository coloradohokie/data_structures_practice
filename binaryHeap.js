class BinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)
        let index = this.values.length - 1
        let parentIndex = Math.floor((index-1)/2)
        while (this.values[index] > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
        return this.values
    }

    extractMax() {
        if (this.values.length === 1) return this.values.pop()
        const max = this.values[0]
        this.values[0] = this.values.pop()
        let index = 0
        let leftChildIndex = 1
        let rightChildIndex = 2
        while(this.values[index] < this.values[leftChildIndex] || this.values[index] < this.values[rightChildIndex]) {
            if ((this.values[leftChildIndex] > this.values[rightChildIndex] && this.values[rightChildIndex]) || (this.values[leftChildIndex] && !this.values[rightChildIndex])) {
                [this.values[index], this.values[leftChildIndex]] = [this.values[leftChildIndex], this.values[index]]
                index = leftChildIndex
            } else {
                [this.values[index], this.values[rightChildIndex]] = [this.values[rightChildIndex], this.values[index]]
                index = rightChildIndex
            }
            leftChildIndex = index * 2 + 1
            rightChildIndex = index * 2 + 2
        }
        return {max, values: this.values}
    }

}

const heap = new BinaryHeap

console.log(heap.insert(50))
console.log(heap.insert(25))
console.log(heap.insert(11))
console.log(heap.insert(64))
console.log(heap.insert(55))
console.log(heap.insert(91))
console.log(heap.insert(77))

console.log(heap.extractMax())
console.log(5 < undefined)