// searching alogorithm
//  a. linear search :- Linear search is a sequential searching algorithm
//  b. binary search :- A binary search is a quick and efficient method of finding a specific target value (condition array must be sorted)

// sorting  algorithm
//  a. Quick sort
//  b. counting sort
//  c. radix sort

// // linear search https://www.geeksforgeeks.org/linear-search-visualization-using-javascript/
// function linearSearch(arr, item) {
//   // Go through all the elements of arr to look for item.
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       // Found it!
//       return i
//     }
//   }

//   // Item not found in the array.
//   return null
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let item = 1
// console.log(linearSearch(arr, item))

// // linear search
// let linearSearch1 = (array, value) => {
//   let found = false
//   let index = 0
//   while (index < array.length) {
//     if (array[index] === value) {
//       found = true
//     } else {
//       index++
//     }
//   }
//   if (found === true) {
//     console.log('found it at index ', index)
//   } else {
//     console.log('not found')
//   }
// }
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// linearSearch1(array, 5)

// // binary search
// const arr = [1, 3, 5, 7, 8, 9]
// const binarySearch = (arr, x, start = 0, end = arr.length) => {
//   // If the item does not exist, return -1
//   if (end < start) return -1

//   // Calculate middle index of the array
//   let mid = Math.floor((start + end) / 2)

//   // Is the middle a match?
//   if (arr[mid] === x) return mid
//   // Is the middle less than x
//   if (arr[mid] < x) return binarySearch(arr, x, mid + 1, end)
//   // Else the middle is more than x
//   else return binarySearch(arr, x, start, mid - 1)
// }

// binarySearch(arr, 7) // Returns 3
// /* O(n) of binarySearch is log(n) */

// // 1. method of binarySearch

// // BASE CONDITION: If starting index is greater than ending index return false.
// // Compute the middle index.
// // Compare the middle element with number x. If equal return true.
// // If greater, call the same function with ending index = middle-1 and repeat step 1.
// // If smaller, call the same function with starting index = middle+1 and repeat step 1.

// let recursiveFunction = function (arr, x, start, end) {
//   // Base Condition
//   if (start > end) return false

//   // Find the middle index
//   let mid = Math.floor((start + end) / 2)

//   // Compare mid with given key x
//   if (arr[mid] === x) return true

//   // If element at mid is greater than x,
//   // search in the left half of mid
//   if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1)
//   // If element at mid is smaller than x,
//   // search in the right half of mid
//   else return recursiveFunction(arr, x, mid + 1, end)
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9]
// let x = 9
// if (recursiveFunction(arr, x, 0, arr.length - 1)) console.log('Element found!')
// else console.log('Element not found!')

// x = 6
// if (recursiveFunction(arr, x, 0, arr.length - 1)) console.log('Element found!')
// else console.log('Element not found!')

// // 2. method

// //  Iterative function to implement Binary Search
// let iterativeFunction = function (arr, x) {
//   let start = 0,
//     end = arr.length - 1

//   // Iterate while start not meets end
//   while (start <= end) {
//     // Find the mid index
//     let mid = Math.floor((start + end) / 2)

//     // If element is present at mid, return True
//     if (arr[mid] === x) return true
//     // Else look in left or right half accordingly
//     else if (arr[mid] < x) start = mid + 1
//     else end = mid - 1
//   }

//   return false
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9]
// let x = 5

// if (iterativeFunction(arr, x, 0, arr.length - 1)) console.log('Element found!')
// else console.log('Element not found!')

// x = 6

// if (iterativeFunction(arr, x, 0, arr.length - 1)) console.log('Element found!')
// else console.log('Element not found!')
