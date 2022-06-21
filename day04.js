/*
 * @Description: 递归
 * @Author: Amy
 */
// 递归行为
/* 
    求中点：
        1. mid = (l + r) / 2  可能存在溢出问题
        2. miod = l + (r - l) / 2
        3. mid = l + (r - l) >> 1 快
*/
/* 
    T(N) = a * T(N/b) + O(N^d)  ---> master 公式
    时间复杂度：
        1. logb(a) < d   -->  O(N^d)
        2. logb(a) > d   -->  O(N^logb(a))
        3. logb(a) = d   -->  O(N^d * log(N))
*/
// arr 中 L 到 R 之间的最大值
function findMax(arr, l, r) {
  if (l === r) {
    return arr[l];
  }
  let mid = l + (r - l) >> 1;
  let leftMax = findMax(arr, l, mid); // 字问题规模 N/2
  let rightMax = findMax(arr, mid + 1, r); // 字问题规模 N/2
  return Math.max(leftMax, rightMax);
}
/* 
    T(N) = 2 * T(N/2) + O(1)
    时间复杂度：log2(2) > 0   -->  O(N)
*/

/* 
    归并排序：
        整体是一个简单的递归，左边排好序，右边排好序，让其整体有序
        整体有序过程采用了外排序
*/
function mergeSort(arr) {
    if (arr === null || arr.lenght < 2) {
        return 
    }
    return process(arr, 0, arr.length - 1)
}
function process (arr, l, r) {
    if(l === r) {
        return
    }
    let mid = l + ((r - l) >> 1)
    process(arr, l, mid)
    process(arr, mid + 1, r)
    merge(arr, l, mid, r)
    return arr
}
function merge(arr, l, m, r) {
    let res = new Array(r - l + 1)
    let i = 0
    let p1 = l
    let p2 = m + 1
    while(p1 <= m && p2 <= r) {
        res[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }
    while(p1 <= m) {
        res[i++] = arr[p1++] 
    }
    while(p2 <= r) {
        res[i++] = arr[p2++]
    }
    for ( let i = 0; i < res.length; i++ ) {
        arr[l + i] = res[i]
    }
}
console.log(mergeSort([2,3,7,4,9,4])) // [ 2, 3, 4, 4, 7, 9 ]
/* 
    T(N) = 2 * T(n / 2) + O(N)
    logb(a) = d   -->  O(N * log(N))
*/

/* 
    扩展：
        数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和，求一个数组的所有小和累加
*/