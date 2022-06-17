<!--
 * @Description: algorithms
 * @Author: Amy
 * @Date: 2022-06-13 16:54:31
 * @LastEditTime: 2022-06-15 18:09:54
-->

## 时间复杂度

> 先看时间复杂度指标 -> 相同时，看实际运行时间

异或 相同为 0 不同为 1
0 ^ N = N
N ^ N = 0
a ^ b = b ^ a
(a ^ b) ^ c = a ^ (b ^ c)

交换两个数 (前提：a 和 b 在内存中是两块完全独立的内存， 数组中不能操作同一位置的数，会导致数被洗为 0)

1. a = a ^ b a = a ^ b
1. b = a ^ b b = a ^ b ^ b = a
1. a = a ^ b a = a ^ b ^ a = b
