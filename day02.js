/*
 * @Description: 二分法
 * @Author: Amy
 * @Date: 2022-06-16 18:04:13
 * @LastEditTime: 2022-06-17 17:31:14
 */
// 二分法 log2(n)

// 有序数组是否存在 num
function binarySearch1(arr, num) {
    if (arr === null || arr.length === 0) {
        return false;
    }
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            return true;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
console.log(binarySearch1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // true
//有序数组中，找到 >= num 最左侧的位置
function binarySearch2(arr, num) {
    if (arr === null || arr.length === 0) {
        return -1;
    }
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= num) {
            res = mid;
            right = mid;
        }else {
            left = mid + 1;
        }
        console.log(left, right)
    }
    return res;
}
console.log(binarySearch2([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 5)); // 4
// 局部最小问题
// 数组 arr 无序，相邻两数一定不相等
// 0 1    0 < 1  0就是局部最小
// n-1 n    n-1 < n-2  n-1 就是局部最小
// i-1 i i + 1    i-1 < i < i+1   i 就是局部最小
// 求一个局部最小位置
// 时间复杂度小于 O(n)
function findMin(arr) {
    if (arr[0] < arr[1]) {
        return 0;
    }
    let len = arr.length;
    if (arr[len - 1] < arr[len - 2]) {
        return len - 1;
    }
    let left = 0;
    let right = len - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
            return mid;
        } else if(arr[mid] > arr[mid + 1]) {
            left = mid;
        }else {
            right = mid;
        }
    }
    return -1
}
console.log(findMin([1, 2, 3, 4])); // 0
console.log(findMin([2, 1, 5, 3])); // 3
console.log(findMin([6, 5, 3, 4, 9])); // 2