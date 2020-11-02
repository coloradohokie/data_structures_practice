class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        const hashedKey = this._hash(key)
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = []
        }
        this.keyMap[hashedKey].push([key, value])
        return hashedKey
    }

    get(key) {
        const hashedKey = this._hash(key)
        if(!this.keyMap[hashedKey]) return undefined
        for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
            console.log(this.keyMap[hashedKey])
            if (this.keyMap[hashedKey][i][0] === key) return this.keyMap[hashedKey][i][1]
        }
        return undefined
    }

    keys() {
        const keyList = []
        for (let key of this.keyMap) {
            if (key) {
                for (let i = 0; i < key.length; i++) {
                    keyList.push(key[i][0])
                }
            }
        }
        return keyList
    }

    values() {
        const valueList = new Set()
        for (let key of this.keyMap) {
            if (key) {
                for (let i = 0; i < key.length; i++) {
                    valueList.add(key[i][1])
                }
            }
        }
        const returnArray = []
        for (let value of valueList) {
            returnArray.push(value)
        }
        return returnArray
    }
}

let table = new HashTable()

console.log(table.set('salmon', 'fish'))
console.log(table.set('bear', 'mammal'))
console.log(table.get('salmon'))
console.log(table.get('bear'))
console.log(table.get('wolf'))
console.log(table.keys())
console.log(table.values())