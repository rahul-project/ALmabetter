// concat()
// joins two or more arrays and returns a result
// indexOf()
// searches an element of an array and returns its position
// filter()
// creates a new array filled with elements that pass a test provided by a function
// find()
// returns the first value of an array element that passes a test
// findIndex()
// returns the first index of an array element that passes a test
// forEach()
// calls a function for each element
// includes()
// checks if an array contains a specified element
// map()
// creates a new array from calling a function once for every array element.
// push()
// adds a new element to the end of an array and returns the new length of an array
// unshift()
// adds a new element to the beginning of an array and returns the new length of an array
// pop()
// removes the last element of an array and returns the removed element
// shift()
// removes the first element of an array and returns the removed element
// sort()
// sorts the elements alphabetically in strings and in ascending order
// slice()
// selects the part of an array and returns the new array
// splice()
// removes or replaces existing elements and/or adds new elements

// arrayJs is linear data structure
// let arrray = [1, 2, 3, 4, 5, 6] // number
// let arrray2 = ['a,', 'c', 'b', 'd', 'e'] // strings
// let arrray3 = [true, false] // boolean
// const arrray4 = new Array('m', 'j', 'k', 'l') // Arrayobject
// const emptyArray = [] // empty arrayJs
// const multiArray = [[1], [56, 65], [64, 64]] // multi arrayJs
// console.log(arrray4.join('p'))
// arrray4.sort()
// console.log(arrray4)

// // empty array
// const myList = [ ];
// // array of numbers
// const numberArray = [ 2, 4, 6, 8];
// // array of strings
// const stringArray = [ 'eat', 'work', 'sleep'];
// // array with mixed data types
// const newData = ['work', 'exercise', 1, true];

// const newData = [
//     {'task1': 'exercise'},
//     [1, 2 ,3],
//     function hello() { console.log('hello')}
// ];

// // Access Elements of an Arrayobject
// const myArray = ['h', 'e', 'l', 'l', 'o']
// // first element
// console.log(myArray[0]) // "h"
// // second element
// console.log(myArray[1]) // "e"

// // Add an Element to an Array
// let dailyActivities = ['eat', 'sleep'];
// // add an element at the end
// dailyActivities.push('exercise');
// console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

// let dailyActivities = ['eat', 'sleep'];
// //add an element at the start
// dailyActivities.unshift('work');
// console.log(dailyActivities); // ['work', 'eat', 'sleep']

// Change the Elements of an Array
// let dailyActivities = [ 'eat', 'sleep'];
// // this will add the new element 'exercise' at the 2 index
// dailyActivities[2] = 'exercise';
// console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

// let dailyActivities = [ 'eat', 'sleep'];
// // this will add the new element 'exercise' at the 3 index
// dailyActivities[3] = 'exercise';
// console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]

// Remove an Element from an Array
// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
// // remove the last element
// dailyActivities.pop();
// console.log(dailyActivities); // ['work', 'eat', 'sleep']
// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement = dailyActivities.pop();
// //get removed element
// console.log(removedElement); // 'sleep'
// console.log(dailyActivities);  // ['work', 'eat']

// let dailyActivities = ['work', 'eat', 'sleep'];
// // remove the first element
// dailyActivities.shift();
// console.log(dailyActivities); // ['eat', 'sleep']

// Array length of dailyActivities
// const dailyActivities = [ 'eat', 'sleep'];
// // this gives the total number of elements in an array
// console.log(dailyActivities.length); // 2

// JavaScript Array Methods
// let dailyActivities = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat']
// let ages = [4, 9, 16, 25, 36, 49]
// // sorting elements in the alphabetical order
// dailyActivities.sort()
// console.log(dailyActivities) // ['exercise', 'sleep', 'work']
// //finding the index position of string
// const position = dailyActivities.indexOf('work')
// console.log(position) // 2
// // slicing the array elements
// const newDailyActivities = dailyActivities.slice(1)
// console.log(newDailyActivities) // [ 'sleep', 'work']
// // concatenating two arrays
// const routine = dailyActivities.concat(newRoutine)
// console.log(routine) // ["exercise", "sleep", "work", "eat"]
// // filter an array
// const adults = ages.filter(checkAdult)
// function checkAdult(age) {
//   return age >= 18
// }
// console.log(adults) // [25, 36, 49]
// //map a function to an array
// const ages_sqrt = ages.map(Math.sqrt)
// console.log(ages_sqrt) // [2, 3, 4, 5, 6, 7]

// // workings of the javascript arrays
// let arr = ['h', 'e'];
// let arr1 = arr;
// arr1.push('l');
// console.log(arr); // ["h", "e", "l"]
// console.log(arr1); // ["h", "e", "l"]

// let arr = ['h', 'e']
// arr.name = 'John'
// console.log(arr) // ["h", "e"]
// console.log(arr.name) // "John"
// console.log(arr['name']) // "John"

// multidimensional arrays
// let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

// let student1 = ['Jack', 24];
// let student2 = ['Sara', 23];
// let student3 = ['Peter', 24];
// // multidimensional array
// let studentsData = [student1, student2, student3];

// let x = [
// ['Jack', 24],
// ['Sara', 23],
// ['Peter', 24]
// ];
// // access the first item
// console.log(x[0]); // ["Jack", 24]
// // access the first item of the first inner array
// console.log(x[0][0]); // Jack
// // access the second item of the third inner array
// console.log(x[2][1]); // 24

// // addings elements to the outer array
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// studentsData.push(['Peter', 24])
// console.log(studentsData) //[["Jack", 24], ["Sara", 23], ["Peter", 24]

// // Adding Element to the Inner Array
// // using index notation
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// studentsData[1][2] = 'hello'
// console.log(studentsData) // [["Jack", 24], ["Sara", 23, "hello"]]
// using push()
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// studentsData[1].push('hello')
// console.log(studentsData) // [["Jack", 24], ["Sara", 23, "hello"]]
// using slice()
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// // adding element at 1 index
// studentsData.splice(1, 0, ['Peter', 24])
// console.log(studentsData) // [["Jack", 24], ["Peter", 24], ["Sara", 23]]

// // remove the array element from outer array
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// studentsData.pop()
// console.log(studentsData) // [["Jack", 24]]

// // remove the element from the inner array
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// studentsData[1].pop()
// console.log(studentsData) // [["Jack", 24], ["Sara"]]

// // using splice()
// let studentsData = [['Jack', 24], ['Sara', 23],];
// // removing 1 index array item
// studentsData.splice(1,1);
// console.log(studentsData); // [["Jack", 24]]

// // using splice()
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// // removing 1 index array item
// studentsData.splice(1, 1, ['ram', 25])
// console.log(studentsData) // [ [ 'Jack', 24 ], [ 'ram', 25 ] ]

// // iterating over multidimensional arrays
// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// // iterating over the studentsData
// studentsData.forEach((student) => {
//   student.forEach((data) => {
//     console.log(data)
//   })
// })

// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// for (let i of studentsData) {
//   for (let j of i) {
//     console.log(j)
//   }
// }

// let studentsData = [
//   ['Jack', 24],
//   ['Sara', 23],
// ]
// // looping outer array elements
// for (let i = 0; i < studentsData.length; i++) {
//   // get the length of the inner array elements
//   let innerArrayLength = studentsData[i].length
//   // looping inner array elements
//   for (let j = 0; j < innerArrayLength; j++) {
//     console.log(studentsData[i][j])
//   }
// }
