/*
 * @Description: sort
 * @Author: Amy
 * @Date: 2022-06-14 17:16:45
 * @LastEditTime: 2022-06-17 17:40:20
 */
// 选择排序
function selectSort(arr) {
  if (arr && arr.length <= 1) return;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      min = arr[min] < arr[j] ? min : j;
    }
    swap(i, min);
  }
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
console.log(selectSort([2, 5, 3, 8, 3, 6])); // [ 2, 3, 3, 5, 6, 8 ]

// 冒泡排序
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
  function swap(i, j) {
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
  }
  return arr;
}
console.log(bubbleSort([2, 76, 90, 3, 3, 6, 4, 6, 5, 4]));
// [2, 3, 3, 4, 4, 5, 6, 6, 76, 90]

// 插入排序
function insertSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(insertSort([2, 76, 90, 3, 3, 6, 4, 6, 5, 4]));
// [2, 3, 3, 4, 4, 5, 6, 6, 76, 90]
// 异或题目
/* 
  1. arr 中只有一种数出现了奇数次，其他都是偶数次
  2. arr 中只有两种数出现了奇数次，其他都是偶数次 
  时间 O(N) 空间 O(1)
*/
// 1.
function fn1(arr) {
  let res = 0;
  for (let i in arr) {
    res = res ^ arr[i];
  }
  return res;
}
console.log(fn1([1, 1, 2, 3, 3, 8, 3, 2, 8])); // 3
// 2.
function fn2(arr) {
  let ab = 0;
  for (let i in arr) {
    ab = ab ^ arr[i];
  }
  // ab = a ^ b
  // ab != 0
  // ab 必然有一个位置是 1
  let rightOne = ab & (~ab + 1); // 提取最右侧的 1
  let a = 0
  for(let i in arr) {
    if((arr[i] & rightOne) === 0) {
      a ^= arr[i];
    }
  }
  return [a, ab ^ a];
}
console.log(fn2([1, 3, 5, 8, 4, 3, 8, 1])); // [4, 5]
