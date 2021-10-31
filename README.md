# react-mini-algorithm
目标：

1. 掌握最小堆
2. 掌握偏排序
3. 掌握React任务调度算法

二叉树

是指树中节点的度不大于2的有序树，它是一种最简单且最重要的树

满二叉树

除最后一层无任何子节点外，每一层的所有结点都有两个子结点的二叉树。

从图形形态上看，满二叉树外观上是一个三角形。

如果一个二叉树的层数为K，且结点总数是(2^k)-1，则它就是满二叉树。

 ![](./md/full-binary-tree.png)



完全二叉树

一棵深度为K的有n个结点的二叉树，对树中的结点按从上至下，从左到右的顺序进行编号，如果编号为i(1sisn)的结点与满二叉树中编号为i的结点在二叉树中的位置相同，则这棵二叉树称为完全二叉树。

叶子结点只可能在最大的两层出现。

 ![](./md/complete-binary-tree.png)



最小堆

最小堆，是一种经过排序的完全二叉树，其中任一非终端节点的数据值均不大于其左子节点和右子节点的值

 ![](./md/Min-Heap.png)



#### [数据流中的第 K 大元素](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)

设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。


示例：

输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

提示：
1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
最多调用 add 方法 104 次
题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素

| 数组     | 3    | 7    | 4    | 10   | 12   | 9    | 6    | 15   | 14   |
| -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 深度     | 1    | 2    | 2    | 3    | 3    | 3    | 3    | 4    | 4    |
| 数组下标 | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    |



根据父节点下标推算子节点下标：

leftIndex = (parentIndex + 1) * 2 - 1

rightIndex = leftIndex + 1



根据子节点下标推算父节点下标：

parentIndex = (childIndex - 1) >>> 1



节点操作：

1. 获取最小节点 heap[0]
2. 插入元素
3. 删除元素



插入元素5

1. 因为5 < 12，则5与12交换位置，5从底部向上调整
2. 5 < 7，5与7交换位置，继续往上调整