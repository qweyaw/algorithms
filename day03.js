/*
 * @Description: 对数器
 * @Author: amy
 */
// 对数器
/* 
    需要测试的方法： a
    完好的程序： b
    例如：a：day01.js中的bubbleSort方法
        b: Array.sort方法
*/
function a(arr) {
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

function generateRandomArray(maxSize, maxValue) {
    let arr = new Array(parseInt(Math.random() * maxSize + 1))
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(Math.random() * maxValue)
    }
    return arr;
}

function copyArray(arr) {
    let newArr = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]
    }
    return newArr;
}

function generator(a) {
    let maxSize = 100;
    let maxValue = 100;
    let arr = generateRandomArray(maxSize, maxValue);
    let newArr = copyArray(arr);
    for ( let i = 0; i < arr.length; i++ ) {
        if (a(arr)[i] !== (newArr.sort((a, b) => a - b))[i]) {
            return 'error'; 
        }
    }
    return 'success'
}
console.log(generator(a)) // success