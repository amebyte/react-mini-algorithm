class MinHeap {
    constructor() {
        // 最小堆
        this.data = data
    }

    size() {
        return this.data.length
    }
    // 获取最小堆的值
    peek() {
        return this.size() === 0 ? null : this.data[0]
    }

    // 往最小堆里添加元素
    push(node) {
        this.data.push(node)
    }
}