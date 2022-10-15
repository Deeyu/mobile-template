/*
 * @Author: DaiYu
 * @Date: 2022-07-04 09:35:06
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 10:22:46
 * @FilePath: \src\utils\LRU.js
 */
// LRU缓存算法实现
// 实现一个 LRUCache 类型，用来充当存储空间
// 采用 Map 数据结构存储数据，因为它的存取时间复杂度为 O(1)，数组为 O(n)
// 实现 get 和 set 方法，用来获取和添加数据
// 我们的存储空间有长度限制，所以无需提供删除方法，存储满之后，自动删除最久远的那条数据
// 当使用 get 获取数据后，该条数据需要更新到最前面
class LRUCache {
  constructor(length = 5) {
    this.length = length // 可缓存数量
    this.data = new Map() // 存储数据
  }
  get(key) {
    const cache = this.data
    if (!cache.has(key)) {
      return null
    }
    const value = cache.get(key)
    cache.delete(key) // 删除元素
    cache.set(key, value) // 更新位置
    return value
  }
  set(key, value) {
    const cache = this.data
    if (cache.has(key)) {
      // 更新位置
      cache.delete(key)
    }
    cache.set(key, value)
    // 如果超出了容量，则需要删除最久的数据
    if (cache.size > this.length) {
      // 第一个就是最先存储的key
      const deleteKey = cache.keys().next().value
      cache.delete(deleteKey)
    }
  }
}
// LFU缓存算法实现
class _LFUCache {
  constructor(capacity = 5) {
    this.capacity = capacity // 可缓存数量
    this.data = new Map() // 存储数据
  }
  get(key) {
    const cache = this.data
    if (!cache.has(key)) {
      return null
    }
    const value = cache.get(key)
    cache.delete(key) // 删除元素
    cache.set(key, value) // 更新位置
    return value
  }
  set(key, value) {
    const cache = this.data
    if (cache.has(key)) {
      // 更新位置
      cache.delete(key)
    }
    cache.set(key, value)
    // 如果超出了容量，则需要删除最久的数据
    if (cache.size > this.capacity) {
      // 第一个就是最先存储的key
      const deleteKey = cache.keys().next().value
      cache.delete(deleteKey)
    }
  }
}
const _lruCache = new LRUCache()
