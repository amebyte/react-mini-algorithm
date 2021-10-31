
// 最小堆

// 4, 5, 8, 2
// 找出第 K 大元素

// 排序
// Array.sort((a, b) => b - a)
// let a = a.sort((a, b) => b -a )
// a[k-1]

// 1000万个数字，乱序
// 全排序
// 偏排序

// 找出这些数字里前K名大数字，后面的小数字就不要了

class MinHeap {
    constructor(data = []) {
        // 最小堆
        this.data = data
    }

    size() {
        return this.data.length
    }

    compare(a, b) {
        return a - b
    }

    // 交换两个变量的值
    swap(index1, index2) {
        // [a, b] = [b, a]
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1]
        ]
    }

    // 获取最小堆的值
    peek() {
        return this.size() === 0 ? null : this.data[0]
    }

    // 添加元素
    push(node) {
        this.data.push(node)
        this.siftUp(node, this.size() - 1)
    }

    siftUp(node, i) {
        let index = i
        while(index > 0) {
            const parentIndex = (index -1) >>> 1 // 除以2
            const parent = this.data[parentIndex]
            if(this.compare(node, parent) < 0) {
                // 子节点 < 父节点
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break
            }
        }
    }
}