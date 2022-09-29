// insertion_Sort  https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php
// data structure : use ful website { https://visualgo.net/en }
// const insertionSort = (nums) => {
//   for (let i = 1; i < nums.length; i++) {
//     let j = i - 1
//     let temp = nums[i]
//     while (j >= 0 && nums[j] > temp) {
//       nums[j + 1] = nums[j]
//       j--
//     }
//     nums[j + 1] = temp
//   }
//   return nums
// }
// console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]))
// console.log(insertionSort([2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55]))

// function insertion_sort(arr, n) {
//   let i, j, key
//   for (i = 0; i < n; i++) {
//     key = arr[i]
//     j = i - 1
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j]
//       j--
//     }
//     arr[j + 1] = key
//   }
//   console.log(arr)
// }
// arr = [4, 2, 5, 6, 8, 7, 9, 1, 0, 3]
// n = arr.length
// insertion_sort(arr, n)

// merge_sort :-https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php
function merge_sort(left_part, right_part) {
  var i = 0
  var j = 0
  var results = []

  while (i < left_part.length || j < right_part.length) {
    if (i === left_part.length) {
      // j is the only index left_part
      results.push(right_part[j])
      j++
    } else if (j === right_part.length || left_part[i] <= right_part[j]) {
      results.push(left_part[i])
      i++
    } else {
      results.push(right_part[j])
      j++
    }
  }
  return results
}

console.log(merge_sort([1, 3, 4], [3, 7, 9]))
