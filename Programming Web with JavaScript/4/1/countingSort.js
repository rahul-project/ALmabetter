// comparision base sorting
// bubble sort
// merge sort
// quick sort
// insertion sort
// selection sort
// non comparision base sorting
// 1. countinmg sort
// 2. radix sort / bucket sort

// count
let count = 0
function largest(arr) {
  let i

  // Initialize maximum element
  let max = arr[0]
  // Traverse array elements
  // from second and compare
  // every element with current max
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}
let counting = () => {
  for (let i = 0; i > max; i++) {
    if (arr[i] === i) {
      return count++
    }
  }
}
// Driver code
let arr = [1, 2, 4, 8, 10]
console.log('Largest in given array is ' + largest(arr) + counting())
